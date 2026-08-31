/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#12201C",       // deep expedition green-black — dark sections, headings
        forest: "#1F3A2E",    // secondary dark green
        parchment: "#ECE5D3", // warm map-paper background
        parchmentDark: "#DFD5B8",
        brass: "#B98B3E",     // compass-brass accent
        brassDark: "#936B28",
        rust: "#A8452F",      // error / alert accent
        mist: "#F6F3EA",      // near-white card surface
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "topo": "radial-gradient(circle at 1px 1px, rgba(18,32,28,0.08) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
};
