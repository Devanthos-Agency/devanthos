import { Sparkles } from 'lucide-react';
import { ThreeDMarquee } from '@/components/ui/3d-marquee';
import { Button } from '@/components/ui/button';

const FeatureDesarrolloWeb = () => {
    const images = [
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img1.jpeg',
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img2.jpeg',
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img3.jpeg',
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img4.jpeg',
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img5.jpeg',
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img6.jpeg',
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img7.jpeg',
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img8.jpeg',
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img9.jpeg',
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img10.jpeg',
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img11.jpeg',
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img12.jpeg',
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img13.jpeg',
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img14.jpeg',
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img15.jpeg',
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img16.jpeg',
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img17.jpeg',
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img18.jpeg',
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img19.jpeg',
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img20.jpeg',
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img21.jpeg',
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img22.jpeg',
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img23.jpeg',
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img24.jpeg',
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img25.jpeg',
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img26.jpeg',
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img27.jpeg',
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img1.jpeg',
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img2.jpeg',
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img3.jpeg',
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img4.jpeg',
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img5.jpeg',
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img6.jpeg',
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img7.jpeg',
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img8.jpeg',
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img9.jpeg',
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
                    <h1 className="font-cocogoose mt-3 mb-8 max-w-xl text-5xl tracking-tighter lg:max-w-3xl lg:text-6xl">
                        Tu sueño digital, nuestro compromiso
                    </h1>
                    <p className="text-muted-foreground max-w-xl">
                        Alcanza nuevas alturas con nuestras soluciones de desarrollo web y móvil a
                        medida. Desde aplicaciones móviles intuitivas hasta sitios web dinámicos,
                        estamos aquí para transformar tus ideas en realidades digitales que cautivan
                        y convierten.
                    </p>
                    <div className="mt-10 flex gap-4">
                        <Button size="lg" className="w-full md:w-auto">
                            Comienza tu proyecto
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
