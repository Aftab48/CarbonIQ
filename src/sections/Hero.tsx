import React from "react";
import HeroSection from "./HeroSection";
import CardComponent from "@/components/CardComponent";

const Hero: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <CardComponent />
    </div>
  );
};

export default Hero;
