const ContactForm = () => {
  return (
    <section className="pb-16 md:pb-40 px-4 md:px-8 lg:px-16 pt-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-32">

          {/* Left Side */}
          <div className="reveal lg:col-span-4 space-y-12 md:space-y-24">
            <div>
              <h2 className="text-xs md:text-sm font-bold tracking-[0.3em] md:tracking-[0.5em] uppercase text-[#1a2e30] mb-8 md:mb-12 border-b border-[#b3ced1] pb-2 md:pb-4 inline-block">
                Connect With Us
              </h2>

              <div className="space-y-8 md:space-y-16">
                {/* Call */}
                <div className="group">
                  <span className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 block mb-2 md:mb-4">
                    Call
                  </span>
                  <a
                    href="tel:4254462308"
                    className="text-xl md:text-2xl font-serif text-[#1a2e30] hover:text-[#b3ced1] transition-all"
                  >
                    (425) 446-2308
                  </a>
                </div>

                {/* Email */}
                <div className="group">
                  <span className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 block mb-2 md:mb-4">
                    Email
                  </span>
                  <a
                    href="mailto:coronalandscapingwa@gmail.com"
                    className="text-xl md:text-2xl font-serif text-[#1a2e30] hover:text-[#b3ced1] transition-all break-words"
                  >
                    coronalandscapingwa@gmail.com
                  </a>
                </div>

                {/* Location */}
                <div className="group">
                  <span className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 block mb-2 md:mb-4">
                    Location
                  </span>
                  <p className="text-xl md:text-2xl font-serif text-[#1a2e30]">
                    Monroe, WA & <br /> Surrounding Regions
                  </p>
                  <p className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-[#b3ced1] mt-2 md:mt-4 italic">
                    Serving Snohomish & King County
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Box */}
            <div className="p-8 md:p-12 bg-[#b3ced1] text-[#1a2e30] shadow-xl">
              <h3 className="text-2xl md:text-3xl font-serif mb-4 md:mb-8 leading-tight italic font-bold">
                Transforming Monroe since 2015.
              </h3>
              <p className="text-xs md:text-sm font-medium opacity-70 mb-6 md:mb-10 leading-relaxed">
                Call our team today for an immediate consultation or schedule a walk-through of your property.
              </p>

              <a
                href="tel:4254462308"
                className="inline-flex items-center gap-4 md:gap-6 bg-[#1a2e30] text-white px-8 md:px-10 py-3 md:py-4 text-[9px] md:text-[10px] font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase hover:bg-white hover:text-[#1a2e30] transition-all shadow-lg"
              >
                Call Now
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
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="reveal lg:col-span-8 bg-white p-6 sm:p-8 md:p-24 shadow-[0_20px_60px_rgba(179,206,209,0.1)] border border-gray-50 mt-8 lg:mt-0">
            <div className="mb-10 md:mb-20">
              <h2 className="text-3xl md:text-4xl font-serif text-[#1a2e30] mb-4 md:mb-6 italic">
                Request an Estimate
              </h2>
              <p className="text-sm md:text-base text-gray-500 font-light leading-relaxed">
                Provide us with some details about your project, and our estimator will contact you within one business day.
              </p>
            </div>

            {/* Form iframe */}
            <div style={{ minHeight: "600px" }}>
              <div
                id="inline-rragTL9pJaMvC9H1JloF-div"
                className="ep-iFrameContainer"
                style={{ borderRadius: "3px", display: "block" }}
              >
                <div
                  id="inline-rragTL9pJaMvC9H1JloF-wrapper"
                  className="ep-wrapper"
                  style={{ borderRadius: "3px" }}
                >
                  <iframe
                    src="https://api.leadconnectorhq.com/widget/form/rragTL9pJaMvC9H1JloF"
                    title="Website Form"
                    scrolling="yes"
                    className="w-full h-[629px] border-0 rounded"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;