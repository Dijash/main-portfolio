const config = {
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0px)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 1s ease-out forwards",
        fadeUpDelay: "fadeUp 1.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
