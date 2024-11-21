import { useState, useReducer } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return { count: state.count++ }

      case "decrement":
        return { count: state.count-- }

      default:
        return state

    }

  }
  function increment() {
    dispatch({ type: "increment" })
  }
  function decrement() {
    dispatch({ type: "decrement" })
  }


  const [state, dispatch] = useReducer(reducer, { count: 0 })
  return (
    <>
      <div class="addSubtract">
        <button onClick={increment} >+</button>
        <p>{state.count}</p>
        <button onClick={decrement}>-</button>
      </div>
    </>
  )
}

export default App
