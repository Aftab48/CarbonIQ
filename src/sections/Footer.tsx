const Footer = () => {
  return (
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
          <ul className="space-y-3">
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
          <ul className="space-y-4 text-left">
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
  );
};

export default Footer;
