import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#FFC738",
    },
    secondary: {
      main: "#07054C",
    },
    gradient: {
      start: "#AA5418",
      end: "#FFC738",
    },
    waveGradient: {
      start: "#FFC738",
      end: "#DB4D20",
    },
    lightGradient: {
      start: "#FFFFFF",
      end: "#FFE3E3",
    },
    text: {
      primary: "#DB4D20",
      secondary: "#FFC738",
    },
    button: {
      main: "#FFC738",
      focused: "#FFC738",
    },
    unverified: "#F3964A",
    verified: "#2979ff",
    applied: "#ffc107",
    admitted: "#8bc34a",
    rejected: "#f44336",
    declined: "#f44336",
    confirmed: "#4caf50",
  },
  typography: {
    fontFamily: "Poppins, Roboto, sans-serif",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      mobile: 450,
      tablet: 800,
      desktop: 1200,
    },
  },
});
