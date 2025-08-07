export default function Navbar() {
  return (
    // Added absolute positioning and padding to place it correctly on the page
    <div className="absolute top-4 left-0 right-0 z-50 px-4">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-6 py-3 bg-white text-black rounded-xl backdrop-blur-md shadow-md font-roboto">
        {/* Logo Image */}
        <div className="flex-shrink-0">
          <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
        </div>

        {/* Right-aligned container for links and button */}
        <div className="hidden md:flex items-center gap-8">
          {/* Nav Links */}
          <ul className="flex items-center gap-6 text-sm font-light">
            <li className="cursor-pointer hover:text-gray-900 transition-colors">
              <a href="#platform">Our Platform</a>
            </li>
            <li className="cursor-pointer hover:text-gray-900 transition-colors">
              <a href="#benefits">Benefits</a>
            </li>
            <li className="cursor-pointer hover:text-gray-900 transition-colors">
              <a href="#about">About Us</a>
            </li>
            <li className="cursor-pointer hover:text-gray-900 transition-colors">
              <a href="#contact">Contact Us</a>
            </li>
          </ul>

          {/* CTA Button */}
          <button className="bg-[#8d4ab5] text-white px-4 py-1.5 rounded-md text-sm font-semibold hover:bg-[#3b55d1] hover:text-white transition-all duration-300">
            <a href="#contact"> Join FR8Relay</a>
          </button>
        </div>
      </nav>
    </div>
  );
}
