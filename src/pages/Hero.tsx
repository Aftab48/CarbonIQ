import React from "react";
import CardComponent from "@/sections/CardComponent";
import Forest from "@/components/Forest";
import CarbonFootprint from "@/sections/CarbonFootprint";
import HeroSection from "@/sections/HeroSection";

const Hero: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <CardComponent />
      <Forest />
      <CarbonFootprint />
    </div>
  );
};

export default Hero;
