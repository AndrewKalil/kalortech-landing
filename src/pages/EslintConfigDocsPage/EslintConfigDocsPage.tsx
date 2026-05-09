import { ApiSection } from "./ApiSection";
import { ConfigsSection } from "./ConfigsSection";
import { HeroSection } from "./HeroSection";
import { InstallSection } from "./InstallSection";
import { RestrictedImportsSection } from "./RestrictedImportsSection";
import { RulesSection } from "./RulesSection";

export const EslintConfigDocsPage = () => (
  <>
    <HeroSection />
    <InstallSection />
    <ConfigsSection />
    <RulesSection />
    <RestrictedImportsSection />
    <ApiSection />
  </>
);
