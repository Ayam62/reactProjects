import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/display'

function App() {


  return (
    <div id="calculator" className='bg-black-400 w-48'>
      <input type="text" id="display"></input>
        <Button></Button>
    </div>
  )
}

export default App
