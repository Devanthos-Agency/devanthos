import React from "react";
import { motion } from "motion/react";
import { MoveRight } from "lucide-react";
import AnimatedDevanthosIcon from "./AnimatedDevanthosIcon";
import AnimatedHeroImages from "./AnimatedHeroImages";

interface AnimatedHeroProps {
    className?: string;
    children?: React.ReactNode;
    imageAnimationType?:
        | "subtle"
        | "dynamic"
        | "interactive"
        | "morphing"
        | "floating";
}

const AnimatedHero: React.FC<AnimatedHeroProps> = ({
    className = "",
    children,
    imageAnimationType = "dynamic",
}) => {
    // Variantes de animación para el contenedor principal
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    // Variantes para elementos que aparecen desde abajo
    const slideUpVariants = {
        hidden: {
            opacity: 0,
            y: 60,
            scale: 0.95,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
            },
        },
    };

    // Variantes para el logo marquee con delay
    const marqueeVariants = {
        hidden: {
            opacity: 0,
            y: 30,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                delay: 0.4,
                ease: "easeOut",
            },
        },
    };

    // Variantes para el botón con hover effect
    const buttonVariants = {
        hidden: {
            opacity: 0,
            y: 30,
            scale: 0.9,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                delay: 0.6,
                ease: "easeOut",
            },
        },
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.2,
                ease: "easeInOut",
            },
        },
        tap: {
            scale: 0.98,
        },
    };

    // Variantes para las imágenes con efecto parallax
    const imageVariants = {
        hidden: {
            opacity: 0,
            scale: 1.1,
            rotate: 2,
        },
        visible: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: {
                duration: 1.2,
                delay: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94],
            },
        },
    };

    // Variantes para la imagen flotante
    const floatingImageVariants = {
        hidden: {
            opacity: 0,
            y: 40,
            x: -20,
            scale: 0.8,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            transition: {
                duration: 1,
                delay: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
            },
        },
    };

    return (
        <section
            className={`relative md:overflow-hidden pt-28 pb-12 md:pt-40 md:pb-20 lg:pt-48 ${className}`}
        >
            {/* Gradiente animado de fondo */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.5, scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[50%] -translate-y-[10%] rounded-full bg-[rgba(173,109,244,0.5)] blur-[80px]"
            />

            <div className="relative 2xl:h-[calc(100vh-272px)] z-10 container mx-auto px-2 md:px-6 lg:px-8">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="relative grid h-full grid-cols-1 gap-x-20 gap-y-10 md:grid-cols-[1fr_1fr] xl:gap-x-48"
                >
                    {/* Columna izquierda - Contenido de texto */}
                    <div>
                        <div className="flex h-full flex-col justify-between gap-6 2xl:gap-10">
                            <div>
                                {/* Título principal con animación */}
                                <motion.h1
                                    variants={slideUpVariants}
                                    className="mb-4 text-4xl leading-tight font-cocogoose font-normal text-gray-900 lg:text-[3.625rem] xl:text-6xl dark:text-white"
                                >
                                    Potencia tu empresa con
                                    <span className="inline-flex items-baseline">
                                        <AnimatedDevanthosIcon
                                            animationType="random"
                                            size="md"
                                            className="mr-[2px]"
                                        />
                                        <span className="ml-[2px]">
                                            <span className="sr-only">D</span>
                                            evanthos
                                        </span>
                                    </span>
                                </motion.h1>

                                {/* Párrafo descriptivo */}
                                <motion.p
                                    variants={slideUpVariants}
                                    className="text-lg text-balance text-muted-foreground"
                                >
                                    Encontrarás todo lo que necesitas para
                                    potenciar tu empresa o emprendimiento, desde
                                    desarrollo web y móvil hasta marketing
                                    digital. Ofrecemos soluciones personalizadas
                                    para ayudarte a alcanzar tus objetivos.
                                    Nuestro equipo de expertos está listo para
                                    llevar tu proyecto al siguiente nivel.
                                    ¡Contáctanos hoy mismo y descubre cómo
                                    podemos ayudarte a crecer!
                                </motion.p>
                            </div>

                            {/* Logo Marquee */}
                            <motion.div variants={marqueeVariants}>
                                {children || (
                                    <div className="h-16 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                                        <span className="text-sm text-muted-foreground">
                                            Logo Marquee
                                        </span>
                                    </div>
                                )}
                            </motion.div>

                            {/* Botones y contacto */}
                            <div className="flex flex-wrap items-center gap-5">
                                <motion.a
                                    variants={buttonVariants}
                                    whileHover="hover"
                                    whileTap="tap"
                                    href="https://wa.me/5492646629632?text=Hola%20me%20interesa%20la%20consultoria%20gratuita"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white shadow-lg hover:shadow-xl transition-shadow duration-300"
                                >
                                    <div className="font-medium text-white">
                                        Consultoría gratuita
                                    </div>
                                    <div className="relative h-6 w-7 overflow-hidden">
                                        <motion.div
                                            className="absolute top-0 left-0 flex -translate-x-1/2 items-center transition-all duration-500 group-hover:translate-x-0"
                                            whileHover={{ x: 2 }}
                                        >
                                            <MoveRight className="h-6! w-6! stroke-white px-1" />
                                            <MoveRight className="h-6! w-6! stroke-white px-1" />
                                        </motion.div>
                                    </div>
                                </motion.a>

                                <motion.p
                                    variants={buttonVariants}
                                    className="text-muted-foreground"
                                >
                                    <span className="font-semibold">
                                        ¡Contáctanos!
                                    </span>
                                    <br />
                                    <a href="mailto:contacto@devanthos.com">
                                        contacto@devanthos.com
                                    </a>
                                </motion.p>
                            </div>
                        </div>
                    </div>

                    {/* Columna derecha - Imágenes Animadas */}
                    <AnimatedHeroImages
                        animationType={imageAnimationType}
                        className="h-full"
                    />
                </motion.div>
            </div>

            {/* Imagen de fondo lateral */}
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, delay: 0.2 }}
                className="absolute -top-36 right-0 hidden w-1/2 rounded-bl-[1.875rem] md:block md:h-[34.375rem] xl:h-[41.5625rem]"
            >
                <img
                    src="/images/hero/placeholder-8-wide.svg"
                    alt=""
                    className="h-full w-full object-cover object-center"
                />
            </motion.div>
        </section>
    );
};

export default AnimatedHero;
