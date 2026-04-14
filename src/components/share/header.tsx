import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import localAssets from "../../consts/assets";

const navItems: { name: string; href: string }[] = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
  { name: "Blogs", href: "/blogs" },
];

const Header = () => {
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShrink(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`${
        !shrink
          ? "fixed w-full z-50 transition-all duration-700 bg-transparent py-6"
          : "fixed w-full z-50 transition-all duration-700 bg-white py-2 shadow-sm"
      }`}
    >
      <div
        className={`${!shrink ? "max-w-7xl mx-auto px-8 lg:px-16 flex justify-between items-center" : "max-w-7xl mx-auto px-8 lg:px-16 flex justify-between items-center"}`}
      >
        {/* Logo */}
        <Link
          to="/"
          className="group relative overflow-hidden flex items-center"
        >
          <img
            className={`${!shrink ? "transition-all duration-700 object-contain rounded-sm h-20" : "transition-all duration-700 object-contain rounded-sm h-20"}`}
            src={localAssets.logo}
            alt="logo"
          />
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center space-x-16">
          {navItems.map((item, i) => (
            <NavLink
              key={item.name + i}
              to={item.href}
              // underline underline-offset-8 decoration-[#b3ced1] decoration-2
              className={({ isActive }) => {
                const base =
                  "text-[11px] font-bold tracking-[0.3em] uppercase transition-all duration-500 underline underline-offset-8 decoration-2";

                return `${base} ${
                  isActive
                    ? "decoration-[#b3ced1]"
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
            to="#"
            className={`${!shrink ? "px-10 py-3 text-[10px] tracking-[0.3em] uppercase font-bold transition-all duration-500 bg-white/10 text-white backdrop-blur-md border border-white/30 hover:bg-white hover:text-[#1a2e30]" : "px-10 py-3 text-[10px] tracking-[0.3em] uppercase font-bold transition-all duration-500 bg-[#b3ced1] text-[#1a2e30] hover:bg-[#1a2e30] hover:text-white"}`}
          >
            GET ESTIMATE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
