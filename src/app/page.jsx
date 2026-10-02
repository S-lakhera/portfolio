import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WorkSection from "@/components/WorkSection";
import Philosophy from "@/components/Philosophy";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-[#090A0C] min-h-screen text-[#EFEFEF] overflow-hidden selection:bg-[#E2F163] selection:text-[#090A0C]">
      {/* Ambient Noise Grid Background */}
      <div className="fixed inset-0 bg-noise opacity-30 pointer-events-none z-0" />

      {/* Structured Core Sections */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <WorkSection />
        <Philosophy />
        <About />
        <Footer />
      </div>
    </main>
  );
}
