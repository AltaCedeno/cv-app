
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/cv-app',
  assetPrefix: '/cv-app', // Quitamos la barra final aquí para probar
  images: {
    unoptimized: true,
  },
  // Esto ayuda a que las rutas de los archivos estáticos no se rompan
  trailingSlash: true, 
};

export default nextConfig;