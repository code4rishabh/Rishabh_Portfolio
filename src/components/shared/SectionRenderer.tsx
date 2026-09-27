import React, { Suspense } from 'react';
import { Section } from '@/types';

// Lazy load section components for performance
const Hero = React.lazy(() => import('@/components/sections/Home/Hero'));
const About = React.lazy(() => import('@/components/sections/Home/About'));
// const Projects = React.lazy(() => import('@/components/sections/Projects'));
// const Contact = React.lazy(() => import('@/components/sections/Contact'));


const components: Record<string, React.ComponentType<{ content?: Section["content"]; style?: Section["style"] }>> = {
  hero: Hero,
  about: About,
  // projects: Projects,
  // contact: Contact,
};

interface SectionRendererProps {
  sections: Section[];
}

export default function SectionRenderer({ sections }: SectionRendererProps) {
  if (!sections || sections.length === 0) return null;

  return (
    <>
      {sections
        .sort((a, b) => a.order - b.order)
        .map((section) => {
          const SectionComponent = components[section.type];
          if (!SectionComponent) {
            console.warn(`Section component for type "${section.type}" not found.`);
            return null;
          }

          return (
            <Suspense key={section.id} fallback={<div className="h-40 animate-pulse bg-gray-200" />}>
              <SectionComponent content={section.content} style={section.style} />
            </Suspense>
          );
        })}
    </>
  );
}
