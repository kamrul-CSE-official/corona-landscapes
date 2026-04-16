import { Link } from "react-router";
import localAssets from "../../consts/assets";

const Legacy = () => {
  return (
    <section
      data-aos="fade-up"
      className="py-16 md:py-40 px-4 md:px-8 lg:px-16 overflow-hidden bg-[#F5F2ED]"
    >
      <div className="reveal reveal-visible max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-20 items-center">
          <div className="lg:col-span-7">
            <div className="relative">
              <img
                className="w-full aspect-[3/4] object-cover transition-all duration-1000 rounded-sm"
                src={localAssets.legacyImg}
                alt="legacy-image"
              />
              <div
                className="absolute top-12 -left-8 bg-white p-6 md:p-10 shadow-2xl hidden xl:block max-w-xs"
                style={{ borderLeft: "4px solid #b3ced1" }}
              >
                <p className="font-serif text-xl md:text-2xl text-[#1a2e30] leading-tight italic">
                  "Quality is not an act, it is a habit."
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <span className="text-[#b3ced1] font-bold tracking-[0.3em] md:tracking-[0.5em] uppercase text-[9px] md:text-[10px] mb-4 md:mb-8 block">
              About Our Legacy
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-[#1a2e30] mb-6 md:mb-10 leading-tight">
              Family Owned
              <br />
              <span className="italic text-[#b3ced1]">Craftsmanship</span>
            </h2>
            <div className="space-y-4 md:space-y-8 text-gray-600 leading-relaxed text-sm md:text-base font-light">
              <p>
                Corona Landscaping LLC is a family owned and operated
                landscaping business established in 2015 in Monroe, WA. We
                specialize in transforming the mundane into the extraordinary.
              </p>
              <p>
                From lush landscape installations to intricate hardscaping, our
                dedicated team is committed to creating functional beauty that
                your family will enjoy for generations.
              </p>
              <Link
                className="inline-flex items-center gap-4 text-[10px] md:text-xs font-bold tracking-[0.2em] md:tracking-[0.4em] uppercase text-[#1a2e30] group hover:text-[#b3ced1] transition-colors mt-4"
                to="/services"
              >
                Explore Services
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
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Legacy;
