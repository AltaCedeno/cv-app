import React from 'react';

interface EducationItemProps {
  degree: string;
  //school: string;
  //period: string;
}

export const EducationItem = ({ degree }: EducationItemProps) => (
  <div className="mb-4">
    
        <h3 className="font-bold"> {degree}</h3> 
        
      <div className="flex justify-between items-start"> </div>
      <div>
        <h4 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors"></h4>

    </div>
    </div>
);