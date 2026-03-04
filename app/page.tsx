import { EngineeringSection } from "./_components/layout/EngineeringSection";
import HeroPage from "./_components/layout/HeroSection";
import { ProjectsSection } from "./_components/layout/ProjectSection";

export default function Page() {
  return (
    <>
      <HeroPage />
      <EngineeringSection />
      <ProjectsSection />
    </>
  );
}
