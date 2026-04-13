import localAssets from "../../consts/assets";

const Footer = () => {
  const year: string = new Date().getFullYear() + "";
  return (
    <footer className="bg-[#b3ced1] text-[#1a2e30] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-[#1a2e30]/10 pb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <a
              href="/"
              className="inline-block mb-8 transition-transform hover:scale-105"
            >
              <img
                alt="Corona Landscaping LLC Logo"
                className="h-32 object-contain rounded-sm"
                src={localAssets.logo}
              />
            </a>
            <p className="text-[#1a2e30]/70 text-sm leading-relaxed mb-8 font-medium italic">
              "Transforming Monroe's landscapes with family-owned expertise and
              timeless artisanal design."
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="hover:text-white transition-all transform hover:-translate-y-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-instagram"
                  aria-hidden="true"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="#"
                className="hover:text-white transition-all transform hover:-translate-y-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-facebook"
                  aria-hidden="true"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:pl-10">
            <h4 className="text-sm font-bold tracking-widest uppercase mb-8 border-b border-[#1a2e30]/10 pb-2 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-4 text-sm text-[#1a2e30]/70 font-medium">
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold tracking-widest uppercase mb-8 border-b border-[#1a2e30]/10 pb-2 inline-block">
              Our Services
            </h4>
            <ul className="space-y-4 text-sm text-[#1a2e30]/70 font-medium">
              {[
                "Residential Landscape",
                "Commercial Landscape",
                "Artificial Turf",
                "Hardscaping",
                "Retaining Walls",
              ].map((service) => (
                <li
                  key={service}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {service}
                </li>
              ))}
              <li>
                <a
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  More
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-bold tracking-widest uppercase mb-8 border-b border-[#1a2e30]/10 pb-2 inline-block">
              Connect
            </h4>
            <ul className="space-y-5 text-sm text-[#1a2e30]/70 font-medium">
              <li className="flex items-start gap-4">
                <div className="bg-[#1a2e30]/10 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-phone text-[#1a2e30]"
                    aria-hidden="true"
                  >
                    <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                  </svg>
                </div>
                <a
                  href="tel:(425) 446-2308"
                  className="hover:text-white transition-colors"
                >
                  (425) 446-2308
                </a>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-[#1a2e30]/10 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-mail text-[#1a2e30]"
                    aria-hidden="true"
                  >
                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                  </svg>
                </div>
                <a
                  href="mailto:coronalandscapingwa@gmail.com"
                  className="hover:text-white transition-colors break-all"
                >
                  coronalandscapingwa@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-[#1a2e30]/10 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-map-pin text-[#1a2e30]"
                    aria-hidden="true"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <span>Monroe, WA &amp; Surrounding County Areas</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center text-[10px] tracking-[0.2em] uppercase text-[#1a2e30]/40 font-bold">
          <p>
            © {year} Corona Landscaping LLC. Established 2015. All Rights
            Reserved.
          </p>
          <div className="mt-4 md:mt-0 space-x-8">
            <a href="#" className="hover:text-[#1a2e30] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#1a2e30] transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
