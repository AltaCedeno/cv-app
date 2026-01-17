import { Header } from '@/app/components/Header';
import { Section } from '@/app/components/Section';
{/*import { ExperienceItem } from '@/app/components/ExperienceItem';*/}
import { EducationItem } from '@/app/components/EducationItem';
import { SkillCategory } from '@/app/components/SkillCategory';
// Importación corregida (asegúrate de tener instalada la librería lucide-react)
import { Briefcase, GraduationCap, Award, User } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        name="Altagracia Cedeño Sánchez"
        title="Full Stack Developer"
        email="codatasweb@gmail.com"
        phone="+1 (809) 223-8213"
        location="República Dominicana"
        github="https://github.com/AltaCedeno"
      />

      <main className="max-w-5xl mx-auto px-6 py-10">
        {/* Sección About Me */}
        <Section title="About Me" icon={<User className="w-6 h-6" />}>
          <p className="text-gray-700 leading-relaxed">
            Passionate full stack developer. Manejo de bases de datos MySQL y SQL Server, 
            experiencia con React, Node.js, Express y tecnologías cloud.
          </p>
        </Section>

       {/* Sección Experience - CORREGIDA
        <Section title="Experience" icon={<Briefcase className="w-6 h-6" />}>
          <ExperienceItem 
            title="Full Stack Developer"
            company="Digital Innovations Ltd."
            period="Mar 2019 - Dec 2020"
            description={[
              "Developed and maintained e-commerce platform serving 100K+ monthly active users",
              "Integrated payment gateways and third-party APIs",
              "Implemented automated testing, increasing code coverage to 85%",
              "Collaborated with UX designers"
            ]}
          />
          <ExperienceItem 
            title="Junior Web Developer"
            company="Freelance / Proyectos"
            period="2021 - Present"
            description={[
              "Built responsive web applications using React",
              "Worked with RESTful APIs and database design using MySQL"
            ]}
          />
        </Section> */}

        {/* Sección Education - CORREGIDA */}
        <Section title="Education" icon={<GraduationCap className="w-6 h-6" />}>
          <EducationItem 
            degree="Licenciatura en Informática"
            school="Universidad de República Dominicana"
            period="2015 - 2019"
          />
          <EducationItem 
            degree="Manager and design DB SQL server"
            school="Certificación Técnica"
            period="2020"
          />
        </Section>

        {/* Sección Skills */}
        <Section title="Skills" icon={<Award className="w-6 h-6" />}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillCategory 
              category="Programming Languages"
              skills={['JavaScript', 'TypeScript']}
            />
            <SkillCategory 
              category="Frontend"
              skills={['React', 'HTML5', 'CSS3']}
            />
            <SkillCategory 
              category="Backend"
              skills={['Node.js', 'Express', 'RESTful APIs']}
            />
            <SkillCategory 
              category="Database"
              skills={['MySQL', 'SQL Server', 'Database Management']}
            />
            <SkillCategory 
              category="Tools"
              skills={['VS Code', 'Git', 'GitHub']}
            />
          </div>
        </Section>
      </main>

      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-gray-300">© 2026 Alta Cedeño. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

