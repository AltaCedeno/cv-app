"use client"; // Necesario en Next.js si usas interactividad o hooks

import React from 'react';
// 1. Importaciones con rutas relativas corregidas

import { PDFDownloadLink } from '@react-pdf/renderer';
import { Download } from 'lucide-react';
import { Header } from './components/Header';
import { EducationItem } from './components/EducationItem';
import { SkillCategory } from './components/SkillCategory'; 
import Section from './components/Section';
import Certificado from './components/Certificado';



// 2. Iconos de lucide-react
import { GraduationCap, Award, User } from 'lucide-react';

 {/* Sección Certifications */}  
interface CertificadoItem {
  id: number;
  ruta: string;
  nombre: string;
}

 const misCertificados: CertificadoItem[] = [
    { id: 1, ruta: '/certificados/DiplomaSQL.pdf', nombre: 'Certificado adminitrar BD' },
    { id: 2, ruta: '/certificados/DiplomaWEB.pdf', nombre: 'Certificado MVC Web Development'},
    { id: 3, ruta: '/certificados/Informatica.pdf', nombre: 'Certificado de Informática Profesional' },
  ];

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

      <main className="bg-gray-100 min-h-scree p-8">  {/* "max-w-5xl mx-auto px-6 py-10">*/}  
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

       
    return (
 
      {/* Usamos tu componente Section para mantener la consistencia del diseño */}
      
        <div className="max-w-6xl mx-auto px-4">
          
          {/* Encabezado de la sección */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Certificaciones Profesionales
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Validaciones oficiales de mis conocimientos técnicos y académicos.
            </p>
          </div>

          {/* Rejilla responsiva: 1 columna en móvil, 2 en tablets, 3 en pantallas grandes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {misCertificados.map((cert) => (
              <Certificado
                key={cert.id}
                rutaImagen={cert.ruta}
                titulo={cert.nombre}
              />
            ))}
          </div>

        </div>


 );

      </main>

      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-gray-300">© 2026 Alta Cedeño. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}