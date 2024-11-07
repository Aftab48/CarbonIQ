import EmissionStatsArea from "@/components/charts/EmissionStatsArea";
import EmissionStatsBar from "@/components/charts/EmissionStatsBar";
import EmissionStatsPie from "@/components/charts/EmissionStatsPie";
//import EmissionStatsPie from "@/components/charts/EmissionStatsPie";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { carbonEmitters } from "@/constants";

const Statistics = () => {
  return (
    <section className="bg-[#AEFBD2]">
      <div>
        <div className="pt-10 pb-6">
          <h1 className="text-4xl px-6 font-bold">STATISTICS</h1>
          <div className="h-2 w-72 bg-[#126EBA] mt-4" />
          <div className="h-2 w-60 bg-white mt-4" />
        </div>
        <div className="flex items-start px-2">
          {/* left section */}
          <div className="flex flex-col justify-around items-center w-3/4">
            {/* cards */}
            <div className="flex flex-col lg:flex-row items-center gap-x-8 py-4 justify-center">
              {carbonEmitters.map((emitter, index) => (
                <Card
                  key={index}
                  className="bg-[#082F4F] text-white rounded-2xl"
                >
                  <CardHeader className="flex flex-row px-6 gap-x-4">
                    <CardTitle className="text-base font-light">
                      {emitter.line1} <br className="hidden lg:block" />{" "}
                      {emitter.line2}
                    </CardTitle>
                    <CardDescription>
                      <img src="/images/co2.png" alt="Carbon Footprint Icon" />
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col px-6">
                    <p className="font-bold text-3xl">{emitter.country}</p>
                    <p className="font-bold mt-2">
                      {emitter.emissions} <br />
                      <span className="font-light">per year</span>
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between flex-row px-6 gap-x-4">
                    <p className="font-bold text-3xl">{emitter.percentage}</p>
                    <Progress
                      value={emitter.progressValue}
                      className="bg-gray-400 w-[60%]"
                    />
                  </CardFooter>
                </Card>
              ))}
            </div>

            {/* graphs */}
            <div className="mt-2 pb-6">
              <div className="rounded-2xl py-4 bg-white mx-4 mb-4">
                <h1 className="text-3xl p-4 font-bold">
                  CARBON EMISSIONS BY SECTORS
                </h1>
                <div className="w-full h-[450px]">
                  <EmissionStatsBar />
                </div>
              </div>
              <div className="flex flex-col lg:flex-row justify-center items-center gap-x-4 gap-y-4 py-4">
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

          {/* right section */}
          <div className="flex flex-col p-2 mx-2">
            <Card className="bg-[#25C1D6] m-2 text-white rounded-2xl w-full">
              <CardHeader>
                <CardTitle className="font-bold text-white uppercase text-2xl">
                  Trends in global <br className="hidden lg:block" /> carbon
                  goals
                </CardTitle>
                <CardContent className="text-base p-0 text-white ">
                  <p>
                    <span className="text-[#081E4F]">Yearly Increases:</span>
                    Emissions have been rising by ~
                    <span className="text-[#081E4F]">1-2% </span>per year, with
                    some reductions during economic downturns and the COVID-19
                    pandemic.
                  </p>
                  <p>
                    <span className="text-[#081E4F]">
                      Energy Efficiency Improvements:
                    </span>{" "}
                    Many countries are adopting energy-efficient practices,
                    leading to slower growth in emissions relative to economic
                    output.
                  </p>
                  <p>
                    <span className="text-[#081E4F]">
                      Decarbonization Goals:
                    </span>{" "}
                    Various countries have committed to reducing emissions by
                    adopting renewable energy, improving energy efficiency, and
                    setting targets like Net Zero by{" "}
                    <span className="text-[#081E4F]">
                      2050 (EU, Japan, Canada)
                    </span>{" "}
                    and Net Zero by{" "}
                    <span className="text-[#081E4F]">2070 (India)</span>.
                  </p>
                </CardContent>
              </CardHeader>
            </Card>

            <Card className="bg-[#25C1D6] m-2 text-white rounded-2xl w-full">
              <CardHeader>
                <CardTitle className="font-bold text-white uppercase text-2xl">
                  global emissions <br className="hidden lg:block" /> target and
                  climate <br className="hidden lg:block" /> goals
                </CardTitle>
                <CardContent className="text-base p-0 text-white">
                  <p>
                    <span className="text-[#081E4F]">Paris Agreement:</span>
                    Signed by 196 countries with the aim of limiting global
                    temperature increase to 1.5-2°C above pre-industrial levels.
                  </p>
                  <p>
                    <span className="text-[#081E4F]">
                      Nationally Determined Contributions (NDCs):
                    </span>{" "}
                    Each country&apos;s plan to reduce emissions, which is
                    reviewed every five years.
                  </p>
                  <p>
                    <span className="text-[#081E4F]">
                      Renewable Energy Targets:
                    </span>{" "}
                    <br />
                    <span className="text-[#081E4F]">EU:</span> Target of 32%
                    renewable energy share by 2030.
                    <br />
                    <span className="text-[#081E4F]">China:</span> 25% renewable
                    energy by 2030 and carbon neutrality by 2060.
                    <br />
                    <span className="text-[#081E4F]">India:</span> 50% of
                    electricity from non-fossil fuel sources by 2030.
                    <br />
                  </p>
                </CardContent>
              </CardHeader>
            </Card>
            <p className="p-6 pt-2 text-md font-semibold">
              Global Renewable Energy Mix: Aiming to Lower Carbon Footprints
              Worldwide
            </p>
            {/* <Card className="bg-pink-500 m-2 text-white rounded-2xl">
              <CardHeader>
                <CardTitle className="font-bold text-center text-white uppercase text-2xl">
                  This is a temporary card to trigger your OCD
                </CardTitle>
                <CardContent className="text-base flex justify-center items-center text-white">
                  <img
                    src="/images/a-1.jpg"
                    alt="Iconic"
                    className="w-40 h-40 object-cover rounded-2xl"
                  />
                </CardContent>
              </CardHeader>
            </Card> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
