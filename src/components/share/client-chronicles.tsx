import { useState, useEffect } from "react";

interface Testimonial {
  quote: string;
  author: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "I've been using Corona for seasonal maintenance clean-ups and recently had them install a new cedar fence. They are always reliable and leave the property looking immaculate.",
    author: "David L., Snohomish",
  },
  {
    quote:
      "Corona transformed our backyard completely. The team was professional, on time, and the results exceeded every expectation we had going in.",
    author: "Sarah M., Everett",
  },
  {
    quote:
      "Exceptional service from start to finish. They handled our spring cleanup and landscaping with great attention to detail. Highly recommend.",
    author: "James T., Bothell",
  },
  {
    quote:
      "We've trusted Corona with our property for three years running. Consistent quality, friendly crew, and they always go the extra mile.",
    author: "Linda K., Kirkland",
  },
];

const ClientChronicles = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev" | null>(null);

  const goTo = (index:number) => {
    if (animating || index === current) return;
    setDirection(index > current ? "next" : "prev");
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
      setDirection(null);
    }, 400);
  };

  const prev = () => goTo((current - 1 + testimonials.length) % testimonials.length);
  const next = () => goTo((current + 1) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection("next");
      setAnimating(true);
      setTimeout(() => {
        setCurrent((c) => (c + 1) % testimonials.length);
        setAnimating(false);
        setDirection(null);
      }, 400);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = testimonials[current];

  return (
    <section className="py-16 md:py-40 px-4 md:px-8 lg:px-16 bg-[#1a2e30] text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-24">
          <span className="font-bold tracking-[0.3em] md:tracking-[0.5em] uppercase text-[9px] md:text-[10px] mb-4 md:mb-6 block opacity-60 text-[#b3ced1]">
            Client Chronicles
          </span>
          <h1 className="text-4xl md:text-7xl font-serif italic">In Their Words</h1>
        </div>

        <div className="max-w-4xl mx-auto relative min-h-[300px] md:min-h-[400px]">
          {/* Desktop prev button */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-2 md:-left-12 lg:-left-24 z-20 hidden sm:block">
            <button
              onClick={prev}
              className="p-2 md:p-4 hover:bg-[#b3ced1]/10 transition-colors border border-white/20 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-left text-[#b3ced1]"
                aria-hidden="true"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
          </div>

          {/* Desktop next button */}
          <div className="absolute top-1/2 -translate-y-1/2 -right-2 md:-right-12 lg:-right-24 z-20 hidden sm:block">
            <button
              onClick={next}
              className="p-2 md:p-4 hover:bg-[#b3ced1]/10 transition-colors border border-white/20 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-right text-[#b3ced1]"
                aria-hidden="true"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>

          {/* Slide content */}
          <div
            className="transition-all duration-500 ease-in-out px-4 sm:px-12 md:px-0"
            style={{
              opacity: animating ? 0 : 1,
              transform: animating
                ? `translateY(${direction === "next" ? "12px" : "-12px"})`
                : "translateY(0)",
            }}
          >
            <div className="flex flex-col items-center text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-quote text-[#b3ced1]/20 mb-6 md:mb-10 w-10 h-10 md:w-16 md:h-16"
                aria-hidden="true"
              >
                <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
              </svg>
              <p className="text-xl md:text-4xl font-serif mb-8 md:mb-12 leading-relaxed italic opacity-90">
                {slide.quote}
              </p>
              <div className="flex items-center gap-4 md:gap-6">
                <div className="h-px w-8 md:w-12 bg-[#b3ced1]/30" />
                <p className="text-[9px] md:text-[11px] font-bold tracking-[0.2em] md:tracking-[0.4em] uppercase opacity-60">
                  {slide.author}
                </p>
                <div className="h-px w-8 md:w-12 bg-[#b3ced1]/30" />
              </div>
            </div>
          </div>

          {/* Dots + mobile arrows */}
          <div className="flex justify-center items-center gap-4 mt-12 md:mt-24">
            {/* Mobile prev */}
            <button onClick={prev} className="sm:hidden p-2 text-[#b3ced1]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-left"
                aria-hidden="true"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>

            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-1.5 transition-all duration-500 ${
                  i === current
                    ? "w-8 md:w-12 bg-[#b3ced1]"
                    : "w-3 md:w-4 bg-[#b3ced1]/20 hover:bg-[#b3ced1]/40"
                }`}
              />
            ))}

            {/* Mobile next */}
            <button onClick={next} className="sm:hidden p-2 text-[#b3ced1]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-right"
                aria-hidden="true"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientChronicles;