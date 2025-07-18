import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { AuroraText } from "@/components/magicui/aurora-text";

export default function ContainerScrollSection() {
    return (
        <section className="">
            <div className="container mx-auto px-2 md:px-6 lg:px-8">
                <ContainerScroll
                    titleComponent={
                        <>
                            <p className="mx-auto mb-4 text-muted-foreground md:text-xl">
                                Obtenga una interfaz de usuario hermosa y
                                moderna
                            </p>
                            <h1 className="text-6xl font-cocogoose text-center font-normal tracking-tighter md:text-8xl xl:text-[10rem]">
                                <span className="pr-6 text-muted-foreground/40">
                                    Con
                                </span>
                                <AuroraText
                                    colors={[
                                        "#4c5dab",
                                        "#4c5dab",
                                        "#f182f1",
                                        "#f182f1",
                                        "#614cb9",
                                        "#614cb9",
                                    ]}
                                >
                                    Devanthos
                                </AuroraText>
                            </h1>
                        </>
                    }
                >
                    <img
                        src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/dashboard/admin-dashboard-1.png"
                        alt="hero"
                        height={720}
                        width={1400}
                        className="mx-auto h-full rounded-2xl object-cover object-left-top"
                        draggable={false}
                    />
                </ContainerScroll>
            </div>
        </section>
    );
}
