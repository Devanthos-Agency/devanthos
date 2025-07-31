import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";

const logos = [
    {
        id: "logo-1",
        description: "Logo 1",
        image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/astro-wordmark.svg",
        className: "h-7 w-auto dark:invert",
    },
    {
        id: "logo-2",
        description: "Logo 2",
        image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-1.svg",
        className: "h-7 w-auto dark:invert",
    },
    {
        id: "logo-3",
        description: "Logo 3",
        image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-2.svg",
        className: "h-7 w-auto dark:invert",
    },
    {
        id: "logo-4",
        description: "Logo 4",
        image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-3.svg",
        className: "h-7 w-auto dark:invert",
    },
    {
        id: "logo-5",
        description: "Logo 5",
        image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-4.svg",
        className: "h-7 w-auto dark:invert",
    },
    {
        id: "logo-6",
        description: "Logo 6",
        image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-5.svg",
        className: "h-5 w-auto dark:invert",
    },
    {
        id: "logo-7",
        description: "Logo 7",
        image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-6.svg",
        className: "h-7 w-auto dark:invert",
    },
    {
        id: "logo-8",
        description: "Logo 8",
        image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-7.svg",
        className: "h-7 w-auto dark:invert",
    },
    {
        id: "logo-1",
        description: "Logo 1",
        image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/astro-wordmark.svg",
        className: "h-7 w-auto dark:invert",
    },
    {
        id: "logo-2",
        description: "Logo 2",
        image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-1.svg",
        className: "h-7 w-auto dark:invert",
    },
    {
        id: "logo-3",
        description: "Logo 3",
        image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-2.svg",
        className: "h-7 w-auto dark:invert",
    },
    {
        id: "logo-4",
        description: "Logo 4",
        image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-3.svg",
        className: "h-7 w-auto dark:invert",
    },
    {
        id: "logo-5",
        description: "Logo 5",
        image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-4.svg",
        className: "h-7 w-auto dark:invert",
    },
    {
        id: "logo-6",
        description: "Logo 6",
        image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-5.svg",
        className: "h-5 w-auto dark:invert",
    },
    {
        id: "logo-7",
        description: "Logo 7",
        image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-6.svg",
        className: "h-7 w-auto dark:invert",
    },
    {
        id: "logo-8",
        description: "Logo 8",
        image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-7.svg",
        className: "h-7 w-auto dark:invert",
    },
];

export default function LogoMarquee() {
    return (
        <div className="h-auto relative mt-20 w-full xl:-left-20">
            <div className="absolute -top-24 mx-auto flex items-center justify-center">
                <Carousel
                    plugins={[AutoScroll({ playOnInit: true })]}
                    opts={{ loop: true, align: "start" }}
                >
                    <CarouselContent className="ml-0">
                        {logos.map((logo, index) => (
                            <CarouselItem
                                key={index}
                                className="h-15 relative mr-6 flex basis-1/6 justify-center pl-0 opacity-30 xl:mr-12"
                            >
                                <div className="flex flex-col items-center justify-center">
                                    <img
                                        src={logo.image}
                                        alt={logo.description}
                                        className={logo.className}
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
