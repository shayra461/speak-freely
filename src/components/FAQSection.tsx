import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
    return (
        <section className="py-16 bg-slate-50">
            <div className="container px-4 mx-auto max-w-3xl">
                <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
                    Frequently Asked Questions
                </h2>

                <Accordion type="single" collapsible className="w-full space-y-4">
                    <AccordionItem value="item-1" className="bg-white px-6 rounded-lg border shadow-sm">
                        <AccordionTrigger className="text-lg font-medium hover:no-underline">
                            Will my employer ever know?
                        </AccordionTrigger>
                        <AccordionContent className="text-slate-600 leading-relaxed pb-6">
                            Absolute confidentiality is our core promise. Your employer will never know you used
                            this service or what was discussed. We exist to provide a safe space outside of your
                            workplace reporting lines.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2" className="bg-white px-6 rounded-lg border shadow-sm">
                        <AccordionTrigger className="text-lg font-medium hover:no-underline">
                            Is this coaching?
                        </AccordionTrigger>
                        <AccordionContent className="text-slate-600 leading-relaxed pb-6">
                            While our listeners use active listening and coaching techniques to help you clarify
                            your thoughts and feelings, this is primarily a support service designed to help you
                            process your experiences in a safe, judgment-free environment.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3" className="bg-white px-6 rounded-lg border shadow-sm">
                        <AccordionTrigger className="text-lg font-medium hover:no-underline">
                            Is this therapy?
                        </AccordionTrigger>
                        <AccordionContent className="text-slate-600 leading-relaxed pb-6">
                            No, Speak Freely is not clinical therapy. We provide emotional support and a listening ear,
                            but we do not diagnose or treat mental health conditions. If you are in crisis or need
                            clinical support, we can help direct you to appropriate resources.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4" className="bg-white px-6 rounded-lg border shadow-sm">
                        <AccordionTrigger className="text-lg font-medium hover:no-underline">
                            What if my issue is legal?
                        </AccordionTrigger>
                        <AccordionContent className="text-slate-600 leading-relaxed pb-6">
                            We are not legal professionals and cannot offer legal advice. If your concerns involve
                            legal matters, we highly recommend consulting with a qualified attorney to understand
                            your rights and options.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5" className="bg-white px-6 rounded-lg border shadow-sm">
                        <AccordionTrigger className="text-lg font-medium hover:no-underline">
                            Is this recorded?
                        </AccordionTrigger>
                        <AccordionContent className="text-slate-600 leading-relaxed pb-6">
                            No. To ensure your complete privacy and psychological safety, none of our sessions
                            or calls are ever recorded. What you say here, stays here.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
};
