import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let day,time;
    const date=new Date();
     day=date.toLocaleDateString();
     time=date.toLocaleTimeString();
  
  return (
    <>
    <h1>Nepal_Clock</h1>
    <p>The clock that shows the time in Nepal</p>
    <p>The current time is:{day} and {time} </p>
    </>
  )
}

export default App
