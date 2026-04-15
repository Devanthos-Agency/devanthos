'use client';

import type React from 'react';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import {
    Globe,
    Zap,
    ShoppingCart,
    Building,
    Users,
    Briefcase,
    AlertTriangle,
    Info,
    Calendar,
    Gavel,
    Shield,
    Folder,
    Pencil,
    CreditCard,
    Receipt,
    AlarmCheck,
    Rocket,
    Heart,
    Star,
    Check,
    Printer,
} from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import type { BudgetRequest, BudgetPdfResponse } from '@/lib/budget-schema';

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
        id: 'landing',
        name: 'Landing Page',
        description:
            'Página de aterrizaje optimizada para conversiones con diseño atractivo y llamadas a la acción claras.',
        basePrice: 250,
        estimatedDays: 7,
        icon: <Globe className="h-4 w-4" />,
        features: [
            {
                name: 'Diseño responsive',
                description:
                    'Adaptación perfecta a todos los dispositivos móviles, tablets y escritorio',
                details: [
                    'Optimización para móviles',
                    'Pruebas en múltiples dispositivos',
                    'Carga rápida en todas las pantallas',
                    'Navegación táctil optimizada',
                ],
            },
            {
                name: 'Optimización SEO básica',
                description: 'Configuración inicial para aparecer en Google y otros buscadores',
                details: [
                    'Meta tags optimizados',
                    'Estructura HTML semántica',
                    'Velocidad de carga optimizada',
                    'URLs amigables',
                ],
            },
            {
                name: 'Formulario de contacto',
                description: 'Sistema de contacto funcional con validación y envío de emails',
                details: [
                    'Validación de campos',
                    'Envío automático de emails',
                    'Protección anti-spam',
                    'Confirmación de envío',
                ],
            },
            {
                name: 'Integración con analytics',
                description: 'Seguimiento básico de visitantes y comportamiento del sitio',
                details: [
                    'Google Analytics configurado',
                    'Seguimiento de conversiones',
                    'Reportes de tráfico',
                    'Métricas de rendimiento',
                ],
            },
        ],
    },
    {
        id: 'corporate',
        name: 'Página Corporativa',
        description:
            'Sitio web profesional para empresas con múltiples secciones, portafolio e información institucional.',
        basePrice: 400,
        estimatedDays: 14,
        icon: <Building className="h-4 w-4" />,
        features: [
            {
                name: 'Múltiples páginas',
                description:
                    'Estructura completa con varias secciones organizadas profesionalmente',
                details: [
                    'Página de inicio',
                    'Sobre nosotros',
                    'Servicios/Productos',
                    'Contacto',
                    'Navegación intuitiva',
                ],
            },
            {
                name: 'Portafolio/Galería',
                description: 'Showcase visual de trabajos, productos o servicios de la empresa',
                details: [
                    'Galería de imágenes optimizada',
                    'Categorización de proyectos',
                    'Lightbox para visualización',
                    'Descripción de cada trabajo',
                ],
            },
            {
                name: 'Blog integrado',
                description: 'Sistema de blog para publicar noticias, artículos y actualizaciones',
                details: [
                    'Editor de contenido fácil',
                    'Categorías y etiquetas',
                    'Comentarios opcionales',
                    'RSS feed automático',
                ],
            },
            {
                name: 'Panel de administración básico',
                description: 'Interfaz simple para gestionar contenido sin conocimientos técnicos',
                details: [
                    'Editor visual de contenido',
                    'Gestión de imágenes',
                    'Usuarios con permisos',
                    'Respaldos automáticos',
                ],
            },
        ],
    },
    {
        id: 'ecommerce',
        name: 'E-commerce',
        description:
            'Tienda online completa con carrito de compras, pasarela de pagos y gestión de inventario.',
        basePrice: 1000,
        estimatedDays: 30,
        icon: <ShoppingCart className="h-4 w-4" />,
        features: [
            {
                name: 'Carrito de compras',
                description:
                    'Sistema completo de compras con cálculo automático de totales e impuestos',
                details: [
                    'Agregar/quitar productos',
                    'Cálculo de impuestos',
                    'Códigos de descuento',
                    'Guardado de carrito',
                ],
            },
            {
                name: 'Pasarela de pagos',
                description: 'Integración segura con procesadores de pago populares',
                details: [
                    'Mercado Pago integrado',
                    'Stripe para tarjetas',
                    'PayPal disponible',
                    'Transacciones seguras SSL',
                ],
            },
            {
                name: 'Gestión de inventario',
                description: 'Control automático de stock y productos disponibles',
                details: [
                    'Control de stock en tiempo real',
                    'Alertas de inventario bajo',
                    'Variantes de productos',
                    'Importación masiva de productos',
                ],
            },
            {
                name: 'Panel de administración',
                description: 'Dashboard completo para gestionar ventas, productos y clientes',
                details: [
                    'Gestión de pedidos',
                    'Reportes de ventas',
                    'Administración de productos',
                    'Base de datos de clientes',
                ],
            },
        ],
    },
    {
        id: 'portfolio',
        name: 'Portafolio Personal',
        description:
            'Sitio web personal para mostrar trabajos, habilidades y experiencia profesional de forma elegante.',
        basePrice: 400,
        estimatedDays: 5,
        icon: <Users className="h-4 w-4" />,
        features: [
            {
                name: 'Galería de trabajos',
                description: 'Showcase profesional de proyectos y trabajos realizados',
                details: [
                    'Organización por categorías',
                    'Imágenes en alta calidad',
                    'Descripción detallada de proyectos',
                    'Enlaces a trabajos en vivo',
                ],
            },
            {
                name: 'CV descargable',
                description: 'Currículum profesional disponible para descarga en PDF',
                details: [
                    'Diseño profesional',
                    'Información actualizable',
                    'Descarga directa en PDF',
                    'Optimizado para impresión',
                ],
            },
            {
                name: 'Formulario de contacto',
                description: 'Sistema de contacto directo para oportunidades laborales',
                details: [
                    'Formulario personalizado',
                    'Notificaciones inmediatas',
                    'Filtro anti-spam',
                    'Respuesta automática',
                ],
            },
            {
                name: 'Blog personal',
                description: 'Espacio para compartir experiencias, conocimientos y actualizaciones',
                details: [
                    'Editor de contenido simple',
                    'Categorización de posts',
                    'Compartir en redes sociales',
                    'Comentarios de lectores',
                ],
            },
        ],
    },
    {
        id: 'webapp',
        name: 'Aplicación Web',
        description:
            'Aplicación web interactiva con funcionalidades avanzadas y base de datos personalizada.',
        basePrice: 2000,
        estimatedDays: 45,
        icon: <Zap className="h-4 w-4" />,
        features: [
            {
                name: 'Base de datos personalizada',
                description:
                    'Sistema de almacenamiento diseñado específicamente para tu aplicación',
                details: [
                    'Diseño de esquema personalizado',
                    'Optimización de consultas',
                    'Respaldos automáticos',
                    'Escalabilidad garantizada',
                ],
            },
            {
                name: 'Autenticación de usuarios',
                description: 'Sistema seguro de registro, login y gestión de usuarios',
                details: [
                    'Registro y login seguro',
                    'Recuperación de contraseñas',
                    'Verificación por email',
                    'Roles y permisos',
                ],
            },
            {
                name: 'Dashboard interactivo',
                description:
                    'Panel de control con métricas, gráficos y funcionalidades principales',
                details: [
                    'Gráficos en tiempo real',
                    'Métricas personalizadas',
                    'Interfaz intuitiva',
                    'Exportación de datos',
                ],
            },
            {
                name: 'API personalizada',
                description:
                    'Interfaz de programación para integraciones y funcionalidades avanzadas',
                details: [
                    'Endpoints personalizados',
                    'Documentación completa',
                    'Autenticación API',
                    'Límites de uso configurables',
                ],
            },
        ],
    },
    {
        id: 'saas',
        name: 'Plataforma SaaS',
        description:
            'Plataforma completa de Software como Servicio con suscripciones, múltiples usuarios y funcionalidades avanzadas.',
        basePrice: 3500,
        estimatedDays: 60,
        icon: <Briefcase className="h-4 w-4" />,
        features: [
            {
                name: 'Sistema de suscripciones',
                description:
                    'Gestión completa de planes, pagos recurrentes y facturación automática',
                details: [
                    'Múltiples planes de precios',
                    'Facturación automática',
                    'Gestión de upgrades/downgrades',
                    'Reportes financieros',
                ],
            },
            {
                name: 'Multi-tenant',
                description:
                    'Arquitectura que permite múltiples clientes con datos completamente separados',
                details: [
                    'Aislamiento total de datos',
                    'Personalización por cliente',
                    'Escalabilidad automática',
                    'Seguridad empresarial',
                ],
            },
            {
                name: 'Dashboard avanzado',
                description:
                    'Panel de control empresarial con analytics profundos y reportes detallados',
                details: [
                    'Analytics en tiempo real',
                    'Reportes personalizables',
                    'KPIs empresariales',
                    'Exportación avanzada',
                ],
            },
            {
                name: 'Integraciones API',
                description: 'Conexiones con servicios externos y herramientas empresariales',
                details: [
                    'APIs de terceros',
                    'Webhooks configurables',
                    'Sincronización automática',
                    'Monitoreo de integraciones',
                ],
            },
            {
                name: 'Soporte 24/7',
                description: 'Soporte técnico especializado disponible las 24 horas del día',
                details: [
                    'Chat en vivo',
                    'Soporte por email',
                    'Base de conocimientos',
                    'Tiempo de respuesta garantizado',
                ],
            },
        ],
    },
];

const additionalFeatures = [
    {
        id: 'seo',
        name: 'SEO Avanzado',
        price: 100,
        description:
            'Optimización completa para motores de búsqueda incluyendo meta tags, sitemap XML, robots.txt, optimización de velocidad, análisis de palabras clave y configuración de Google Analytics y Search Console.',
        benefits: [
            'Mejor posicionamiento en Google',
            'Aumento del tráfico orgánico',
            'Análisis de competencia',
            'Reportes mensuales de rendimiento',
        ],
    },
    {
        id: 'multilang',
        name: 'Sitio Multiidioma',
        price: 500,
        description:
            'Implementación completa de múltiples idiomas con gestión de contenido traducido, URLs localizadas y detección automática del idioma del usuario.',
        benefits: [
            'Alcance internacional',
            'Mejor experiencia de usuario',
            'URLs optimizadas por idioma',
            'Gestión fácil de traducciones',
        ],
    },
    {
        id: 'cms',
        name: 'CMS Personalizado',
        price: 800,
        description:
            'Sistema de gestión de contenido a medida que permite editar textos, imágenes y páginas sin conocimientos técnicos, con roles de usuario y flujo de aprobación.',
        benefits: [
            'Control total del contenido',
            'Interfaz intuitiva',
            'Múltiples usuarios',
            'Historial de cambios',
            'Respaldos automáticos',
        ],
    },
    {
        id: 'analytics',
        name: 'Analytics Avanzado',
        price: 100,
        description:
            'Implementación de herramientas de análisis avanzadas incluyendo Google Analytics 4, heatmaps, seguimiento de conversiones y dashboard personalizado con métricas clave.',
        benefits: [
            'Métricas detalladas de usuarios',
            'Análisis de comportamiento',
            'Seguimiento de objetivos',
            'Reportes automatizados',
        ],
    },
    {
        id: 'maintenance',
        name: 'Mantenimiento (6 meses)',
        price: 600,
        description:
            'Servicio completo de mantenimiento que incluye actualizaciones de seguridad, respaldos semanales, monitoreo de rendimiento, corrección de errores menores y soporte técnico prioritario.',
        benefits: [
            'Sitio siempre actualizado',
            'Respaldos automáticos',
            'Soporte prioritario',
            'Monitoreo 24/7',
            'Corrección de errores incluida',
        ],
    },
    {
        id: 'hosting',
        name: 'Hosting Premium (1 año)',
        price: 100,
        description:
            'Hosting de alta calidad con SSD, CDN global, certificado SSL, copias de seguridad diarias, 99.9% uptime garantizado y soporte técnico especializado.',
        benefits: [
            'Velocidad de carga superior',
            'Seguridad garantizada',
            'Soporte 24/7',
            '99.9% tiempo activo',
            'CDN global incluido',
        ],
    },
];

export default function BudgetForm() {
    const [selectedPageType, setSelectedPageType] = useState<string>('');
    const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
    const [timeline, setTimeline] = useState<string>('');
    const [clientInfo, setClientInfo] = useState({
        name: '',
        email: '',
        company: '',
        description: '',
    });
    const [isDownloading, setIsDownloading] = useState(false);
    const [downloadError, setDownloadError] = useState<string | null>(null);

    const selectedPage = pageTypes.find((page) => page.id === selectedPageType);

    const calculateEstimatedDays = () => {
        if (!selectedPage) return 0;

        const baseDays = selectedPage.estimatedDays;

        switch (timeline) {
            case 'urgent':
                return Math.max(Math.ceil(baseDays * 0.7), 1); // Reduce 30% pero mínimo 1 día
            case 'extended':
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

        return deliveryDate.toLocaleDateString('es-ES', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    const calculateTotal = () => {
        const basePrice = selectedPage?.basePrice || 0;
        const featuresPrice = selectedFeatures.reduce((total, featureId) => {
            const feature = additionalFeatures.find((f) => f.id === featureId);
            return total + (feature?.price || 0);
        }, 0);

        // Descuento por timeline urgente
        const urgencyMultiplier = timeline === 'urgent' ? 1.3 : timeline === 'extended' ? 0.9 : 1;

        return Math.round((basePrice + featuresPrice) * urgencyMultiplier);
    };

    const handleFeatureToggle = (featureId: string) => {
        setSelectedFeatures((prev) =>
            prev.includes(featureId) ? prev.filter((id) => id !== featureId) : [...prev, featureId]
        );
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!selectedPage) return;

        setIsDownloading(true);
        setDownloadError(null);

        try {
            const selectedFeaturesList = selectedFeatures
                .map((id) => additionalFeatures.find((f) => f.id === id))
                .filter(Boolean) as typeof additionalFeatures;

            const budgetData: BudgetRequest = {
                clientInfo,
                pageType: selectedPage,
                additionalFeatures: selectedFeaturesList,
                timeline: timeline as 'urgent' | 'normal' | 'extended',
                estimatedDays: calculateEstimatedDays(),
                deliveryDate: getEstimatedDeliveryDate(),
                totalPrice: calculateTotal(),
                generatedAt: new Date().toISOString(),
            };

            const response = await fetch('https://api.devanthos.com/api/budget/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(budgetData),
            });

            if (!response.ok) {
                throw new Error(`Error del servidor: ${response.status}`);
            }

            // Descargar el PDF directamente
            const blob = await response.blob();
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `presupuesto-${Date.now()}.pdf`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);

            // Mostrar mensaje de éxito
            alert('¡Presupuesto generado exitosamente! El archivo PDF se ha descargado.');
        } catch (error) {
            console.error('Error al generar el presupuesto:', error);
            setDownloadError(
                error instanceof Error
                    ? error.message
                    : 'Error al generar el PDF. Por favor, inténtalo de nuevo.'
            );
        } finally {
            setIsDownloading(false);
        }
    };

    return (
        <div className="min-h-screen">
            <div className="mx-auto max-w-4xl px-4 pt-32 pb-16">
                {/* ── Header ── */}
                <section className="mb-16 border-b border-[var(--border)] pb-10">
                    <div className="mb-3 flex items-center gap-3">
                        <span className="inline-block h-px w-8 bg-[var(--primary)]" />
                        <span className="font-mono text-[0.65rem] font-bold tracking-[0.2em] text-[var(--primary)] uppercase">
                            Presupuesto
                        </span>
                    </div>
                    <h1
                        className="mb-4 text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-tight text-[var(--foreground)]"
                        style={{
                            fontFamily: 'var(--font-cocogoose), sans-serif',
                            fontWeight: 500,
                        }}>
                        Calculadora de
                        <br />
                        <em className="text-[var(--primary)] not-italic">Presupuesto Web</em>
                    </h1>
                    <p className="max-w-xl text-[1.05rem] leading-relaxed text-[var(--muted-foreground)]">
                        Configura tu proyecto paso a paso y obtén un presupuesto detallado al
                        instante. Sin compromiso — transparencia total.
                    </p>
                </section>

                <form onSubmit={handleSubmit} className="space-y-14">
                    {/* ── 01 · Información del Cliente ── */}
                    <section>
                        <div className="mb-6 flex items-baseline gap-4">
                            <span className="font-mono text-[0.7rem] font-bold text-[var(--primary)] opacity-60">
                                01
                            </span>
                            <div>
                                <h2
                                    className="text-xl font-semibold tracking-tight text-[var(--foreground)]"
                                    style={{
                                        fontFamily: 'var(--font-cocogoose), sans-serif',
                                        fontWeight: 500,
                                    }}>
                                    Información del Cliente
                                </h2>
                                <p className="mt-1 text-sm text-[var(--muted-foreground)]">
                                    Cuéntanos sobre ti y tu proyecto para personalizar tu cotización
                                </p>
                            </div>
                        </div>

                        <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                                <div className="space-y-2">
                                    <Label
                                        htmlFor="name"
                                        className="text-xs font-semibold tracking-wide text-[var(--muted-foreground)] uppercase">
                                        Nombre completo{' '}
                                        <span className="text-[var(--primary)]">*</span>
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
                                        className="h-11 border-[var(--border)] bg-[var(--background)] transition-colors focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label
                                        htmlFor="email"
                                        className="text-xs font-semibold tracking-wide text-[var(--muted-foreground)] uppercase">
                                        Email de contacto{' '}
                                        <span className="text-[var(--primary)]">*</span>
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
                                        className="h-11 border-[var(--border)] bg-[var(--background)] transition-colors focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label
                                        htmlFor="company"
                                        className="text-xs font-semibold tracking-wide text-[var(--muted-foreground)] uppercase">
                                        Empresa{' '}
                                        <span className="text-[var(--muted-foreground)] opacity-50">
                                            (opcional)
                                        </span>
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
                                        className="h-11 border-[var(--border)] bg-[var(--background)] transition-colors focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]"
                                    />
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <Label
                                        htmlFor="description"
                                        className="text-xs font-semibold tracking-wide text-[var(--muted-foreground)] uppercase">
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
                                        placeholder="Cuéntanos sobre tu proyecto, objetivos, audiencia objetivo, funcionalidades específicas..."
                                        rows={4}
                                        className="resize-none border-[var(--border)] bg-[var(--background)] transition-colors focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ── 02 · Tipo de Página ── */}
                    <section>
                        <div className="mb-6 flex items-baseline gap-4">
                            <span className="font-mono text-[0.7rem] font-bold text-[var(--primary)] opacity-60">
                                02
                            </span>
                            <div>
                                <h2
                                    className="text-xl font-semibold tracking-tight text-[var(--foreground)]"
                                    style={{
                                        fontFamily: 'var(--font-cocogoose), sans-serif',
                                        fontWeight: 500,
                                    }}>
                                    Tipo de Página Web
                                </h2>
                                <p className="mt-1 text-sm text-[var(--muted-foreground)]">
                                    Selecciona el tipo de sitio que mejor se adapte a tus
                                    necesidades
                                </p>
                            </div>
                        </div>

                        <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
                            <Select value={selectedPageType} onValueChange={setSelectedPageType}>
                                <SelectTrigger className="border-[var(--border)] bg-[var(--background)] transition-colors hover:border-[var(--primary)] focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] data-[size=default]:h-14">
                                    <SelectValue placeholder="▸ Selecciona el tipo de página" />
                                </SelectTrigger>
                                <SelectContent className="border-[var(--border)] bg-[var(--card)]">
                                    {pageTypes.map((page) => (
                                        <SelectItem
                                            key={page.id}
                                            value={page.id}
                                            className="cursor-pointer py-3 transition-colors hover:bg-[var(--accent)]">
                                            <div className="flex items-center gap-3">
                                                <span className="flex h-7 w-7 items-center justify-center rounded-md border border-[var(--border)] bg-[var(--background)]">
                                                    {page.icon}
                                                </span>
                                                <div>
                                                    <div className="font-medium text-[var(--foreground)]">
                                                        {page.name}
                                                    </div>
                                                    <div className="font-mono text-xs text-[var(--muted-foreground)]">
                                                        Desde ${page.basePrice} USD
                                                    </div>
                                                </div>
                                            </div>
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>

                            {selectedPage && (
                                <div className="mt-6 space-y-6">
                                    {/* Selected page detail */}
                                    <div className="rounded-lg border border-[var(--border)] bg-[var(--background)] p-5 md:p-6">
                                        <div className="mb-4 flex items-start gap-4">
                                            <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-[var(--primary)] bg-[var(--primary)]/10 text-[var(--primary)]">
                                                {selectedPage.icon}
                                            </span>
                                            <div className="flex-1">
                                                <h3
                                                    className="text-lg font-semibold text-[var(--foreground)]"
                                                    style={{
                                                        fontFamily:
                                                            'var(--font-cocogoose), sans-serif',
                                                        fontWeight: 500,
                                                    }}>
                                                    {selectedPage.name}
                                                </h3>
                                                <p className="mt-1 text-sm leading-relaxed text-[var(--muted-foreground)]">
                                                    {selectedPage.description}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Estimated time */}
                                        <div className="mb-5 flex items-center gap-3 rounded-lg border border-dashed border-[var(--border)] px-4 py-3">
                                            <Calendar className="h-4 w-4 flex-shrink-0 text-[var(--primary)]" />
                                            <div>
                                                <span className="text-xs font-semibold tracking-wide text-[var(--muted-foreground)] uppercase">
                                                    Tiempo estimado
                                                </span>
                                                <p className="font-mono text-sm font-bold text-[var(--foreground)]">
                                                    {selectedPage.estimatedDays} días hábiles
                                                </p>
                                            </div>
                                        </div>

                                        {/* Features grid */}
                                        <TooltipProvider>
                                            <div className="mb-5 grid grid-cols-2 gap-2 md:grid-cols-3">
                                                {selectedPage.features.map((feature, index) => (
                                                    <div key={index} className="group">
                                                        <Tooltip>
                                                            <TooltipTrigger asChild>
                                                                <div className="flex w-full cursor-help items-center justify-between rounded-md border border-[var(--border)] bg-[var(--background)] px-3 py-2.5 text-xs font-medium text-[var(--foreground)] transition-colors hover:border-[var(--primary)] hover:bg-[var(--primary)]/5">
                                                                    <span>{feature.name}</span>
                                                                    <Info className="h-3 w-3 flex-shrink-0 text-[var(--muted-foreground)] opacity-40 transition-opacity group-hover:opacity-100" />
                                                                </div>
                                                            </TooltipTrigger>
                                                            <TooltipContent className="max-w-xs border-[var(--border)] bg-[var(--card)] p-3">
                                                                <p className="text-sm text-[var(--foreground)]">
                                                                    {feature.description}
                                                                </p>
                                                            </TooltipContent>
                                                        </Tooltip>
                                                        <Dialog>
                                                            <DialogTrigger asChild>
                                                                <Button
                                                                    variant="ghost"
                                                                    size="sm"
                                                                    className="mt-0.5 h-5 w-full text-[0.65rem] text-[var(--muted-foreground)] hover:text-[var(--primary)]">
                                                                    Ver detalles →
                                                                </Button>
                                                            </DialogTrigger>
                                                            <DialogContent className="max-w-md border-[var(--border)]">
                                                                <DialogHeader>
                                                                    <DialogTitle className="text-[var(--primary)]">
                                                                        {feature.name}
                                                                    </DialogTitle>
                                                                    <DialogDescription asChild>
                                                                        <div className="space-y-4 text-left">
                                                                            <p className="text-[var(--muted-foreground)]">
                                                                                {
                                                                                    feature.description
                                                                                }
                                                                            </p>
                                                                            <div>
                                                                                <h4 className="mb-3 text-xs font-bold tracking-wide text-[var(--foreground)] uppercase">
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
                                                                                                className="flex items-center gap-2 text-sm text-[var(--muted-foreground)]">
                                                                                                <span className="inline-block h-1 w-1 flex-shrink-0 rounded-full bg-[var(--primary)]" />
                                                                                                {
                                                                                                    detail
                                                                                                }
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
                                                ))}
                                            </div>
                                        </TooltipProvider>

                                        {/* Base price */}
                                        <div className="flex items-center justify-between border-t border-[var(--border)] pt-4">
                                            <span className="text-xs font-semibold tracking-wide text-[var(--muted-foreground)] uppercase">
                                                Precio base
                                            </span>
                                            <span className="font-mono text-2xl font-bold text-[var(--primary)]">
                                                ${selectedPage.basePrice}
                                                <span className="ml-1 text-xs font-semibold text-[var(--muted-foreground)]">
                                                    USD
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </section>

                    {/* ── 03 · Características Adicionales ── */}
                    {selectedPageType && (
                        <section>
                            <div className="mb-6 flex items-baseline gap-4">
                                <span className="font-mono text-[0.7rem] font-bold text-[var(--primary)] opacity-60">
                                    03
                                </span>
                                <div>
                                    <h2
                                        className="text-xl font-semibold tracking-tight text-[var(--foreground)]"
                                        style={{
                                            fontFamily: 'var(--font-cocogoose), sans-serif',
                                            fontWeight: 500,
                                        }}>
                                        Características Adicionales
                                    </h2>
                                    <p className="mt-1 text-sm text-[var(--muted-foreground)]">
                                        Potencia tu sitio web con funcionalidades que marquen la
                                        diferencia
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
                                <TooltipProvider>
                                    {additionalFeatures.map((feature) => {
                                        const isSelected = selectedFeatures.includes(feature.id);
                                        return (
                                            <div
                                                key={feature.id}
                                                className={`relative rounded-xl border bg-[var(--card)] p-5 transition-all duration-200 ${
                                                    isSelected
                                                        ? 'border-[var(--primary)] shadow-sm'
                                                        : 'border-[var(--border)] hover:border-[var(--primary)]/40'
                                                }`}
                                                style={
                                                    isSelected
                                                        ? {
                                                              boxShadow:
                                                                  '3px 0 0 0 var(--primary) inset',
                                                          }
                                                        : {}
                                                }>
                                                {isSelected && (
                                                    <span className="absolute top-3 right-3 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--primary)] text-[var(--primary-foreground)]">
                                                        <Check className="h-3 w-3" />
                                                    </span>
                                                )}

                                                <div className="flex items-start gap-3">
                                                    <Checkbox
                                                        id={feature.id}
                                                        checked={isSelected}
                                                        onCheckedChange={() =>
                                                            handleFeatureToggle(feature.id)
                                                        }
                                                        className="mt-0.5 h-4 w-4 border-[var(--border)] data-[state=checked]:border-[var(--primary)] data-[state=checked]:bg-[var(--primary)]"
                                                    />
                                                    <div className="flex-1 space-y-2">
                                                        <div className="flex items-center justify-between gap-2">
                                                            <Label
                                                                htmlFor={feature.id}
                                                                className="cursor-pointer text-sm font-semibold text-[var(--foreground)] transition-colors hover:text-[var(--primary)]">
                                                                {feature.name}
                                                            </Label>
                                                            <span className="font-mono text-sm font-bold whitespace-nowrap text-[var(--primary)]">
                                                                +${feature.price}
                                                            </span>
                                                        </div>

                                                        <p className="line-clamp-2 text-xs leading-relaxed text-[var(--muted-foreground)]">
                                                            {feature.description}
                                                        </p>

                                                        <Dialog>
                                                            <DialogTrigger asChild>
                                                                <Button
                                                                    variant="ghost"
                                                                    size="sm"
                                                                    className="h-6 px-0 text-[0.7rem] font-semibold text-[var(--muted-foreground)] hover:text-[var(--primary)]">
                                                                    Ver beneficios →
                                                                </Button>
                                                            </DialogTrigger>
                                                            <DialogContent className="max-w-lg border-[var(--border)]">
                                                                <DialogHeader>
                                                                    <DialogTitle className="flex items-center gap-3 text-[var(--foreground)]">
                                                                        {feature.name}
                                                                        <span className="font-mono text-sm font-bold text-[var(--primary)]">
                                                                            +${feature.price} USD
                                                                        </span>
                                                                    </DialogTitle>
                                                                    <DialogDescription asChild>
                                                                        <div className="space-y-4 text-left">
                                                                            <p className="text-sm leading-relaxed text-[var(--muted-foreground)]">
                                                                                {
                                                                                    feature.description
                                                                                }
                                                                            </p>
                                                                            <div className="rounded-lg border border-[var(--border)] bg-[var(--background)] p-4">
                                                                                <h4 className="mb-3 text-xs font-bold tracking-wide text-[var(--foreground)] uppercase">
                                                                                    Beneficios
                                                                                    incluidos
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
                                                                                                className="flex items-center gap-2 text-sm text-[var(--muted-foreground)]">
                                                                                                <span className="inline-block h-1 w-1 flex-shrink-0 rounded-full bg-[var(--primary)]" />
                                                                                                {
                                                                                                    benefit
                                                                                                }
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
                                        );
                                    })}
                                </TooltipProvider>
                            </div>
                        </section>
                    )}

                    {/* ── 04 · Tiempo de Entrega ── */}
                    {selectedPageType && (
                        <section>
                            <div className="mb-6 flex items-baseline gap-4">
                                <span className="font-mono text-[0.7rem] font-bold text-[var(--primary)] opacity-60">
                                    04
                                </span>
                                <div>
                                    <h2
                                        className="text-xl font-semibold tracking-tight text-[var(--foreground)]"
                                        style={{
                                            fontFamily: 'var(--font-cocogoose), sans-serif',
                                            fontWeight: 500,
                                        }}>
                                        Tiempo de Entrega
                                    </h2>
                                    <p className="mt-1 text-sm text-[var(--muted-foreground)]">
                                        Elige la velocidad de desarrollo que mejor se adapte a tu
                                        agenda
                                    </p>
                                </div>
                            </div>

                            <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
                                <Select value={timeline} onValueChange={setTimeline}>
                                    <SelectTrigger className="border-[var(--border)] bg-[var(--background)] transition-colors hover:border-[var(--primary)] focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] data-[size=default]:h-14">
                                        <SelectValue placeholder="▸ Selecciona un plazo de entrega" />
                                    </SelectTrigger>
                                    <SelectContent className="border-[var(--border)] bg-[var(--card)]">
                                        <SelectItem value="urgent" className="cursor-pointer py-3">
                                            <div className="flex items-center gap-3">
                                                <Rocket className="h-4 w-4 text-[var(--destructive)]" />
                                                <div>
                                                    <div className="font-medium text-[var(--foreground)]">
                                                        Urgente
                                                    </div>
                                                    <div className="font-mono text-xs text-[var(--muted-foreground)]">
                                                        {Math.max(
                                                            Math.ceil(
                                                                (selectedPage?.estimatedDays || 0) *
                                                                    0.7
                                                            ),
                                                            1
                                                        )}{' '}
                                                        días · +30% precio
                                                    </div>
                                                </div>
                                            </div>
                                        </SelectItem>
                                        <SelectItem value="normal" className="cursor-pointer py-3">
                                            <div className="flex items-center gap-3">
                                                <Star className="h-4 w-4 text-[var(--primary)]" />
                                                <div>
                                                    <div className="font-medium text-[var(--foreground)]">
                                                        Normal
                                                    </div>
                                                    <div className="font-mono text-xs text-[var(--muted-foreground)]">
                                                        {selectedPage?.estimatedDays || 0} días ·
                                                        Precio estándar
                                                    </div>
                                                </div>
                                            </div>
                                        </SelectItem>
                                        <SelectItem
                                            value="extended"
                                            className="cursor-pointer py-3">
                                            <div className="flex items-center gap-3">
                                                <Heart className="h-4 w-4 text-[var(--primary)]" />
                                                <div>
                                                    <div className="font-medium text-[var(--foreground)]">
                                                        Flexible
                                                    </div>
                                                    <div className="font-mono text-xs text-[var(--muted-foreground)]">
                                                        {Math.ceil(
                                                            (selectedPage?.estimatedDays || 0) * 1.2
                                                        )}{' '}
                                                        días · 10% descuento
                                                    </div>
                                                </div>
                                            </div>
                                        </SelectItem>
                                    </SelectContent>
                                </Select>

                                {timeline && (
                                    <div className="mt-5 flex items-center gap-4 rounded-lg border border-dashed border-[var(--border)] px-4 py-3">
                                        <Calendar className="h-4 w-4 flex-shrink-0 text-[var(--primary)]" />
                                        <div className="flex-1">
                                            <span className="text-xs font-semibold tracking-wide text-[var(--muted-foreground)] uppercase">
                                                Fecha estimada de entrega
                                            </span>
                                            <p className="text-sm font-bold text-[var(--foreground)]">
                                                {getEstimatedDeliveryDate()}
                                                <span className="ml-2 font-mono text-xs font-normal text-[var(--muted-foreground)]">
                                                    ({calculateEstimatedDays()} días hábiles)
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </section>
                    )}

                    {/* ── 05 · Resumen del Presupuesto ── */}
                    {selectedPageType && (
                        <section>
                            <div className="mb-6 flex items-baseline gap-4">
                                <span className="font-mono text-[0.7rem] font-bold text-[var(--primary)] opacity-60">
                                    05
                                </span>
                                <div>
                                    <h2
                                        className="text-xl font-semibold tracking-tight text-[var(--foreground)]"
                                        style={{
                                            fontFamily: 'var(--font-cocogoose), sans-serif',
                                            fontWeight: 500,
                                        }}>
                                        Resumen del Presupuesto
                                    </h2>
                                    <p className="mt-1 text-sm text-[var(--muted-foreground)]">
                                        Desglose completo de tu inversión
                                    </p>
                                </div>
                            </div>

                            <div className="rounded-xl border border-[var(--border)] bg-[var(--card)]">
                                {/* Line items */}
                                <div className="space-y-0 divide-y divide-[var(--border)] p-6 md:p-8">
                                    {/* Base price */}
                                    <div className="flex items-center justify-between pb-3">
                                        <span className="text-sm font-medium text-[var(--foreground)]">
                                            {selectedPage?.name}
                                        </span>
                                        <span className="font-mono text-sm font-bold text-[var(--foreground)]">
                                            ${selectedPage?.basePrice} USD
                                        </span>
                                    </div>

                                    {/* Additional features */}
                                    {selectedFeatures.map((featureId) => {
                                        const feature = additionalFeatures.find(
                                            (f) => f.id === featureId
                                        );
                                        return feature ? (
                                            <div
                                                key={featureId}
                                                className="flex items-center justify-between py-3">
                                                <span className="text-sm text-[var(--muted-foreground)]">
                                                    {feature.name}
                                                </span>
                                                <span className="font-mono text-sm text-[var(--muted-foreground)]">
                                                    +${feature.price} USD
                                                </span>
                                            </div>
                                        ) : null;
                                    })}

                                    {/* Urgency surcharge */}
                                    {timeline === 'urgent' && (
                                        <div className="flex items-center justify-between py-3">
                                            <span className="flex items-center gap-2 text-sm text-[var(--destructive)]">
                                                <Rocket className="h-3 w-3" /> Recargo urgencia
                                                (30%)
                                            </span>
                                            <span className="font-mono text-sm text-[var(--destructive)]">
                                                +$
                                                {Math.round(
                                                    ((selectedPage?.basePrice || 0) +
                                                        selectedFeatures.reduce((total, fId) => {
                                                            const f = additionalFeatures.find(
                                                                (feat) => feat.id === fId
                                                            );
                                                            return total + (f?.price || 0);
                                                        }, 0)) *
                                                        0.3
                                                )}{' '}
                                                USD
                                            </span>
                                        </div>
                                    )}

                                    {/* Flexibility discount */}
                                    {timeline === 'extended' && (
                                        <div className="flex items-center justify-between py-3">
                                            <span className="flex items-center gap-2 text-sm text-[var(--primary)]">
                                                <Heart className="h-3 w-3" /> Descuento flexibilidad
                                                (10%)
                                            </span>
                                            <span className="font-mono text-sm text-[var(--primary)]">
                                                -$
                                                {Math.round(
                                                    ((selectedPage?.basePrice || 0) +
                                                        selectedFeatures.reduce((total, fId) => {
                                                            const f = additionalFeatures.find(
                                                                (feat) => feat.id === fId
                                                            );
                                                            return total + (f?.price || 0);
                                                        }, 0)) *
                                                        0.1
                                                )}{' '}
                                                USD
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {/* Total */}
                                <div className="border-t-2 border-[var(--primary)] bg-[var(--background)] px-6 py-5 md:px-8">
                                    <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
                                        <span className="text-xs font-bold tracking-[0.15em] text-[var(--muted-foreground)] uppercase">
                                            Total de inversión
                                        </span>
                                        <div className="text-right">
                                            <span
                                                className="font-mono text-3xl font-bold text-[var(--primary)] md:text-4xl"
                                                style={{ letterSpacing: '-0.04em' }}>
                                                ${calculateTotal()}
                                            </span>
                                            <span className="ml-1 text-sm font-semibold text-[var(--muted-foreground)]">
                                                USD
                                            </span>
                                        </div>
                                    </div>
                                    {timeline && (
                                        <div className="mt-3 flex items-center gap-2 text-xs text-[var(--muted-foreground)]">
                                            <Calendar className="h-3 w-3 flex-shrink-0" />
                                            Entrega estimada:{' '}
                                            <strong className="text-[var(--foreground)]">
                                                {getEstimatedDeliveryDate()}
                                            </strong>
                                        </div>
                                    )}
                                </div>

                                {/* Submit button */}
                                <div className="border-t border-[var(--border)] p-6 md:p-8">
                                    <Button
                                        type="submit"
                                        disabled={isDownloading}
                                        className="h-14 w-full bg-[var(--primary)] text-base font-bold text-[var(--primary-foreground)] transition-all duration-200 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                                        style={{
                                            fontFamily: 'var(--font-cocogoose), sans-serif',
                                            fontWeight: 500,
                                            letterSpacing: '-0.01em',
                                        }}>
                                        {isDownloading ? (
                                            <span className="flex items-center gap-3">
                                                <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                                                Generando PDF...
                                            </span>
                                        ) : (
                                            <span className="flex items-center gap-2">
                                                Solicitar Presupuesto
                                                <Printer className="h-4 w-4" />
                                            </span>
                                        )}
                                    </Button>

                                    {downloadError && (
                                        <div className="mt-4 flex items-start gap-3 rounded-lg border border-[var(--destructive)]/30 bg-[var(--destructive)]/5 p-4">
                                            <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--destructive)]" />
                                            <div>
                                                <p className="text-sm font-semibold text-[var(--foreground)]">
                                                    Error al generar el PDF
                                                </p>
                                                <p className="text-xs text-[var(--muted-foreground)]">
                                                    {downloadError}
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Terms */}
                                <div className="border-t border-[var(--border)] px-6 py-6 md:px-8">
                                    <h4 className="mb-4 flex items-center gap-2 text-xs font-bold tracking-[0.15em] text-[var(--foreground)] uppercase">
                                        <Gavel className="h-3 w-3 text-[var(--muted-foreground)]" />
                                        Términos y Condiciones
                                    </h4>
                                    <div className="grid grid-cols-1 gap-3 text-[0.8rem] leading-relaxed text-[var(--muted-foreground)] md:grid-cols-2">
                                        <div className="space-y-2.5">
                                            <p className="flex items-start gap-2">
                                                <AlarmCheck className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-[var(--primary)] opacity-60" />
                                                <span>
                                                    <strong className="text-[var(--foreground)]">
                                                        Validez:
                                                    </strong>{' '}
                                                    10 días calendario desde la emisión.
                                                </span>
                                            </p>
                                            <p className="flex items-start gap-2">
                                                <Receipt className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-[var(--primary)] opacity-60" />
                                                <span>
                                                    <strong className="text-[var(--foreground)]">
                                                        Exclusividad:
                                                    </strong>{' '}
                                                    Precios válidos para el proyecto especificado.
                                                </span>
                                            </p>
                                            <p className="flex items-start gap-2">
                                                <CreditCard className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-[var(--primary)] opacity-60" />
                                                <span>
                                                    <strong className="text-[var(--foreground)]">
                                                        Pago:
                                                    </strong>{' '}
                                                    50% anticipo · 50% al finalizar.
                                                </span>
                                            </p>
                                            <p className="flex items-start gap-2">
                                                <Pencil className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-[var(--primary)] opacity-60" />
                                                <span>
                                                    <strong className="text-[var(--foreground)]">
                                                        Revisiones:
                                                    </strong>{' '}
                                                    5 incluidas. Extra: $5 USD c/u.
                                                </span>
                                            </p>
                                        </div>
                                        <div className="space-y-2.5">
                                            <p className="flex items-start gap-2">
                                                <Folder className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-[var(--primary)] opacity-60" />
                                                <span>
                                                    <strong className="text-[var(--foreground)]">
                                                        Contenido:
                                                    </strong>{' '}
                                                    El cliente provee textos, imágenes y logos.
                                                </span>
                                            </p>
                                            <p className="flex items-start gap-2">
                                                <Globe className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-[var(--primary)] opacity-60" />
                                                <span>
                                                    <strong className="text-[var(--foreground)]">
                                                        Hosting y dominio:
                                                    </strong>{' '}
                                                    No incluidos. Se cotizan aparte.
                                                </span>
                                            </p>
                                            <p className="flex items-start gap-2">
                                                <Shield className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-[var(--primary)] opacity-60" />
                                                <span>
                                                    <strong className="text-[var(--foreground)]">
                                                        Garantía:
                                                    </strong>{' '}
                                                    30 días de soporte técnico gratuito.
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                    <p className="mt-4 border-t border-[var(--border)] pt-3 text-center text-[0.7rem] text-[var(--muted-foreground)] opacity-70">
                                        Al solicitar la cotización, acepta estos términos. Para
                                        dudas, contáctenos directamente.
                                    </p>
                                </div>
                            </div>
                        </section>
                    )}
                </form>
            </div>
        </div>
    );
}
