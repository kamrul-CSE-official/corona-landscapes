import localAssets from "../../consts/assets";

const BlogPageBanner = () => {
  return (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src={localAssets.servicePageBanner}
          alt="Landscaping blog"
        />
        <div className="absolute inset-0 bg-[#1a2e30]/70"></div>
      </div>
      <div className="relative z-10 text-center text-white px-4 md:px-8 max-w-4xl pt-20 md:pt-24 fade-in">
        <span className="inline-block text-[9px] md:text-[11px] font-bold tracking-[0.3em] md:tracking-[0.5em] uppercase mb-4 md:mb-6 opacity-70 text-[#b3ced1]">
          Insights & Inspiration
        </span>
        <h1 className="text-5xl md:text-8xl font-serif mb-6 md:mb-8 italic">
          Our Blogs
        </h1>
        <p className="text-sm md:text-lg font-light tracking-[0.1em] md:tracking-[0.2em] uppercase opacity-80 max-w-2xl mx-auto">
          Expert advice, design trends, and landscaping inspiration.
        </p>
      </div>
    </section>
  );
};

export default BlogPageBanner;