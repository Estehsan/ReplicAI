/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "upcdn.io",
      "replicate.delivery",
      "lh3.googleusercontent.com",
      "unsplash.com",
      "images.unsplash.com",
      "avatars.githubusercontent.com",
      "plus.unsplash.com",
    ],
  },
};

module.exports = nextConfig;
