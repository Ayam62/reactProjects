import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Title from './components/Title';
import Task1 from './components/task1';
import TodoItems from './components/todoitems';
import Heading from './components/heading';

function App() {
   const toDo=[
    {
      name:"Maths Homework",
      date:"10/2/3"
    },
    {
      name:"Physics Homework",
      date:"10/2/3"
    }
   ]


  return (
    <>
      <Heading></Heading>
      <Title></Title>
      <TodoItems todo={toDo}></TodoItems>
      
      
    </>
  )
}

export default App
