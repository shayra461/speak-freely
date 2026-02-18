import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Play, ArrowRight, Lock, Shield } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { motion } from "framer-motion";

export const WorkplaceSituationsSection = () => {
    return (
        <section className="relative py-24 bg-slate-950 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[100px]"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px]"
                    animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 10, repeat: Infinity }}
                />
            </div>

            <div className="container px-4 mx-auto relative z-10">
                <FadeIn>
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight">
                            Real Workplace Situations <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">
                                We Help Navigate
                            </span>
                        </h2>
                        <p className="text-slate-400 text-lg">
                            See how our confidential coaching helps professionals resolve complex issues
                            without escalating to HR or legal immediately.
                        </p>
                    </div>
                </FadeIn>

                <div className="grid lg:grid-cols-12 gap-8 items-start mb-16">
                    {/* Main Active Scenario - Takes up 7 cols */}
                    <div className="lg:col-span-7">
                        <FadeIn delay={0.2} direction="right">
                            <Card className="bg-slate-900/50 border-slate-800 overflow-hidden backdrop-blur-sm">
                                <div className="aspect-video relative bg-black group">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none" />
                                    <video
                                        className="w-full h-full object-cover"
                                        controls
                                        poster="/speak-freely/videos/story-1-thumbnail.png"
                                    >
                                        <source src="/speak-freely/videos/story-1.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                    <div className="absolute top-4 left-4 z-20">
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/20 border border-sky-500/30 backdrop-blur-md text-sky-300 text-xs font-medium">
                                            <Play className="w-3 h-3 fill-current" />
                                            Now Playing
                                        </span>
                                    </div>
                                </div>
                                <CardContent className="p-8">
                                    <div className="flex items-start justify-between gap-4 mb-6">
                                        <div>
                                            <h3 className="text-2xl font-bold text-white mb-2">
                                                Salary Delayed, Communication Avoided
                                            </h3>
                                            <p className="text-slate-400 text-sm">
                                                Case Scenario #01 • Healthcare Administration
                                            </p>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-3 gap-6 text-sm border-t border-slate-800 pt-6">
                                        <div>
                                            <h4 className="text-sky-400 font-semibold mb-2 flex items-center gap-2">
                                                <Lock className="w-4 h-4" /> Situation
                                            </h4>
                                            <p className="text-slate-300 leading-relaxed">
                                                Mid-level administrator unpaid for two months. HR vague. Feared retaliation.
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="text-indigo-400 font-semibold mb-2 flex items-center gap-2">
                                                <Shield className="w-4 h-4" /> Focus
                                            </h4>
                                            <p className="text-slate-300 leading-relaxed">
                                                Documenting communication. Clarifying contracts. Preparing exclusively for leadership discussion.
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="text-emerald-400 font-semibold mb-2 flex items-center gap-2">
                                                <ArrowRight className="w-4 h-4" /> Outcome
                                            </h4>
                                            <p className="text-slate-300 leading-relaxed">
                                                Created a calm, step-by-step plan. Regained confidence to address directly.
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </FadeIn>
                    </div>

                    {/* Upcoming Scenarios - Vertical Stack - Takes up 5 cols */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="flex items-center justify-between text-white mb-2">
                            <h3 className="font-semibold text-lg">Upcoming Scenarios</h3>
                        </div>

                        {/* Placeholder 1 */}
                        <FadeIn delay={0.3} direction="left">
                            <Card className="group bg-slate-900/30 border-slate-800 hover:bg-slate-800/50 transition-colors cursor-default">
                                <div className="flex gap-4 p-4">
                                    <div className="w-32 shrink-0 aspect-video bg-slate-800 rounded-md flex items-center justify-center relative overflow-hidden">
                                        <div className="absolute inset-0 bg-slate-700/20 group-hover:bg-slate-700/30 transition-colors" />
                                        <Play className="w-8 h-8 text-slate-600" />
                                    </div>
                                    <div className="flex-1 py-1">
                                        <div className="h-5 w-3/4 bg-slate-800 rounded mb-3 animate-pulse" />
                                        <div className="space-y-2">
                                            <div className="h-3 w-full bg-slate-800/60 rounded animate-pulse" />
                                            <div className="h-3 w-2/3 bg-slate-800/60 rounded animate-pulse" />
                                        </div>
                                        <div className="mt-3 inline-flex items-center text-xs font-medium text-slate-500">
                                            Coming Soon
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </FadeIn>

                        {/* Placeholder 2 */}
                        <FadeIn delay={0.4} direction="left">
                            <Card className="group bg-slate-900/30 border-slate-800 hover:bg-slate-800/50 transition-colors cursor-default">
                                <div className="flex gap-4 p-4">
                                    <div className="w-32 shrink-0 aspect-video bg-slate-800 rounded-md flex items-center justify-center relative overflow-hidden">
                                        <div className="absolute inset-0 bg-slate-700/20 group-hover:bg-slate-700/30 transition-colors" />
                                        <Play className="w-8 h-8 text-slate-600" />
                                    </div>
                                    <div className="flex-1 py-1">
                                        <div className="h-5 w-2/3 bg-slate-800 rounded mb-3 animate-pulse" />
                                        <div className="space-y-2">
                                            <div className="h-3 w-full bg-slate-800/60 rounded animate-pulse" />
                                            <div className="h-3 w-1/2 bg-slate-800/60 rounded animate-pulse" />
                                        </div>
                                        <div className="mt-3 inline-flex items-center text-xs font-medium text-slate-500">
                                            Coming Soon
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </FadeIn>

                        <FadeIn delay={0.5}>
                            <div className="bg-gradient-to-r from-sky-500/10 to-indigo-500/10 rounded-xl p-6 border border-sky-500/20 text-center">
                                <h4 className="text-white font-medium mb-2">Have a specific situation?</h4>
                                <p className="text-slate-400 text-sm mb-4">We help with conflict, negotiation, harassment, burnout, and more.</p>
                                <Button asChild variant="outline" className="border-sky-500/50 text-sky-400 hover:bg-sky-500/10 hover:text-sky-300 w-full">
                                    <Link to="/contact">Discuss Your Situation</Link>
                                </Button>
                            </div>
                        </FadeIn>

                    </div>
                </div>

                <div className="text-center">
                    <Button asChild size="lg" className="bg-sky-600 hover:bg-sky-500 text-white px-8 rounded-full shadow-lg shadow-sky-900/20">
                        <Link to="/workplace-scenarios" className="flex items-center gap-2">
                            View All Scenarios
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};
