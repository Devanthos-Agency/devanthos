import {
    Facebook,
    Linkedin,
    Twitter,
    CheckCircle,
    AlertCircle,
    Instagram,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

// Schema de validación con Zod
const contactFormSchema = z.object({
    fullName: z
        .string()
        .min(2, "El nombre debe tener al menos 2 caracteres")
        .max(50, "El nombre no puede exceder los 50 caracteres"),
    email: z.string().email("Por favor ingrese un email válido"),
    companyName: z.string().optional(),
    employeeCount: z.string().optional(),
    message: z
        .string()
        .min(10, "El mensaje debe tener al menos 10 caracteres")
        .max(500, "El mensaje no puede exceder los 500 caracteres"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
    const [submitStatus, setSubmitStatus] = useState<
        "idle" | "success" | "error"
    >("idle");

    const form = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            fullName: "",
            email: "",
            companyName: "",
            employeeCount: "",
            message: "",
        },
    });

    const onSubmit = async (data: ContactFormData) => {
        try {
            setSubmitStatus("idle");

            // Aquí puedes implementar la lógica para enviar el formulario
            console.log("Datos del formulario:", data);

            // Simular envío
            await new Promise((resolve) => setTimeout(resolve, 1000));

            // Resetear formulario después del envío exitoso
            form.reset();
            setSubmitStatus("success");

            // Limpiar el estado después de 5 segundos
            setTimeout(() => setSubmitStatus("idle"), 5000);
        } catch (error) {
            console.error("Error al enviar el formulario:", error);
            setSubmitStatus("error");

            // Limpiar el estado después de 5 segundos
            setTimeout(() => setSubmitStatus("idle"), 5000);
        }
    };
    return (
        <section className="relative mx-2.5 mt-2.5 rounded-t-2xl rounded-b-[36px] bg-linear-to-b from-accent via-background to-background py-32 lg:mx-4 dark:from-accent">
            <div className="container max-w-2xl mx-auto px-2 md:px-6 lg:px-8">
                <h2 className="text-center text-4xl font-cocogoose font-normal tracking-tight lg:text-5xl">
                    Contáctenos
                </h2>
                <p className="mt-4 text-center leading-snug font-medium text-muted-foreground lg:mx-auto">
                    ¿Tiene preguntas o comentarios? Nos encantaría saber de
                    usted. Complete el formulario a continuación y nos pondremos
                    en contacto con usted lo antes posible.
                </p>

                <div className="mt-10 flex justify-between gap-8 max-sm:flex-col md:mt-14 lg:mt-20 lg:gap-12">
                    <div>
                        <h3 className="font-semibold">Dirección</h3>
                        <p className="mt-3 text-muted-foreground">
                            San Juan - Argentina
                            <br />
                            Coquimbo - Chile
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold">Nuestro email</h3>
                        <div className="mt-3">
                            <div>
                                <p className="text-primary">
                                    Para consultas generales
                                </p>
                                <a
                                    href="mailto:contacto@devanthos.com"
                                    className="text-muted-foreground hover:text-foreground"
                                >
                                    contacto@devanthos.com
                                </a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold">Redes sociales</h3>
                        <div className="mt-3 flex gap-6 lg:gap-10">
                            <a
                                href="https://www.facebook.com/profile.php?id=61578188440906"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                <Facebook className="size-5" />
                            </a>
                            <a
                                href="https://www.instagram.com/devanthos/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                <Instagram className="size-5" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/devanthos-agency-078883374/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                <Linkedin className="size-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <DashedLine className="my-12" />

                {/* Inquiry Form */}
                <div className="mx-auto">
                    <h3 className="text-lg font-semibold">
                        Envíenos un mensaje
                    </h3>

                    {/* Estado de envío */}
                    {submitStatus === "success" && (
                        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-green-600" />
                            <p className="text-green-800 font-medium">
                                ¡Mensaje enviado exitosamente! Nos pondremos en
                                contacto contigo pronto.
                            </p>
                        </div>
                    )}

                    {submitStatus === "error" && (
                        <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
                            <AlertCircle className="h-5 w-5 text-red-600" />
                            <p className="text-red-800 font-medium">
                                Error al enviar el mensaje. Por favor, inténtelo
                                de nuevo.
                            </p>
                        </div>
                    )}

                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="mt-8 space-y-5"
                        >
                            <FormField
                                control={form.control}
                                name="fullName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Nombre completo{" "}
                                            <span className="text-muted-foreground">
                                                (requerido)
                                            </span>
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Nombre y apellido"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Email{" "}
                                            <span className="text-muted-foreground">
                                                (requerido)
                                            </span>
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="me@company.com"
                                                type="email"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="companyName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Nombre de la compañía{" "}
                                            <span className="text-muted-foreground">
                                                (opcional)
                                            </span>
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Nombre de la compañía"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="employeeCount"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Número de empleados{" "}
                                            <span className="text-muted-foreground">
                                                (opcional)
                                            </span>
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="ej. 10-50"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Tu mensaje{" "}
                                            <span className="text-muted-foreground">
                                                (requerido)
                                            </span>
                                        </FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Escriba su mensaje aquí..."
                                                className="min-h-[120px] resize-none"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <div className="flex justify-end">
                                <Button
                                    size="lg"
                                    type="submit"
                                    disabled={form.formState.isSubmitting}
                                >
                                    {form.formState.isSubmitting
                                        ? "Enviando..."
                                        : "Enviar"}
                                </Button>
                            </div>
                        </form>
                    </Form>
                </div>
            </div>
        </section>
    );
}

interface DashedLineProps {
    orientation?: "horizontal" | "vertical";
    className?: string;
}

const DashedLine = ({
    orientation = "horizontal",
    className,
}: DashedLineProps) => {
    const isHorizontal = orientation === "horizontal";

    return (
        <div
            className={cn(
                "relative text-muted-foreground",
                isHorizontal ? "h-px w-full" : "h-full w-px",
                className
            )}
        >
            <div
                className={cn(
                    isHorizontal
                        ? [
                              "h-px w-full",
                              "bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,currentColor_4px,currentColor_10px)]",
                              "[mask-image:linear-gradient(90deg,transparent,black_25%,black_75%,transparent)]",
                          ]
                        : [
                              "h-full w-px",
                              "bg-[repeating-linear-gradient(180deg,transparent,transparent_4px,currentColor_4px,currentColor_8px)]",
                              "[mask-image:linear-gradient(180deg,transparent,black_25%,black_75%,transparent)]",
                          ]
                )}
            />
        </div>
    );
};
