import localAssets from "../../consts/assets";

const ServicePageCustomRequirement = () => {
  return (
    <section data-aos="fade-up" className="relative py-16 md:py-40 px-4 md:px-8 lg:px-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          alt="Custom Requests Background"
          className="w-full h-full object-cover"
          src={localAssets.servicePageRequrement}
        />
        <div className="absolute inset-0 bg-[#1a2e30]/85"></div>
      </div>
      <div className="reveal  relative z-10 max-w-4xl mx-auto text-center">
        <span className="text-[#b3ced1] font-bold tracking-[0.2em] md:tracking-[0.5em] uppercase text-[8px] md:text-[10px] mb-4 md:mb-8 block">
          Custom Requests
        </span>
        <h2 className="text-2xl md:text-5xl font-serif text-white mb-6 md:mb-12 leading-tight">
          Need a service that isn't listed?
        </h2>
        <p className="text-white/80 font-light text-sm md:text-lg leading-relaxed mb-8 md:mb-16">
          We thrive on unique challenges. Whether it's a specific plant species,
          a custom artistic hardscape, or specialized maintenance requirements,
          our artisans are ready to collaborate.
        </p>
        <a
          className="inline-flex items-center gap-3 md:gap-8 bg-[#b3ced1] text-[#1a2e30] px-8 md:px-16 py-3 md:py-6 text-[9px] md:text-[11px] font-bold tracking-[0.2em] md:tracking-[0.4em] uppercase hover:bg-white hover:text-[#1a2e30] transition-all group shadow-xl"
          href="#/contact"
          data-discover="true"
        >
          Contact Us Today{" "}
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
            className="lucide lucide-chevron-right group-hover:translate-x-2 transition-transform"
            aria-hidden="true"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default ServicePageCustomRequirement;
