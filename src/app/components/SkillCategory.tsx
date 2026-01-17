export const SkillCategory = ({ category, skills }: any) => (
  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
    <h3 className="font-bold text-gray-700 mb-3 border-b pb-1">{category}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill: string) => (
        <span key={skill} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
          {skill}
        </span>
      ))}
    </div>
  </div>
);