import localAssets from "../../consts/assets";

const BlogPageCustomRequirement = () => {
  return (
    <section className="relative py-16 md:py-40 px-4 md:px-8 lg:px-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          alt="Newsletter Background"
          className="w-full h-full object-cover"
          src={localAssets.servicePageRequrement}
        />
        <div className="absolute inset-0 bg-[#1a2e30]/85"></div>
      </div>
      <div className="reveal relative z-10 max-w-4xl mx-auto text-center">
        <span className="text-[#b3ced1] font-bold tracking-[0.2em] md:tracking-[0.5em] uppercase text-[8px] md:text-[10px] mb-4 md:mb-8 block">
          Stay Updated
        </span>
        <h2 className="text-2xl md:text-5xl font-serif text-white mb-6 md:mb-12 leading-tight">
          Get the latest insights
        </h2>
        <p className="text-white/80 font-light text-sm md:text-lg leading-relaxed mb-8 md:mb-16 max-w-2xl mx-auto">
          Subscribe to our newsletter for expert landscaping tips, seasonal
          guides, and exclusive design inspiration delivered to your inbox.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 px-6 py-4 bg-white/10 border border-white/20 text-white placeholder:text-white/50 text-sm font-light focus:outline-none focus:border-[#b3ced1] transition-colors"
            required
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-3 md:gap-8 bg-[#b3ced1] text-[#1a2e30] px-8 md:px-12 py-4 text-[9px] md:text-[11px] font-bold tracking-[0.2em] md:tracking-[0.4em] uppercase hover:bg-white hover:text-[#1a2e30] transition-all group shadow-xl whitespace-nowrap"
          >
            Subscribe
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
              className="group-hover:translate-x-2 transition-transform"
              aria-hidden="true"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
};

export default BlogPageCustomRequirement;