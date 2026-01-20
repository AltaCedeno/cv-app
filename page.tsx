"use client"; // Necesario en Next.js si usas interactividad o hooks

import React from 'react';
// 1. Importaciones con rutas relativas corregidas

import { PDFDownloadLink } from '@react-pdf/renderer';

import { Download } from 'lucide-react';

// Verifica que la carpeta sea 'components' (minúscula) y el archivo 'Header' (Mayúscula)
import { Header } from './components/Header';
import { Section } from './components/Section';
import { EducationItem } from './components/EducationItem';
import { SkillCategory } from './components/SkillCategory';


// 2. Iconos de lucide-react
import { GraduationCap, Award, User } from 'lucide-react';

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
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

        {/* Sección Education */}
        <Section title="Education" icon={<GraduationCap className="w-6 h-6" />}>
          <EducationItem 
            degree="Bachelor's degree in computer science"
           // school="Universidad de República Dominicana"
           // period="2015 - 2019"
          />
          <EducationItem 
            degree="Manager and design DB SQL server"
         //   period="2020"
         //   school="Universidad Autónoma de Santo Domingo"
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
              skills={['Node.js', 'Express']}
            />
            <SkillCategory 
              category="Database"
              skills={['MySQL', 'SQL Server', 'Database Management']}
            />
            <SkillCategory 
              category="Tools"
              skills={['VS Code', 'Git', 'GitHub', 'Vercel']}
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