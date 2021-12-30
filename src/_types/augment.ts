/**
 * Augment the Material-UI styles type to support
 * our custom additional colors in the theme
 */
declare module "@mui/material/styles" {
  interface PaletteOptions {
    gradient: {
      start: string
      end: string
    }
    waveGradient: {
      start: string
      end: string
    }
    lightGradient: {
      start: string
      end: string
    }
    button: {
      main: string
      focused: string
    }
    unverified: string
    verified: string
    applied: string
    admitted: string
    rejected: string
    declined: string
    confirmed: string
  }

  interface Palette {
    gradient: {
      start: string
      end: string
    }
    waveGradient: {
      start: string
      end: string
    }
    lightGradient: {
      start: string
      end: string
    }
    button: {
      main: string
      focused: string
    }
    unverified: string
    verified: string
    applied: string
    admitted: string
    rejected: string
    declined: string
    confirmed: string
  }
}

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true
    sm: true
    md: true
    lg: true
    xl: true
    mobile: true
    tablet: true
    desktop: true
  }
}

export {}
