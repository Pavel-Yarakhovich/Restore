import { Box, Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
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
      <CssBaseline />
      <NavBar setDarkMode={setDarkMode} isDarkMode={isDarkMode} />
      <Box 
        sx={{
          minHeight: '100vh',
          background: isDarkMode ? '#121212' : '#eaeaea'
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
