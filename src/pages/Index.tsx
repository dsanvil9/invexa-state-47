import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AutomationSection from "@/components/AutomationSection";
import BenefitsSection from "@/components/BenefitsSection";
import TasksSection from "@/components/TasksSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import DeliverablesSection from "@/components/DeliverablesSection";
import ProcessSection from "@/components/ProcessSection";
import PricingSection from "@/components/PricingSection";
import SecuritySection from "@/components/SecuritySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AutomationSection />
      <BenefitsSection />
      <TasksSection />
      <CapabilitiesSection />
      <IntegrationsSection />
      <DeliverablesSection />
      <ProcessSection />
      <PricingSection />
      <SecuritySection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
