import { Sparkles } from 'lucide-react';
import { ThreeDMarquee } from '@/components/ui/3d-marquee';
import { Button } from '@/components/ui/button';

const FeatureDesarrolloWeb = () => {
    const images = [
        '/images/featureDesarrolloWeb/image2.avif',
        '/images/featureDesarrolloWeb/image3.avif',
        '/images/featureDesarrolloWeb/image4.avif',
        '/images/featureDesarrolloWeb/image5.avif',
        '/images/featureDesarrolloWeb/image6.avif',
        '/images/featureDesarrolloWeb/image7.avif',
        '/images/featureDesarrolloWeb/image8.avif',
        '/images/featureDesarrolloWeb/image9.avif',
        '/images/featureDesarrolloWeb/image10.avif',
        '/images/featureDesarrolloWeb/image11.avif',
        '/images/featureDesarrolloWeb/image12.avif',
        '/images/featureDesarrolloWeb/image13.avif',
        '/images/featureDesarrolloWeb/image14.avif',
        '/images/featureDesarrolloWeb/image15.avif',
        '/images/featureDesarrolloWeb/image16.avif',
        '/images/featureDesarrolloWeb/image17.avif',
        '/images/featureDesarrolloWeb/image18.avif',
        '/images/featureDesarrolloWeb/image19.avif',
        '/images/featureDesarrolloWeb/image20.avif',
        '/images/featureDesarrolloWeb/image21.avif',
        '/images/featureDesarrolloWeb/image22.avif',
        '/images/featureDesarrolloWeb/image23.avif',
        '/images/featureDesarrolloWeb/image3.avif',
        '/images/featureDesarrolloWeb/image4.avif',
        '/images/featureDesarrolloWeb/image5.avif',
        '/images/featureDesarrolloWeb/image2.avif',
        '/images/featureDesarrolloWeb/image8.avif',
        '/images/featureDesarrolloWeb/image9.avif',
        '/images/featureDesarrolloWeb/image10.avif',
        '/images/featureDesarrolloWeb/image11.avif',
    ];

    return (
        <section className="relative h-full w-full overflow-hidden py-32">
            <div className="container mx-auto grid grid-cols-1 items-center gap-5 px-4 lg:grid-cols-2">
                <div className="flex h-full flex-col justify-center">
                    <div className="flex items-center gap-2">
                        <Sparkles className="fill-foreground size-5" />
                        <p className="w-fit rounded-full py-1 font-medium tracking-tight">
                            Tu aliado en desarrollo web y móvil
                        </p>
                    </div>
                    <h2 className="font-cocogoose mt-3 mb-8 max-w-xl text-2xl leading-tight tracking-tighter lg:max-w-3xl lg:text-6xl">
                        Tu sueño digital, nuestro compromiso
                    </h2>
                    <p className="text-muted-foreground max-w-xl md:text-xl">
                        Alcanza nuevas alturas con nuestras soluciones de desarrollo web y móvil a
                        medida. Desde aplicaciones móviles intuitivas hasta sitios web dinámicos,
                        estamos aquí para transformar tus ideas en realidades digitales que cautivan
                        y convierten.
                    </p>
                    <div className="mt-10 flex gap-4">
                        <Button asChild size="lg" className="w-full md:w-auto">
                            <a
                                href="https://api.whatsapp.com/send?phone=56934248692&text=Hola%2C%20quiero%20comenzar%20mi%20proyecto"
                                target="_blank"
                                rel="noopener noreferrer">
                                Comienza tu proyecto
                            </a>
                        </Button>
                        <Button variant="outline" size="lg" className="w-full md:w-auto">
                            Consulta nuestros servicios
                        </Button>
                    </div>
                </div>

                <div className="items-center justify-center">
                    <ThreeDMarquee className="rounded-none" images={images} />
                </div>
            </div>
        </section>
    );
};

export { FeatureDesarrolloWeb };
