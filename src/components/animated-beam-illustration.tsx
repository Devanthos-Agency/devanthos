import {
    Bot,
    ChartLine,
    Code,
    DatabaseZap,
    HeartHandshake,
    Store,
} from "lucide-react";
import { useRef } from "react";

import { AnimatedBeam } from "@/components/magicui/animated-beam";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

export default function AnimatedBeamIllustration() {
    const containerRef = useRef<HTMLDivElement>(null);
    const div1Ref = useRef<HTMLDivElement>(null);
    const div2Ref = useRef<HTMLDivElement>(null);
    const div3Ref = useRef<HTMLDivElement>(null);
    const div4Ref = useRef<HTMLDivElement>(null);
    const div5Ref = useRef<HTMLDivElement>(null);
    const div6Ref = useRef<HTMLDivElement>(null);
    const div7Ref = useRef<HTMLDivElement>(null);
    return (
        <div
            className="relative flex w-full items-center justify-center overflow-hidden p-10"
            ref={containerRef}
        >
            <div className="flex w-full flex-col items-center justify-between gap-10 lg:flex-row">
                <div className="relative z-10 flex h-100 w-full items-center justify-center rounded-3xl lg:w-0">
                    <div
                        ref={div1Ref}
                        className="absolute top-40 left-0 z-10 flex size-18 -translate-y-1/2 items-center justify-center rounded-full bg-transparent p-1 lg:top-1/2 lg:left-0"
                    >
                        <HoverCard>
                            <HoverCardTrigger>
                                <div className="flex size-10 items-center justify-center rounded-lg border border-border bg-background p-[5px]">
                                    <div className="flex size-full items-center justify-center rounded-md border border-border bg-muted">
                                        <DatabaseZap size={16} />
                                    </div>
                                </div>
                            </HoverCardTrigger>
                            <HoverCardContent>
                                <div className="text-sm">
                                    <p className="font-semibold">
                                        Base de Datos
                                    </p>
                                    <p className="text-muted-foreground">
                                        Gestiona tus datos de manera eficiente
                                        con nuestras soluciones de base de datos
                                        robustas.
                                    </p>
                                </div>
                            </HoverCardContent>
                        </HoverCard>
                    </div>
                    <div
                        ref={div2Ref}
                        className="absolute top-40 right-0 z-10 flex size-18 -translate-y-1/2 items-center justify-center rounded-full bg-transparent p-1 lg:top-20 lg:left-20"
                    >
                        <HoverCard>
                            <HoverCardTrigger>
                                <div className="flex size-10 items-center justify-center rounded-lg border border-border bg-background p-[5px]">
                                    <div className="flex size-full items-center justify-center rounded-md border border-border bg-muted">
                                        <Code size={16} />
                                    </div>
                                </div>
                            </HoverCardTrigger>
                            <HoverCardContent>
                                <div className="text-sm">
                                    <p className="font-semibold">Desarrollo</p>
                                    <p className="text-muted-foreground">
                                        Creamos aplicaciones personalizadas con
                                        código limpio y tecnologías modernas.
                                    </p>
                                </div>
                            </HoverCardContent>
                        </HoverCard>
                    </div>
                    <div
                        ref={div3Ref}
                        className="absolute bottom-0 left-6 z-10 flex size-18 -translate-y-1/2 items-center justify-center rounded-full bg-transparent p-1 lg:bottom-2 lg:left-20"
                    >
                        <HoverCard>
                            <HoverCardTrigger>
                                <div className="flex size-10 items-center justify-center rounded-lg border border-border bg-background p-[5px]">
                                    <div className="flex size-full items-center justify-center rounded-md border border-border bg-muted">
                                        <ChartLine size={16} />
                                    </div>
                                </div>
                            </HoverCardTrigger>
                            <HoverCardContent>
                                <div className="text-sm">
                                    <p className="font-semibold">Analítica</p>
                                    <p className="text-muted-foreground">
                                        Obtén insights valiosos con nuestras
                                        herramientas de análisis de datos.
                                    </p>
                                </div>
                            </HoverCardContent>
                        </HoverCard>
                    </div>
                    <div
                        ref={div4Ref}
                        className="absolute right-6 bottom-0 z-10 flex size-18 -translate-y-1/2 items-center justify-center rounded-full bg-transparent p-1 lg:top-0 lg:left-50"
                    >
                        <HoverCard>
                            <HoverCardTrigger>
                                <div className="flex size-10 items-center justify-center rounded-lg border border-border bg-background p-[5px]">
                                    <div className="flex size-full items-center justify-center rounded-md border border-border bg-muted">
                                        <HeartHandshake size={16} />
                                    </div>
                                </div>
                            </HoverCardTrigger>
                            <HoverCardContent>
                                <div className="text-sm">
                                    <p className="font-semibold">
                                        Colaboración
                                    </p>
                                    <p className="text-muted-foreground">
                                        Trabajamos juntos para alcanzar tus
                                        objetivos de negocio.
                                    </p>
                                </div>
                            </HoverCardContent>
                        </HoverCard>
                    </div>
                    <div
                        ref={div5Ref}
                        className="absolute top-20 z-10 flex size-18 -translate-y-1/2 items-center justify-center rounded-full bg-transparent p-1 lg:top-100 lg:left-50"
                    >
                        <HoverCard>
                            <HoverCardTrigger>
                                <div className="flex size-10 items-center justify-center rounded-lg border border-border bg-background p-[5px]">
                                    <div className="flex size-full items-center justify-center rounded-md border border-border bg-muted">
                                        <Bot size={16} />
                                    </div>
                                </div>
                            </HoverCardTrigger>
                            <HoverCardContent>
                                <div className="text-sm">
                                    <p className="font-semibold">
                                        Inteligencia Artificial
                                    </p>
                                    <p className="text-muted-foreground">
                                        Implementamos chatbots y soluciones de
                                        IA para automatizar procesos.
                                    </p>
                                </div>
                            </HoverCardContent>
                        </HoverCard>
                    </div>
                </div>
                <div
                    ref={div6Ref}
                    className="z-10 flex size-32 items-center justify-center rounded-3xl bg-white drop-shadow-[0_0px_7px_rgba(255,255,255,0.65)] lg:size-42"
                >
                    <span className="text-primary font-bold text-2xl">
                        Devs
                    </span>
                    <samp className="px-1.5 py-0.5 text-2xl bg-primary text-white font-semibold rounded">
                        hub
                    </samp>
                </div>
                <div
                    ref={div7Ref}
                    className="z-10 mt-40 flex size-15 items-center justify-center rounded-xl bg-white drop-shadow-[0_0px_7px_rgba(255,255,255,0.65)] lg:mt-0"
                >
                    <Store size={32} className="text-black" />
                </div>
            </div>

            <div className="block lg:hidden">
                <AnimatedBeam
                    duration={3}
                    endYOffset={-60}
                    direction="vertical"
                    endXOffset={-10}
                    curvature={10}
                    containerRef={containerRef}
                    fromRef={div1Ref}
                    toRef={div6Ref}
                />
                <AnimatedBeam
                    duration={3}
                    endYOffset={-60}
                    endXOffset={10}
                    curvature={10}
                    containerRef={containerRef}
                    fromRef={div2Ref}
                    toRef={div6Ref}
                    direction="vertical"
                />
                <AnimatedBeam
                    duration={3}
                    containerRef={containerRef}
                    fromRef={div3Ref}
                    toRef={div6Ref}
                    direction="vertical"
                />
                <AnimatedBeam
                    duration={3}
                    containerRef={containerRef}
                    fromRef={div4Ref}
                    toRef={div6Ref}
                    direction="vertical"
                />

                <AnimatedBeam
                    duration={3}
                    containerRef={containerRef}
                    fromRef={div5Ref}
                    toRef={div7Ref}
                    direction="vertical"
                />
                <AnimatedBeam
                    duration={3}
                    containerRef={containerRef}
                    fromRef={div6Ref}
                    toRef={div7Ref}
                    direction="vertical"
                />
            </div>

            <div className="hidden lg:block">
                <AnimatedBeam
                    duration={3}
                    containerRef={containerRef}
                    fromRef={div1Ref}
                    toRef={div6Ref}
                />
                <AnimatedBeam
                    endYOffset={-30}
                    endXOffset={60}
                    duration={3}
                    curvature={-140}
                    containerRef={containerRef}
                    fromRef={div2Ref}
                    toRef={div6Ref}
                />
                <AnimatedBeam
                    duration={3}
                    endYOffset={30}
                    curvature={140}
                    containerRef={containerRef}
                    fromRef={div3Ref}
                    toRef={div6Ref}
                />
                <AnimatedBeam
                    duration={3}
                    endYOffset={-30}
                    endXOffset={-60}
                    curvature={-180}
                    containerRef={containerRef}
                    fromRef={div4Ref}
                    toRef={div6Ref}
                />

                <AnimatedBeam
                    duration={3}
                    endXOffset={-60}
                    endYOffset={30}
                    curvature={180}
                    containerRef={containerRef}
                    fromRef={div5Ref}
                    toRef={div6Ref}
                />
                <AnimatedBeam
                    duration={3}
                    containerRef={containerRef}
                    fromRef={div6Ref}
                    toRef={div7Ref}
                />
            </div>
        </div>
    );
}
