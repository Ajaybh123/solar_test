import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Hero } from "@/components/home/Hero";
import { TrustSection } from "@/components/home/TrustSection";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { CalculatorTeaser } from "@/components/home/CalculatorTeaser";
import { ProjectsPreview } from "@/components/home/ProjectsPreview";
import { ContactCTA } from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TrustSection />
        <ServicesPreview />
        <CalculatorTeaser />
        <ProjectsPreview />
        <ContactCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}