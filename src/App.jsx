import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { LandingPage } from './components/landingPage'
import Menu from './components/menu'

function App() {
  const [count, setCount] = useState(0)

  return (
   <Menu>
    <LandingPage/>
   </Menu>
  )
}

export default App
