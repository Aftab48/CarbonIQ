import Calculator from "@/sections/Calculator";
import Statistics from "@/sections/Statistics";
import React from "react";

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Statistics />
      <Calculator />
    </div>
  );
};

export default Services;
