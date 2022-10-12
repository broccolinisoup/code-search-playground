import { ThemeProvider, BaseStyles } from '@primer/react'

import Playground from './Playground'
import ColorModeSwitcher from './ColorModeSwitcher'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <ThemeProvider colorMode="auto">
      <BaseStyles>
        <BrowserRouter>
          <Playground />
          <ColorModeSwitcher />
        </BrowserRouter>
      </BaseStyles>
    </ThemeProvider>
  )
}

export default App
