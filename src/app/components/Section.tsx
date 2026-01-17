import React from 'react';

interface SectionProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

export const Section = ({ title, icon, children }: SectionProps) => (
  <section className="mb-12 last:mb-0">
    <div className="flex items-center gap-3 mb-6 border-b border-gray-200 pb-2">
      <span className="text-blue-600">{icon}</span>
      <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
    </div>
    <div className="px-1">
      {children}
    </div>
  </section>
);