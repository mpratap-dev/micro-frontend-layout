import { createTheme } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";

const globalTheme = createTheme({
  palette: {
    primary: { main: purple[900] },
    default: { main: "#f5f5f5" },
  },
  shape: {
    borderRadius: 10,
  },
  typography: {
    fontFamily: ['"Nunito"', "Open Sans"].join(","),
    button: {
      textTransform: "none",
    },
  },
  overrides: {
    MuiTooltip: {
      root: {
        borderRadius: 4,
      },
    },
  },
});

export default globalTheme;
