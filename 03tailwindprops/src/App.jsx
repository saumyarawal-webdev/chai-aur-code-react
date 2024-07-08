import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="bg-yellow-300 text-blue-950 p-4 rounded-2xl mb-4">Tailwind Test</h1>
      <Card name="Marrie"/>
      <Card name="Skyler"/>
    </>
  )
}

export default App
