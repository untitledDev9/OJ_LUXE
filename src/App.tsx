import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Collections from "./components/Collections";
import ProductGallery from "./components/ProductGallery";
import WhyOJLuxe from "./components/WhyOJLuxe";
import BrandStatement from "./components/BrandStatement";
import ContactCTA from "./components/ContactCTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-ink">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Collections />
        <ProductGallery />
        <WhyOJLuxe />
        <BrandStatement />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
