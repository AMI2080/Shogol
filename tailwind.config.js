/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,scss,ts}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        pattern: "url('/assets/images/pattern.png')",
      }),
    },
  },
  plugins: [],
};
