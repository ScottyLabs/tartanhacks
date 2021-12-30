import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#F3964A"
    },
    secondary: {
      main: "#AA5418"
    },
    gradient: {
      start: "#AA5418",
      end: "#F6C744"
    },
    waveGradient: {
      start: "#F6C744",
      end: "#F68F44"
    },
    lightGradient: {
      start: "#FFFFFF",
      end: "#FFE3E3"
    },
    text: {
      primary: "#AA5418",
      secondary: "#F3964A"
    },
    button: {
      main: "#F7C062",
      focused: "#e0ac52"
    },
    unverified: "#F3964A",
    verified: "#2979ff",
    applied: "#ffc107",
    admitted: "#8bc34a",
    rejected: "#f44336",
    declined: "#f44336",
    confirmed: "#4caf50"
  },
  typography: {
    fontFamily: "Poppins, Roboto, sans-serif"
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
      desktop: 1200
    }
  }
})
