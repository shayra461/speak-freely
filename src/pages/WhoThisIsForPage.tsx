import { Navbar } from "@/components/Navbar";
import { ProblemSection } from "@/components/ProblemSection";
import { Footer } from "@/components/Footer";

const WhoThisIsForPage = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <main className="pt-24">
                <ProblemSection />
            </main>
            <Footer />
        </div>
    );
};

export default WhoThisIsForPage;
