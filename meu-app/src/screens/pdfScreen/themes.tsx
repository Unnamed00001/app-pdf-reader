export const themes = {
  dark: {
    background: "#2F2F2F",
    menu: "rgba(0,0,0,0.8)",
    text: "#FFFFFF",
    accent: "#4F8BFF",
  },

  light: {
    background: "#FFFFFF",
    menu: "rgba(255,255,255,0.95)",
    text: "#111111",
    accent: "#2563EB",
  },

  sepia: {
    background: "#F1E7D0",
    menu: "rgba(241,231,208,0.95)",
    text: "#3B2F2F",
    accent: "#A16207",
  },
};

export type ThemeName = keyof typeof themes;
