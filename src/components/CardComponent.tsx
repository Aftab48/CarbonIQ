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
        
      </div>
      <div className="col-span-2 row-span-2 col-start-3  row-start-4 bg-[#A0D1EC] border-x-[20px] border-[#1D6984] rounded-lg"></div>
      <div className="col-span-2 col-start-5 row-start-5 rounded-md bg-[#A4F8CB]"></div>
    </div>
  );
};

export default CardComponent;
