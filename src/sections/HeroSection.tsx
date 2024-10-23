const HeroSection = () => {
  return (
    <div className="bg-[#B0D0D8] text-center py-12">
      <h1 className="text-3xl md:text-4xl font-semibold mb-4 bg-gradient-to-r from-[#081E4F] to-[#06932C] bg-clip-text text-transparent">
        TRACK, REDUCE, REWARD
      </h1>
      <p className="text-lg md:text-5xl text-gray-700">
        Your Journey to a{" "}
        <span className="text-[#1C336C] font-semibold">Greener Future</span>{" "}
        with CarbonIQ!
      </p>
      <div className="flex justify-center space-x-8 mt-6 text-gray-800">
        <a href="#" className="hover:text-gray-600">
          ABOUT US
        </a>
        <a href="#" className="hover:text-gray-600">
          BLOG
        </a>
        <a href="#" className="hover:text-gray-600">
          CONTACT US
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
