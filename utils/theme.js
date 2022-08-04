import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#fff"
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
          background-color: #121212;
        }
      `
    }
  }
});

export default theme;
