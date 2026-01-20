import type { NextConfig } from "next";
// @type {import('next').NextConfig} 


//const nextConfig: NextConfig = {
  /* config options here */
//  reactCompiler: true,
//};

//export default nextConfig;



///** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Indica que genere HTML estático
<<<<<<< HEAD
  basePath: '/cv-app', // Reemplaza con el nombre exacto de tu repositorio
=======
  basePath: '/cv-alta', // Reemplaza con el nombre exacto de tu repositorio
>>>>>>> 67ad598514f99d2e8f6e64c49c1ce3c3c3c60de0
  images: {
    unoptimized: true, // GitHub Pages no soporta la optimización de imágenes de Next.js
  },
};

module.exports = nextConfig;