export default function Navbar() {
  return (
    <div className="fixed top-4 left-4 right-4 z-50">
      <nav className="flex justify-between items-center px-6 py-2.5 bg-black/40 text-white rounded-xl backdrop-blur-md shadow-md font-roboto">
        {/* Logo Image */}
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex gap-6 text-sm font-light">
          <li className="cursor-pointer">Our Platform</li>
          <li className="cursor-pointer">Benefits</li>
          <li className="cursor-pointer">About Us</li>
          <li className="cursor-pointer">Contact Us</li>
        </ul>

        {/* CTA Button */}
        <button className="border border-white px-4 py-1.5 rounded-md text-sm hover:bg-white hover:text-black transition">
          Join Fr8Relay
        </button>
      </nav>
    </div>
  );
}
