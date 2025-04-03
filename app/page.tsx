import Header from "./_LandingPageCompoenets/Header";
import HeroSection from "./_LandingPageCompoenets/HeroSection";
import Features from "./_LandingPageCompoenets/Features";
import Testimonials from "./_LandingPageCompoenets/Testimonials";
import ProductsSection from "./_LandingPageCompoenets/ProductsSection";
import Footer from "./_LandingPageCompoenets/Footer";
export default function InnovativeLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white mx-auto">
      {/* Floating Navigation */}
      <Header />

      {/* Interactive Hero Section */}
      <HeroSection />

      {/* Innovative Category Showcase */}
      <ProductsSection />

      {/* Interactive Features Section */}
      <Features />

      {/* Testimonials with Interactive Scroll */}
      <Testimonials />

      {/* Interactive CTA Section */}
      <Footer />

      {/* Video Modal */}
    </div>
  );
}
