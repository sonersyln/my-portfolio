/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Poppins"],
      },
      backgroundImage: {
        "radial-gradient":
          "radial-gradient(circle, rgba(242,138,46,1) 0%, rgba(242,138,46,0.5) 70%, rgba(242,138,46,0) 100%)",
        "custom-radial-gradient":
          "radial-gradient(circle, rgba(85,230,165,1) 0%, rgba(85,230,165,0.5) 70%, rgba(85,230,165,0) 100%)",
      },
    },
  },
  plugins: [],
};
