/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{html,js,jsx}"],
  content: ["./src/**/*.{html,js,jsx,ts,tsx"],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        blue: "#88E1F2",
        red: "#FF7C7C",
        yellow: "#FFD082",
        grey: "#21243D",
        /* blue: "#2cbce9",
        red: "#dc4492",
        yellow: "#fdcc49", */
        grey: "#ededed",
        "deep-blue": "#21243D",
        "dark-grey": "#757575",
        "opaque-black": "rga(0,0,0,0.35)"
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
           "linear-gradient(90deg, hsla(0, 100%, 74%, 1) 0%, hsla(190, 80%, 74%, 1) 100%)",
          //"linear-gradient(81.66deg, #00b5ee 7.21%, #ff45a4 45.05%, #ffba00 78.07%)",
          "gradient-rainblue":
          "linear-gradient(90deg, hsla(0, 100%, 74%, 1) 0%, hsla(190, 80%, 74%, 1) 100%)",
          //"linear-gradient(90deg, #24cbff 14.53%, #fc59ff 69.36%, #ffbd06 117.73%)",
      }),
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"]
      },
      content: {
        brush: "url('assets/brush.png')",
        person1: "url('assets/person-1.png')",
        person2: "url('assets/person-2.png')",
        person3: "url('assets/person-3.png')",
      }
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px"
    }
  },
  plugins: [],
}
