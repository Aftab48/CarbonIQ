import CarbonCalculator from "@/components/CarbonCalculator";
import EmissionStatsArea from "@/components/charts/EmissionStatsArea";
import EmissionStatsPie from "@/components/charts/EmissionStatsPie";

const Calculator = () => {
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

        <div className="p-6 flex w-full justify-center items-center flex-col lg:flex-row">
          {/* Left Side - Calculator */}
          <div className="bg-[#082F4F] rounded-2xl flex justify-center items-center flex-col">
            <div className="p-4 mb-4">
              <h3 className="uppercase font-bold text-2xl text-[#A8CCD2]">
                carbon footprint calculator
              </h3>
            </div>
            <div className="p-4">
              <CarbonCalculator />
            </div>
          </div>

          {/* Right Side - Analytics */}
          <div className="flex flex-col justify-center items-center">
            <div>
              <h1 className="text-4xl">Temporary graphs because i am tired</h1>
              <p className="text-xl"> will do the css later</p>
            </div>
            <div className="rounded-2xl bg-white">
              <div className="w-[600px] h-full">
                <EmissionStatsArea />
              </div>
            </div>
            <div className="rounded-2xl bg-white">
              <div className="w-[350px] h-[430px]">
                <EmissionStatsPie />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
