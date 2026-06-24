import manifest from "./research.json";

export interface ResearchThread {
  slug: string;
  title: string;
  question: string;
  date: string;
  papers: number | null;
  edges: number | null;
  reportPath: string;
}

export const RESEARCH: ResearchThread[] = manifest;
