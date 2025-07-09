import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import AgentsSection from "@/components/AgentsSection";
import ManifestoSection from "@/components/ManifestoSection";
import ToolkitSection from "@/components/ToolkitSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen brand-bg brand-text">
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <AgentsSection />
      <ManifestoSection />
      <ToolkitSection />
      <Footer />
    </div>
  );
}
