import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        IntegralCF:['IntegralCF','sans-serif'],
        Satoshi_Reg:['Satoshi-Reg','sans-serif'],
        Satoshi_Med:['Satoshi-Med','sans-serif'],
        Satoshi_Bold:['Satoshi-Bold','sans-serif'],
        Matemasie:['Matemasie','sans-serif']
      }
    },
  },
  plugins: [
    function({addUtilities}) {
      const newUtilities = {
        '.imp-bg-transparent': {
          'background-color': 'transparent !important'
        }
      }
      addUtilities(newUtilities)
    }
  ],
});


