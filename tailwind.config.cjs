/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}", "index.html"],
  theme: {
    fontFamily: {
      sans: ["Alegreya"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      display: ["Oswald"],
      body: ['"Open Sans"'],
    },
    extend: {
      gridTemplateRows: {
        // Simple 8 row grid
        8: "repeat(8, minmax(0, 1fr))",

        // Complex site-specific row configuration
        layout: "200px minmax(900px, 1fr) 100px",
      },
    },
  },
  plugins: [require("daisyui"), require("tailwind-scrollbar")],
  daisyui: {
    themes: ["valentine"],
    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};
