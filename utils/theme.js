import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#121212"
    },
    secondary: {
      main: "#19857b"
    }
  },
  overrides: {
    MuiCssBaseline: {
      styleOverrides: `
        body {
          min-height: 100vh;
          min-width: 412px;
        }
      `
    }
  }
});

export default theme;
