"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
    Calculator,
    Globe,
    Zap,
    ShoppingCart,
    Building,
    Users,
    Briefcase,
    AlertTriangle,
    Info,
    Calendar,
    PhoneCall,
    PhoneCallIcon,
    Gavel,
    Shield,
    Folder,
    Pencil,
    CreditCard,
    Receipt,
    AlarmCheck,
    Rocket,
    Gem,
    Heart,
    Star,
    Check,
} from "lucide-react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

interface PageType {
    id: string;
    name: string;
    description: string;
    basePrice: number;
    estimatedDays: number;
    icon: React.ReactNode;
    features: Array<{
        name: string;
        description: string;
        details: string[];
    }>;
}

const pageTypes: PageType[] = [
    {
        id: "landing",
        name: "Landing Page",
        description:
            "Página de aterrizaje optimizada para conversiones con diseño atractivo y llamadas a la acción claras.",
        basePrice: 800,
        estimatedDays: 7,
        icon: <Globe className="h-4 w-4" />,
        features: [
            {
                name: "Diseño responsive",
                description:
                    "Adaptación perfecta a todos los dispositivos móviles, tablets y escritorio",
                details: [
                    "Optimización para móviles",
                    "Pruebas en múltiples dispositivos",
                    "Carga rápida en todas las pantallas",
                    "Navegación táctil optimizada",
                ],
            },
            {
                name: "Optimización SEO básica",
                description:
                    "Configuración inicial para aparecer en Google y otros buscadores",
                details: [
                    "Meta tags optimizados",
                    "Estructura HTML semántica",
                    "Velocidad de carga optimizada",
                    "URLs amigables",
                ],
            },
            {
                name: "Formulario de contacto",
                description:
                    "Sistema de contacto funcional con validación y envío de emails",
                details: [
                    "Validación de campos",
                    "Envío automático de emails",
                    "Protección anti-spam",
                    "Confirmación de envío",
                ],
            },
            {
                name: "Integración con analytics",
                description:
                    "Seguimiento básico de visitantes y comportamiento del sitio",
                details: [
                    "Google Analytics configurado",
                    "Seguimiento de conversiones",
                    "Reportes de tráfico",
                    "Métricas de rendimiento",
                ],
            },
        ],
    },
    {
        id: "corporate",
        name: "Página Corporativa",
        description:
            "Sitio web profesional para empresas con múltiples secciones, portafolio y información institucional.",
        basePrice: 1500,
        estimatedDays: 14,
        icon: <Building className="h-4 w-4" />,
        features: [
            {
                name: "Múltiples páginas",
                description:
                    "Estructura completa con varias secciones organizadas profesionalmente",
                details: [
                    "Página de inicio",
                    "Sobre nosotros",
                    "Servicios/Productos",
                    "Contacto",
                    "Navegación intuitiva",
                ],
            },
            {
                name: "Portafolio/Galería",
                description:
                    "Showcase visual de trabajos, productos o servicios de la empresa",
                details: [
                    "Galería de imágenes optimizada",
                    "Categorización de proyectos",
                    "Lightbox para visualización",
                    "Descripción de cada trabajo",
                ],
            },
            {
                name: "Blog integrado",
                description:
                    "Sistema de blog para publicar noticias, artículos y actualizaciones",
                details: [
                    "Editor de contenido fácil",
                    "Categorías y etiquetas",
                    "Comentarios opcionales",
                    "RSS feed automático",
                ],
            },
            {
                name: "Panel de administración básico",
                description:
                    "Interfaz simple para gestionar contenido sin conocimientos técnicos",
                details: [
                    "Editor visual de contenido",
                    "Gestión de imágenes",
                    "Usuarios con permisos",
                    "Respaldos automáticos",
                ],
            },
        ],
    },
    {
        id: "ecommerce",
        name: "E-commerce",
        description:
            "Tienda online completa con carrito de compras, pasarela de pagos y gestión de inventario.",
        basePrice: 2500,
        estimatedDays: 30,
        icon: <ShoppingCart className="h-4 w-4" />,
        features: [
            {
                name: "Carrito de compras",
                description:
                    "Sistema completo de compras con cálculo automático de totales y impuestos",
                details: [
                    "Agregar/quitar productos",
                    "Cálculo de impuestos",
                    "Códigos de descuento",
                    "Guardado de carrito",
                ],
            },
            {
                name: "Pasarela de pagos",
                description:
                    "Integración segura con procesadores de pago populares",
                details: [
                    "Mercado Pago integrado",
                    "Stripe para tarjetas",
                    "PayPal disponible",
                    "Transacciones seguras SSL",
                ],
            },
            {
                name: "Gestión de inventario",
                description:
                    "Control automático de stock y productos disponibles",
                details: [
                    "Control de stock en tiempo real",
                    "Alertas de inventario bajo",
                    "Variantes de productos",
                    "Importación masiva de productos",
                ],
            },
            {
                name: "Panel de administración",
                description:
                    "Dashboard completo para gestionar ventas, productos y clientes",
                details: [
                    "Gestión de pedidos",
                    "Reportes de ventas",
                    "Administración de productos",
                    "Base de datos de clientes",
                ],
            },
        ],
    },
    {
        id: "portfolio",
        name: "Portafolio Personal",
        description:
            "Sitio web personal para mostrar trabajos, habilidades y experiencia profesional de forma elegante.",
        basePrice: 600,
        estimatedDays: 5,
        icon: <Users className="h-4 w-4" />,
        features: [
            {
                name: "Galería de trabajos",
                description:
                    "Showcase profesional de proyectos y trabajos realizados",
                details: [
                    "Organización por categorías",
                    "Imágenes en alta calidad",
                    "Descripción detallada de proyectos",
                    "Enlaces a trabajos en vivo",
                ],
            },
            {
                name: "CV descargable",
                description:
                    "Currículum profesional disponible para descarga en PDF",
                details: [
                    "Diseño profesional",
                    "Información actualizable",
                    "Descarga directa en PDF",
                    "Optimizado para impresión",
                ],
            },
            {
                name: "Formulario de contacto",
                description:
                    "Sistema de contacto directo para oportunidades laborales",
                details: [
                    "Formulario personalizado",
                    "Notificaciones inmediatas",
                    "Filtro anti-spam",
                    "Respuesta automática",
                ],
            },
            {
                name: "Blog personal",
                description:
                    "Espacio para compartir experiencias, conocimientos y actualizaciones",
                details: [
                    "Editor de contenido simple",
                    "Categorización de posts",
                    "Compartir en redes sociales",
                    "Comentarios de lectores",
                ],
            },
        ],
    },
    {
        id: "webapp",
        name: "Aplicación Web",
        description:
            "Aplicación web interactiva con funcionalidades avanzadas y base de datos personalizada.",
        basePrice: 3500,
        estimatedDays: 45,
        icon: <Zap className="h-4 w-4" />,
        features: [
            {
                name: "Base de datos personalizada",
                description:
                    "Sistema de almacenamiento diseñado específicamente para tu aplicación",
                details: [
                    "Diseño de esquema personalizado",
                    "Optimización de consultas",
                    "Respaldos automáticos",
                    "Escalabilidad garantizada",
                ],
            },
            {
                name: "Autenticación de usuarios",
                description:
                    "Sistema seguro de registro, login y gestión de usuarios",
                details: [
                    "Registro y login seguro",
                    "Recuperación de contraseñas",
                    "Verificación por email",
                    "Roles y permisos",
                ],
            },
            {
                name: "Dashboard interactivo",
                description:
                    "Panel de control con métricas, gráficos y funcionalidades principales",
                details: [
                    "Gráficos en tiempo real",
                    "Métricas personalizadas",
                    "Interfaz intuitiva",
                    "Exportación de datos",
                ],
            },
            {
                name: "API personalizada",
                description:
                    "Interfaz de programación para integraciones y funcionalidades avanzadas",
                details: [
                    "Endpoints personalizados",
                    "Documentación completa",
                    "Autenticación API",
                    "Límites de uso configurables",
                ],
            },
        ],
    },
    {
        id: "saas",
        name: "Plataforma SaaS",
        description:
            "Plataforma completa de Software como Servicio con suscripciones, múltiples usuarios y funcionalidades avanzadas.",
        basePrice: 5000,
        estimatedDays: 60,
        icon: <Briefcase className="h-4 w-4" />,
        features: [
            {
                name: "Sistema de suscripciones",
                description:
                    "Gestión completa de planes, pagos recurrentes y facturación automática",
                details: [
                    "Múltiples planes de precios",
                    "Facturación automática",
                    "Gestión de upgrades/downgrades",
                    "Reportes financieros",
                ],
            },
            {
                name: "Multi-tenant",
                description:
                    "Arquitectura que permite múltiples clientes con datos completamente separados",
                details: [
                    "Aislamiento total de datos",
                    "Personalización por cliente",
                    "Escalabilidad automática",
                    "Seguridad empresarial",
                ],
            },
            {
                name: "Dashboard avanzado",
                description:
                    "Panel de control empresarial con analytics profundos y reportes detallados",
                details: [
                    "Analytics en tiempo real",
                    "Reportes personalizables",
                    "KPIs empresariales",
                    "Exportación avanzada",
                ],
            },
            {
                name: "Integraciones API",
                description:
                    "Conexiones con servicios externos y herramientas empresariales",
                details: [
                    "APIs de terceros",
                    "Webhooks configurables",
                    "Sincronización automática",
                    "Monitoreo de integraciones",
                ],
            },
            {
                name: "Soporte 24/7",
                description:
                    "Soporte técnico especializado disponible las 24 horas del día",
                details: [
                    "Chat en vivo",
                    "Soporte por email",
                    "Base de conocimientos",
                    "Tiempo de respuesta garantizado",
                ],
            },
        ],
    },
];

const additionalFeatures = [
    {
        id: "seo",
        name: "SEO Avanzado",
        price: 300,
        description:
            "Optimización completa para motores de búsqueda incluyendo meta tags, sitemap XML, robots.txt, optimización de velocidad, análisis de palabras clave y configuración de Google Analytics y Search Console.",
        benefits: [
            "Mejor posicionamiento en Google",
            "Aumento del tráfico orgánico",
            "Análisis de competencia",
            "Reportes mensuales de rendimiento",
        ],
    },
    {
        id: "multilang",
        name: "Sitio Multiidioma",
        price: 500,
        description:
            "Implementación completa de múltiples idiomas con gestión de contenido traducido, URLs localizadas y detección automática del idioma del usuario.",
        benefits: [
            "Alcance internacional",
            "Mejor experiencia de usuario",
            "URLs optimizadas por idioma",
            "Gestión fácil de traducciones",
        ],
    },
    {
        id: "cms",
        name: "CMS Personalizado",
        price: 800,
        description:
            "Sistema de gestión de contenido a medida que permite editar textos, imágenes y páginas sin conocimientos técnicos, con roles de usuario y flujo de aprobación.",
        benefits: [
            "Control total del contenido",
            "Interfaz intuitiva",
            "Múltiples usuarios",
            "Historial de cambios",
            "Respaldos automáticos",
        ],
    },
    {
        id: "analytics",
        name: "Analytics Avanzado",
        price: 200,
        description:
            "Implementación de herramientas de análisis avanzadas incluyendo Google Analytics 4, heatmaps, seguimiento de conversiones y dashboard personalizado con métricas clave.",
        benefits: [
            "Métricas detalladas de usuarios",
            "Análisis de comportamiento",
            "Seguimiento de objetivos",
            "Reportes automatizados",
        ],
    },
    {
        id: "maintenance",
        name: "Mantenimiento (6 meses)",
        price: 600,
        description:
            "Servicio completo de mantenimiento que incluye actualizaciones de seguridad, respaldos semanales, monitoreo de rendimiento, corrección de errores menores y soporte técnico prioritario.",
        benefits: [
            "Sitio siempre actualizado",
            "Respaldos automáticos",
            "Soporte prioritario",
            "Monitoreo 24/7",
            "Corrección de errores incluida",
        ],
    },
    {
        id: "hosting",
        name: "Hosting Premium (1 año)",
        price: 400,
        description:
            "Hosting de alta calidad con SSD, CDN global, certificado SSL, copias de seguridad diarias, 99.9% uptime garantizado y soporte técnico especializado.",
        benefits: [
            "Velocidad de carga superior",
            "Seguridad garantizada",
            "Soporte 24/7",
            "99.9% tiempo activo",
            "CDN global incluido",
        ],
    },
];

export default function BudgetForm() {
    const [selectedPageType, setSelectedPageType] = useState<string>("");
    const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
    const [timeline, setTimeline] = useState<string>("");
    const [clientInfo, setClientInfo] = useState({
        name: "",
        email: "",
        company: "",
        description: "",
    });

    const selectedPage = pageTypes.find((page) => page.id === selectedPageType);

    const calculateEstimatedDays = () => {
        if (!selectedPage) return 0;

        const baseDays = selectedPage.estimatedDays;

        switch (timeline) {
            case "urgent":
                return Math.max(Math.ceil(baseDays * 0.7), 1); // Reduce 30% pero mínimo 1 día
            case "extended":
                return Math.ceil(baseDays * 1.2); // Aumenta 20%
            default:
                return baseDays;
        }
    };

    const getEstimatedDeliveryDate = () => {
        const days = calculateEstimatedDays();
        const today = new Date();
        const deliveryDate = new Date(today);
        deliveryDate.setDate(today.getDate() + days);

        return deliveryDate.toLocaleDateString("es-ES", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    const calculateTotal = () => {
        const basePrice = selectedPage?.basePrice || 0;
        const featuresPrice = selectedFeatures.reduce((total, featureId) => {
            const feature = additionalFeatures.find((f) => f.id === featureId);
            return total + (feature?.price || 0);
        }, 0);

        // Descuento por timeline urgente
        const urgencyMultiplier =
            timeline === "urgent" ? 1.3 : timeline === "extended" ? 0.9 : 1;

        return Math.round((basePrice + featuresPrice) * urgencyMultiplier);
    };

    const handleFeatureToggle = (featureId: string) => {
        setSelectedFeatures((prev) =>
            prev.includes(featureId)
                ? prev.filter((id) => id !== featureId)
                : [...prev, featureId]
        );
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const budget = {
            pageType: selectedPage,
            additionalFeatures: selectedFeatures.map((id) =>
                additionalFeatures.find((f) => f.id === id)
            ),
            timeline,
            estimatedDays: calculateEstimatedDays(),
            deliveryDate: getEstimatedDeliveryDate(),
            clientInfo,
            totalPrice: calculateTotal(),
        };

        console.log("Presupuesto generado:", budget);
        alert(
            `Presupuesto generado: $${calculateTotal()} USD - Entrega estimada: ${getEstimatedDeliveryDate()}`
        );
    };

    return (
        <div className="min-h-screen">
            <div className="max-w-5xl mx-auto px-4 pt-28 pb-12 space-y-8">
                {/* Header mejorado con gradiente */}
                <Card className="border-0 shadow-2xl bg-gradient-to-r from-primary to-accent text-white overflow-hidden relative">
                    <div className="absolute inset-0 bg-black/10 dark:bg-black/20"></div>
                    <CardHeader className="text-center relative z-10 py-12">
                        <CardTitle className="flex items-center justify-center gap-3 text-4xl font-bold mb-4">
                            <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
                                <Calculator className="h-8 w-8" />
                            </div>
                            Calculadora de Presupuesto Web
                        </CardTitle>
                        <CardDescription className="text-blue-100 text-lg max-w-2xl mx-auto leading-relaxed">
                            Descubre el costo de tu proyecto web en minutos.
                            Obtén un presupuesto personalizado con todas las
                            características que necesitas para hacer realidad tu
                            visión digital.
                        </CardDescription>
                        <div className="flex justify-center mt-6 space-x-2">
                            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                            <div className="w-2 h-2 bg-white/70 rounded-full animate-pulse delay-100"></div>
                            <div className="w-2 h-2 bg-white/50 rounded-full animate-pulse delay-200"></div>
                        </div>
                    </CardHeader>
                </Card>

                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Información del Cliente con diseño mejorado */}
                    <Card className="border-0 shadow-xl bg-background/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 p-0">
                        <CardHeader className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/50 rounded-t-lg py-2.5">
                            <CardTitle className="flex items-center gap-3 text-xl text-gray-800 dark:text-gray-100">
                                <div className="p-2 bg-blue-100 dark:bg-blue-800 rounded-lg">
                                    <Users className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                                </div>
                                Información del Cliente
                            </CardTitle>
                            <CardDescription className="text-gray-600 dark:text-gray-300">
                                Cuéntanos sobre ti y tu proyecto para
                                personalizar tu cotización
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="p-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-3 group">
                                    <Label
                                        htmlFor="name"
                                        className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2"
                                    >
                                        Nombre completo
                                        <span className="text-red-500">*</span>
                                    </Label>
                                    <Input
                                        id="name"
                                        value={clientInfo.name}
                                        onChange={(e) =>
                                            setClientInfo((prev) => ({
                                                ...prev,
                                                name: e.target.value,
                                            }))
                                        }
                                        placeholder="Tu nombre completo"
                                        required
                                        className="h-12 border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition-all duration-200 group-hover:border-gray-300 dark:group-hover:border-gray-500"
                                    />
                                </div>
                                <div className="space-y-3 group">
                                    <Label
                                        htmlFor="email"
                                        className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2"
                                    >
                                        Email de contacto
                                        <span className="text-red-500">*</span>
                                    </Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        value={clientInfo.email}
                                        onChange={(e) =>
                                            setClientInfo((prev) => ({
                                                ...prev,
                                                email: e.target.value,
                                            }))
                                        }
                                        placeholder="tu@email.com"
                                        required
                                        className="h-12 border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition-all duration-200 group-hover:border-gray-300 dark:group-hover:border-gray-500"
                                    />
                                </div>
                                <div className="space-y-3 group">
                                    <Label
                                        htmlFor="company"
                                        className="text-sm font-semibold text-gray-700 dark:text-gray-300"
                                    >
                                        Empresa (opcional)
                                    </Label>
                                    <Input
                                        id="company"
                                        value={clientInfo.company}
                                        onChange={(e) =>
                                            setClientInfo((prev) => ({
                                                ...prev,
                                                company: e.target.value,
                                            }))
                                        }
                                        placeholder="Nombre de tu empresa"
                                        className="h-12 border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition-all duration-200 group-hover:border-gray-300 dark:group-hover:border-gray-500"
                                    />
                                </div>
                                <div className="space-y-3 md:col-span-2 group">
                                    <Label
                                        htmlFor="description"
                                        className="text-sm font-semibold text-gray-700 dark:text-gray-300"
                                    >
                                        Descripción del proyecto
                                    </Label>
                                    <Textarea
                                        id="description"
                                        value={clientInfo.description}
                                        onChange={(e) =>
                                            setClientInfo((prev) => ({
                                                ...prev,
                                                description: e.target.value,
                                            }))
                                        }
                                        placeholder="Cuéntanos sobre tu proyecto, objetivos, audiencia objetivo, funcionalidades específicas que necesitas..."
                                        rows={4}
                                        className="border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition-all duration-200 group-hover:border-gray-300 dark:group-hover:border-gray-500 resize-none"
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Tipo de Página con diseño mejorado */}
                    <Card className="border-0 shadow-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 p-0">
                        <CardHeader className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/50 dark:to-blue-900/50 rounded-t-lg py-2.5">
                            <CardTitle className="flex items-center gap-3 text-xl text-gray-800 dark:text-gray-100">
                                <div className="p-2 bg-purple-100 dark:bg-purple-800 rounded-lg">
                                    <Globe className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                                </div>
                                Tipo de Página Web
                            </CardTitle>
                            <CardDescription className="text-gray-600 dark:text-gray-300">
                                Selecciona el tipo de sitio web que mejor se
                                adapte a tus necesidades
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="p-8 space-y-6">
                            <Select
                                value={selectedPageType}
                                onValueChange={setSelectedPageType}
                            >
                                <SelectTrigger className="data-[size=default]:h-14 border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-700 hover:border-purple-300 dark:hover:border-purple-500 focus:border-purple-500 dark:focus:border-purple-400 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-800 transition-all duration-200">
                                    <SelectValue placeholder="Haz clic aquí para seleccionar el tipo de página" />
                                </SelectTrigger>
                                <SelectContent className="border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-800">
                                    {pageTypes.map((page) => (
                                        <SelectItem
                                            key={page.id}
                                            value={page.id}
                                            className="hover:bg-purple-50 dark:hover:bg-purple-900/50 focus:bg-purple-50 dark:focus:bg-purple-900/50 cursor-pointer py-3"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="p-1 bg-purple-100 dark:bg-purple-800 rounded">
                                                    {page.icon}
                                                </div>
                                                <div>
                                                    <div className="font-medium dark:text-gray-100">
                                                        {page.name}
                                                    </div>
                                                    <div className="text-xs text-gray-500 dark:text-gray-400">
                                                        Desde ${page.basePrice}{" "}
                                                        USD
                                                    </div>
                                                </div>
                                            </div>
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>

                            {selectedPage && (
                                <Card className="border-2 border-purple-200 dark:border-purple-600 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/50 dark:to-blue-900/50 shadow-lg hover:shadow-xl transition-all duration-500 animate-in slide-in-from-top-5">
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="p-3 bg-purple-200 dark:bg-purple-700 rounded-xl">
                                                {selectedPage.icon}
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-bold text-xl text-purple-900 dark:text-purple-100 mb-2">
                                                    {selectedPage.name}
                                                </h4>
                                                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                                    {selectedPage.description}
                                                </p>

                                                {/* Información de tiempo estimado mejorada */}
                                                <div className="flex items-center gap-3 mb-6 p-4 bg-blue-100 dark:bg-blue-900/50 rounded-xl border border-blue-200 dark:border-blue-600">
                                                    <div className="p-2 bg-blue-200 dark:bg-blue-700 rounded-lg">
                                                        <Calendar className="h-5 w-5 text-blue-700 dark:text-blue-300" />
                                                    </div>
                                                    <div>
                                                        <span className="text-sm font-semibold text-blue-800 dark:text-blue-200">
                                                            Tiempo estimado de
                                                            desarrollo
                                                        </span>
                                                        <p className="text-blue-700 dark:text-blue-300 font-bold text-lg">
                                                            {
                                                                selectedPage.estimatedDays
                                                            }{" "}
                                                            días hábiles
                                                        </p>
                                                    </div>
                                                </div>

                                                <TooltipProvider>
                                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                                                        {selectedPage.features.map(
                                                            (
                                                                feature,
                                                                index
                                                            ) => (
                                                                <div
                                                                    key={index}
                                                                    className="group"
                                                                >
                                                                    <Tooltip>
                                                                        <TooltipTrigger
                                                                            asChild
                                                                        >
                                                                            <Badge
                                                                                variant="secondary"
                                                                                className="cursor-help w-full justify-between p-3 bg-background/80 hover:bg-accent hover:scale-105 transition-all duration-200 border border-primary"
                                                                            >
                                                                                <span className="text-xs font-medium">
                                                                                    {
                                                                                        feature.name
                                                                                    }
                                                                                </span>
                                                                                <Info className="h-3 w-3 text-accent-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                                                                            </Badge>
                                                                        </TooltipTrigger>
                                                                        <TooltipContent className="max-w-xs p-4 bg-white border-2 border-purple-200">
                                                                            <p className="text-sm text-gray-700">
                                                                                {
                                                                                    feature.description
                                                                                }
                                                                            </p>
                                                                        </TooltipContent>
                                                                    </Tooltip>
                                                                    <Dialog>
                                                                        <DialogTrigger
                                                                            asChild
                                                                        >
                                                                            <Button
                                                                                variant="ghost"
                                                                                size="sm"
                                                                                className="mt-1 h-6 w-full text-xs text-black hover:text-black/50 dark:hover:text-white/70 dark:text-white"
                                                                            >
                                                                                Ver
                                                                                detalles
                                                                            </Button>
                                                                        </DialogTrigger>
                                                                        <DialogContent className="max-w-md border-2 border-purple-200">
                                                                            <DialogHeader>
                                                                                <DialogTitle className="text-primary">
                                                                                    {
                                                                                        feature.name
                                                                                    }
                                                                                </DialogTitle>
                                                                                <DialogDescription
                                                                                    asChild
                                                                                >
                                                                                    <div className="text-left space-y-4">
                                                                                        <p className="text-accent-foreground">
                                                                                            {
                                                                                                feature.description
                                                                                            }
                                                                                        </p>
                                                                                        <div>
                                                                                            <h4 className="font-semibold text-sm mb-3 text-purple-800 dark:text-purple-200">
                                                                                                Incluye:
                                                                                            </h4>
                                                                                            <ul className="space-y-2">
                                                                                                {feature.details.map(
                                                                                                    (
                                                                                                        detail,
                                                                                                        detailIndex
                                                                                                    ) => (
                                                                                                        <li
                                                                                                            key={
                                                                                                                detailIndex
                                                                                                            }
                                                                                                            className="flex items-center gap-3 text-sm"
                                                                                                        >
                                                                                                            <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                                                                                                            <span className="text-gray-700 dark:text-gray-300">
                                                                                                                {
                                                                                                                    detail
                                                                                                                }
                                                                                                            </span>
                                                                                                        </li>
                                                                                                    )
                                                                                                )}
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                </DialogDescription>
                                                                            </DialogHeader>
                                                                        </DialogContent>
                                                                    </Dialog>
                                                                </div>
                                                            )
                                                        )}
                                                    </div>
                                                </TooltipProvider>

                                                {/* Precio destacado */}
                                                <div className="text-right bg-gradient-to-r from-green-100 to-emerald-100 p-6 rounded-xl border-2 border-green-200 dark:border-green-600 dark:from-green-900/50 dark:to-emerald-900/50">
                                                    <div className="flex items-center justify-end gap-2 mb-2">
                                                        <span className="text-sm text-green-700 font-medium dark:text-green-300">
                                                            Precio base
                                                        </span>
                                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse dark:bg-green-600"></div>
                                                    </div>
                                                    <span className="text-4xl font-bold text-green-700 dark:text-green-300">
                                                        $
                                                        {selectedPage.basePrice}
                                                    </span>
                                                    <span className="text-green-600 font-semibold ml-2 dark:text-green-400">
                                                        USD
                                                    </span>
                                                    <p className="text-sm text-green-600 mt-1 dark:text-green-400">
                                                        ¡Todo incluido sin
                                                        sorpresas!
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            )}
                        </CardContent>
                    </Card>

                    {/* Características Adicionales con diseño mejorado */}
                    {selectedPageType && (
                        <Card className="border-0 shadow-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 animate-in slide-in-from-bottom-5 p-0">
                            <CardHeader className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/50 dark:to-teal-900/50 rounded-t-lg py-2.5">
                                <CardTitle className="flex items-center gap-3 text-xl text-gray-800 dark:text-gray-100">
                                    <div className="p-2 bg-emerald-100 dark:bg-emerald-800 rounded-lg">
                                        <Zap className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                                    </div>
                                    Características Adicionales
                                </CardTitle>
                                <CardDescription className="text-gray-600 dark:text-gray-300">
                                    Potencia tu sitio web con funcionalidades
                                    avanzadas que marquen la diferencia
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="p-8">
                                <TooltipProvider>
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                        {additionalFeatures.map((feature) => (
                                            <div
                                                key={feature.id}
                                                className={`relative overflow-hidden rounded-xl border-2 transition-all duration-300 hover:shadow-lg ${
                                                    selectedFeatures.includes(
                                                        feature.id
                                                    )
                                                        ? "border-emerald-400 dark:border-emerald-500 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/50 dark:to-green-900/50 shadow-md"
                                                        : "border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 hover:border-emerald-200 dark:hover:border-emerald-600 hover:bg-emerald-50/30 dark:hover:bg-emerald-900/20"
                                                }`}
                                            >
                                                {selectedFeatures.includes(
                                                    feature.id
                                                ) && (
                                                    <div className="absolute top-0 right-0 w-0 h-0 border-l-[50px] border-l-transparent border-t-[50px] border-t-emerald-500">
                                                        <div className="absolute -top-10 right-1.5 text-white text-xs font-bold">
                                                            <Check className="h-4 w-4" />
                                                        </div>
                                                    </div>
                                                )}

                                                <div className="p-6 space-y-4">
                                                    <div className="flex items-start justify-between">
                                                        <div className="flex items-start space-x-4 flex-1">
                                                            <Checkbox
                                                                id={feature.id}
                                                                checked={selectedFeatures.includes(
                                                                    feature.id
                                                                )}
                                                                onCheckedChange={() =>
                                                                    handleFeatureToggle(
                                                                        feature.id
                                                                    )
                                                                }
                                                                className="mt-1 h-5 w-5 border-2 border-emerald-300 data-[state=checked]:bg-emerald-500 data-[state=checked]:border-emerald-500"
                                                            />
                                                            <div className="flex-1">
                                                                <div className="flex items-center gap-3 mb-2">
                                                                    <Label
                                                                        htmlFor={
                                                                            feature.id
                                                                        }
                                                                        className="font-semibold cursor-pointer text-lg text-gray-800 dark:text-gray-100 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                                                                    >
                                                                        {
                                                                            feature.name
                                                                        }
                                                                    </Label>
                                                                </div>

                                                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                                                                    {
                                                                        feature.description
                                                                    }
                                                                </p>

                                                                <div className="flex items-center justify-between">
                                                                    <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                                                                        +$
                                                                        {
                                                                            feature.price
                                                                        }{" "}
                                                                        USD
                                                                    </div>
                                                                    <Dialog>
                                                                        <DialogTrigger
                                                                            asChild
                                                                        >
                                                                            <Button
                                                                                variant="outline"
                                                                                size="sm"
                                                                                className="border-emerald-300 dark:border-emerald-600 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 hover:border-emerald-400 dark:hover:border-emerald-500"
                                                                            >
                                                                                Ver
                                                                                beneficios
                                                                            </Button>
                                                                        </DialogTrigger>
                                                                        <DialogContent className="max-w-lg border-2 border-emerald-200 dark:border-emerald-600 dark:bg-gray-800">
                                                                            <DialogHeader>
                                                                                <DialogTitle className="flex items-center gap-3 text-emerald-900">
                                                                                    <div className="p-2 bg-emerald-100 rounded-lg">
                                                                                        <Zap className="h-5 w-5 text-emerald-600" />
                                                                                    </div>
                                                                                    {
                                                                                        feature.name
                                                                                    }
                                                                                    <span className="text-emerald-600 font-bold text-lg">
                                                                                        +$
                                                                                        {
                                                                                            feature.price
                                                                                        }{" "}
                                                                                        USD
                                                                                    </span>
                                                                                </DialogTitle>
                                                                                <DialogDescription
                                                                                    asChild
                                                                                >
                                                                                    <div className="text-left space-y-4">
                                                                                        <p className="text-gray-700 text-base leading-relaxed">
                                                                                            {
                                                                                                feature.description
                                                                                            }
                                                                                        </p>
                                                                                        <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
                                                                                            <h4 className="font-semibold text-emerald-800 mb-3 flex items-center gap-2">
                                                                                                <span className="text-emerald-600">
                                                                                                    🎯
                                                                                                </span>
                                                                                                Beneficios
                                                                                                incluidos:
                                                                                            </h4>
                                                                                            <ul className="space-y-2">
                                                                                                {feature.benefits.map(
                                                                                                    (
                                                                                                        benefit,
                                                                                                        index
                                                                                                    ) => (
                                                                                                        <li
                                                                                                            key={
                                                                                                                index
                                                                                                            }
                                                                                                            className="flex items-center gap-3 text-sm"
                                                                                                        >
                                                                                                            <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full"></div>
                                                                                                            <span className="text-gray-700">
                                                                                                                {
                                                                                                                    benefit
                                                                                                                }
                                                                                                            </span>
                                                                                                        </li>
                                                                                                    )
                                                                                                )}
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                </DialogDescription>
                                                                            </DialogHeader>
                                                                        </DialogContent>
                                                                    </Dialog>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </TooltipProvider>
                            </CardContent>
                        </Card>
                    )}

                    {/* Timeline con diseño mejorado */}
                    {selectedPageType && (
                        <Card className="border-0 shadow-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 animate-in slide-in-from-left-5 p-0">
                            <CardHeader className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/50 dark:to-amber-900/50 rounded-t-lg py-2.5">
                                <CardTitle className="flex items-center gap-3 text-xl text-gray-800 dark:text-gray-100">
                                    <div className="p-2 bg-orange-100 dark:bg-orange-800 rounded-lg">
                                        <Calendar className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                                    </div>
                                    Tiempo de Entrega
                                </CardTitle>
                                <CardDescription className="text-gray-600 dark:text-gray-300">
                                    Elige la velocidad de desarrollo que mejor
                                    se adapte a tus necesidades
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="p-8 space-y-6">
                                <Select
                                    value={timeline}
                                    onValueChange={setTimeline}
                                >
                                    <SelectTrigger className="data-[size=default]:h-16 border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-700 hover:border-orange-300 dark:hover:border-orange-500 focus:border-orange-500 dark:focus:border-orange-400 focus:ring-2 focus:ring-orange-200 dark:focus:ring-orange-800 transition-all duration-200">
                                        <SelectValue placeholder="Selecciona el tiempo de entrega que prefieras" />
                                    </SelectTrigger>
                                    <SelectContent className="border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-800">
                                        <SelectItem
                                            value="urgent"
                                            className="hover:bg-red-50 dark:hover:bg-red-900/50 focus:bg-red-50 dark:focus:bg-red-900/50 cursor-pointer py-4"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 bg-red-100 dark:bg-red-800 rounded-lg">
                                                    <Zap className="h-4 w-4 text-red-600 dark:text-red-400" />
                                                </div>
                                                <div>
                                                    <div className="font-semibold text-red-700 dark:text-red-300 flex items-center gap-2">
                                                        <Rocket className="h-4 w-4 text-red-600 dark:text-red-400" />{" "}
                                                        Urgente
                                                    </div>
                                                    <div className="text-sm text-red-600 dark:text-red-400">
                                                        {Math.max(
                                                            Math.ceil(
                                                                (selectedPage?.estimatedDays ||
                                                                    0) * 0.7
                                                            ),
                                                            1
                                                        )}{" "}
                                                        días
                                                        <span className="ml-2 bg-red-100 dark:bg-red-800 px-2 py-1 rounded text-xs">
                                                            +30% del precio
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </SelectItem>
                                        <SelectItem
                                            value="normal"
                                            className="hover:bg-blue-50 dark:hover:bg-blue-900/50 focus:bg-blue-50 dark:focus:bg-blue-900/50 cursor-pointer py-4"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 bg-blue-100 dark:bg-blue-800 rounded-lg">
                                                    <Calendar className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                                                </div>
                                                <div>
                                                    <div className="font-semibold text-blue-700 dark:text-blue-300 flex items-center gap-2">
                                                        <Star className="h-4 w-4 text-blue-600 dark:text-blue-400" />{" "}
                                                        Normal
                                                    </div>
                                                    <div className="text-sm text-blue-600 dark:text-blue-400">
                                                        {selectedPage?.estimatedDays ||
                                                            0}{" "}
                                                        días
                                                        <span className="ml-2 bg-blue-100 dark:bg-blue-800 px-2 py-1 rounded text-xs">
                                                            Precio estándar
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </SelectItem>
                                        <SelectItem
                                            value="extended"
                                            className="hover:bg-green-50 dark:hover:bg-green-900/50 focus:bg-green-50 dark:focus:bg-green-900/50 cursor-pointer py-4"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 bg-green-100 dark:bg-green-800 rounded-lg">
                                                    <Users className="h-4 w-4 text-green-600 dark:text-green-400" />
                                                </div>
                                                <div>
                                                    <div className="font-semibold text-green-700 dark:text-green-300 flex items-center gap-2">
                                                        <Heart className="h-4 w-4 text-green-600 dark:text-green-400" />{" "}
                                                        Flexible
                                                    </div>
                                                    <div className="text-sm text-green-600 dark:text-green-400">
                                                        {Math.ceil(
                                                            (selectedPage?.estimatedDays ||
                                                                0) * 1.2
                                                        )}{" "}
                                                        días
                                                        <span className="ml-2 bg-green-100 dark:bg-green-800 px-2 py-1 rounded text-xs">
                                                            10% descuento
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </SelectItem>
                                    </SelectContent>
                                </Select>

                                {timeline && (
                                    <Card className="border-2 border-green-200 dark:border-green-600 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/50 dark:to-emerald-900/50 shadow-md animate-in slide-in-from-top-3 duration-300">
                                        <CardContent className="p-6">
                                            <div className="flex items-center gap-4">
                                                <div className="p-3 bg-green-200 dark:bg-green-700 rounded-full">
                                                    <Calendar className="h-6 w-6 text-green-700 dark:text-green-300" />
                                                </div>
                                                <div className="flex-1">
                                                    <h4 className="font-bold text-green-800 dark:text-green-200 text-lg mb-1">
                                                        Fecha estimada de
                                                        entrega
                                                    </h4>
                                                    <p className="text-green-700 dark:text-green-300 font-semibold text-xl">
                                                        {getEstimatedDeliveryDate()}
                                                    </p>
                                                    <p className="text-sm text-green-600 dark:text-green-400 mt-2 flex items-center gap-2">
                                                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                                        {calculateEstimatedDays()}{" "}
                                                        días hábiles desde la
                                                        confirmación del
                                                        proyecto
                                                    </p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                )}
                            </CardContent>
                        </Card>
                    )}

                    {/* Resumen del Presupuesto con diseño premium */}
                    {selectedPageType && (
                        <Card className="border-0 shadow-2xl bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-green-900/50 dark:via-emerald-900/50 dark:to-teal-900/50 overflow-hidden relative animate-in slide-in-from-bottom-5 duration-500">
                            <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-emerald-400/10 dark:from-green-400/5 dark:to-emerald-400/5"></div>
                            <CardHeader className="relative z-10 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-800/50 dark:to-emerald-800/50 border-b border-green-200 dark:border-green-600">
                                <CardTitle className="flex items-center gap-3 text-2xl text-green-800 dark:text-green-200">
                                    <div className="p-3 bg-green-200 dark:bg-green-700 rounded-xl">
                                        <Calculator className="h-6 w-6 text-green-700 dark:text-green-300" />
                                    </div>
                                    Resumen del Presupuesto
                                </CardTitle>
                                <CardDescription className="text-green-700 dark:text-green-300 text-base">
                                    Aquí tienes el desglose completo de tu
                                    inversión
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="relative z-10 p-8">
                                <div className="space-y-4">
                                    {/* Precio base */}
                                    <div className="flex justify-between items-center p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg border border-green-200 dark:border-green-600">
                                        <div className="flex items-center gap-3">
                                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                            <span className="font-medium text-gray-800 dark:text-gray-200">
                                                {selectedPage?.name}
                                            </span>
                                        </div>
                                        <span className="font-bold text-green-700 dark:text-green-400">
                                            ${selectedPage?.basePrice} USD
                                        </span>
                                    </div>
                                    {/* Características adicionales */}
                                    {selectedFeatures.map((featureId) => {
                                        const feature = additionalFeatures.find(
                                            (f) => f.id === featureId
                                        );
                                        return feature ? (
                                            <div
                                                key={featureId}
                                                className="flex justify-between items-center p-3 bg-white/60 rounded-lg border border-emerald-200"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                                                    <span className="text-sm font-medium text-gray-700">
                                                        {feature.name}
                                                    </span>
                                                </div>
                                                <span className="text-emerald-600 font-semibold">
                                                    +${feature.price} USD
                                                </span>
                                            </div>
                                        ) : null;
                                    })}
                                    {/* Recargo por urgencia */}
                                    {timeline === "urgent" && (
                                        <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg border border-orange-200">
                                            <div className="flex items-center gap-3">
                                                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                                <span className="text-sm font-medium text-orange-700 flex items-center gap-2">
                                                    <Rocket className="size-4" />{" "}
                                                    Recargo por urgencia (30%)
                                                </span>
                                            </div>
                                            <span className="text-orange-600 font-semibold">
                                                +$
                                                {Math.round(
                                                    ((selectedPage?.basePrice ||
                                                        0) +
                                                        selectedFeatures.reduce(
                                                            (
                                                                total,
                                                                featureId
                                                            ) => {
                                                                const feature =
                                                                    additionalFeatures.find(
                                                                        (f) =>
                                                                            f.id ===
                                                                            featureId
                                                                    );
                                                                return (
                                                                    total +
                                                                    (feature?.price ||
                                                                        0)
                                                                );
                                                            },
                                                            0
                                                        )) *
                                                        0.3
                                                )}{" "}
                                                USD
                                            </span>
                                        </div>
                                    )}
                                    {/* Descuento por flexibilidad */}
                                    {timeline === "extended" && (
                                        <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                                            <div className="flex items-center gap-3">
                                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                                <span className="text-sm font-medium text-blue-700 flex items-center gap-2">
                                                    <Heart className="size-4" />{" "}
                                                    Descuento por flexibilidad
                                                    (10%)
                                                </span>
                                            </div>
                                            <span className="text-blue-600 font-semibold">
                                                -$
                                                {Math.round(
                                                    ((selectedPage?.basePrice ||
                                                        0) +
                                                        selectedFeatures.reduce(
                                                            (
                                                                total,
                                                                featureId
                                                            ) => {
                                                                const feature =
                                                                    additionalFeatures.find(
                                                                        (f) =>
                                                                            f.id ===
                                                                            featureId
                                                                    );
                                                                return (
                                                                    total +
                                                                    (feature?.price ||
                                                                        0)
                                                                );
                                                            },
                                                            0
                                                        )) *
                                                        0.1
                                                )}{" "}
                                                USD
                                            </span>
                                        </div>
                                    )}
                                    {/* Separador con gradiente */}
                                    <div className="h-px bg-gradient-to-r from-transparent via-green-300 to-transparent my-4"></div>{" "}
                                    {/* Total destacado */}
                                    <div className="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-800/50 dark:to-emerald-800/50 p-6 rounded-xl border-2 border-green-300 dark:border-green-600 shadow-lg">
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 bg-green-300 dark:bg-green-700 rounded-lg">
                                                    <span className="text-green-800">
                                                        <Gem className="size-6" />
                                                    </span>
                                                </div>
                                                <span className="text-2xl font-bold text-green-800 dark:text-green-200">
                                                    Total de tu inversión
                                                </span>
                                            </div>
                                            <div className="text-right">
                                                <span className="text-4xl font-bold text-green-700 dark:text-green-300">
                                                    ${calculateTotal()}
                                                </span>
                                                <span className="text-green-600 dark:text-green-400 font-semibold ml-2 text-xl">
                                                    USD
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Fecha de entrega */}
                                    {timeline && (
                                        <div className="bg-white/80 dark:bg-gray-800/80 p-4 rounded-lg border border-green-200 dark:border-green-600 mt-4">
                                            <div className="flex justify-between items-center">
                                                <span className="font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
                                                    <Calendar className="h-4 w-4 text-green-600 dark:text-green-400" />
                                                    Entrega estimada:
                                                </span>
                                                <span className="font-bold text-green-700 dark:text-green-300 text-lg">
                                                    {getEstimatedDeliveryDate()}
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </CardContent>

                            <CardFooter className="relative z-10 flex-col p-8 space-y-6">
                                <Button
                                    type="submit"
                                    className="w-full h-16 text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 dark:from-green-700 dark:to-emerald-700 dark:hover:from-green-600 dark:hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                                    size="lg"
                                >
                                    <div className="flex items-center gap-3 ">
                                        Solicitar Presupuesto Ahora
                                        <span>
                                            <Rocket className="size-6" />
                                        </span>
                                    </div>
                                </Button>

                                {/* Términos y condiciones mejorados */}
                                <div className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/30 dark:to-yellow-900/30 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-600 shadow-md">
                                    <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4 flex items-center gap-3 text-lg">
                                        <div className="p-2 bg-amber-200 dark:bg-amber-700 rounded-lg">
                                            <AlertTriangle className="h-5 w-5 text-amber-700 dark:text-amber-300" />
                                        </div>
                                        Términos y Condiciones de la Cotización
                                    </h4>
                                    <div className="text-sm text-amber-800 space-y-3 grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-3">
                                            <p className="flex items-start gap-2">
                                                <span className="text-amber-600 mt-1">
                                                    <AlarmCheck className="w-4 h-4" />
                                                </span>
                                                <span>
                                                    <strong>Validez:</strong>{" "}
                                                    Esta cotización tiene una
                                                    vigencia de{" "}
                                                    <strong className="bg-amber-100 px-2 py-1 rounded">
                                                        10 días calendario
                                                    </strong>{" "}
                                                    a partir de la fecha de
                                                    emisión.
                                                </span>
                                            </p>
                                            <p className="flex items-start gap-2">
                                                <span className="text-amber-600 mt-1">
                                                    <Receipt className="w-4 h-4" />
                                                </span>
                                                <span>
                                                    <strong>
                                                        Exclusividad:
                                                    </strong>{" "}
                                                    Los precios mostrados son
                                                    válidos únicamente para el
                                                    cliente y proyecto
                                                    especificado en este
                                                    formulario.
                                                </span>
                                            </p>
                                            <p className="flex items-start gap-2">
                                                <span className="text-amber-600 mt-1">
                                                    <CreditCard className="w-4 h-4" />
                                                </span>
                                                <span>
                                                    <strong>
                                                        Condiciones de pago:
                                                    </strong>{" "}
                                                    50% de anticipo para iniciar
                                                    el proyecto, 50% restante al
                                                    finalizar y entregar.
                                                </span>
                                            </p>
                                            <p className="flex items-start gap-2">
                                                <span className="text-amber-600 mt-1">
                                                    <Pencil className="w-4 h-4" />
                                                </span>
                                                <span>
                                                    <strong>Revisiones:</strong>{" "}
                                                    Se incluyen{" "}
                                                    <strong className="bg-amber-100 px-2 py-1 rounded">
                                                        5 revisiones
                                                    </strong>{" "}
                                                    sin costo adicional.
                                                    Revisiones extra tienen un
                                                    costo de $5 USD c/u.
                                                </span>
                                            </p>
                                        </div>
                                        <div className="space-y-3">
                                            <p className="flex items-start gap-2">
                                                <span className="text-amber-600 mt-1">
                                                    <Folder className="w-4 h-4" />
                                                </span>
                                                <span>
                                                    <strong>Contenido:</strong>{" "}
                                                    El cliente debe proporcionar
                                                    todo el contenido (textos,
                                                    imágenes, logos) en formato
                                                    digital.
                                                </span>
                                            </p>
                                            <p className="flex items-start gap-2">
                                                <span className="text-amber-600 mt-1">
                                                    <Globe className="w-4 h-4" />
                                                </span>
                                                <span>
                                                    <strong>
                                                        Hosting y dominio:
                                                    </strong>{" "}
                                                    No incluidos en el precio
                                                    base. Se pueden cotizar por
                                                    separado.
                                                </span>
                                            </p>
                                            <p className="flex items-start gap-2">
                                                <span className="text-amber-600 mt-1">
                                                    <Shield className="w-4 h-4" />
                                                </span>
                                                <span>
                                                    <strong>Garantía:</strong>{" "}
                                                    <strong className="bg-amber-100 px-2 py-1 rounded">
                                                        30 días
                                                    </strong>{" "}
                                                    de soporte técnico gratuito
                                                    posterior a la entrega del
                                                    proyecto.
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-4 pt-4 border-t border-amber-300 bg-amber-50 -mx-6 -mb-6 px-6 pb-6 rounded-b-xl">
                                        <p className="text-xs text-amber-700 text-center font-medium flex items-center justify-center gap-2">
                                            <span className="text-amber-600">
                                                <Gavel className="w-4 h-4" />
                                            </span>
                                            Al solicitar esta cotización, acepta
                                            estos términos y condiciones. Para
                                            dudas o aclaraciones, contáctenos
                                            directamente.
                                            <span className="text-amber-600">
                                                <PhoneCall className="w-4 h-4" />
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </CardFooter>
                        </Card>
                    )}
                </form>
            </div>
        </div>
    );
}
