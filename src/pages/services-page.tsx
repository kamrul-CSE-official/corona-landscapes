import ServicePageBanner from "../components/share/servicePage-banner";
import ServicePageCustomRequirement from "../components/share/servicePage-customrequirement";
import localAssets from "../consts/assets";
const sulationItems: { title: string; image: string }[] = [
  {
    title: "Residential Landscape",
    image: localAssets.sulationSummary1,
  },
  {
    title: "Residential Landscape",
    image: localAssets.sulationSummary2,
  },
  {
    title: "Residential Landscape",
    image: localAssets.sulationSummary3,
  },
  {
    title: "Residential Landscape",
    image: localAssets.sulationSummary4,
  },
  {
    title: "Residential Landscape",
    image: localAssets.sulationSummary5,
  },
  {
    title: "Residential Landscape",
    image: localAssets.sulationSummary6,
  },
];
const ServicesPage = () => {
  return (
    <main>
      <ServicePageBanner />
      <section className="py-16 md:py-40 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16">
            {sulationItems.map((item, i) => (
              <div key={i} className="reveal reveal-visible ">
                <div className="group flex flex-col">
                  <div className="relative overflow-hidden mb-6 md:mb-10 aspect-[4/5] shadow-sm">
                    <img
                      alt="Residential Landscape"
                      className="w-full h-full object-cover group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                      src={item.image}
                    />
                    <div className="absolute inset-0 bg-[#b3ced1]/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <div className="flex items-center gap-4 md:gap-6">
                    <span className="text-[9px] md:text-[10px] font-sans opacity-30 font-bold">
                      0{i+1}
                    </span>
                    <h3 className="text-xl md:text-3xl font-serif text-[#1a2e30] italic group-hover:text-[#b3ced1] transition-all">
                      {item.title}
                    </h3>
                  </div>
                  <div className="h-px bg-gray-200 mt-4 md:mt-6 w-full group-hover:bg-[#b3ced1] transition-colors"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ServicePageCustomRequirement />
    </main>
  );
};

export default ServicesPage;
