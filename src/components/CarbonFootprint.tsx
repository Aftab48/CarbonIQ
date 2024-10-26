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

      <div className="flex text-center justify-between py-10 px-6">
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

      <footer className="bg-[#083051] py-10 px-6 text-gray-300">
        <div className="flex flex-col md:flex-row justify-around text-center md:text-left gap-10">
          <div className="flex items-center">
            <div>
              <h2 className="text-4xl font-semibold">CarbonIQ</h2>
              <p className="text-gray-400">Target Net Zero</p>
            </div>
            <img
              src="/svg/logo_1.svg"
              alt="CarbonIQ Logo"
              className="mb-0 h-24"
            />
          </div>
          <div className="border h-64"></div>
          <div className="text-gray-400">
            <h3 className="font-semibold mb-2">Links</h3>
            <ul>
              <li>Home</li>
              <li>Services</li>
              <li>Blog</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Rewards</li>
            </ul>
          </div>
          <div className="border h-64"></div>
          <div className="text-gray-400">
            <h3 className="font-semibold mb-2">Terms and Policies</h3>
            <ul>
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
              <li>License Terms</li>
              <li>Cookies</li>
              <li>FAQ</li>
            </ul>
          </div>
        </div>
        <hr />

        <div className="text-left mt-6 text-sm text-gray-300">
          © 2024 CarbonIQ. All rights reserved. Empowering sustainable futures,
          one footprint at a time.
        </div>
      </footer>
    </div>
  );
};

export default CarbonFootprint;
