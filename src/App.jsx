import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Desktop from './Components/Desktop Designs/Desktop'
import Mobile from './Components/Mobile Designs/Mobile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
       <Mobile />
      <Desktop />
    </div>
  )
}

export default App
