import { Box, Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import NavBar from "./NavBar";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { useState } from "react";

function App() {
  const [isDarkMode, setDarkMode] = useState(true);
  const paletteType = isDarkMode ? 'dark' : 'light';

  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === 'light' ? '#eaeaea' : '#121212'
      }
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <ScrollRestoration />
      <CssBaseline />
      <NavBar setDarkMode={setDarkMode} isDarkMode={isDarkMode} />
      <Box 
        sx={{
          minHeight: '100vh',
          background: 
            isDarkMode 
              ? 'radial-gradient(circle, #1e3aBa, #111B27)' 
              : 'radial-gradient(circle, #baecf9, #f0f9ff)'
        }}
      >
        <Container maxWidth='lg' sx={{ paddingY: 12 }}>
          <Outlet />
        </Container>
      </Box>
    </ThemeProvider>
  )
}

export default App
