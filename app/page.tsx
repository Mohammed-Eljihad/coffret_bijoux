import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import Hero from "@/components/sections/Hero";
import Benefits from "@/components/sections/Benefits";
import ProductDetails from "@/components/sections/ProductDetails";
import Variants from "@/components/sections/Variants";
import Materials from "@/components/sections/Materials";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen selection:bg-gold/30 selection:text-charcoal">
        <Hero />
        <Benefits />
        <ProductDetails />
        <Variants />
        <Materials />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
