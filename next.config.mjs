
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/cv-app',
  assetPrefix: '/cv-app', // <--- AGREGA ESTA LÍNEA
  trailingSlash: true,    // <--- AGREGA ESTA LÍNEA
  images: {
    unoptimized: true,
  },
};

export default nextConfig;