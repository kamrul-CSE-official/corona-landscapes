import ContactInfo from "../components/contactInfo";
import ContactForm from "../components/share/contactForm";
import localAssets from "../consts/assets";

const ContactPage = () => {
  return (
    <main className="bg-[#f5f2ed] overflow-hidden">
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src={localAssets.servicePageBanner}
            alt="Contact Corona Landscapes"
          />
          <div className="absolute inset-0 bg-[#1a2e30]/70"></div>
        </div>
        <div data-aos="fade-up" className="relative z-10 text-center text-white px-4 md:px-8 max-w-4xl pt-20 md:pt-24 fade-in">
          <span className="inline-block text-[9px] md:text-[11px] font-bold tracking-[0.3em] md:tracking-[0.5em] uppercase mb-4 md:mb-6 opacity-70 text-[#b3ced1]">
            Begin The Journey
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-6 md:mb-8 italic">
            Contact Us
          </h1>
          <p className="text-sm md:text-base font-light tracking-[0.1em] md:tracking-[0.2em] uppercase opacity-80 max-w-2xl mx-auto">
            REACH OUT FOR A PERSONAL ESTIMATE AND DISCOVER THE POTENTIAL OF YOUR
            OUTDOOR SPACE.
          </p>
        </div>
      </section>

      {/* Contact Content Section */}
      <section data-aos="fade-up" className="pb-16 md:pb-40 px-4 md:px-8 lg:px-16 pt-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-32">
            {/* Left Side - Contact Information */}
            <div className="reveal lg:col-span-4">
              <ContactInfo />
            </div>

            {/* Right Side - Form */}
            <div className="reveal lg:col-span-8 mt-8 lg:mt-0">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
