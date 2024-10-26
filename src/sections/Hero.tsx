import React from "react";
import HeroSection from "./HeroSection";
import CardComponent from "@/components/CardComponent";
import Forest from "@/components/Forest";
import CarbonFootprint from "@/components/CarbonFootprint";

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
