/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sora: ["Sora"],
      },
      keyframes: {
        modal: {
          "0%": { top: "0", opacity: "0" },
          "100%": { top: "200", opacity: "1" },
        },
      },
      animation: {
        modalapper: "modal 0.1s ease-in linear ",
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
        "PopperWrapper-color-Tippy": "rgba(255,255,255)",
        "color-popper": "rgba(22,24,35,0.5)",
        "hover-popper": "rgba(22,24,35,0.03)",
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
      boxShadow: {
        md: "4px 4px 8px 0 rgba(0, 0, 0, 0.2),-2px -2px 6px 0 rgba(255, 255, 255, 0.3);",
        sm: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
      },
    },
  },
  plugins: [],
};
