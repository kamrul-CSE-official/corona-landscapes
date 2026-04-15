import { Link } from "react-router";
import localAssets from "../../consts/assets";

const sulationItems: { title: string; image: string }[] = [
  {
    title: "Residential Landscape",
    image: localAssets.sulationSummary1,
  },
  {
    title: "Commercial Landscape",
    image: localAssets.sulationSummary2,
  },
  {
    title: "Artificial Turf",
    image: localAssets.sulationSummary3,
  },
  {
    title: "Retaining Walls",
    image: localAssets.sulationSummary4,
  },
  {
    title: "Hardscaping",
    image: localAssets.sulationSummary5,
  },
  {
    title: "Maintenance Clean Ups",
    image: localAssets.sulationSummary6,
  },
];

const SulationSummary = () => {
  return (
    <section className="py-16 md:py-40 px-4 md:px-8 lg:px-16 bg-white">
      <div className="reveal reveal-visible max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-24 gap-6 md:gap-8">
          <div className="max-w-2xl text-center md:text-left">
            <span className="text-[#b3ced1] font-bold tracking-[0.3em] md:tracking-[0.5em] uppercase text-[9px] md:text-[10px] mb-4 md:mb-6 block">
              Our Solutions
            </span>
            <h1 className="text-4xl md:text-7xl font-serif text-[#1a2e30] italic leading-tight">
              Comprehensive
              <br />
              <span className="not-italic text-[#b3ced1]">Excellence.</span>
            </h1>
          </div>
          <Link
            to="/services"
            className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] md:tracking-[0.4em] uppercase text-[#1a2e30] flex items-center justify-center md:justify-start gap-4 group border-b border-[#b3ced1]/40 pb-2 hover:border-[#b3ced1] transition-all"
          >
            View All Services{" "}
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
              className="lucide lucide-arrow-up-right group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              aria-hidden="true"
            >
              <path d="M7 7h10v10"></path>
              <path d="M7 17 17 7"></path>
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {sulationItems.map((item, i) => (
            <Link
              key={i}
              to="/services"
              className="group relative flex flex-col bg-white overflow-hidden shadow-sm"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110"
                  src={item.image}
                  alt={item.title}
                />
                <div className="absolute inset-0 bg-[#b3ced1]/10 group-hover:bg-transparent transition-colors duration-500" />
                <span className="absolute top-4 left-4 md:top-8 md:left-8 text-white/60 text-[9px] md:text-[10px] font-bold tracking-[0.2em] font-sans">
                  0 {i+1}
                </span>
              </div>
              <div className="p-6 md:p-8 flex items-center justify-between border-t border-gray-100 bg-white">
                <h3 className="text-lg md:text-xl font-serif text-[#1a2e30]">
                  {item.title}
                </h3>
                <div className="h-8 w-8 md:h-10 md:w-10 flex items-center justify-center border border-gray-100 group-hover:border-[#b3ced1] group-hover:bg-[#b3ced1] group-hover:text-[#1a2e30] transition-all rounded-full shrink-0">
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
                    className="lucide lucide-chevron-right"
                    aria-hidden="true"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SulationSummary;
