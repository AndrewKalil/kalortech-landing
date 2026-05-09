import { ContextSystemSection } from "./ContextSystemSection";
import { HeroSection } from "./HeroSection";
import { HooksSection } from "./HooksSection";
import { KnowledgeCenterSection } from "./KnowledgeCenterSection";
import { SettingsSection } from "./SettingsSection";
import { SetupSection } from "./SetupSection";

export const ClaudeAutoDocsPage = () => (
  <>
    <HeroSection />
    <SetupSection />
    <KnowledgeCenterSection />
    <ContextSystemSection />
    <HooksSection />
    <SettingsSection />
  </>
);
