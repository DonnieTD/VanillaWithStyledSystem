import React from "react"
import { ThemeProvider } from "styled-components"
import Themes from "./Themes"
import Box from "./Components/Primitives/Box/Box"

const App = () => {
  return (
    <ThemeProvider theme={Themes.Dark}>
      <Box color="gray" bg="silver" display="flex" height="100vw">
        <Box color="gray" bg="darkPurple" width={[1, 1 / 2]}>
          Blue Box
        </Box>
        <Box color="gray" bg="darkPurple" width={[1, 1 / 2]}>
          Blue Box
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default App
