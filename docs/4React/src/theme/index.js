import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createMuiTheme({
  overrides: {
    MuiTextField: {
      root: {
        marginTop: 8,
        marginBottom: 8,
      },
    },
    MuiButton: {
      root: {
        marginBottom: 16,
      },
    },
    MuiCard: {
      root: {
        margin: 8,
      },
    },
    MuiCardActionArea: {
      root: {
        padding: 8,
      },
    },
    MuiTypography: {
      root: {
        marginBottom: "12px !important",
      },
    },
  },
  palette: {
    primary: {
      main: "#EF9A24",
    },
    secondary: {
      main: "#00B4DD",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
});

export default theme;
