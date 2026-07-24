export type NavigationTab = 'inicio' | 'proyectos' | 'sobre-mi' | 'restauracion-ia' | 'contacto';

export interface ProjectHighlight {
  label: string;
  value: string;
  icon?: string;
}

export interface ProjectStoryPoint {
  emoji?: string;
  title: string;
  text: string;
}

export interface ProjectStory {
  headline: string;
  guideText?: string;
  storyPoints: ProjectStoryPoint[];
  conclusion?: string;
  callToAction?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Reconstrucción 3D' | 'Arqueología Urbana' | 'Restauración IA' | 'Fotogrametría 3D';
  chronology: string;
  location: string;
  structures?: string;
  description: string;
  fullAnalysis?: string;
  story?: ProjectStory;
  imageCurrent: string; // Current state / Ruins
  imageReconstructed: string; // AI Reconstructed state
  videoUrl?: string; // Optional video asset
  highlights: ProjectHighlight[];
  statusBadge?: string;
  featured?: boolean;
  dateReport?: string;
}

export interface ArchitectBio {
  name: string;
  role: string;
  currentPosition: string;
  company: string;
  education: string;
  university: string;
  bioSummary: string;
  bioFull: string[];
  dualProfileCore: {
    tech: string;
    strategy: string;
  };
  academicFoundation: {
    title: string;
    description: string;
  }[];
}

export interface RestorationAnalysisResult {
  siteTitle: string;
  period: string;
  analysisText: string;
  materialBreakdown: string[];
  promptFor3D: string;
  preservationStatus: string;
  recommendedAction: string;
  confidenceScore?: number;
}
