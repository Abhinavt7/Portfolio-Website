import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Certifications from './components/Certifications'

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#2196f3',
      },
      secondary: {
        main: '#f50057',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Education />
        <Certifications />
      </main>
    </ThemeProvider>
  )
}

export default App
