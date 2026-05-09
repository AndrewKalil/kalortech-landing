import type { ProjectData } from "~services";

export interface AdminEntry {
  id: string;
  displayOrder: number;
  data: ProjectData;
}

export interface ProjectEditorCardProps {
  entry: AdminEntry;
  index: number;
  previewUrl?: string;
  categories: string[];
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | HTMLElement>) => void;
  onTagsChange: (index: number, value: string) => void;
  onFileChangeHandler: (entryId: string, file: File) => void;
  onDeleteHandler: (entryId: string) => void;
}
