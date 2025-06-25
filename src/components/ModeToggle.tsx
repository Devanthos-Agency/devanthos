import * as React from "react";
import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
    const [theme, setThemeState] = React.useState<
        "theme-light" | "dark" | "system"
    >("theme-light");

    const [isInitialized, setIsInitialized] = React.useState(false);

    // Función para obtener el tema actual de manera segura
    const getCurrentTheme = React.useCallback(() => {
        if (typeof localStorage !== "undefined") {
            const storedTheme = localStorage.getItem("theme");
            if (
                storedTheme === "dark" ||
                storedTheme === "light" ||
                storedTheme === "system"
            ) {
                return storedTheme === "light"
                    ? "theme-light"
                    : (storedTheme as "dark" | "system");
            }
        }

        // Fallback: verificar el DOM
        if (typeof document !== "undefined") {
            const isDarkMode =
                document.documentElement.classList.contains("dark");
            return isDarkMode ? "dark" : "theme-light";
        }

        return "theme-light";
    }, []);

    // Inicialización inicial
    React.useEffect(() => {
        if (!isInitialized) {
            const currentTheme = getCurrentTheme();
            setThemeState(currentTheme);
            setIsInitialized(true);
        }
    }, [getCurrentTheme, isInitialized]);

    // Manejar cambios de navegación con Astro View Transitions
    React.useEffect(() => {
        const handlePageLoad = () => {
            // Resetear la inicialización para forzar una nueva lectura del tema
            setIsInitialized(false);
        };

        const handleBeforeSwap = () => {
            // Asegurar que el tema se preserve antes del swap
            const currentTheme = getCurrentTheme();
            setThemeState(currentTheme);
        };

        // Escuchar eventos de navegación de Astro
        document.addEventListener("astro:page-load", handlePageLoad);
        document.addEventListener("astro:before-swap", handleBeforeSwap);

        return () => {
            document.removeEventListener("astro:page-load", handlePageLoad);
            document.removeEventListener("astro:before-swap", handleBeforeSwap);
        };
    }, [getCurrentTheme]);

    React.useEffect(() => {
        // Solo aplicar cambios si el componente está inicializado
        if (!isInitialized) return;

        const isDark =
            theme === "dark" ||
            (theme === "system" &&
                window.matchMedia("(prefers-color-scheme: dark)").matches);

        document.documentElement.classList[isDark ? "add" : "remove"]("dark");

        // Actualizar localStorage para mantener consistencia
        if (typeof localStorage !== "undefined") {
            const themeValue = theme === "theme-light" ? "light" : theme;
            localStorage.setItem("theme", themeValue);
        }
    }, [theme, isInitialized]);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                    <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                    <span className="sr-only">Cambiar tema</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="z-[1000]">
                <DropdownMenuItem onClick={() => setThemeState("theme-light")}>
                    Claro
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setThemeState("dark")}>
                    Oscuro
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setThemeState("system")}>
                    Sistema
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
