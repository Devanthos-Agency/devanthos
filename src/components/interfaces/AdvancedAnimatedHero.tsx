import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { MoveRight } from "lucide-react";
import { DevanthosIcon } from "../icons";

interface AdvancedAnimatedHeroProps {
    className?: string;
    children?: React.ReactNode;
}

const AdvancedAnimatedHero: React.FC<AdvancedAnimatedHeroProps> = ({
    className = "",
    children,
}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const containerRef = useRef<HTMLElement>(null);
    const { scrollY } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // Parallax effects
    const yParallax = useTransform(scrollY, [0, 500], [0, -100]);
    const scaleParallax = useTransform(scrollY, [0, 500], [1, 1.1]);

    // Spring configurations
    const springConfig = {
        type: "spring",
        stiffness: 300,
        damping: 30,
        mass: 0.8,
    };

    const smoothSpring = useSpring(0, {
        stiffness: 100,
        damping: 20,
        mass: 1,
    });

    useEffect(() => {
        setIsLoaded(true);
        smoothSpring.set(1);
    }, [smoothSpring]);

    // Advanced animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
                when: "beforeChildren",
            },
        },
    };

    const titleVariants = {
        hidden: {
            opacity: 0,
            y: 80,
            scale: 0.9,
            filter: "blur(4px)",
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            transition: {
                ...springConfig,
                duration: 1.2,
            },
        },
    };

    const wordVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            rotateX: -90,
        },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                ...springConfig,
                delay: i * 0.1,
                duration: 0.8,
            },
        }),
    };

    const imageContainerVariants = {
        hidden: {
            opacity: 0,
            scale: 0.8,
            rotateY: 30,
            z: -100,
        },
        visible: {
            opacity: 1,
            scale: 1,
            rotateY: 0,
            z: 0,
            transition: {
                ...springConfig,
                duration: 1.5,
                delay: 0.3,
            },
        },
    };

    const floatingVariants = {
        float: {
            y: [0, -20, 0],
            rotate: [0, 2, 0],
            scale: [1, 1.02, 1],
            transition: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
            },
        },
    };

    const buttonVariants = {
        hidden: {
            opacity: 0,
            scale: 0.8,
            y: 30,
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                ...springConfig,
                delay: 0.8,
            },
        },
        hover: {
            scale: 1.05,
            y: -2,
            boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 10,
            },
        },
        tap: {
            scale: 0.98,
            y: 0,
        },
    };

    const iconVariants = {
        hidden: {
            scale: 0,
            rotate: -180,
            opacity: 0,
        },
        visible: {
            scale: 1,
            rotate: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 0.6,
            },
        },
        pulse: {
            scale: [1, 1.1, 1],
            transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
            },
        },
    };

    const backgroundVariants = {
        hidden: {
            opacity: 0,
            scale: 0.5,
            rotate: -45,
        },
        visible: {
            opacity: 0.5,
            scale: 1,
            rotate: 0,
            transition: {
                duration: 3,
                ease: "easeOut",
            },
        },
        pulse: {
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.3, 0.5],
            transition: {
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
            },
        },
    };

    const title = "Potencia tu empresa con";
    const words = title.split(" ");

    return (
        <section
            ref={containerRef}
            className={`relative md:overflow-hidden pt-28 pb-12 md:pt-40 md:pb-20 lg:pt-48 ${className}`}
        >
            {/* Animated background gradient */}
            <motion.div
                variants={backgroundVariants}
                initial="hidden"
                animate={["visible", "pulse"]}
                style={{ y: yParallax }}
                className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[50%] -translate-y-[10%] rounded-full bg-[rgba(173,109,244,0.5)] blur-[80px]"
            />

            {/* Additional floating elements */}
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 0.2, x: 0 }}
                transition={{ duration: 2, delay: 1 }}
                className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 blur-xl"
            />

            <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 0.15, x: 0 }}
                transition={{ duration: 2.5, delay: 1.5 }}
                className="absolute bottom-20 right-20 w-24 h-24 rounded-full bg-gradient-to-r from-pink-400 to-orange-400 blur-lg"
            />

            <div className="relative 2xl:h-[calc(100vh-272px)] z-10 container mx-auto px-2 md:px-6 lg:px-8">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="relative grid h-full grid-cols-1 gap-x-20 gap-y-10 md:grid-cols-[1fr_1fr] xl:gap-x-48"
                >
                    {/* Left column - Text content */}
                    <div>
                        <div className="flex h-full flex-col justify-between gap-6 2xl:gap-10">
                            <div>
                                {/* Animated title */}
                                <motion.h1
                                    variants={titleVariants}
                                    className="mb-4 text-4xl leading-tight font-cocogoose font-normal text-gray-900 lg:text-[3.625rem] xl:text-6xl dark:text-white overflow-hidden"
                                >
                                    {words.map((word, i) => (
                                        <motion.span
                                            key={i}
                                            variants={wordVariants}
                                            custom={i}
                                            className="inline-block mr-3"
                                            style={{ originX: 0.5, originY: 1 }}
                                        >
                                            {word}
                                        </motion.span>
                                    ))}
                                    <span className="inline-flex items-baseline">
                                        <motion.div
                                            variants={iconVariants}
                                            animate={["visible", "pulse"]}
                                        >
                                            <DevanthosIcon className="relative -bottom-[3px] size-9 lg:size-12 align-baseline fill-primary" />
                                        </motion.div>
                                        <motion.span
                                            variants={wordVariants}
                                            custom={words.length}
                                            className="ml-[2px]"
                                        >
                                            <span className="sr-only">D</span>
                                            evanthos
                                        </motion.span>
                                    </span>
                                </motion.h1>

                                {/* Animated description */}
                                <motion.p
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        delay: 1.2,
                                        duration: 0.8,
                                        ease: "easeOut",
                                    }}
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

                            {/* Logo Marquee with entrance animation */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    delay: 1.5,
                                    duration: 0.8,
                                    type: "spring",
                                    stiffness: 100,
                                }}
                            >
                                {children || (
                                    <div className="h-16 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-lg flex items-center justify-center">
                                        <span className="text-sm text-muted-foreground">
                                            Logo Marquee
                                        </span>
                                    </div>
                                )}
                            </motion.div>

                            {/* CTA buttons with advanced hover effects */}
                            <div className="flex flex-wrap items-center gap-5">
                                <motion.a
                                    variants={buttonVariants}
                                    whileHover="hover"
                                    whileTap="tap"
                                    href="https://wa.me/5492646629632?text=Hola%20me%20interesa%20la%20consultoria%20gratuita"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-purple-600 px-6 py-3 text-sm font-medium text-white shadow-lg overflow-hidden relative"
                                >
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-purple-600 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        initial={false}
                                    />

                                    <div className="font-medium text-white relative z-10">
                                        Consultoría gratuita
                                    </div>

                                    <motion.div
                                        className="relative h-6 w-7 overflow-hidden z-10"
                                        whileHover={{ x: 3 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 400,
                                            damping: 10,
                                        }}
                                    >
                                        <div className="absolute top-0 left-0 flex -translate-x-1/2 items-center transition-all duration-500 group-hover:translate-x-0">
                                            <MoveRight className="h-6! w-6! stroke-white px-1" />
                                            <MoveRight className="h-6! w-6! stroke-white px-1" />
                                        </div>
                                    </motion.div>
                                </motion.a>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.8, duration: 0.6 }}
                                    className="text-muted-foreground"
                                >
                                    <span className="font-semibold">
                                        ¡Contáctanos!
                                    </span>
                                    <br />
                                    <a
                                        href="mailto:contacto@devanthos.com"
                                        className="hover:text-primary transition-colors duration-200"
                                    >
                                        contacto@devanthos.com
                                    </a>
                                </motion.p>
                            </div>
                        </div>
                    </div>

                    {/* Right column - Images with 3D effects */}
                    <div className="relative perspective-1000">
                        <motion.div
                            variants={imageContainerVariants}
                            animate="visible"
                            style={{
                                y: yParallax,
                                scale: scaleParallax,
                            }}
                            className="relative h-full w-full z-10"
                        >
                            <motion.img
                                whileHover={{
                                    scale: 1.05,
                                    rotateY: 5,
                                    z: 50,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 20,
                                }}
                                src="/images/hero/sistema-html-diseno-collages-sitios-web_23-2150432955.avif"
                                alt=""
                                className="aspect-square h-full w-full rounded-xl object-cover object-center shadow-2xl"
                            />
                        </motion.div>

                        {/* Animated blur background */}
                        <motion.div
                            initial={{ opacity: 0, scale: 1.3 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 2, delay: 0.5 }}
                            className="absolute inset-0 h-full w-full blur-2xl z-0"
                        >
                            <img
                                src="/images/hero/sistema-html-diseno-collages-sitios-web_23-2150432955.avif"
                                alt=""
                                className="aspect-square h-full w-full rounded-xl object-cover object-center"
                            />
                        </motion.div>

                        {/* Floating image with complex animation */}
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 60,
                                x: -30,
                                scale: 0.7,
                                rotate: -10,
                            }}
                            animate={{
                                opacity: 1,
                                y: [0, -20, 0],
                                x: 0,
                                scale: [1, 1.02, 1],
                                rotate: [0, 2, 0],
                            }}
                            transition={{
                                opacity: { duration: 1.2, delay: 1 },
                                x: {
                                    duration: 1.2,
                                    delay: 1,
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 15,
                                },
                                y: {
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                },
                                scale: {
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                },
                                rotate: {
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                },
                            }}
                            whileHover={{
                                scale: 1.1,
                                rotate: 5,
                                z: 30,
                                transition: {
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 20,
                                },
                            }}
                            className="absolute z-20 bottom-[4%] left-[4%] w-36 lg:w-56 cursor-pointer"
                        >
                            <div data-radix-aspect-ratio-wrapper="">
                                <div
                                    data-slot="aspect-ratio"
                                    className="overflow-hidden rounded-lg border shadow-xl hover:shadow-2xl transition-shadow duration-300"
                                >
                                    <img
                                        src="/images/hero/marketing-influencers-png-collage-redes-sociales-remix-fondo-transparente_53876-1038872.avif"
                                        alt=""
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Side background image with parallax */}
            <motion.div
                initial={{ opacity: 0, x: 200, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
                style={{ y: useTransform(scrollY, [0, 300], [0, -50]) }}
                className="absolute -top-36 right-0 hidden w-1/2 rounded-bl-[1.875rem] md:block md:h-[34.375rem] xl:h-[41.5625rem] overflow-hidden"
            >
                <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    src="/images/hero/placeholder-8-wide.svg"
                    alt=""
                    className="h-full w-full object-cover object-center"
                />
            </motion.div>
        </section>
    );
};

export default AdvancedAnimatedHero;
