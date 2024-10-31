const CarbonFootprint = () => {
  return (
    <div className="bg-gradient-to-b from-[#3ED484] from-30% to-[#083051] to-70% text-white font-sans">
      <div className="text-center py-10 px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-[#000000] ">
          Reducing <span className="text-[#605D5D]">Your Carbon</span> Footprint
          Matters.
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg">
          Every day, our choices have a direct impact on the environment. By
          reducing your carbon footprint, you’re contributing to:
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-6 px-6 py-10">
        <div className="bg-[#D9D9D9] text-center rounded-md p-6 w-full md:w-1/3">
          <img
            src="/svg/climate.svg"
            alt="Climate Change Icon"
            className="mx-auto mb-4 h-28"
          />
          <h2 className="text-xl text-black font-semibold">
            Combating Climate Change
          </h2>
          <p className="mt-2 text-black">
            by lowering greenhouse gas emissions.
          </p>
        </div>

        <div className="bg-[#D9D9D9] text-center rounded-md p-6 w-full md:w-1/3">
          <img
            src="/svg/resource.svg"
            alt="Conserving Resources Icon"
            className="mx-auto mb-4 h-28"
          />
          <h2 className="text-xl text-black font-semibold">
            Conserving Resources
          </h2>
          <p className="mt-2 text-black">
            and reducing the pressure on natural ecosystems.
          </p>
        </div>

        <div className="bg-[#D9D9D9] text-center rounded-md p-6 w-full md:w-1/3">
          <img
            src="/svg/future.svg"
            alt="Sustainable Future Icon"
            className="mx-auto mb-4 h-28"
          />
          <h2 className="text-xl text-black font-semibold">
            Ensuring a Sustainable Future
          </h2>
          <p className="mt-2 text-black">
            for future generations through mindful choices today.
          </p>
        </div>
      </div>

      <div className="flex gap-20 text-center justify-end py-10 px-6">
        <div>
          <img src="/svg/hand.svg" />
        </div>
        <div>
          <h2 className="text-5xl font-bold mb-10">
            Eco-Friendly Partnerships for Rewards
          </h2>
          <p className="mt-4 text-gray-400 text-right text-xl">
            # Gift Cards & Discounts from eco-conscious companies.
            <br />
            # Early Access to sustainability workshops and events.
            <br /># VIP Deals from ethical brands when you achieve carbon-saving
            milestones.
          </p>
        </div>
      </div>

      <div className="text-center py-6">
        <h2 className="text-5xl font-semibold">
          So, Get Started on Your Carbon-Saving Journey Today!
        </h2>
      </div>
    </div>
  );
};

export default CarbonFootprint;
