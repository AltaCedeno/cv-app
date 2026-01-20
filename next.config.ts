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
  basePath: '/cv-app', // Reemplaza con el nombre exacto de tu repositorio
  images: {
    unoptimized: true, // GitHub Pages no soporta la optimización de imágenes de Next.js
  },
};

module.exports = nextConfig;