import { Footer } from "~components";
import { useProjects, useScrollReveal } from "~hooks";

import { ProjectCategory } from "./ProjectCategory";
import { ProjectsCta } from "./ProjectsCta";
import { ProjectsHeader } from "./ProjectsHeader";
import { ProjectsNav } from "./ProjectsNav";
import { ProjectsSkeleton } from "./ProjectsSkeleton";

const CATEGORY_TITLES: Record<string, string> = {
  Library: "Libraries",
  Website: "Websites",
};

const getCategoryTitle = (category: string) => CATEGORY_TITLES[category] ?? `${category}s`;

export const ProjectsPage = () => {
  useScrollReveal();
  const { projectsByCategory, isLoading } = useProjects();

  return (
    <>
      <ProjectsNav />
      <main>
        <ProjectsHeader />
        {isLoading ? (
          <ProjectsSkeleton />
        ) : (
          Object.entries(projectsByCategory).map(([category, projects]) => (
            <ProjectCategory
              key={category}
              title={getCategoryTitle(category)}
              projects={projects}
            />
          ))
        )}
        <ProjectsCta />
      </main>
      <Footer />
    </>
  );
};
