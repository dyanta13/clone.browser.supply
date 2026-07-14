/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Jalur scan agar Tailwind membaca class di folder app dan components Anda
    //"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    //"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    
    // Jika proyek Anda TIDAK menggunakan folder 'src', aktifkan baris di bawah ini:
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // 1. Pastikan nama variabel '--font-serif-custom' ini sama dengan yang ada di layout.tsx Anda
        serif: ["var(--font-serif-custom)", "serif"],
        // 2. Pastikan nama variabel '--font-inter' ini juga sama dengan konfigurasi Inter Anda
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};