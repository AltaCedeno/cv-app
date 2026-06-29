
 {/*import Image from 'next/image';
// Definimos las propiedades que recibirá el componente
interface CertificadoProps {
  rutaImagen: string;
  titulo: string;
}

export default function Certificado({ rutaImagen, titulo }: CertificadoProps) {
  return (
    <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg shadow-sm bg-white">
      <h3 className="text-lg font-semibold mb-3 text-gray-800">{titulo}</h3>
      
    // Contenedor con tamaño controlado para la imagen 
      <div className="relative w-full h-64 min-w-[250px]">
        <Image
          src={rutaImagen}
          alt={`Imagen del ${titulo}`}
          fill // Hace que la imagen ocupe todo el contenedor
          className="object-contain rounded-md" // Ajusta la imagen sin deformarla
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
  );
}  */}
//-----------------------------------------------------

interface CertificadoProps {
  rutaImagen: string; // Sigue llamándose igual para no romper tu page.tsx
  titulo: string;
}

export default function Certificado({ rutaImagen, titulo }: CertificadoProps) {
  return (
    <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg shadow-sm bg-white w-full">
      <h3 className="text-lg font-semibold mb-3 text-gray-800 text-center line-clamp-1">
        {titulo}
      </h3>
      
      {/* Contenedor adaptado para el visor de PDF */}
      <div className="w-full h-72 rounded-md overflow-hidden border border-gray-100 shadow-inner">
        <iframe
          src={`${rutaImagen}#toolbar=0&navpanes=0`} // Oculta las barras de herramientas extras del navegador
          title={`Vista previa de ${titulo}`}
          className="w-full h-full border-none"
          loading="lazy"
        />
      </div>

      {/* Botón extra para que puedan abrir el PDF en pantalla completa */}
      <a 
        href={rutaImagen} 
        target="_blank" 
        rel="noopener noreferrer"
        className="mt-4 w-full text-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 
        rounded transition duration-200"
      >
        Ver Documento Completo
      </a>
    </div>
  );
}