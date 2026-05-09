import { useEffect, useState } from "react";

import { TENANT_SLUG } from "~constants";
import { getProjects } from "~services";
import type { Project } from "~services";

let projectsCache: Project[] | null = null;

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>(projectsCache ?? []);
  const [isLoading, setIsLoading] = useState(projectsCache === null);

  useEffect(() => {
    if (projectsCache !== null) return;
    let cancelled = false;
    setIsLoading(true);
    getProjects(TENANT_SLUG)
      .then((data) => {
        if (!cancelled) {
          projectsCache = data;
          setProjects(data);
          setIsLoading(false);
        }
      })
      .catch(() => {
        if (!cancelled) setIsLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const featuredProjects = projects.filter((p) => p.isFeatured);

  const projectsByCategory = projects.reduce<Record<string, Project[]>>((acc, project) => {
    const cat = project.category;
    if (!acc[cat]) acc[cat] = [];
    acc[cat]!.push(project);
    return acc;
  }, {});

  return { projects, featuredProjects, projectsByCategory, isLoading };
};
