import React from 'react';

interface EducationItemProps {
  degree: string;
  school: string;
  period: string;
}

export const EducationItem = ({ degree, school, period }: EducationItemProps) => (
  <div className="mb-6 last:mb-0 group">
    <div className="flex justify-between items-start">
      <div>
        <h4 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
          {degree}
        </h4>
        <p className="text-blue-600 font-medium">{school}</p>
      </div>
      <span className="text-sm font-semibold bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
        {period}
      </span>
    </div>
  </div>
);