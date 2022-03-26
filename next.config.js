/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// };

const withTM = require("next-transpile-modules")([
  "gsap",
  "hover-effect",
]);
module.exports = withTM();

// module.exports = nextConfig;
