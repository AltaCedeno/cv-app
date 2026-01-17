import React from 'react';

export const Section = ({ title, icon, children }: any) => (
  <section className="mb-10">
    <div className="flex items-center gap-2 mb-4 border-b border-gray-200 pb-2">
      <span className="text-blue-600">{icon}</span>
      <h2 className="text-2xl font-semibold text-gray-800 uppercase tracking-wider">{title}</h2>
    </div>
    {children}
  </section>
);