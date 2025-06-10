"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import type { CarouselApi } from "@/components/ui/carousel";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "../ui/button";
import { ExternalLink } from "lucide-react";

const carouselItems = [
    {
        image: "/images/gallery/820_1x_shots_so.png",
        title: "Dominga Dominguez",
        description:
            "Es un restaurante de comida típica de la región. Ubicado en la ciudad de Coquimbo, Chile.",
    },
    {
        image: "/images/gallery/164_1x_shots_so.png",
        title: "Altos de Monardez",
        description:
            "Es un centro de eventos ubicado en la ciudad de La Serena, Chile.",
    },
    {
        image: "/images/gallery/227_1x_shots_so.png",
        title: "Trenza Matrimonios",
        description:
            "Es un servicio de fotografía y video para matrimonios. Ubicado en la ciudad de La Serena, Chile.",
    },
    {
        image: "/images/gallery/205_1x_shots_so.png",
        title: "Proviser",
        description:
            "Es una empresa de ventas de insumos y equipos de minería. Ubicada en la ciudad de La Serena, Chile.",
    },
    {
        image: "/images/gallery/454_1x_shots_so.png",
        title: "Oakland Services",
        description: "Es una empresa de arriendo de andamios y herramientas.",
    },
    {
        image: "/images/gallery/465_1x_shots_so.png",
        title: "Trensa",
        description: "Es una empresa de servicios de marketing digital.",
    },
    {
        image: "/images/gallery/498_1x_shots_so.png",
        title: "El Riconcito",
        description:
            "Es un complejo de arriendo de cabañas, spa y piscina. Ubicado en la ciudad de La Serena, Chile.",
    },
    {
        image: "/images/gallery/589_1x_shots_so.png",
        title: "Sabor y encanto",
        description: "Es un restaurante de comida típica de la región peruana.",
    },
    {
        image: "/images/gallery/670_1x_shots_so.png",
        title: "Jireh English",
        description:
            "Es una academia de inglés ubicada en la ciudad de La Serena, Chile.",
    },
    {
        image: "/images/gallery/879_1x_shots_so.png",
        title: "Destape LS",
        description:
            "Es una empresa de servicios de destape y limpieza de fosas sépticas.",
    },
];

export default function Galeria() {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (!api) {
            return;
        }

        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    return (
        <section className="overflow-hidden py-32">
            <div className="container mx-auto">
                <Carousel setApi={setApi}>
                    <div className="grid gap-8 md:gap-4 lg:grid-cols-2 [&>div[data-slot=carousel-content]]:overflow-visible [&>div[data-slot=carousel-content]]:[clip-path:inset(-100vw_-100vw_-100vw_0)]">
                        <div>
                            <h2 className="text-4xl font-semibold md:text-6xl">
                                Tus proyectos. <br />
                                <span className="bg-gradient-to-r from-primary/50 to-primary/100 bg-clip-text text-transparent">
                                    Nuestra inspiración.
                                </span>
                            </h2>
                            <p className="mt-8 text-xl text-primary">
                                Descubre nuestra galería de proyectos y trabajos
                                realizados. Cada imagen cuenta una historia de
                                creatividad y dedicación.
                            </p>
                            <div className="mt-8 hidden items-center gap-4 md:flex">
                                <CarouselPrevious className="static size-12 translate-x-0 translate-y-0" />
                                <CarouselNext className="static size-12 translate-x-0 translate-y-0" />
                            </div>
                        </div>

                        <CarouselContent className="max-w-[400px] select-none">
                            {carouselItems.map((item, idx) => (
                                <CarouselItem className="w-fit" key={idx}>
                                    <div className="relative aspect-4/5 max-h-[500px] rounded-2xl">
                                        <div className="absolute inset-0 rounded-2xl bg-linear-to-b from-black to-transparent to-40%" />
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="size-full rounded-2xl bg-cover"
                                        />
                                        <div className="absolute inset-0 p-8">
                                            <p className="text-sm font-semibold text-background/50">
                                                <span className="mr-1 text-background">
                                                    {item.title}.
                                                </span>
                                                {item.description}
                                            </p>
                                        </div>
                                        <div>
                                            <div className="absolute bottom-4 right-4">
                                                <Button
                                                    asChild
                                                    variant="secondary"
                                                    className="rounded-full bg-background/50 backdrop-blur-2xl px-3 py-1 text-xs font-semibold text-accent hover:bg-background/30"
                                                >
                                                    <a href="/galeria/el-riconcito">
                                                        Ver más
                                                        <ExternalLink className="ml-1 h-4 w-4" />
                                                    </a>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </div>
                </Carousel>
                <div className="mt-8 hidden md:flex items-center lg:ml-[50%]">
                    {Array.from({ length: carouselItems.length }).map(
                        (_, index) => (
                            <span
                                key={index}
                                className={cn(
                                    "flex h-8 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-muted-foreground/15 text-xs font-semibold whitespace-nowrap transition-all duration-300",
                                    index + 1 === current
                                        ? "w-32"
                                        : "m-4 size-4"
                                )}
                                onClick={() => api && api.scrollTo(index)}
                            >
                                <span
                                    className={cn(
                                        "inline-block transition-all duration-300",
                                        index + 1 === current
                                            ? "translate-x-0 opacity-100"
                                            : "translate-x-6 opacity-0"
                                    )}
                                >
                                    {carouselItems[index].title}
                                </span>
                            </span>
                        )
                    )}
                </div>
            </div>
        </section>
    );
}
