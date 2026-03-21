import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import WorkGrid from "@/components/WorkGrid";
import WorkTypes from "@/components/WorkTypes";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Marquee />
      <WorkGrid />
      <WorkTypes />
      <About />
      <Testimonials />
      <BookingCTA />
      <Footer />
    </main>
  );
}
