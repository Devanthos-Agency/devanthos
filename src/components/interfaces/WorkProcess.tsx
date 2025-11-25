import { motion } from 'motion/react';
import { DownloadIcon, Rocket } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface WorkProcessProps {
    phases: {
        id: string;
        phase: string;
        title: string;
        titleReduced?: string;
        date: string;
        heading: string;
        description: string;
        imageSrc: string;
        imageAlt: string;
        icon?: any;
        features?: string[];
    }[];
}

const WorkProcess = ({ phases }: WorkProcessProps) => {
    return (
        <section className="bg-background">
            <div className="container mx-auto flex flex-col items-center justify-center px-4 py-32">
                <h2 className="font-cocogoose mb-12 text-5xl tracking-tighter lg:text-6xl">
                    Nuestro Proceso de Trabajo
                </h2>
                <p className="text-muted-foreground text-xl lg:mb-25">
                    Metodología ágil con entregas cada 2 semanas para máxima transparencia
                </p>
                <Tabs defaultValue="phase1" className="w-full">
                    <TabsList className="grid w-full grid-cols-3 bg-transparent p-0">
                        {phases.map((phase) => (
                            <TabsTrigger
                                key={phase.id}
                                className="text-md data-[state=active]:border-b-foreground rounded-none border-b-2 py-3 shadow-none!"
                                value={phase.id}>
                                <span className="text-foreground/40 hidden font-mono md:inline">
                                    {phase.phase}
                                </span>
                                <samp className="hidden md:inline">{phase.title}</samp>
                                <span className="md:hidden">{phase.titleReduced}</span>
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    {phases.map((phase) => (
                        <TabsContent
                            key={phase.id}
                            value={phase.id}
                            className="mt-12 grid items-start gap-12 lg:grid-cols-2">
                            <div className="col-span-1 flex flex-col gap-2 lg:max-w-lg lg:gap-4">
                                <h2 className="text-foreground font-cocogoose text-3xl tracking-tighter md:text-5xl">
                                    {phase.heading}
                                </h2>
                                <p className="text-muted-foreground text-lg font-normal tracking-tighter">
                                    {phase.description}
                                </p>
                                <Button
                                    variant="outline"
                                    className="border-border mt-8 flex w-fit items-center gap-2 rounded-full border px-4! py-2">
                                    <Rocket className="size-4" />
                                    <p className="text-md text-foreground font-medium">
                                        Contáctanos{' '}
                                        <span className="text-primary/80 dark:text-secondary">
                                            para más información
                                        </span>
                                    </p>
                                </Button>
                            </div>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 100, y: 0 }}
                                transition={{ ease: [0, 0.71, 0.2, 1.01], duration: 0.8 }}
                                className="relative z-20 col-span-1">
                                <Card className="group border-border bg-background h-110 w-full rounded-3xl border p-2 shadow-none">
                                    <CardContent className="border-background bg-muted size-full rounded-2xl border-2">
                                        <img
                                            src={phase.imageSrc}
                                            className="size-full object-cover transition-all ease-in-out group-hover:scale-95"
                                            alt={phase.imageAlt}
                                        />
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </section>
    );
};

export { WorkProcess };
