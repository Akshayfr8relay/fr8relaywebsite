export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white px-6 md:px-12 py-12 font-['Helvetica']">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left: Logo + Track Order */}
        <div className="space-y-4">
          <img src="logo.png" alt="FR8relay logo" className="h-8 w-auto" />
        </div>

        {/* Get Connected */}
        <div>
          <h4 className="uppercase text-xs text-gray-400 mb-3">
            Get Connected
          </h4>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/fr8relay/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a href="mailto:support@relaytech.co" className="hover:underline">
                support@relaytech.co
              </a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="uppercase text-xs text-gray-400 mb-3">Company</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="/about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="/careers" className="hover:underline">
                Careers
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="uppercase text-xs text-gray-400 mb-3">Resources</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="/terms" className="hover:underline">
                Terms of service
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:underline">
                Privacy policy
              </a>
            </li>
            <li>
              <a href="/cookie" className="hover:underline">
                Cookie policy
              </a>
            </li>
            <li>
              <a href="/acceptable-use" className="hover:underline">
                Website acceptable use policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-12 flex justify-between items-center text-xs text-gray-400">
        <p>© Relay Technology {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
