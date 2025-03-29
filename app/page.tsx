import Image from "next/image";
import Navbar from "./_NavbarCompoenets/Navbar";
import { HeroSlider } from "./_HeroCompoents/Hero";
import { FeatureCard } from "./_HeroCompoents/Features";
import UnderHeroSection from "./_underHeroSectionComponents/underHero";
import { CategoriesSection } from "./_underHeroSectionComponents/CategoriesSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSlider />
      <FeatureCard />
      <div className="container mx-auto mt-16">
        <UnderHeroSection />
        <CategoriesSection />
      </div>
    </div>
  );
}
