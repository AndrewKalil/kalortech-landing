import { ApiSection } from "./ApiSection";
import { HeroSection } from "./HeroSection";
import { HooksSection } from "./HooksSection";
import { InstallSection } from "./InstallSection";
import { TestingSection } from "./TestingSection";
import { UtilsSection } from "./UtilsSection";

export const SharedLogicDocsPage = () => (
  <>
    <HeroSection />
    <InstallSection />
    <HooksSection />
    <UtilsSection />
    <TestingSection />
    <ApiSection />
  </>
);
