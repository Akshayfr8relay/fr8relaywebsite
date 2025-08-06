export default function Navbar() {
  return (
    <div className="top-4  z-50">
      <nav className="flex justify-between items-center px-6 py-3 bg-white/20 text-black rounded-xl backdrop-blur-md shadow-md font-roboto">
        {/* Logo Image */}
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex gap-6 text-sm font-light">
          <li className="cursor-pointer">
            <a href="#platform">Our Platform</a>
          </li>
          <li className="cursor-pointer">
            <a href="#benefits">Benefits</a>
          </li>
          <li className="cursor-pointer">
            <a href="#about">About Us</a>
          </li>
          <li className="cursor-pointer">
            <a href="#contact">Contact Us</a>
          </li>
        </ul>

        {/* CTA Button */}
        <button className="border bg-gradient-to-r from-[#2b45ad] to-[#75399d] bg-clip-text text-transparent border-black/20 px-4 py-1.5 rounded-md text-sm hover:bg-white hover:text-black transition">
          Join Fr8Relay
        </button>
      </nav>
    </div>
  );
}
