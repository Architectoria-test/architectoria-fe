import React, { useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { MenuLayout } from "./components/Layouts";
import { ListBeds } from "./components/Display";

const theme = createTheme({
  typography: {
    fontFamily: ["Montserrat"].join(","),
    body1: {
      fontFamily: "Montserrat",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "1rem",
      lineHeight: "125%",
    },
  },
});

function App() {
  useEffect(() => {
    console.log(theme);
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <MenuLayout>
        <ListBeds />
      </MenuLayout>
    </ThemeProvider>
  );
}

export default App;
