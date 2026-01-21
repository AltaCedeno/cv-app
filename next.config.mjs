/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. Indica a Next.js que genere archivos estáticos (la carpeta /out)
  output: 'export', 
  
  // 2. IMPORTANTE: Pon el nombre de tu repositorio de GitHub aquí
  // Si tu repo se llama "cv-app", déjalo así. Si tiene otro nombre, cámbialo.
  basePath: '/cv-app', 
  assetPrefix: '/cv-app/', // Agrega esto también

  // 3. Desactiva la optimización de imágenes para exportación estática
  images: {
    unoptimized: true,
  },
};

export default nextConfig;