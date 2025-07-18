"use client";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import {
    Archive,
    Book,
    ChevronLeft,
    ChevronRight,
    FileText,
    Handshake,
    Headset,
    LifeBuoy,
    Mail,
    PlayCircle,
    Sunset,
    Trees,
    Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Fragment, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { ModeToggle } from "../ModeToggle";
import { DevanthosIcon } from "../icons";

interface Link {
    label: string;
    description?: string;
    icon?: LucideIcon;
    url: string;
}

interface Subgroup {
    title?: string;
    links: Link[];
}

type Group = [
    {
        title?: string;
        links: Link[];
    },
    {
        sections: Subgroup[];
        title?: string;
    }
];

interface MenuItem {
    title: string;
    url?: string;
    groups?: Group;
    className?: string;
    featuredLinks?: Link[];
}

const PRIMARY_BUTTON = {
    label: "Realice una consultoría",
    url: "https://wa.me/5492646629632?text=Hola%20me%20interesa%20la%20consultoria%20gratuita",
};

const NAVIGATION1: Array<MenuItem> = [
    {
        title: "Productos",
        className: "grid-cols-[400px,300px] xl:grid-cols-[500px_500px]",
        groups: [
            {
                title: "Productos",
                links: [
                    {
                        label: "Componentes UI",
                        description: "Componentes para tu interfaz",
                        icon: FileText,
                        url: "/productos/componentes-ui",
                    },
                    {
                        label: "Diseño de sistema",
                        description: "Guías de estilo y patrones",
                        icon: Trees,
                        url: "/productos/diseno-sistema",
                    },
                    {
                        label: "Plantillas",
                        description: "Plantillas preconstruidas",
                        icon: Archive,
                        url: "/productos/plantillas",
                    },
                    {
                        label: "Responsive",
                        description: "Diseño adaptable",
                        icon: Handshake,
                        url: "/productos/responsive",
                    },
                    {
                        label: "Temas",
                        description: "Personaliza tu apariencia",
                        icon: Sunset,
                        url: "/productos/temas",
                    },
                    {
                        label: "Documentación",
                        description: "Guías y referencias de uso",
                        icon: Book,
                        url: "/productos/documentacion",
                    },
                    {
                        label: "Ver ejemplos",
                        description: "Ver ejemplos en vivo",
                        icon: PlayCircle,
                        url: "/productos/ejemplos",
                    },
                    {
                        label: "Mantenimiento",
                        description: "Actualizaciones y soporte",
                        icon: Zap,
                        url: "/productos/mantenimiento",
                    },
                ],
            },
            {
                title: "Soluciones",
                sections: [
                    {
                        title: "Industrias",
                        links: [
                            {
                                label: "E-commerce",
                                url: "/soluciones/ecommerce",
                            },
                            { label: "Salud", url: "/soluciones/salud" },
                            {
                                label: "Educación",
                                url: "/soluciones/educacion",
                            },
                            { label: "Finanzas", url: "/soluciones/finanzas" },
                            {
                                label: "Tecnología",
                                url: "/soluciones/tecnologia",
                            },
                        ],
                    },
                    {
                        title: "Uso personal",
                        links: [
                            {
                                label: "Portal personalizado",
                                url: "/soluciones/portal-personal",
                            },
                            {
                                label: "Dashboard de administrador",
                                url: "/soluciones/dashboard",
                            },
                            {
                                label: "App mobile",
                                url: "/soluciones/app-movil",
                            },
                            {
                                label: "Landing Page",
                                url: "/soluciones/landing-page",
                            },
                            {
                                label: "Aplicación web",
                                url: "/soluciones/web-app",
                            },
                        ],
                    },
                ],
            },
        ],
        featuredLinks: [
            {
                label: "Realice una consultoría",
                description: "Programa una reunión con nosotros",
                icon: Headset,
                url: "/contacto",
            },
        ],
    },
    {
        title: "Empresa",
        className: "grid-cols-[18.75rem_25rem]",
        groups: [
            {
                title: "Soporte",
                links: [
                    {
                        label: "Centro de Ayuda",
                        url: "/faq",
                        icon: LifeBuoy,
                        description: "Encuentra respuestas",
                    },
                    {
                        label: "Contacta con nosotros",
                        url: "/contacto",
                        icon: Mail,
                        description: "Envíanos un mensaje",
                    },
                ],
            },
            {
                sections: [
                    {
                        title: "Empresa",
                        links: [
                            { label: "Sobre nosotros", url: "/empresa" },
                            { label: "Objetivos", url: "/empresa/objetivos" },
                            { label: "Blogs", url: "/blog" },
                            { label: "Socios", url: "/empresa/socios" },
                            { label: "Contáctanos", url: "/contacto" },
                        ],
                    },
                    {
                        title: "Recursos",
                        links: [
                            {
                                label: "Documentación",
                                url: "/productos/documentacion",
                            },
                            {
                                label: "Tutoriales",
                                url: "/recursos/tutoriales",
                            },
                            { label: "Comunidad", url: "/comunidad" },
                            {
                                label: "GitHub",
                                url: "https://github.com/devsHub",
                            },
                            {
                                label: "Discord",
                                url: "https://discord.gg/devshub",
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        title: "Precios",
        url: "/precios",
    },
    {
        title: "FAQ",
        url: "/faq",
    },
];

const MOBILE_BREAKPOINT = 1280;

export default function Navbar() {
    const [open, setOpen] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > MOBILE_BREAKPOINT) {
                setOpen(false);
            }
        };

        handleResize();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "auto";
    }, [open]);

    const handleMobileMenu = () => {
        const nextOpen = !open;
        setOpen(nextOpen);
    };

    return (
        <section>
            <div className="pointer-events-auto fixed top-0 z-999 w-full xl:bg-transparent">
                <nav className="container p-0 mx-auto">
                    <div className="flex w-full items-center justify-between rounded-b-[0.75rem] px-6 py-4 sm:rounded-[0.75rem]  xl:mt-2.5 xl:h-[5.25rem] dark:bg-black/60 bg-white/60 xl:py-6 backdrop-blur-[5px]">
                        <a
                            href="/"
                            className="w-fit inline-flex items-baseline"
                        >
                            <DevanthosIcon className="relative -bottom-[3px] size-7 align-baseline fill-primary" />
                            <span className="ml-[2px] text-3xl font-cocogoose font-normal">
                                <span className="sr-only">D</span>
                                evanthos
                            </span>
                        </a>
                        <NavigationMenuWithoutViewport className="flex">
                            <NavigationMenuList className="relative hidden xl:flex">
                                {NAVIGATION1.map((item, index) =>
                                    renderDesktopMenuItem(item, index)
                                )}
                            </NavigationMenuList>
                        </NavigationMenuWithoutViewport>
                        <div className="ml-auto flex items-center gap-4 xl:ml-0">
                            <Button asChild className="hidden xl:block">
                                <a
                                    href={PRIMARY_BUTTON.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {PRIMARY_BUTTON.label}
                                </a>
                            </Button>
                            <ModeToggle />
                            <div className="xl:hidden">
                                <Button
                                    className="mr-[-0.6875rem] size-11"
                                    variant="ghost"
                                    onClick={handleMobileMenu}
                                >
                                    <div className="relative size-5.5">
                                        <span
                                            className={cn(
                                                "absolute top-0.5 left-0 h-0.5 w-5.5 bg-foreground transition-all duration-300",
                                                open
                                                    ? "top-2.5 rotate-45"
                                                    : "top-0.5"
                                            )}
                                        />
                                        <span
                                            className={cn(
                                                "absolute top-2.5 left-0 h-0.5 w-5.5 bg-foreground transition-all duration-300",
                                                open
                                                    ? "opacity-0"
                                                    : "opacity-100"
                                            )}
                                        />
                                        <span
                                            className={cn(
                                                "absolute top-4.5 left-0 h-0.5 w-5.5 bg-foreground transition-all duration-300",
                                                open
                                                    ? "top-2.5 -rotate-45"
                                                    : "top-4.5"
                                            )}
                                        />
                                    </div>
                                </Button>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <MobileNavigationMenu open={open} />
        </section>
    );
}

const renderDesktopMenuItem = (item: MenuItem, index: number) => {
    const triggerClasses =
        "text-base py-1 px-2 rounded-[.375rem] h-8 bg-transparent";

    if (item.groups) {
        const [group1, group2] = item.groups;

        return (
            <NavigationMenuItem key={item.title} value={`${index}`}>
                <NavigationMenuTrigger className={triggerClasses}>
                    {item.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent
                    className={cn(
                        "top-12 left-1/2 z-10 hidden w-full -translate-x-1/2 overflow-hidden rounded-lg border p-0 xl:grid",
                        item.className
                    )}
                >
                    <div className="bg-muted px-6 py-8">
                        <IconLinks links={group1} />
                    </div>
                    <div className="bg-background px-6 py-8">
                        <Links links={group2} />
                        <FeaturedLinks links={item.featuredLinks} />
                    </div>
                </NavigationMenuContent>
            </NavigationMenuItem>
        );
    }

    return (
        <NavigationMenuItem
            key={item.title}
            value={`${index}`}
            className={item.className}
        >
            <NavigationMenuLink
                href={item.url}
                className={`${navigationMenuTriggerStyle()} ${triggerClasses}`}
            >
                {item.title}
            </NavigationMenuLink>
        </NavigationMenuItem>
    );
};

const MobileNavigationMenu = ({ open }: { open: boolean }) => {
    const [openSubmenu, setOpenSubmenu] = useState<{
        open: boolean;
        index: number;
    }>({
        open: false,
        index: 0,
    });

    const handleSelected = (index?: number) => {
        setOpenSubmenu({
            open: !openSubmenu.open,
            index: index || 0,
        });
    };

    const currentNav = NAVIGATION1[openSubmenu.index];

    return (
        <Sheet open={open}>
            <SheetContent
                aria-describedby={undefined}
                side="top"
                className="inset-0 z-998 h-dvh !animate-none bg-background pt-[4.75rem] [&>button]:hidden"
            >
                <div className="h-full overflow-y-auto px-2.5 py-8.5">
                    <div className="absolute -m-px h-px w-px overflow-hidden border-0 mask-clip-border p-0 text-nowrap whitespace-nowrap">
                        <SheetTitle className="text-primary">
                            Navegación mobile
                        </SheetTitle>
                    </div>
                    <div className="container">
                        <div
                            className={cn(
                                "relative min-h-[calc(100dvh-145px)]",
                                openSubmenu.open ? "" : "overflow-hidden"
                            )}
                        >
                            <div
                                className={cn(
                                    "absolute inset-0 transition-all duration-300 ease-in-out",
                                    openSubmenu.open
                                        ? "pointer-events-none translate-x-[-100%] opacity-0"
                                        : "translate-x-0 opacity-100"
                                )}
                            >
                                <div className="flex flex-col gap-4 sm:gap-6">
                                    {NAVIGATION1.map((item, index) => (
                                        <Button
                                            onClick={() =>
                                                handleSelected(index)
                                            }
                                            variant="ghost"
                                            asChild={!!item.url}
                                            key={`mobile-link-${index}`}
                                            className="w-full justify-between !px-0 !py-0 text-lg font-medium hover:bg-transparent sm:text-xl"
                                        >
                                            {item.url ? (
                                                <a href={item.url}>
                                                    {item.title}
                                                </a>
                                            ) : (
                                                <Fragment>
                                                    <div>{item.title}</div>
                                                    <ChevronRight />
                                                </Fragment>
                                            )}
                                        </Button>
                                    ))}
                                    <Button asChild size="lg">
                                        <a href={PRIMARY_BUTTON.url}>
                                            {PRIMARY_BUTTON.label}
                                        </a>
                                    </Button>
                                </div>
                            </div>

                            <div
                                className={cn(
                                    "absolute inset-0 transition-all duration-300 ease-in-out",
                                    openSubmenu.open
                                        ? "translate-x-0 opacity-100"
                                        : "pointer-events-none translate-x-[100%] opacity-0"
                                )}
                            >
                                <div className="flex w-full flex-col gap-8">
                                    <Button
                                        onClick={() => handleSelected()}
                                        className="h-fit w-full justify-start !px-0 text-lg leading-normal hover:bg-transparent"
                                        variant="ghost"
                                    >
                                        <ChevronLeft />
                                        Volver
                                    </Button>
                                    <div>
                                        {currentNav.groups?.[0] && (
                                            <IconLinks
                                                links={currentNav.groups[0]}
                                            />
                                        )}
                                    </div>
                                    <div className="grid grid-cols-1 pb-8.5 lg:grid-cols-2">
                                        <div className="w-full max-w-[37.5rem]">
                                            {currentNav.groups?.[1] && (
                                                <Links
                                                    links={currentNav.groups[1]}
                                                />
                                            )}
                                        </div>
                                        {currentNav?.featuredLinks && (
                                            <FeaturedLinks
                                                links={currentNav.featuredLinks}
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
};

const IconMenuLink = ({ item }: { item: Link }) => {
    return (
        <a
            className="flex h-full w-full max-w-[25rem] items-center gap-4 rounded-lg p-2 hover:bg-black/5"
            href={item.url}
        >
            {item.icon && (
                <div className="flex h-14 w-10 rounded-md bg-black">
                    <item.icon className="m-auto size-4 stroke-white" />
                </div>
            )}
            <div>
                <div className="text-[0.9375rem] leading-normal font-medium">
                    {item.label}
                </div>
                {item.description && (
                    <p className="text-sm leading-normal font-medium text-muted-foreground">
                        {item.description}
                    </p>
                )}
            </div>
        </a>
    );
};

const FeaturedLink = ({ item }: { item: Link }) => {
    return (
        <a className="flex h-full gap-3 rounded-xl border p-3" href={item.url}>
            {item.icon && (
                <div className="flex h-full w-10 shrink-0 rounded-md">
                    <item.icon className="m-auto w-full stroke-foreground" />
                </div>
            )}
            <div>
                <div>{item.label}</div>
                {item.description && (
                    <p className="mt-1 text-xs leading-normal font-medium text-muted-foreground">
                        {item.description}
                    </p>
                )}
            </div>
        </a>
    );
};

const FeaturedLinks = ({ links }: { links?: Link[] }) => {
    return (
        <div>
            {links && (
                <div className="mt-8">
                    <ul className="grid grid-cols-[repeat(auto-fit,_minmax(12.5rem,_1fr))] gap-4">
                        {links.map((link, index) => (
                            <li key={index} className="h-full">
                                <FeaturedLink item={link} />
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

const Links = ({
    links,
}: {
    links: {
        sections: Subgroup[];
        title?: string;
    };
}) => {
    return (
        <Fragment>
            {links.title && (
                <div className="mb-8 font-medium">{links.title}</div>
            )}
            <div className="flex flex-col justify-between gap-8 pr-12 sm:flex-row">
                {links.sections.map((section, index) => (
                    <div key={`subgroups-section-${index}`}>
                        <div className="mb-2 text-sm font-medium text-muted-foreground sm:mb-4 sm:ml-2">
                            {section.title}
                        </div>
                        <ul className="">
                            {section.links.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.url}
                                        className="inline-block rounded-lg py-2 font-medium hover:bg-muted sm:p-2"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Fragment>
    );
};

const IconLinks = ({
    links,
}: {
    links: {
        title?: string;
        links: Link[];
    };
}) => {
    return (
        <Fragment>
            {links.title && (
                <div className="mb-4 font-semibold">{links.title}</div>
            )}
            <ul className="grid grid-cols-[repeat(auto-fit,_minmax(12.5rem,_1fr))] gap-4">
                {links.links.map((link, index) => (
                    <li key={index} className="h-full">
                        <IconMenuLink item={link} />
                    </li>
                ))}
            </ul>
        </Fragment>
    );
};

const NavigationMenuWithoutViewport = ({
    className,
    children,
    viewport = true,
    ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Root> & {
    viewport?: boolean;
}) => {
    return (
        <NavigationMenuPrimitive.Root
            data-slot="navigation-menu"
            data-viewport={viewport}
            className={cn(
                "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
                className
            )}
            {...props}
        >
            {children}
            {/* The Viewport needs to be removed to center align submenus under their parents. You could remove this from the shadcn/ui component */}
            {/* {viewport && <NavigationMenuViewport />} */}
        </NavigationMenuPrimitive.Root>
    );
};
