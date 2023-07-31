/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // 15 column grid
        15: "repeat(15, minmax(0, 1fr))",
        // 20 column grid
        20: "repeat(20, minmax(0, 1fr))",
      },
      gridColumn: {
        // 17 column span
        "span-17": "span 17 / span 17",
      },
    },
  },
  plugins: [],
};
