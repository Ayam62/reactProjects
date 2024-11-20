import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Title from './components/Title';
import Task1 from './components/task1';
import TodoItems from './components/todoitems';
import Heading from './components/heading';
import Error from '../../04_Calcluater/src/components/error';

function App() {
  //  const initialtoDoItems=[
  //   {
  //     name:"Maths Homework",
  //     date:"10/2/3"
  //   },
  //   {
  //     name:"Physics Homework",
  //     date:"10/2/3"
  //   }
  //  ]
   const [toDo,settoDo]=useState([])




  const handleAdd=(name,date)=>{
    const todoArr=[...toDo,{name,date}]
    settoDo(todoArr);
  }
  const handleDlt=(itemName,itemDate)=>{
    const newToDoItems=toDo.filter((item)=>
      item.name!=itemName
    )
    settoDo(newToDoItems)
  }


  return (
    <>
      <Heading></Heading>
      <Title handleAdd={handleAdd}></Title>
      <Error todo={toDo}></Error>
      <TodoItems todo={toDo} handleDlt={handleDlt}></TodoItems>
    </>
  )
}

export default App
