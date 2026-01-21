
/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. Indica a Next.js que genere archivos estáticos (la carpeta /out)
  output: 'export', 
  
  // 2. El nombre de tu repositorio en GitHub es 'cv-app'
  basePath: '/cv-app', 

  // 3. Obliga a que los estilos y scripts se busquen dentro de la carpeta del repo
  assetPrefix: '/cv-app',

  // 4. Agrega una barra al final de las URLs, ayudando a GitHub a encontrar los archivos
  trailingSlash: true,

  // 5. Desactiva la optimización de imágenes (GitHub Pages no tiene servidor para procesarlas)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;