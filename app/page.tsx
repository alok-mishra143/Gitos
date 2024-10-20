import { HeroSection } from "@/components/hero-section";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <HeroSection />
    </div>
  );
}
