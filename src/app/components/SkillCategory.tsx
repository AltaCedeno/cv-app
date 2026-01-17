import React from 'react';

interface SkillCategoryProps {
  category: string;
  skills: string[];
}

export const SkillCategory = ({ category, skills }: SkillCategoryProps) => (
  <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:border-blue-200 transition-all">
    <h3 className="font-bold text-gray-700 mb-4 text-sm uppercase tracking-wider">
      {category}
    </h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span 
          key={skill} 
          className="bg-blue-50 text-blue-700 px-3 py-1 rounded-md text-xs font-bold border border-blue-100"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);