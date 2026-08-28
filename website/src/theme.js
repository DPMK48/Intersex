// src/theme/theme.js
import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  colors: {
    purple: {
      50: "#f7ebfc",
      100: "#e3c3f2",
      200: "#cf9be8",
      300: "#bb73dd",
      400: "#a74bd3",
      500: "#64117e", // Brand purple
      600: "#530d69",
      700: "#420954",
      800: "#31053f",
      900: "#20012a",
    },
    orange: {
      50: "#fff8eb",
      100: "#fde6c1",
      200: "#fcd393",
      300: "#fbbf62",
      400: "#faac32",
      500: "#f5ac07", // Brand orange
      600: "#c48805",
      700: "#936504",
      800: "#624303",
      900: "#312101",
    },
    blackish: "#1d2130",
  },
});

export default customTheme;
