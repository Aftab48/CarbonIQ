import CarbonCalculator from "@/components/CarbonCalculator";
import CalculatorPie from "@/components/charts/CalculatorPie";
import { useState } from "react";

interface FormData {
  electricBill: number;
  gasBill: number;
  oilBill: number;
  carMileage: number;
  shortFlights: number;
  longFlights: number;
  recycleNewspapers: boolean;
  recycleAluminums: boolean;
}

const Calculator: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    electricBill: 0,
    gasBill: 0,
    oilBill: 0,
    carMileage: 0,
    shortFlights: 0,
    longFlights: 0,
    recycleNewspapers: false,
    recycleAluminums: false,
  });

  const handleFormSubmit = (data: FormData) => {
    console.log("Form data:", data); // Check if this logs the data
    setFormData(data);
  };

  return (
    <section className="bg-slate-50 w-full">
      <div>
        <div className="flex justify-between pt-10 pb-6">
          {/* Heading */}
          <div className="px-6 ml-10">
            <img src="/images/calc-header-img.png" alt="Feet" />
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

        <div className="flex justify-center gap-x-10 items-center">
          {/* Left Side - Calculator */}
          <div className="bg-[#082F4F] rounded-2xl flex p-4 flex-col mb-2">
            <div className="p-4 mb-4">
              <h3 className="uppercase font-bold text-2xl text-[#A8CCD2]">
                carbon footprint calculator
              </h3>
            </div>
            <div className="p-4">
              <CarbonCalculator onSubmit={handleFormSubmit} />
            </div>
          </div>

          {/* Right Side - Analytics */}
          <div className="flex flex-row lg:flex-col justify-center items-center">
            <div className="rounded-2xl">
              <div className="w-[350px] h-[430px]">
                <CalculatorPie data={formData} />
              </div>
            </div>
            <div className="bg-[#AEFBD2] rounded-2xl mb-3">
              <div className="p-4 text-black">
                <div className="mx-2 my-4">
                  <h3 className="uppercase font-bold mb-4 text-2xl">
                    Your Carbon Footprint
                  </h3>
                  <p className="text-[#2D2D2D]">CO2e: 0.00 kg</p>
                  <p className="text-[#2D2D2D]">Pounds: 0.00 lbs</p>
                </div>
                <div className="mx-2 my-4">
                  <h3 className=" font-light text-2xl">
                    CATEGORY: <span className="text-green-600 font-bold">Ideal</span>
                  </h3>
                  <p className="text-[#2D2D2D]">
                    You're doing great! Keep up the eco-friendly lifestyle!
                  </p>
                </div>
                <div className="mx-2 my-4">
                  <p className="text-[#2D2D2D] drop-shadow-lg italic hover:underline hover:cursor-pointer ">
                    See more tips
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
