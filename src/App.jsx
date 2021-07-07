import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import globalTheme from "@oyerickshaw/common.utils.theme";
import Navbar from "./components/Navbar";

const App = () => (
  <ThemeProvider theme={globalTheme}>
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
