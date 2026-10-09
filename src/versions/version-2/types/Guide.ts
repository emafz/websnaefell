export type GuideStatus = "draft" | "published";

export interface GuideSection { heading: string; paragraphs: string[]; bullets?: string[] }
export interface GuideFaq { question: string; answer: string }

export interface Guide {
  id: string;
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  category: string;
  image: string;
  imageAlt: string;
  date: string;
  updatedAt: string;
  status: GuideStatus;
  keyPoints: string[];
  sections: GuideSection[];
  faq: GuideFaq[];
  relatedProducts: string[];
  relatedGuides: string[];
}
