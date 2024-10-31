const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-6 px-8 bg-white shadow-md">
      <div className="flex items-center space-x-2">
        <img
          src="/images/logo.png"
          alt="CarbonIQ Logo"
          className="w-fit h-10"
        />
      </div>

      <div className="flex items-center space-x-8">
        <div className="hidden md:flex space-x-8 text-gray-700">
          <a href="/" className="hover:text-gray-900">
            HOME
          </a>
          <a href="/services" className="hover:text-gray-900">
            SERVICES
          </a>
          <a href="/rewards" className="hover:text-gray-900">
            REWARDS
          </a>
        </div>
        <div className="w-10 h-10 rounded-full bg-gradient-to-t from-teal-400 to-cyan-400 flex items-center justify-center text-white">
          <img src="/svg/user-icon.svg" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
