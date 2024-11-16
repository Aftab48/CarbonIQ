import CalculatorResultBox from "@/components/CalculatorResultBox";
import CarbonCalculator from "@/components/CarbonCalculator";
import CalculatorPie from "@/components/charts/CalculatorPie";
import { useState } from "react";

export interface Breakdown {
  electricFootprint: number;
  gasFootprint: number;
  oilFootprint: number;
  carFootprint: number;
  shortFlightFootprint: number;
  longFlightFootprint: number;
  newspaperFootprint: number;
  aluminumFootprint: number;
}

interface FootprintData {
  co2e: number;
  pounds: number;
  breakdown: Breakdown;
}

const Calculator: React.FC = () => {
  const [footprintData, setFootprintData] = useState<FootprintData>({
    co2e: 0,
    pounds: 0,
    breakdown: {
      electricFootprint: 0,
      gasFootprint: 0,
      oilFootprint: 0,
      carFootprint: 0,
      shortFlightFootprint: 0,
      longFlightFootprint: 0,
      newspaperFootprint: 0,
      aluminumFootprint: 0,
    },
  });
  const handleCalculation = (co2e: number, pounds: number) => {
    const breakdown: Breakdown = {
      electricFootprint: co2e / 105, // Proper formula should go here
      gasFootprint: co2e / 105,
      oilFootprint: co2e / 113,
      carFootprint: co2e / 0.79,
      shortFlightFootprint: co2e / 1100,
      longFlightFootprint: co2e / 4400,
      newspaperFootprint: co2e / 184,
      aluminumFootprint: co2e / 166,
    };

    console.log(breakdown);

    setFootprintData({
      co2e,
      pounds,
      breakdown,
    });
  };

  return (
    <section className="bg-slate-50 w-full">
      <div>
        <div className="flex justify-between pt-10 pb-6">
          {/* Heading */}
          <div className="px-6 ml-10">
            <img src="/images/calc-header-img.png" alt="calc-'footer'" />
          </div>
          <div className="items-end justify-end flex flex-col">
            <h1 className="text-lg sm:text-xl lg:text-4xl px-6 uppercase font-bold">
              Calculate your lifestyle based carbon footprint
            </h1>
            <div className="h-2 w-[74%] bg-[#126EBA] mt-4" />
            <div className="h-2 w-[69%] bg-[#3DC19E] mt-4" />
            <div className="w-4/6">
              <p className="text-sm sm:text-base text-end lg:text-lg p-2">
                Enter your energy usage, travel, and recycling habits to see
                your CO₂ emissions. Visualize your impact with a detailed pie
                chart, and find out if your footprint falls within the ideal,
                average, or over-average range. Take action toward a more
                sustainable lifestyle today!
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-x-4 w-full px-4">
          {/* Left Side - Calculator */}
          <div className="bg-[#082F4F] rounded-2xl flex flex-col p-4 mb-2 w-full lg:w-[45%]">
            <div className="p-4 mb-4">
              <h3 className="uppercase font-bold text-2xl text-[#A8CCD2]">
                carbon footprint calculator
              </h3>
            </div>
            <div className="p-4">
              <CarbonCalculator onCalculate={handleCalculation} />
            </div>
          </div>

          {/* Right Side - Analytics */}
          <div className="flex flex-col gap-y-5 items-center w-full lg:w-[45%]">
            <div className="w-full max-w-[600px] h-[400px]">
              <CalculatorPie data={footprintData.breakdown} />
            </div>
            <div className="bg-[#AEFBD2] rounded-2xl p-4 w-full max-w-[600px]">
              <CalculatorResultBox
                pounds={footprintData.pounds}
                co2e={footprintData.co2e}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
