import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gray-100 p-4 flex justify-between items-center">
        <div className="text-xl font-bold">
          <img
            src="/logo.png"
            alt="CarbonIQ Logo"
            className="w-8 h-8 inline-block mr-2"
          />
          CarbonIQ
        </div>
        <nav className="flex space-x-4">
          <a href="#about" className="text-gray-600 hover:text-green-600">
            About Us
          </a>
          <a href="#blog" className="text-gray-600 hover:text-green-600">
            Blog
          </a>
          <a href="#contact" className="text-gray-600 hover:text-green-600">
            Contact Us
          </a>
        </nav>
        <div className="text-gray-600 hover:text-green-600">
          <i className="fas fa-user-circle text-2xl"></i>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-4 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Features Section */}
          <section className="bg-gradient-to-r from-teal-500 to-green-500 p-8 text-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">KEY FEATURES</h2>
            <ul className="space-y-2">
              <li>Track your Carbon Footprint in Real Time.</li>
              <li>
                Personalized Tips for a healthier lifestyle and better choice of
                products.
              </li>
              <li>In-depth insights and Progress Tracking.</li>
              <li>Interactive Visuals and Analytics.</li>
              <li>Earn Rewards for Carbon-Saving Actions.</li>
              <li>Curated Articles, Guides, and Updates.</li>
            </ul>
          </section>

          {/* Vision Section */}
          <section className="bg-teal-300 p-6 rounded-lg shadow-md text-center">
            <h2 className="text-xl font-bold mb-4">VISION</h2>
            <div className="space-y-4">
              <p>Cut Emissions</p>
              <p>Boost Sustainability</p>
              <p>Preserve the Planet</p>
            </div>
          </section>
        </div>

        {/* Carbon Footprint Section */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">The Carbon Footprint</h2>
          <img
            src="/carbon-footprint.png"
            alt="Carbon Footprint Diagram"
            className="w-full h-auto rounded-md"
          />
          <p className="mt-4 text-gray-600">
            Take control of your carbon footprint with CarbonIQ, a user-friendly
            app designed to help you track, reduce, and reward your everyday
            environmental efforts.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 p-4 text-center">
        <p className="text-sm">CONNECT WITH US ON</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="text-gray-600 hover:text-green-600">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-600 hover:text-green-600">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-gray-600 hover:text-green-600">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-gray-600 hover:text-green-600">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Hero;
