import Hero from "@/components/hero";
import Partners from "@/components/partners";
import Stats from "@/components/stats";
import Testimonials from "@/components/testimonials";
import Pricing from "@/components/pricing";
import Faq from "@/components/faq";
import Footer from "@/components/footer";
import ContactWidget from "@/components/contact-widget";

export default function Home() {
  return (
    <main className="relative flex min-h-dvh flex-col overflow-x-hidden">
      <Hero />
      <Partners />
      <Testimonials />
      <Stats />
      <Pricing />
      <Faq />
      <Footer />
      <ContactWidget />
    </main>
  );
}
