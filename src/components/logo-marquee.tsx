import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";

const logos = [
    {
        id: "astro-logo",
        description: "Astro - Framework web moderno",
        image: "/images/hero/logos/astro-wordmark.svg",
        className: "h-8 mt-2 w-auto dark:invert",
        width: 120,
        height: 32,
    },
    {
        id: "aws-logo",
        description: "Amazon Web Services - Servicios cloud",
        image: "/images/hero/logos/aws_light.svg",
        className: "h-9 w-auto dark:invert",
        width: 80,
        height: 36,
    },
    {
        id: "gemini-logo",
        description: "Google Gemini - Inteligencia artificial",
        image: "/images/hero/logos/gemini_wordmark.svg",
        className: "h-9 mb-3 w-auto dark:invert",
        width: 140,
        height: 36,
    },
    {
        id: "figma-logo",
        description: "Figma - Herramienta de diseño colaborativo",
        image: "/images/hero/logos/figma-wordmark.svg",
        className: "h-9 mt-1 w-auto dark:invert",
        width: 100,
        height: 36,
    },
    {
        id: "github-logo",
        description: "GitHub - Plataforma de desarrollo colaborativo",
        image: "/images/hero/logos/github-wordmark.svg",
        className: "h-7 w-auto dark:invert",
        width: 120,
        height: 28,
    },
    {
        id: "google-logo",
        description: "Google - Servicios y herramientas web",
        image: "/images/hero/logos/google-wordmark.svg",
        className: "h-10 mt-2 w-auto dark:invert",
        width: 100,
        height: 28,
    },
    {
        id: "meta-logo",
        description: "Meta - Plataforma de redes sociales",
        image: "/images/hero/logos/meta.svg",
        className: "h-7 w-auto dark:invert",
        width: 80,
        height: 28,
    },
    {
        id: "motion-logo",
        description: "Framer Motion - Librería de animaciones",
        image: "/images/hero/logos/motion.svg",
        className: "h-7 w-auto dark:invert",
        width: 28,
        height: 28,
    },
    {
        id: "n8n-logo",
        description: "n8n - Automatización de flujos de trabajo",
        image: "/images/hero/logos/n8n-wordmark-light.svg",
        className: "h-7 w-auto dark:invert",
        width: 60,
        height: 28,
    },
    {
        id: "nextjs-logo",
        description: "Next.js - Framework de React para producción",
        image: "/images/hero/logos/nextjs_logo_light.svg",
        className: "h-7 w-auto dark:invert",
        width: 112,
        height: 28,
    },
    {
        id: "resend-logo",
        description: "Resend - API moderna para envío de emails",
        image: "/images/hero/logos/resend-wordmark-black.svg",
        className: "h-7 w-auto dark:invert",
        width: 100,
        height: 28,
    },
    {
        id: "shadcn-logo",
        description: "shadcn/ui - Componentes UI reutilizables",
        image: "/images/hero/logos/shadcn-ui-wordmark.svg",
        className: "h-7 w-auto dark:invert",
        width: 120,
        height: 28,
    },
    {
        id: "stripe-logo",
        description: "Stripe - Plataforma de pagos online",
        image: "/images/hero/logos/stripe.svg",
        className: "h-7 w-auto dark:invert",
        width: 80,
        height: 28,
    },
    {
        id: "supabase-logo",
        description: "Supabase - Backend como servicio",
        image: "/images/hero/logos/supabase-wordmark.svg",
        className: "h-7 w-auto dark:invert",
        width: 140,
        height: 28,
    },
    {
        id: "tailwind-logo",
        description: "Tailwind CSS - Framework de utilidades CSS",
        image: "/images/hero/logos/tailwind-wordmark.svg",
        className: "h-7 w-auto dark:invert",
        width: 160,
        height: 28,
    },
    {
        id: "vercel-logo",
        description: "Vercel - Plataforma de despliegue y hosting",
        image: "/images/hero/logos/vercel_wordmark.svg",
        className: "h-7 w-auto dark:invert",
        width: 100,
        height: 28,
    },
];

export default function LogoMarquee() {
    return (
        <div className="h-auto relative mt-20 w-full md:-left-2 ">
            <div className="absolute -top-24 mx-auto flex items-center justify-center">
                <Carousel
                    plugins={[AutoScroll({ playOnInit: true })]}
                    opts={{ loop: true, align: "start" }}
                >
                    <CarouselContent className="ml-0 w-full md:w-lg 2xl:w-2xl">
                        {logos.map((logo, index) => (
                            <CarouselItem
                                key={logo.id}
                                className="h-15 relative mr-6 flex basis-1/6 justify-center pl-0 opacity-30 xl:mr-12"
                            >
                                <div className="flex flex-col items-center justify-center select-none">
                                    <img
                                        src={logo.image}
                                        alt={logo.description}
                                        className={logo.className}
                                        width={logo.width}
                                        height={logo.height}
                                        loading="lazy"
                                        decoding="async"
                                        role="img"
                                        aria-label={logo.description}
                                    />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
                <div className="from-background absolute inset-y-0 left-0 w-32 bg-gradient-to-r to-transparent"></div>
                <div className="from-background absolute inset-y-0 right-0 w-32 bg-gradient-to-l to-transparent"></div>
            </div>
        </div>
    );
}
