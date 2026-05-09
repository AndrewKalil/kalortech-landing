export interface DocParam {
  name: string;
  type: string;
  description: string;
  required?: boolean;
  defaultValue?: string;
}

export interface CodeExample {
  title?: string;
  code: string;
  language?: string;
}

export interface DocEntry {
  name: string;
  description: string;
  signature?: string;
  params?: DocParam[];
  returnType?: string;
  returnDescription?: string;
  examples: CodeExample[];
  notes?: string[];
}

export interface ConstantDocEntry {
  name: string;
  type: string;
  value: string;
  description: string;
}

export interface TypeDocEntry {
  name: string;
  description: string;
  definition: string;
}

export interface NavSection {
  id: string;
  label: string;
}
