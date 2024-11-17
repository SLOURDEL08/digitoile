/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  images: {
    domains: [], 
  },
};

// Remplacer module.exports par export default
export default nextConfig;