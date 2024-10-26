const CarbonFootprint = () => {
  return (
    <div className="bg-gradient-to-b from-[#3ED484] from-30% to-[#083051] to-50% text-white font-sans">
      <div className="text-center py-10 px-6">
        <h1 className="text-3xl md:text-4xl font-bold">
          Reducing <span className="text-lime-300">Your Carbon</span> Footprint
          Matters.
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg">
          Every day, our choices have a direct impact on the environment. By
          reducing your carbon footprint, you’re contributing to:
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-6 px-6 py-10">
        <div className="bg-gray-200 text-center rounded-md p-6 w-full md:w-1/3">
          <img
            src="/path/to/icon1.png"
            alt="Climate Change Icon"
            className="mx-auto mb-4 h-16"
          />
          <h2 className="text-xl font-semibold">Combating Climate Change</h2>
          <p className="mt-2 text-gray-700">
            by lowering greenhouse gas emissions.
          </p>
        </div>

        <div className="bg-gray-200 text-center rounded-md p-6 w-full md:w-1/3">
          <img
            src="/path/to/icon2.png"
            alt="Conserving Resources Icon"
            className="mx-auto mb-4 h-16"
          />
          <h2 className="text-xl font-semibold">Conserving Resources</h2>
          <p className="mt-2 text-gray-700">
            and reducing the pressure on natural ecosystems.
          </p>
        </div>

        <div className="bg-gray-200 text-center rounded-md p-6 w-full md:w-1/3">
          <img
            src="/path/to/icon3.png"
            alt="Sustainable Future Icon"
            className="mx-auto mb-4 h-16"
          />
          <h2 className="text-xl font-semibold">
            Ensuring a Sustainable Future
          </h2>
          <p className="mt-2 text-gray-700">
            for future generations through mindful choices today.
          </p>
        </div>
      </div>

      <div className="text-center py-10 px-6">
        <h2 className="text-2xl font-bold">
          Eco-Friendly Partnerships for Rewards
        </h2>
        <p className="mt-4 text-gray-300">
          # Gift Cards & Discounts from eco-conscious companies.
          <br />
          # Early Access to sustainability workshops and events.
          <br /># VIP Deals from ethical brands when you achieve carbon-saving
          milestones.
        </p>
      </div>

      <div className="text-center py-6">
        <h2 className="text-2xl font-semibold text-lime-400">
          So, Get Started on Your Carbon-Saving Journey Today!
        </h2>
      </div>

      <footer className="bg-[#083051] py-10 px-6 text-gray-300">
        <div className="flex flex-col md:flex-row justify-around text-center md:text-left gap-10">
          <div className="flex flex-col items-center md:items-start">
            <img
              src="/path/to/logo.png"
              alt="CarbonIQ Logo"
              className="mb-4 h-12"
            />
            <p>Target Net Zero</p>
          </div>

          <div>
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

          <div>
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

        <div className="text-center mt-6 text-sm text-gray-500">
          © 2024 CarbonIQ. All rights reserved. Made with sustainability in
          mind.
        </div>
      </footer>
    </div>
  );
};

export default CarbonFootprint;
