/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
  ],
  theme: {
    extend: {
      colors: {
        ungu: '#CB6CE6',
        gelap: '#17153A',
        unguGelap: '#461654',
        biru: '#5CE1E6',
        kuning: '#E4E325',
        hitam: '#0E0D23',
        abu: '#111827',
        linkedin: '#0077B5',
        github: '#333',
        gmail: '#C71610',
        whatsapp: '#25D366',
      },

      fontFamily: {
        share: "'Share', cursive",
      }
    },
  },
  plugins: [],
}