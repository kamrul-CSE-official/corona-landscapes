import { Link } from "react-router";
import localAssets from "../../consts/assets";

const Request = () => {
  return (
    <section data-aos="fade-up" className="relative py-16 md:py-40 px-4 md:px-8 lg:px-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover"
          src={localAssets.requestComponent}
          alt="Ready Project"
        />
        <div className="absolute inset-0 bg-[#1a2e30]/80" />
      </div>
      <div className="reveal reveal-visible relative z-10 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl lg:text-8xl font-serif text-white mb-8 md:mb-12 italic leading-tight">
          Ready to Begin
          <br />
          <span className="not-italic text-[#b3ced1]">Your Project?</span>
        </h2>
        <Link
          to="#"
          className="inline-block bg-[#b3ced1] text-[#1a2e30] px-8 md:px-20 py-4 md:py-6 text-[9px] md:text-xs font-bold tracking-[0.2em] md:tracking-[0.4em] uppercase hover:bg-white hover:text-[#1a2e30] transition-all shadow-xl"
        >
          Request a Personal Estimate
        </Link>
        <div className="mt-12 md:mt-16 flex justify-center items-center gap-4 md:gap-12 text-[#b3ced1]/60">
          <span className="h-px w-10 md:w-20 bg-current" />
          <span className="text-[8px] md:text-[10px] tracking-[0.2em] md:tracking-[0.3em] uppercase font-bold text-white">
            Monroe WA
          </span>
          <span className="h-px w-10 md:w-20 bg-current" />
        </div>
      </div>
    </section>
  );
};

export default Request;
