
//import { Mail, Phone, MapPin, Github } from 'lucide-react';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Header = ({ name, title, email, phone, location }: any) => (
  <header className="bg-white border-b py-12">
    <div className="max-w-5xl mx-auto px-6">
      <h1 className="text-4xl font-bold text-gray-900">{name}</h1>
      <p className="text-xl text-blue-600 mt-2">{title}</p>
      <div className="flex flex-wrap gap-4 mt-6 text-gray-600">
        <span className="flex items-center gap-1"><Mail size={18}/> {email}</span>
        <span className="flex items-center gap-1"><Phone size={18}/> {phone}</span>
        <span className="flex items-center gap-1"><MapPin size={18}/> {location}</span>
     {/*     //<a href={Github} className="flex items-center gap-1 text-blue-500 hover:underline">
       //  <Github size={18}/> Github
        </a>  */}
      </div>
    </div>
  </header>
);