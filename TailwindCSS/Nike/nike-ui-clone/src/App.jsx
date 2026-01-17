import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="newdiv bg-blue flex gap-2 ">
      <h1 className='p-5 bg-white text-black'>HII</h1>
      <h1 className='p-5 bg-white text-black'>Tailwind</h1>
      <h1 className='p-5 bg-white text-black'>CSS</h1>
      </div>
    </>
  )
}

export default App
