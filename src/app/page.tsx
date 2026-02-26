import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AccreditationBar } from "@/components/AccreditationBar";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Mission } from "@/components/Mission";
import { Features } from "@/components/Features";
import { Resources } from "@/components/Resources";
import { Careers } from "@/components/Careers";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { AccessibilityWidget } from "@/components/AccessibilityWidget";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <AccreditationBar />
      <About />
      <Services />
      <Mission />
      <Features />
      <Resources />
      <Careers />
      <Contact />
      <Footer />
      <AccessibilityWidget />
    </main>
  );
}
