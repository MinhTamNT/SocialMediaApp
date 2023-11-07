/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sora: ["Sora"],
      },
      colors: {
        primary: "#fe2c55",
        secondry: "#0F1A1C",
        "boder-color-default": "#0000001a",
        "color-deafult": "#ffffff",
        "avatar-color": "#55BD46",
        "hover-deafult": "#E2E7E9",
        "color-bg-detailprofile": "#00000099",
        "text-color-weak": "#576F76",
        "color-loading-clear-btn": "rgba(22, 24, 35, 0.34)",
      },
      fontSize: {
        11: "11px",
        12: "12px",
        13: "13px",
        14: "14px",
        16: "16px",
        20: "20px",
        26: "26px",
        24: "24px",
        32: "32px",
        36: "36px",
        48: "48px",
      },
    },
  },
  plugins: [],
};
