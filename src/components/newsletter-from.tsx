import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z
    .object({
        email: z.string().email({ message: "Invalid email address" }),
    })
    .required({ email: true });

export default function NewsletterFrom() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                <div className="flex items-start gap-3">
                    <div className="w-full">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            type="email"
                                            id="emailInput"
                                            placeholder="Ingresa tu correo electrónico"
                                            className="block h-9 w-full border bg-inherit p-7 text-lg placeholder-muted-foreground placeholder:text-lg"
                                        />
                                    </FormControl>
                                    <FormMessage className="text-sm" />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="shrink-0">
                        <Button
                            type="submit"
                            className="h-14 w-14 rounded-lg border border-muted"
                            size="icon"
                            variant="secondary"
                        >
                            <span className="sr-only">Subscribe</span>
                            <ArrowRight className="size-6 stroke-foreground" />
                        </Button>
                    </div>
                </div>
            </form>
        </Form>
    );
}
