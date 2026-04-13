import type { JSX } from "react";

const coreItems: {
  title: string;
  icon: JSX.Element;
  details: string;
}[] = [
  {
    title: "Irrigation",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-droplets md:w-8 md:h-8"
        aria-hidden="true"
      >
        <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path>
        <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path>
      </svg>
    ),
    details:
      "Smart, efficient watering systems designed for the Pacific Northwest climate.",
  },
  {
    title: "Artificial Turf",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-flower2 lucide-flower-2 md:w-8 md:h-8"
        aria-hidden="true"
      >
        <path d="M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1"></path>
        <circle cx="12" cy="8" r="2"></circle>
        <path d="M12 10v12"></path>
        <path d="M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z"></path>
        <path d="M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z"></path>
      </svg>
    ),
    details:
      "Pristine, low-maintenance greens for residential and commercial curb appeal.",
  },
  {
    title: "Installations",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-trees md:w-8 md:h-8"
        aria-hidden="true"
      >
        <path d="M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z"></path>
        <path d="M7 16v6"></path>
        <path d="M13 19v3"></path>
        <path d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5"></path>
      </svg>
    ),
    details:
      "Expertly curated plant selections and soil preparation for lasting health.",
  },
  {
    title: "Hardscaping",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-hammer md:w-8 md:h-8"
        aria-hidden="true"
      >
        <path d="m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9"></path>
        <path d="m18 15 4-4"></path>
        <path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"></path>
      </svg>
    ),
    details:
      "Structural elegance including custom retaining walls and artisanal paver patios.",
  },
];
const CoreSpecialties = () => {
  return (
    <div className="py-16 md:py-40 px-4 md:px-8 lg:px-16 bg-[#1a2e30]">
      <div className="reveal reveal-visible max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-24">
          <span className="text-[#b3ced1] font-bold tracking-[0.3em] md:tracking-[0.5em] uppercase text-[9px] md:text-[10px] mb-4 md:mb-6 block">
            Our Expertise
          </span>
          <h1 className="text-3xl md:text-5xl font-serif text-[#fff]">
            Our Core Specialties
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {coreItems.map((item, i) => (
            <div
              key={i}
              className="bg-white p-8 md:p-12 specialty-card border border-gray-50 flex flex-col items-center text-center"
            >
              <div className="mb-6 md:mb-10 text-[#1a2e30] p-4 bg-[#b3ced1]/20 rounded-full">
                {item.icon}
              </div>
              <h1 className="text-xl md:text-2xl font-serif mb-4 md:mb-6 text-[#1a2e30]">
                {item.title}
              </h1>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed font-light">
                {item.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreSpecialties;
