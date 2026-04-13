import { Link } from "react-router";
import localAssets from "../../consts/assets";

const Hero = () => {
  return (
    <section className="bg-[#F5F2ED]">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* image */}
        <section className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover"
            src={localAssets.heroHome}
            alt="banner"
            style={{
              animation:
                "hero-zoom 10s ease-in-out 0s infinite alternate none running",
              filter: "brightness(0.7)",
              transform: "scale(1.1) translateY(0px)",
              transition: "transform 0.1s linear",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/10" />
        </section>

        {/* content */}
        <section className="relative z-10 text-center text-white px-4 md:px-8 pt-24 md:pt-0 max-w-5xl fade-in">
          <span className="inline-block text-[9px] md:text-[11px] font-bold tracking-[0.3em] md:tracking-[0.5em] uppercase mb-4 md:mb-8 opacity-90 drop-shadow-md">
            Established 2015 — Monroe, WA
          </span>
          <h1 className="text-4xl md:text-8xl font-serif mb-6 md:mb-10 leading-[1.1] italic drop-shadow-lg">
            Landscapes
            <br />
            <span className="not-italic">For Your Home.</span>
          </h1>
          <p className="text-sm md:text-xl font-light tracking-widest uppercase mb-8 md:mb-12 opacity-90 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
            Transforming outdoor spaces in Monroe with family-owned expertise
            and timeless design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
            <Link
              to="#"
              className="group bg-[#b3ced1] text-[#1a2e30] px-8 py-4 md:px-12 md:py-5 text-[10px] md:text-[11px] font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase hover:bg-[#1a2e30] hover:text-white transition-all duration-500 min-w-[200px] md:min-w-[240px] shadow-2xl"
            >
              Get an Estimate
            </Link>
            <Link
              to="#"
              className="group text-white text-[10px] md:text-[11px] font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase flex items-center gap-3 border-b border-white/30 pb-2 hover:border-[#b3ced1] transition-all drop-shadow-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-phone group-hover:animate-bounce"
                aria-hidden="true"
              >
                <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
              </svg>{" "}
              Call (425) 446-2308
            </Link>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Hero;
