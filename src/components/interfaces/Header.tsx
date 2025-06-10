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

// import {
//     Logo,
//     LogoDesktop,
//     LogoMobile,
//     LogoText,
// } from "@/components/shadcnblocks/logo";
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

const LOGO = {
    url: "https://www.shadcnblocks.com",
    src: "https://www.shadcnblocks.com/images/block/block-1.svg",
    alt: "logo",
    title: "Shadcnblocks.com",
};

const PRIMARY_BUTTON = {
    label: "Sign up",
    url: "#",
};

const NAVIGATION1: Array<MenuItem> = [
    {
        title: "Products",
        className: "grid-cols-[400px,300px] xl:grid-cols-[600px_500px]",
        groups: [
            {
                title: "Products",
                links: [
                    {
                        label: "UI Components",
                        description: "Ready-to-use React components",
                        icon: FileText,
                        url: "#",
                    },
                    {
                        label: "Design System",
                        description: "Consistent design patterns",
                        icon: Trees,
                        url: "#",
                    },
                    {
                        label: "Templates",
                        description: "Pre-built page layouts",
                        icon: Archive,
                        url: "#",
                    },
                    {
                        label: "Blocks",
                        description: "Reusable UI sections",
                        icon: Handshake,
                        url: "#",
                    },
                    {
                        label: "Themes",
                        description: "Customizable color schemes",
                        icon: Sunset,
                        url: "#",
                    },
                    {
                        label: "Documentation",
                        description: "Guides and API docs",
                        icon: Book,
                        url: "#",
                    },
                    {
                        label: "Examples",
                        description: "Real-world implementations",
                        icon: PlayCircle,
                        url: "#",
                    },
                    {
                        label: "Updates",
                        description: "Latest features & changes",
                        icon: Zap,
                        url: "#",
                    },
                ],
            },
            {
                title: "Solutions",
                sections: [
                    {
                        title: "Industries",
                        links: [
                            { label: "E-commerce", url: "#" },
                            { label: "Healthcare", url: "#" },
                            { label: "Education", url: "#" },
                            { label: "Finance", url: "#" },
                            { label: "Technology", url: "#" },
                        ],
                    },
                    {
                        title: "Use Cases",
                        links: [
                            { label: "Customer Portal", url: "#" },
                            { label: "Admin Dashboard", url: "#" },
                            { label: "Mobile App", url: "#" },
                            { label: "Landing Page", url: "#" },
                            { label: "Web Application", url: "#" },
                        ],
                    },
                ],
            },
        ],
        featuredLinks: [
            {
                label: "Book a Demo",
                description: "Schedule a sales call with our team.",
                icon: Headset,
                url: "#",
            },
        ],
    },
    {
        title: "Company",
        className: "grid-cols-[18.75rem_25rem]",
        groups: [
            {
                title: "Support",
                links: [
                    {
                        label: "Help Center",
                        url: "#",
                        icon: LifeBuoy,
                        description: "Find answers fast",
                    },
                    {
                        label: "Contact Us",
                        url: "#",
                        icon: Mail,
                        description: "Get in touch",
                    },
                ],
            },
            {
                sections: [
                    {
                        title: "Company",
                        links: [
                            { label: "About Us", url: "#" },
                            { label: "Careers", url: "#" },
                            { label: "Blog", url: "#" },
                            { label: "Press", url: "#" },
                            { label: "Partners", url: "#" },
                            { label: "Contact", url: "#" },
                        ],
                    },
                    {
                        title: "Resources",
                        links: [
                            { label: "Documentation", url: "#" },
                            { label: "Tutorials", url: "#" },
                            { label: "Showcase", url: "#" },
                            { label: "Community", url: "#" },
                            { label: "GitHub", url: "#" },
                            { label: "Discord", url: "#" },
                        ],
                    },
                ],
            },
        ],
    },
    {
        title: "Pricing",
        url: "#",
    },
    {
        title: "FAQ",
        url: "#",
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
            <div className="pointer-events-auto fixed top-0 z-999 w-full bg-background xl:bg-transparent">
                <nav className="container p-0 mx-auto">
                    <div className="flex w-full items-center justify-between rounded-[0.75rem] px-6 py-4 xl:mt-2.5 xl:h-[5.25rem] xl:bg-white/60 xl:py-6 xl:backdrop-blur-[5px]">
                        {/* <Logo url={LOGO.url}>
                            <LogoMobile src={LOGO.src} alt={LOGO.alt} />
                            <LogoDesktop src={LOGO.src} alt={LOGO.alt} />
                            <LogoText className="hidden text-lg font-semibold text-foreground sm:inline-block">
                                {LOGO.title}
                            </LogoText>
                        </Logo> */}
                        <span className="text-primary font-bold text-2xl">
                            Devs
                            <samp className="px-1.5 py-0.5 bg-primary text-accent font-semibold rounded">
                                hub
                            </samp>
                        </span>
                        <NavigationMenuWithoutViewport className="flex">
                            <NavigationMenuList className="relative hidden xl:flex">
                                {NAVIGATION1.map((item, index) =>
                                    renderDesktopMenuItem(item, index)
                                )}
                            </NavigationMenuList>
                        </NavigationMenuWithoutViewport>
                        <div className="ml-auto flex items-center gap-4 xl:ml-0">
                            <Button asChild className="hidden xl:block">
                                <a href={PRIMARY_BUTTON.url}>
                                    {PRIMARY_BUTTON.label}
                                </a>
                            </Button>
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
                <div className="h-full overflow-y-auto py-8.5">
                    <div className="absolute -m-px h-px w-px overflow-hidden border-0 mask-clip-border p-0 text-nowrap whitespace-nowrap">
                        <SheetTitle className="text-primary">
                            Mobile Navigation
                        </SheetTitle>
                    </div>
                    <div className="container">
                        <div className="relative min-h-dvh overflow-hidden">
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
                                        Back
                                    </Button>
                                    <div>
                                        {currentNav.groups?.[0] && (
                                            <IconLinks
                                                links={currentNav.groups[0]}
                                            />
                                        )}
                                    </div>
                                    <div className="grid grid-cols-1 lg:grid-cols-2">
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
