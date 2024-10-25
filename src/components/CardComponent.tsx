import {
  FacebookIcon,
  InstagramIcon,
  LucideTwitter,
  TwitterIcon,
  X,
} from "lucide-react";

const CardComponent = () => {
  return (
    <div className="grid grid-cols-6 grid-rows-5 gap-4 p-8">
      <div className="col-span-2 row-span-5 rounded-md bg-gradient-to-b from-[#3DC19E] to-[#2399DD] py-10">
        <h1 className=" text-4xl font-semibold px-10 py-4">
          KEY <br /> FEATURES
        </h1>
        <h2 className="px-10 py-2 text-3xl font-medium text-[#2D2D2D]">
          Track your Carbon <br /> Footprint in Real <br /> Time.
        </h2>
        <h2 className="px-10 py-2 text-3xl font-medium text-[#616161]">
          Personalized Tips <br /> for a healthier <br /> lifestyle and <br />
          better choice of products.
        </h2>
        <h2 className="px-10 py-2 text-3xl font-medium text-[#CECECE]">
          Interactive Visuals <br /> and Analytics
        </h2>
        <h2 className="px-10 py-2 text-3xl font-medium text-[#E8E8E8]">
          Earn Rewards for <br /> Carbon-Saving <br /> Actions.
        </h2>
        <h2 className="px-10 py-2 text-3xl font-medium text-[#FFFFFF]">
          Curated articles, <br /> Guides and
          <br /> Updates.
        </h2>
      </div>
      <div className="col-span-2 row-span-3 col-start-3  bg-[url('/images/center-img.png')] bg-no-repeat bg-center bg-contain p-6 rounded-lg shadow-lg h-96 w-full"></div>
      <div className="col-span-2 row-span-4 col-start-5 rounded-md bg-gradient-to-b from-[#3DC19E] to-[#2399DD]">
        <div className="grid grid-cols-1 p-4">
          <div>
            <h2 className="text-4xl font-semibold text-white">VISION</h2>
            <img src="/images/vision.png" className="mt-6" />
          </div>
          <div>
            <hr className="h-1 bg-black border-0 mt-6" />
            <div className="py-4 px-2">
              <span className="text-black font-medium text-3xl">
                Cut Emissions
              </span>
            </div>
          </div>
          <div>
            <hr className="h-1 bg-black border-0 mt-6" />
            <div className="py-4 px-2">
              <span className="text-black font-medium text-3xl">
                Boost Sustainability
              </span>
            </div>
          </div>
          <div>
            <hr className="h-1 bg-black border-0 mt-6" />
            <div className="py-4 px-2">
              <span className="text-black font-medium text-3xl">
                Preserve the Planet
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-2 row-span-2 col-start-3  row-start-4 bg-[#A0D1EC] border-x-[20px] border-[#1D6984] rounded-lg">
        <div className="grid h-full p-4">
          <div>
            <img src="/svg/Vector.svg" />
          </div>
          <div>
            <p>
              Take control of your carbon footprint with CarbonIQ, a
              user-friendly app designed to help you track, reduce, and reward
              your everyday environmental efforts. Whether you're looking to
              lower your energy use, make eco-friendly transportation choices,
              or adopt sustainable shopping habits, CarbonIQ empowers you to
              make a real impact
            </p>
          </div>
        </div>
      </div>
      <div className="col-span-2 col-start-5 row-start-5 rounded-md bg-[#A4F8CB] flex justify-center items-center">
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-3xl font-normal text-black">
            CONNECT WITH US ON
          </h2>
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-black p-2">
              <X className="h-5 w-5 text-[#A4F8CB]" />
            </div>
            <div className="rounded-full bg-black p-2">
              <TwitterIcon className="h-5 w-5 text-[#A4F8CB]" />
            </div>
            <div className="rounded-full bg-black p-2">
              <InstagramIcon className="h-5 w-5 text-[#A4F8CB]" />
            </div>
            <div className="rounded-full bg-black p-2">
              <FacebookIcon className="h-5 w-5 text-[#A4F8CB]" />
            </div>
          </div>
          <p className="text-sm text-black">AND STAY UPDATED...</p>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
