import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WorkplaceSituationsSection } from "@/components/WorkplaceSituationsSection";
import { useEffect } from "react";

const WorkplaceScenariosPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow pt-20">
                <WorkplaceSituationsSection />
            </main>
            <Footer />
        </div>
    );
};

export default WorkplaceScenariosPage;
