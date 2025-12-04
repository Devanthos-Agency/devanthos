import React from 'react';
import { motion } from 'motion/react';
import { MoveRight } from 'lucide-react';
import AnimatedDevanthosIcon from './AnimatedDevanthosIcon';
import { useEffect, useState } from 'react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import 'swiper/css/effect-cards';
import LogoMarquee from '../logo-marquee';
import { DevanthosIcon } from '../icons';

interface AnimatedHeroProps {
    className?: string;
    children?: React.ReactNode;
    imageAnimationType?: 'subtle' | 'dynamic' | 'interactive' | 'morphing' | 'floating';
}

const AnimatedHero: React.FC<AnimatedHeroProps> = ({ className = '', children }) => {
    const [domLoaded, setDomLoaded] = useState(false);
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        setDomLoaded(true);
    }, []);

    const images = [
        {
            src: '/videos/hero/Seo avanzado 2.webm',
            alt: 'SEO project',
            name: 'SEO Avanzado',
        },
        {
            src: '/videos/hero/Diseño web.webm',
            alt: 'Web design project',
            name: 'Diseño Web',
        },
        {
            src: '/videos/hero/marketing digital.webm',
            alt: 'Marketing digital project',
            name: 'Marketing Digital',
        },
        {
            src: '/videos/hero/Seo avanzado 2.webm',
            alt: 'SEO project',
            name: 'SEO Avanzado',
        },
        {
            src: '/videos/hero/Diseño web.webm',
            alt: 'Web design project',
            name: 'Diseño Web',
        },
        {
            src: '/videos/hero/marketing digital.webm',
            alt: 'Marketing digital project',
            name: 'Marketing Digital',
        },
    ];
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
                ease: 'easeOut',
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
                ease: 'easeOut',
            },
        },
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.2,
                ease: 'easeInOut',
            },
        },
        tap: {
            scale: 0.98,
        },
    };

    const css = `
        .mySwiperHero231 {
            width: 100%;
            min-width: 750px;
            height: 100%;
            padding-bottom: 50px;
        } 

        .mySwiperHero231 .swiper-slide {
            background-position: center;
            background-size: cover;
            width: 300px;
            margin-top: 60px;
            height: 420px;
        }
        
        .mySwiperHero231 .swiper-slide img {
            display: block;
            width: 100%;
        }
        
        .swiper-3d .swiper-slide-shadow-left {
            background-image: none;
        }
        .swiper-3d .swiper-slide-shadow-right{
            background: none;
        }
        .swiper-pagination {
            bottom: 10px !important;
            width: 100% !important;
            left: 0% !important;
        }
        .swiper-pagination-bullet-active {
            background-color: var(--primary);
        }

        @media (min-width: 768px) {
            .swiper-pagination {
            width: fit-content !important;
            left: 80% !important;
            }
        }

        `;

    return (
        <section className="relative overflow-hidden py-32">
            <style>{css}</style>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.5, scale: 1 }}
                transition={{ duration: 2, ease: 'easeOut' }}
                className="absolute top-0 right-0 bottom-auto left-auto h-[500px] w-[500px] -translate-x-[50%] -translate-y-[10%] rounded-full bg-[rgba(173,109,244,0.5)] blur-[80px]"
            />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 container mx-auto mt-4 flex flex-col items-center justify-center gap-4 overflow-hidden text-left xl:mt-14 xl:flex-row xl:overflow-visible">
                {/* Columna izquierda - Contenido de texto */}
                <div>
                    <div className="flex h-full flex-col justify-between gap-6 px-4 2xl:gap-10">
                        <div>
                            {/* Título principal con animación */}
                            <motion.h1
                                variants={slideUpVariants}
                                className="font-cocogoose mb-4 text-4xl leading-tight font-normal text-gray-900 [text-shadow:0_0_10px_rgba(255,255,255,0.65)] lg:text-[3.625rem] xl:text-6xl dark:text-white">
                                Potencia tu empresa con{' '}
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
                                className="text-muted-foreground text-lg text-balance">
                                Encontrarás todo lo que necesitas para potenciar tu empresa o
                                emprendimiento, desde desarrollo web y móvil hasta marketing
                                digital. Ofrecemos soluciones personalizadas para ayudarte a
                                alcanzar tus objetivos. Nuestro equipo de expertos está listo para
                                llevar tu proyecto al siguiente nivel. ¡Contáctanos hoy mismo y
                                descubre cómo podemos ayudarte a crecer!
                            </motion.p>
                        </div>

                        {/* Logo Marquee */}
                        <motion.div variants={marqueeVariants}>
                            <LogoMarquee />
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
                                className="group bg-primary inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-medium text-white shadow-lg transition-shadow duration-300 hover:shadow-xl">
                                <div className="font-medium text-white">Consultoría gratuita</div>
                                <div className="relative h-6 w-7 overflow-hidden">
                                    <motion.div
                                        className="absolute top-0 left-0 flex -translate-x-1/2 items-center transition-all duration-500 group-hover:translate-x-0"
                                        whileHover={{ x: 2 }}>
                                        <MoveRight className="h-6! w-6! stroke-white px-1" />
                                        <MoveRight className="h-6! w-6! stroke-white px-1" />
                                    </motion.div>
                                </div>
                            </motion.a>

                            <motion.p variants={buttonVariants} className="text-muted-foreground">
                                <span className="font-semibold">¡Contáctanos!</span>
                                <br />
                                <a href="mailto:contacto@devanthos.com">contacto@devanthos.com</a>
                            </motion.p>
                        </div>
                    </div>
                </div>

                <div className="relative mt-0 h-145 w-full xl:mt-0 xl:w-1/2">
                    <div className="mx-auto flex h-full items-center justify-center">
                        {domLoaded && (
                            <Swiper
                                spaceBetween={50}
                                autoplay={{
                                    delay: 3500,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: true,
                                }}
                                effect="coverflow"
                                grabCursor={true}
                                centeredSlides={true}
                                loop={true}
                                slidesPerView={2.438}
                                coverflowEffect={{
                                    rotate: 0,
                                    stretch: 0,
                                    depth: 100,
                                    modifier: 2.5,
                                }}
                                className="mySwiperHero231"
                                modules={[EffectCoverflow, Autoplay, Pagination]}
                                pagination={{ clickable: true }}
                                onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
                                onSwiper={(swiper) => setActiveSlide(swiper.realIndex)}>
                                {images.map((image, index) => {
                                    const isActive = activeSlide === index;
                                    return (
                                        <SwiperSlide key={index}>
                                            <motion.video
                                                initial={{
                                                    opacity: 0,
                                                    scale: 0.8,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    scale: 1,
                                                }}
                                                transition={{
                                                    duration: 0.6,
                                                    ease: 'easeOut',
                                                }}
                                                className="relative z-10 h-full w-full overflow-hidden rounded-3xl object-cover shadow-lg"
                                                src={image.src}
                                                autoPlay
                                                loop
                                                muted
                                                playsInline
                                            />
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{
                                                    duration: 0.4,
                                                    delay: 0.3,
                                                    ease: 'easeOut',
                                                }}
                                                className="bg-opacity-50 absolute bottom-2 left-2 z-20 rounded-lg bg-black px-3 py-1 text-white">
                                                {image.name}
                                            </motion.div>
                                            <motion.video
                                                initial={{
                                                    opacity: isActive ? 0 : 0,
                                                    scale: isActive ? 1.2 : 1.2,
                                                }}
                                                animate={{
                                                    opacity: isActive ? 1 : 0,
                                                    scale: isActive ? 1 : 1,
                                                }}
                                                transition={{
                                                    duration: 0.4,
                                                    delay: isActive ? 0.4 : 0,
                                                    ease: 'easeOut',
                                                }}
                                                className="absolute inset-0 z-0 h-full w-full blur-xl"
                                                src={image.src}
                                                autoPlay
                                                loop
                                            />
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
                        )}
                    </div>

                    {/* <div className="-z-1 bg-muted px-2 xl:h-155 xl:w-9/10 absolute right-0 top-0 h-full w-full rounded-3xl xl:top-1/2 xl:mt-4 xl:-translate-y-1/2" /> */}
                </div>
            </motion.div>
        </section>
    );
};

export default AnimatedHero;
