import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "What are your service areas?",
    answer:
      "We proudly serve a broad region, including Snohomish and King County. From Monroe to Bellevue, our team brings expert landscaping to your doorstep. We regularly operate in Everett, Snohomish, Redmond, and the greater Eastside.",
  },
  {
    question: "How do I get in contact with you?",
    answer:
      "Simply fill out our request form on the contact page. Once we’ve received the details of what you’re looking for, our lead estimator will reach out to discuss next steps and schedule a site visit.",
  },
  {
    question: "How do you determine pricing?",
    answer:
      "Our pricing is honest and transparent. We base estimates on service type, premium material costs, and total scope. We provide firm quotes before a single shovel hits the ground, ensuring there are no hidden surprises.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      data-aos="fade-up"
      className="py-16 md:py-40 px-4 md:px-8 lg:px-16 bg-[#F5F2ED]"
    >
      <div className="reveal reveal-visible max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-serif text-[#1a2e30] mb-8 md:mb-20 text-center">
          Frequently Asked
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const num = String(index + 1).padStart(2, "0");

            return (
              <div
                key={index}
                className="bg-white border border-gray-100 transition-all duration-500 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full p-4 md:p-8 flex items-center justify-between text-left group"
                >
                  <h3 className="text-base md:text-2xl font-serif text-[#1a2e30] flex items-center gap-4 md:gap-6 group-hover:text-[#b3ced1] transition-colors pr-4">
                    <span className="text-[10px] md:text-xs font-sans opacity-40 font-bold tracking-[0.2em] md:tracking-widest uppercase shrink-0">
                      {num}
                    </span>
                    {faq.question}
                  </h3>
                  <div
                    className="transition-transform duration-500 shrink-0 text-[#b3ced1]"
                    style={{
                      transform: isOpen ? "rotate(0deg)" : "rotate(90deg)",
                    }}
                  >
                    {isOpen ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-minus md:w-5 md:h-5"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-plus md:w-5 md:h-5"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5v14" />
                      </svg>
                    )}
                  </div>
                </button>

                <div
                  className="transition-all duration-500 ease-in-out overflow-hidden"
                  style={{
                    maxHeight: isOpen ? "500px" : "0px",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="relative px-4 md:px-24 text-gray-500 font-light leading-relaxed border-l-4 border-[#b3ced1]/30 ml-4 md:ml-8 text-sm md:text-base pb-6 md:pb-12">
                    <span
                      className="absolute left-0 top-1 -translate-y-1/2"
                      style={{
                        width: "4px",
                        height: "60%",
                        backgroundColor: "rgba(179, 206, 209, 0.3)",
                      }}
                    />
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
