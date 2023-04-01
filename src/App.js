import React, { useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: ["Montserrat"].join(","),
  },
});

function App() {
  useEffect(() => {
    console.log(theme);
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Typography>Hello</Typography>
      </Box>
    </ThemeProvider>
  );
}

export default App;
