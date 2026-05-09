import { useEffect, useState } from "react";

import { TENANT_SLUG } from "~constants";
import { getProjects } from "~services";
import type { Project } from "~services";

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setIsLoading(true);
    getProjects(TENANT_SLUG)
      .then((data) => {
        if (!cancelled) {
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
