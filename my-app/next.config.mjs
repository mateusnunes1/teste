/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  output: 'export',
  basePath: isProd ? '/my-app' : '',
  assetPrefix: isProd ? '/my-app/' : '',
  images:{
    unoptimized: true
  }
};

export default nextConfig;