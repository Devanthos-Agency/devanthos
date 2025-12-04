import React, { useState } from 'react';
import { motion } from 'motion/react';
import { DevanthosIcon } from '../icons';

interface AnimatedDevanthosIconProps {
    className?: string;
    animationType?: 'bounce' | 'spin' | 'pulse' | 'wobble' | 'flip' | 'glow' | 'shake' | 'random';
    size?: 'sm' | 'md' | 'lg';
}

const AnimatedDevanthosIcon: React.FC<AnimatedDevanthosIconProps> = ({
    className = '',
    animationType = 'random',
    size = 'md',
}) => {
    const [currentAnimation, setCurrentAnimation] = useState(animationType);

    const sizeClasses = {
        sm: 'size-6 lg:size-8',
        md: 'size-9 lg:size-12',
        lg: 'size-12 lg:size-16',
    };

    // Diferentes tipos de animaciones de hover
    const animations = {
        bounce: {
            scale: [1, 1.3, 0.9, 1.1, 1],
            y: [0, -8, 0, -4, 0],
            transition: {
                duration: 0.6,
                ease: 'easeInOut',
                times: [0, 0.2, 0.4, 0.7, 1],
            },
        },

        spin: {
            rotate: [0, 360],
            scale: [1, 1.1, 1],
            transition: {
                duration: 0.8,
                ease: 'easeInOut',
            },
        },

        pulse: {
            scale: [1, 1.2, 1.1, 1.3, 1],
            filter: [
                'brightness(1) contrast(1)',
                'brightness(1.3) contrast(1.2)',
                'brightness(1.1) contrast(1.1)',
                'brightness(1.4) contrast(1.3)',
                'brightness(1) contrast(1)',
            ],
            transition: {
                duration: 0.7,
                ease: 'easeInOut',
            },
        },

        wobble: {
            rotate: [0, -10, 8, -6, 4, -2, 0],
            scale: [1, 1.05, 1.02, 1.08, 1.03, 1.01, 1],
            transition: {
                duration: 0.8,
                ease: 'easeInOut',
            },
        },

        flip: {
            rotateY: [0, 180, 360],
            scale: [1, 0.8, 1],
            transition: {
                duration: 0.6,
                ease: 'easeInOut',
            },
        },

        glow: {
            scale: [1, 1.15, 1],
            filter: [
                'brightness(1) drop-shadow(0 0 0px rgba(168, 85, 247, 0))',
                'brightness(1.3) drop-shadow(0 0 20px rgba(168, 85, 247, 0.8))',
                'brightness(1) drop-shadow(0 0 0px rgba(168, 85, 247, 0))',
            ],
            transition: {
                duration: 0.8,
                ease: 'easeInOut',
            },
        },

        shake: {
            x: [0, -3, 3, -2, 2, -1, 1, 0],
            y: [0, -2, 1, -1, 2, 0],
            rotate: [0, -2, 2, -1, 1, 0],
            transition: {
                duration: 0.5,
                ease: 'easeInOut',
            },
        },
    };

    // Función para obtener una animación aleatoria
    const getRandomAnimation = () => {
        const animationTypes = Object.keys(animations);
        const randomType = animationTypes[
            Math.floor(Math.random() * animationTypes.length)
        ] as keyof typeof animations;
        return animations[randomType];
    };

    // Determinar qué animación usar
    const getHoverAnimation = () => {
        if (animationType === 'random') {
            return getRandomAnimation();
        }
        return animations[animationType as keyof typeof animations] || animations.bounce;
    };

    return (
        <motion.div
            initial={{ rotate: -10, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            whileHover={getHoverAnimation()}
            whileTap={{
                scale: 0.9,
                rotate: 10,
            }}
            transition={{
                duration: 0.8,
                delay: 0.5,
                type: 'spring',
                stiffness: 200,
                damping: 20,
            }}
            style={{
                cursor: 'pointer',
                transformOrigin: 'center',
            }}
            className={`group relative ${className}`}
            // Cambiar animación en cada hover si es random
            onHoverStart={() => {
                if (animationType === 'random') {
                    // Pequeño delay para que se note el cambio
                    setTimeout(() => {
                        setCurrentAnimation((prev) =>
                            prev === 'random' ? 'random' : animationType
                        );
                    }, 100);
                }
            }}>
            <DevanthosIcon
                className={`relative -bottom-[3px] ${sizeClasses[size]} fill-primary align-baseline drop-shadow-[0_0_10px_rgba(94,111,182,0.65)] transition-all duration-300 group-hover:drop-shadow-lg`}
            />

            {/* Efecto de brillo de fondo */}
            <motion.div
                className="bg-primary/20 absolute inset-0 rounded-full opacity-0 blur-md"
                whileHover={{
                    scale: 2,
                    opacity: [0, 0.6, 0],
                }}
                transition={{
                    duration: 0.8,
                    ease: 'easeOut',
                }}
            />

            {/* Partículas flotantes en hover */}
            <motion.div
                className="pointer-events-none absolute inset-0"
                whileHover={{
                    opacity: 1,
                }}
                initial={{ opacity: 0 }}>
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="bg-primary absolute h-1 w-1 rounded-full"
                        style={{
                            left: '50%',
                            top: '50%',
                        }}
                        whileHover={{
                            x: [0, (i % 2 === 0 ? 1 : -1) * (20 + i * 5)],
                            y: [0, (i % 3 === 0 ? -1 : 1) * (15 + i * 3)],
                            scale: [0, 1, 0],
                            opacity: [0, 0.8, 0],
                        }}
                        transition={{
                            duration: 0.8,
                            delay: i * 0.1,
                            ease: 'easeOut',
                        }}
                    />
                ))}
            </motion.div>

            {/* Anillo de expansión */}
            <motion.div
                className="border-primary/30 absolute inset-0 rounded-full border-2 opacity-0"
                whileHover={{
                    scale: [1, 1.5, 2],
                    opacity: [0, 0.5, 0],
                }}
                transition={{
                    duration: 0.6,
                    ease: 'easeOut',
                }}
            />
        </motion.div>
    );
};

export default AnimatedDevanthosIcon;
