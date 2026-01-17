import React from 'react';
import { Mail, Phone, MapPin, Github } from 'lucide-react';

// Definimos la interfaz para evitar el error "any" y mejorar el autocompletado
interface HeaderProps {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  github: string;
}

export const Header = ({ name, title, email, phone, location, github }: HeaderProps) => (
  <header className="bg-white border-b py-12">
    <div className="max-w-5xl mx-auto px-6">
      <h1 className="text-4xl font-bold text-gray-900 tracking-tight">{name}</h1>
      <p className="text-xl text-blue-600 mt-2 font-medium">{title}</p>
      
      <div className="flex flex-wrap gap-6 mt-6 text-gray-600">
        <span className="flex items-center gap-2 text-sm">
          <Mail size={18} className="text-blue-500"/> {email}
        </span>
        <span className="flex items-center gap-2 text-sm">
          <Phone size={18} className="text-blue-500"/> {phone}
        </span>
        <span className="flex items-center gap-2 text-sm">
          <MapPin size={18} className="text-blue-500"/> {location}
        </span>
        <a 
          href={github} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 font-semibold transition-colors"
        >
          <Github size={18}/> GitHub
        </a>











        
      </div>
    </div>
  </header>
);