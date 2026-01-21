/** @type {import('next').NextConfig} */
const nextConfig = {
  // Indica a Next.js que genere archivos estáticos (la carpeta /out)
  output: 'export', 
  
  // IMPORTANTE: El nombre del repositorio en GitHub es 'cv-app'
  basePath: '/cv-app', 

  // Ayuda a que los estilos y scripts se carguen desde la ruta correcta
  assetPrefix: '/cv-app/',

  // Desactiva la optimización de imágenes para exportación estática
  images: {
    unoptimized: true,
  },
};

export default nextConfig;