import { useState,useReducer } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
function reducer(state,action){
  return {count:state.count++}
}
function increment(){
  dispatch()
}

const[state,dispatch]=useReducer(reducer,{count:0})
  return (
    <>
      <div class="addSubtract">
        <button onClick={increment} >+</button>
        <p>{state.count}</p>
        <button>-</button>
      </div>
    </>
  )
}

export default App
