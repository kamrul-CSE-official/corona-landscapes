import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import localAssets from "../../consts/assets";
import { cn } from "../../lib/utils";

const navItems: { name: string; href: string }[] = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [shrink, setShrink] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShrink(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking a link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <div
      className={`${
        !shrink
          ? "fixed w-full z-50 transition-all duration-700 bg-transparent py-6"
          : "fixed w-full z-50 transition-all duration-700 bg-white py-2 shadow-sm"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-8 lg:px-16 flex justify-between items-center`}
      >
        {/* Logo */}
        <Link
          to="/"
          className="group relative overflow-hidden flex items-center"
        >
          <img
            className={
              !shrink
                ? `transition-all duration-700 object-contain rounded-sm h-20`
                : "transition-all duration-700 object-contain rounded-sm h-14"
            }
            src={localAssets.logo}
            alt="logo"
          />
        </Link>

        {/* Mobile Menu Button (Hamburger) */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-full transition-colors z-50 relative"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {!isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke={!shrink ? "white" : "#1a2e30"}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-colors"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1a2e30"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          )}
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-[#F5F2ED] z-40 md:hidden transition-transform duration-700 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8 px-4">
            <img
              alt="Corona Landscaping LLC Logo"
              className="h-24 object-contain rounded-md mb-4"
              src={localAssets.logo}
            />
            {navItems.map((item, i) => (
              <Link
                key={i}
                to={item.href}
                onClick={handleLinkClick}
                className="text-xl font-serif text-[#1a2e30] tracking-widest hover:text-[#b3ced1] transition-colors"
              >
                {item.name}
              </Link>
            ))}

            <a
              onClick={handleLinkClick}
              className="mt-4 px-10 py-4 bg-[#b3ced1] text-[#1a2e30] font-bold tracking-[0.3em] uppercase text-xs shadow-xl transition-colors hover:bg-[#1a2e30] hover:text-white cursor-pointer"
              href="#/contact"
              data-discover="true"
            >
              Get an Estimate
            </a>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-16">
          {navItems.map((item, i) => (
            <NavLink
              key={item.name + i}
              to={item.href}
              className={({ isActive }) => {
                const base =
                  "text-[11px] font-bold tracking-[0.3em] uppercase transition-all duration-500 decoration-2";

                return `${base} ${
                  isActive
                    ? "text-[11px] font-bold tracking-[0.3em] uppercase transition-all hover:opacity-100 text-[#1a2e30] opacity-100 underline underline-offset-8 decoration-[#b3ced1] decoration-2"
                    : "decoration-transparent hover:decoration-[#b3ced1]"
                } ${
                  !shrink
                    ? "text-white opacity-60 hover:opacity-100"
                    : "text-[#1a2e30] opacity-50 hover:opacity-100"
                }`;
              }}
            >
              {item.name}
            </NavLink>
          ))}

          <Link
            to="/contact"
            style={!shrink ? { border: "1px solid white" } : undefined}
            className={cn(
              "px-10 py-3 text-[10px] tracking-[0.3em] uppercase font-bold transition-all duration-500",
              !shrink
                ? "bg-white/10 text-white backdrop-blur-md hover:bg-white hover:text-[#1a2e30]"
                : "bg-[#b3ced1] text-[#1a2e30] hover:bg-[#1a2e30] hover:text-white",
            )}
          >
            GET ESTIMATE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
