module.exports = {
  content: [
    './src/app.jsx',
  ],
  theme: {
    fontFamily: {
      sans: ['"PT Sans"', 'sans-serif']
    },
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        main: "var(--main)",
        background: "var(--background)",
        header: "var(--header)",
        accent: "var(--accent)",
      },
    }
  },
  plugins: [],
}
