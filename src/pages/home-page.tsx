import ClientChronicles from "../components/share/client-chronicles";
import CoreSpecialties from "../components/share/core-specialties";
import FaqSection from "../components/share/faq";
import Hero from "../components/share/hero";
import Legacy from "../components/share/Legacy";
import Request from "../components/share/request";
import SulationSummary from "../components/share/sulation-summary";

const HomePage = () => {
  return (
    <main className="flex-grow bg-[#F5F2ED]">
      <Hero />
      <Legacy />
      <CoreSpecialties />
      <SulationSummary />
      <ClientChronicles />
      <FaqSection />
      <Request />
    </main>
  );
};

export default HomePage;
