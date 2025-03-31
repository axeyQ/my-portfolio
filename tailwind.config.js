/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: '#0070f3',
          secondary: '#6c757d',
          background: '#121212',
          text: '#f8f9fa',
          accent: '#4cc9f0',
        },
      },
    },
    plugins: [],
  };