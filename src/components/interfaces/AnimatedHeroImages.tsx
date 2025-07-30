import React, { useState, useRef, useEffect } from "react";
import {
    motion,
    useScroll,
    useTransform,
    useMotionValue,
    useSpring,
} from "motion/react";

interface AnimatedHeroImagesProps {
    className?: string;
    animationType?:
        | "subtle"
        | "dynamic"
        | "interactive"
        | "morphing"
        | "floating";
}

const AnimatedHeroImages: React.FC<AnimatedHeroImagesProps> = ({
    className = "",
    animationType = "dynamic",
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    useEffect(() => {
        setIsMounted(true);

        // Detectar si es móvil
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth < 768); // md breakpoint
        };

        checkIsMobile();
        window.addEventListener("resize", checkIsMobile);

        return () => window.removeEventListener("resize", checkIsMobile);
    }, []);

    // Parallax effects - con verificación de contenedor
    const yParallax = useTransform(scrollY, [0, 500], [0, -50]);
    const scaleParallax = useTransform(scrollY, [0, 500], [1, 1.05]);
    const rotateParallax = useTransform(scrollY, [0, 500], [0, 2]);

    // Mouse tracking
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), {
        stiffness: 300,
        damping: 30,
    });
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
        stiffness: 300,
        damping: 30,
    });

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const x = (event.clientX - centerX) / (rect.width / 2);
        const y = (event.clientY - centerY) / (rect.height / 2);

        mouseX.set(x);
        mouseY.set(y);
    };

    // Diferentes configuraciones de animación
    const animationConfigs = {
        subtle: {
            // Animaciones suaves y elegantes sin afectar layout
            mainImage: {
                initial: { opacity: 0, y: 20 },
                animate: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1, ease: "easeOut", delay: 0.2 },
                },
                whileHover: {
                    y: -3,
                    transition: { duration: 0.3 },
                },
            },
            floatingImage: {
                initial: { opacity: 0, y: 30, x: -15 },
                animate: {
                    opacity: 1,
                    y: [0, -5, 0],
                    x: 0,
                    transition: {
                        opacity: { duration: 0.8, delay: 0.6 },
                        x: { duration: 0.8, delay: 0.6 },
                        y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                    },
                },
            },
        },

        dynamic: {
            // Animaciones más llamativas pero sin afectar layout
            mainImage: {
                initial: { opacity: 0, y: 30 },
                animate: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 1.2,
                        ease: [0.25, 0.46, 0.45, 0.94],
                        delay: 0.3,
                    },
                },
                whileHover: {
                    y: -5,
                    transition: { duration: 0.4, ease: "easeOut" },
                },
            },
            floatingImage: {
                initial: { opacity: 0, y: 40, x: -20 },
                animate: {
                    opacity: 1,
                    y: [0, -10, 0],
                    x: 0,
                    transition: {
                        opacity: { duration: 1, delay: 0.8 },
                        x: { duration: 1, delay: 0.8 },
                        y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    },
                },
            },
        },

        interactive: {
            // Animaciones que responden al mouse sin afectar layout
            mainImage: {
                initial: { opacity: 0, x: 20 },
                animate: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 1, delay: 0.2 },
                },
            },
            floatingImage: {
                initial: { opacity: 0, y: 40, x: -20 },
                animate: {
                    opacity: 1,
                    y: 0,
                    x: 0,
                    transition: { duration: 0.8, delay: 0.6 },
                },
            },
        },

        morphing: {
            // Efectos de transformación sin afectar layout
            mainImage: {
                initial: {
                    opacity: 0,
                    borderRadius: "50%",
                    filter: "blur(10px)",
                },
                animate: {
                    opacity: 1,
                    borderRadius: "12px",
                    filter: "blur(0px)",
                    transition: {
                        duration: 1.5,
                        ease: "easeOut",
                        delay: 0.3,
                    },
                },
                whileHover: {
                    filter: ["blur(0px)", "blur(2px)", "blur(0px)"],
                    transition: { duration: 0.6 },
                },
            },
            floatingImage: {
                initial: {
                    opacity: 0,
                    filter: "brightness(0.5)",
                },
                animate: {
                    opacity: 1,
                    filter: [
                        "brightness(1)",
                        "brightness(1.1)",
                        "brightness(1)",
                    ],
                    transition: {
                        opacity: { duration: 0.8, delay: 0.8 },
                        filter: {
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        },
                    },
                },
            },
        },

        floating: {
            // Efectos de flotación extremos sin afectar layout
            mainImage: {
                initial: { opacity: 0, y: 100 },
                animate: {
                    opacity: 1,
                    y: [0, -20, 0],
                    transition: {
                        opacity: { duration: 1, delay: 0.2 },
                        y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                    },
                },
            },
            floatingImage: {
                initial: { opacity: 0, y: 50, x: -40 },
                animate: {
                    opacity: 1,
                    y: [0, -25, 5, -15, 0],
                    x: [0, 5, -5, 0],
                    transition: {
                        opacity: { duration: 1, delay: 0.6 },
                        y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                        x: { duration: 7, repeat: Infinity, ease: "easeInOut" },
                    },
                },
            },
        },
    };

    const config = animationConfigs[animationType];

    // Versión estática para móviles
    if (isMobile) {
        return (
            <div className={`relative ${className}`}>
                {/* Imagen principal estática */}
                <div className="relative h-full w-full z-10">
                    <img
                        src="/images/hero/sistema-html-diseno-collages-sitios-web_23-2150432955.avif"
                        alt="Desarrollo web y diseño"
                        className="aspect-square h-full w-full rounded-xl object-cover object-center shadow-lg"
                    />
                </div>

                {/* Imagen de fondo con blur estática */}
                <div className="absolute inset-0 h-full w-full blur-2xl z-0 opacity-60">
                    <img
                        src="/images/hero/sistema-html-diseno-collages-sitios-web_23-2150432955.avif"
                        alt=""
                        className="aspect-square h-full w-full rounded-xl object-cover object-center"
                    />
                </div>
            </div>
        );
    }

    return (
        <div
            ref={containerRef}
            className={`relative ${className}`}
            style={{ position: "relative" }} // Asegurar posición explícita
            onMouseMove={
                animationType === "interactive" ? handleMouseMove : undefined
            }
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Imagen principal */}
            <motion.div
                {...config.mainImage}
                style={
                    animationType === "interactive"
                        ? {
                              rotateX: rotateX,
                              rotateY: rotateY,
                              y: yParallax,
                              scale: scaleParallax,
                          }
                        : animationType === "subtle"
                        ? {
                              y: yParallax,
                          }
                        : {}
                }
                className="relative h-full w-full z-10 perspective-1000"
            >
                <motion.img
                    src="/images/hero/sistema-html-diseno-collages-sitios-web_23-2150432955.avif"
                    alt="Desarrollo web y diseño"
                    className="aspect-square h-full w-full rounded-xl object-cover object-center shadow-2xl"
                    whileHover={
                        animationType === "dynamic"
                            ? {
                                  filter: "brightness(1.1) contrast(1.05)",
                                  transition: { duration: 0.3 },
                              }
                            : {}
                    }
                />

                {/* Overlay animado */}
                {isHovered && animationType === "interactive" && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-purple-500/20 rounded-xl"
                    />
                )}
            </motion.div>

            {/* Imagen de fondo con blur */}
            <motion.div
                initial={{ opacity: 0, scale: 1.3 }}
                animate={{
                    opacity: 0.8,
                    scale: animationType === "floating" ? [1, 1.1, 1] : 1,
                }}
                transition={{
                    opacity: { duration: 2, delay: 0.4 },
                    scale:
                        animationType === "floating"
                            ? {
                                  duration: 8,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                              }
                            : { duration: 2, delay: 0.4 },
                }}
                style={
                    animationType === "interactive" && isMounted
                        ? {
                              y: useTransform(yParallax, [0, -50], [0, -25]),
                          }
                        : {}
                }
                className="absolute inset-0 h-full w-full blur-2xl z-0"
            >
                <img
                    src="/images/hero/sistema-html-diseno-collages-sitios-web_23-2150432955.avif"
                    alt=""
                    className="aspect-square h-full w-full rounded-xl object-cover object-center"
                />
            </motion.div>

            {/* Elementos decorativos adicionales */}
            {animationType === "dynamic" && (
                <>
                    {/* Partículas flotantes */}
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-primary/30 rounded-full"
                            style={{
                                left: `${20 + i * 15}%`,
                                top: `${10 + i * 10}%`,
                            }}
                            animate={{
                                y: [0, -20, 0],
                                opacity: [0.3, 0.8, 0.3],
                                scale: [1, 1.2, 1],
                            }}
                            transition={{
                                duration: 3 + i,
                                repeat: Infinity,
                                delay: i * 0.5,
                                ease: "easeInOut",
                            }}
                        />
                    ))}

                    {/* Anillos de expansión */}
                    <motion.div
                        className="absolute top-1/2 left-1/2 w-4 h-4 border border-primary/20 rounded-full"
                        style={{ x: "-50%", y: "-50%" }}
                        animate={{
                            scale: [1, 3, 1],
                            opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                </>
            )}

            {animationType === "morphing" && (
                <motion.div
                    className="absolute inset-0 pointer-events-none"
                    animate={{
                        background: [
                            "radial-gradient(circle at 20% 30%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)",
                            "radial-gradient(circle at 80% 70%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
                            "radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)",
                            "radial-gradient(circle at 20% 30%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)",
                        ],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            )}
        </div>
    );
};

export default AnimatedHeroImages;
