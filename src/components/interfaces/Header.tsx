'use client';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import {
    Bot,
    ChevronLeft,
    ChevronRight,
    FileText,
    Headset,
    LifeBuoy,
    Mail,
    Zap,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Fragment, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTitle } from '@/components/ui/sheet';
import { ModeToggle } from '../ModeToggle';
import { DevanthosIcon } from '../icons';

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
        links?: Link[];
        content?: React.ReactNode;
    },
    {
        sections: Subgroup[];
        title?: string;
    },
];

interface MenuItem {
    title: string;
    url?: string;
    groups?: Group;
    className?: string;
    featuredLinks?: Link[];
}

const PRIMARY_BUTTON = {
    label: 'Realice una consultoría',
    url: 'https://wa.me/5492646629632?text=Hola%20me%20interesa%20la%20consultoria%20gratuita',
};

const NAVIGATION1: Array<MenuItem> = [
    {
        title: 'Servicios',
        className: 'grid-cols-[400px,300px] lg:grid-cols-[400px_500px] 2xl:grid-cols-[500px_500px]',
        groups: [
            {
                title: '',
                content: (
                    <div className="space-y-8">
                        {/* Bienvenida */}
                        <div className="">
                            <h2 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
                                ¡Bienvenido a Devanthos! 👋
                            </h2>
                            <p className="text-base leading-relaxed text-gray-600 dark:text-gray-300">
                                Transformamos ideas en realidad digital. Somos tu socio estratégico
                                para impulsar tu negocio con tecnología de vanguardia.
                            </p>
                        </div>
                        {/* call to action */}
                        <div className="">
                            <Button
                                asChild
                                size="lg"
                                className="from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transform bg-gradient-to-r shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                                <a
                                    href={PRIMARY_BUTTON.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 font-semibold no-underline"
                                    aria-label="Iniciar consultoría gratuita por WhatsApp">
                                    <Headset className="h-4 w-4" />
                                    {PRIMARY_BUTTON.label}
                                    <span className="sr-only"> - Contactar por WhatsApp</span>
                                </a>
                            </Button>
                        </div>
                    </div>
                ),
            },
            {
                sections: [
                    {
                        title: 'Servicios',
                        links: [
                            {
                                label: 'Consultoría',
                                url: '/servicios/consultoria-empresarial',
                                icon: Headset,
                                description: 'Asesoramiento personalizado para tu negocio.',
                            },
                            {
                                label: 'Desarrollo Web y Móvil',
                                url: '/servicios/desarrollo-web-y-mobile',
                                icon: FileText,
                                description: 'Sitios web y aplicaciones móviles modernas.',
                            },
                            {
                                label: 'Marketing Digital y SEO',
                                url: '/servicios/marketing-digital-seo',
                                icon: Zap,
                                description: 'Estrategias para hacer crecer tu negocio online.',
                            },
                            {
                                label: 'Chatbots para Empresas',
                                url: '/servicios/chatbots-inteligentes',
                                icon: Bot,
                                description: 'Automatiza la atención al cliente con chatbots.',
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        title: 'Productos',
        className: 'grid-cols-[400px,300px] xl:grid-cols-[500px_500px]',
        groups: [
            {
                title: '¿Qué ofrecemos?',
                content: (
                    <div className="space-y-8">
                        {/* Descripción de Productos */}
                        <p className="text-base leading-relaxed text-gray-600 dark:text-gray-300">
                            Ofrecemos una variedad de productos digitales diseñados para mejorar la
                            eficiencia y la productividad de tu negocio. Desde soluciones
                            personalizadas hasta herramientas listas para usar, tenemos todo lo que
                            necesitas para llevar tu proyecto al siguiente nivel.
                        </p>
                        {/* Call to Action con forma de card */}
                        <div className="bg-background rounded-lg border border-gray-200 p-4">
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                                ¿Listo para empezar?
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                Contáctanos para obtener más información sobre nuestros productos.
                            </p>
                            <Button asChild>
                                <a
                                    href="/contacto"
                                    className="flex items-center gap-2 font-semibold no-underline"
                                    aria-label="Ir a página de contacto - Enviar mensaje">
                                    <Mail className="h-4 w-4" />
                                    Contáctanos
                                    <span className="sr-only"> - Formulario de contacto</span>
                                </a>
                            </Button>
                        </div>
                    </div>
                ),
            },
            {
                title: 'Productos',
                sections: [
                    {
                        title: 'Industrias',
                        links: [
                            {
                                label: 'Negocios',
                                url: '/productos/ecommerce',
                            },
                            { label: 'Salud', url: '/productos/salud' },
                            {
                                label: 'Educación',
                                url: '/productos/educacion',
                            },
                            { label: 'Finanzas', url: '/productos/finanzas' },
                            {
                                label: 'Tecnología',
                                url: '/productos/tecnologia',
                            },
                        ],
                    },
                    {
                        title: 'Uso personal',
                        links: [
                            {
                                label: 'Portal personalizado',
                                url: '/productos/portal-personal',
                            },
                            {
                                label: 'Dashboard de administrador',
                                url: '/productos/dashboard',
                            },
                            {
                                label: 'App mobile',
                                url: '/productos/app-movil',
                            },
                            {
                                label: 'Landing Page',
                                url: '/productos/landing-page',
                            },
                            {
                                label: 'Aplicación web',
                                url: '/productos/web-app',
                            },
                        ],
                    },
                ],
            },
        ],
        featuredLinks: [
            {
                label: 'Realice una consultoría',
                description: 'Programa una reunión con nosotros',
                icon: Headset,
                url: '/contacto',
            },
        ],
    },
    {
        title: 'Empresa',
        className: 'grid-cols-[18.75rem_25rem]',
        groups: [
            {
                title: 'Soporte',
                links: [
                    {
                        label: 'Centro de Ayuda',
                        url: '/faq',
                        icon: LifeBuoy,
                        description: 'Encuentra respuestas',
                    },
                    {
                        label: 'Contacta con nosotros',
                        url: '/contacto',
                        icon: Mail,
                        description: 'Envíanos un mensaje',
                    },
                ],
            },
            {
                sections: [
                    {
                        title: 'Empresa',
                        links: [
                            { label: 'Sobre nosotros', url: '/empresa' },
                            { label: 'Objetivos', url: '/empresa/objetivos' },
                            { label: 'Blogs', url: '/blog' },
                            { label: 'Socios', url: '/empresa/socios' },
                            { label: 'Contáctanos', url: '/contacto' },
                        ],
                    },
                    {
                        title: 'Recursos',
                        links: [
                            {
                                label: 'Casos de Éxito',
                                url: '/recursos/casos-de-exito',
                            },
                            {
                                label: 'Tutoriales',
                                url: '/recursos/tutoriales',
                            },
                            { label: 'Comunidad', url: '/comunidad' },
                            {
                                label: 'GitHub',
                                url: 'https://github.com/Devanthos-Agency',
                            },
                            {
                                label: 'Discord',
                                url: 'https://discord.gg/devanthos',
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        title: 'Precios',
        url: '/precios',
    },
    {
        title: 'FAQ',
        url: '/faq',
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

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : 'auto';
    }, [open]);

    const handleMobileMenu = () => {
        const nextOpen = !open;
        setOpen(nextOpen);
    };

    return (
        <section>
            <div className="pointer-events-auto fixed top-0 z-999 w-full xl:bg-transparent">
                <nav className="container mx-auto p-0">
                    <div className="flex w-full items-center justify-between rounded-b-[0.75rem] px-6 py-4 sm:rounded-[0.75rem] xl:mt-2.5 xl:h-[5.25rem] xl:py-6">
                        <a
                            href="/"
                            className="inline-flex w-fit items-baseline"
                            aria-label="Devanthos - Ir a página de inicio">
                            <DevanthosIcon className="fill-primary relative -bottom-[3px] size-7 align-baseline" />
                            <span className="font-cocogoose ml-[2px] text-3xl font-normal">
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
                                    aria-label="Iniciar consultoría gratuita - Contactar por WhatsApp">
                                    {PRIMARY_BUTTON.label}
                                    <span className="sr-only"> por WhatsApp</span>
                                </a>
                            </Button>
                            <ModeToggle />
                            <div className="xl:hidden">
                                <Button
                                    className="mr-[-0.6875rem] size-11"
                                    variant="ghost"
                                    onClick={handleMobileMenu}
                                    aria-label={
                                        open
                                            ? 'Cerrar menú de navegación'
                                            : 'Abrir menú de navegación'
                                    }
                                    aria-expanded={open}>
                                    <div className="relative size-5.5">
                                        <span
                                            className={cn(
                                                'bg-foreground absolute top-0.5 left-0 h-0.5 w-5.5 transition-all duration-300',
                                                open ? 'top-2.5 rotate-45' : 'top-0.5'
                                            )}
                                        />
                                        <span
                                            className={cn(
                                                'bg-foreground absolute top-2.5 left-0 h-0.5 w-5.5 transition-all duration-300',
                                                open ? 'opacity-0' : 'opacity-100'
                                            )}
                                        />
                                        <span
                                            className={cn(
                                                'bg-foreground absolute top-4.5 left-0 h-0.5 w-5.5 transition-all duration-300',
                                                open ? 'top-2.5 -rotate-45' : 'top-4.5'
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
    const triggerClasses = 'text-base font-semibold py-1 px-2 rounded-[.375rem] h-8 bg-transparent';

    if (item.groups) {
        const [group1, group2] = item.groups;

        return (
            <NavigationMenuItem key={item.title} value={`${index}`}>
                <NavigationMenuTrigger className={triggerClasses}>
                    {item.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent
                    className={cn(
                        'top-12 left-1/2 z-10 hidden w-full -translate-x-1/2 overflow-hidden rounded-lg border p-0 xl:grid',
                        item.className
                    )}>
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
        <NavigationMenuItem key={item.title} value={`${index}`} className={item.className}>
            <NavigationMenuLink
                href={item.url}
                className={`${navigationMenuTriggerStyle()} ${triggerClasses}`}>
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
                className="bg-background inset-0 z-998 h-dvh !animate-none pt-[4.75rem] [&>button]:hidden">
                <div className="h-full overflow-y-auto px-2.5 py-8.5">
                    <div className="absolute -m-px h-px w-px overflow-hidden border-0 mask-clip-border p-0 text-nowrap whitespace-nowrap">
                        <SheetTitle className="text-primary">Navegación mobile</SheetTitle>
                    </div>
                    <div className="container">
                        <div
                            className={cn(
                                'relative min-h-[calc(100dvh-145px)]',
                                openSubmenu.open ? '' : 'overflow-hidden'
                            )}>
                            <div
                                className={cn(
                                    'absolute inset-0 transition-all duration-300 ease-in-out',
                                    openSubmenu.open
                                        ? 'pointer-events-none translate-x-[-100%] opacity-0'
                                        : 'translate-x-0 opacity-100'
                                )}>
                                <div className="flex flex-col gap-4 sm:gap-6">
                                    {NAVIGATION1.map((item, index) => (
                                        <Button
                                            onClick={() => handleSelected(index)}
                                            variant="ghost"
                                            asChild={!!item.url}
                                            key={`mobile-link-${index}`}
                                            className="w-full justify-between !px-0 !py-0 text-lg font-medium hover:bg-transparent sm:text-xl">
                                            {item.url ? (
                                                <a href={item.url}>{item.title}</a>
                                            ) : (
                                                <Fragment>
                                                    <div>{item.title}</div>
                                                    <ChevronRight />
                                                </Fragment>
                                            )}
                                        </Button>
                                    ))}
                                    <Button asChild size="lg">
                                        <a
                                            href={PRIMARY_BUTTON.url}
                                            aria-label="Iniciar consultoría gratuita - Contactar por WhatsApp">
                                            {PRIMARY_BUTTON.label}
                                            <span className="sr-only"> por WhatsApp</span>
                                        </a>
                                    </Button>
                                </div>
                            </div>

                            <div
                                className={cn(
                                    'absolute inset-0 transition-all duration-300 ease-in-out',
                                    openSubmenu.open
                                        ? 'translate-x-0 opacity-100'
                                        : 'pointer-events-none translate-x-[100%] opacity-0'
                                )}>
                                <div className="flex w-full flex-col gap-8">
                                    <Button
                                        onClick={() => handleSelected()}
                                        className="h-fit w-full justify-start !px-0 text-lg leading-normal hover:bg-transparent"
                                        variant="ghost">
                                        <ChevronLeft />
                                        Volver
                                    </Button>
                                    <div>
                                        {currentNav.groups?.[0] && (
                                            <IconLinks links={currentNav.groups[0]} />
                                        )}
                                    </div>
                                    <div className="grid grid-cols-1 pb-8.5 lg:grid-cols-2">
                                        <div className="w-full max-w-[37.5rem]">
                                            {currentNav.groups?.[1] && (
                                                <Links links={currentNav.groups[1]} />
                                            )}
                                        </div>
                                        {currentNav?.featuredLinks && (
                                            <FeaturedLinks links={currentNav.featuredLinks} />
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
            href={item.url}>
            {item.icon && (
                <div className="flex h-14 w-10 rounded-md bg-black">
                    <item.icon className="m-auto size-4 stroke-white" />
                </div>
            )}
            <div>
                <div className="text-[0.9375rem] leading-normal font-medium">{item.label}</div>
                {item.description && (
                    <p className="text-muted-foreground text-sm leading-normal font-medium">
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
                    <item.icon className="stroke-foreground m-auto w-full" />
                </div>
            )}
            <div>
                <div>{item.label}</div>
                {item.description && (
                    <p className="text-muted-foreground mt-1 text-xs leading-normal font-medium">
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
            {links.title && <div className="mb-8 font-medium">{links.title}</div>}
            <div className="flex flex-col justify-between gap-8 pr-12 sm:flex-row">
                {links.sections.map((section, index) => (
                    <div key={`subgroups-section-${index}`}>
                        <div className="text-muted-foreground mb-2 text-sm font-medium sm:mb-4 sm:ml-2">
                            {section.title}
                        </div>
                        <ul className="">
                            {section.links.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.url}
                                        className="hover:bg-muted flex w-full items-start gap-3 rounded-lg py-2 font-medium sm:p-2">
                                        {link.icon && (
                                            <div className="bg-primary/10 mt-0.5 flex h-8 w-8 items-center justify-center rounded-md">
                                                <link.icon className="text-primary h-4 w-4" />
                                            </div>
                                        )}
                                        <div className="flex-1">
                                            <div className="text-sm font-medium">{link.label}</div>
                                            {link.description && (
                                                <p className="text-muted-foreground mt-1 text-xs">
                                                    {link.description}
                                                </p>
                                            )}
                                        </div>
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
        links?: Link[];
        content?: React.ReactNode;
    };
}) => {
    return (
        <Fragment>
            {links.title && <div className="mb-4 font-semibold">{links.title}</div>}
            {links.content ? (
                <div className="prose prose-sm max-w-none">{links.content}</div>
            ) : (
                links.links && (
                    <ul className="grid grid-cols-[repeat(auto-fit,_minmax(12.5rem,_1fr))] gap-4">
                        {links.links.map((link, index) => (
                            <li key={index} className="h-full">
                                <IconMenuLink item={link} />
                            </li>
                        ))}
                    </ul>
                )
            )}
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
                'group/navigation-menu relative flex max-w-max flex-1 items-center justify-center',
                className
            )}
            {...props}>
            {children}
            {/* The Viewport needs to be removed to center align submenus under their parents. You could remove this from the shadcn/ui component */}
            {/* {viewport && <NavigationMenuViewport />} */}
        </NavigationMenuPrimitive.Root>
    );
};
