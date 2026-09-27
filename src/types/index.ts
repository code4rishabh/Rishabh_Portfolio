export interface Section {
  id: string;
  type: 'hero' | 'about' | 'projects' | 'contact' | 'custom';
  order: number;
  content: Record<string, unknown>;
  style?: Record<string, unknown>;
  metadata?: {
    lastUpdated: string;
    published: boolean;
  };
}

export interface Page {
  id: string;
  slug: string;
  title: string;
  description?: string;
  sections: string[]; // IDs of sections or the full section objects
  createdAt: string;
  updatedAt: string;
}

export interface PortfolioData {
  pages: Page[];
  sections: Section[];
}
