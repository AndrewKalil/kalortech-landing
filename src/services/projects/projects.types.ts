export interface ProjectData {
  title: string;
  description: string;
  websiteUrl: string;
  image: string;
  tags: string[];
  category: string;
  isFeatured: boolean;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  websiteUrl: string;
  image: string;
  tags: string[];
  isFeatured: boolean;
}
