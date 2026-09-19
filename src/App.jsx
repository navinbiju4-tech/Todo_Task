import { useState } from 'react'
import TodoForm from './Compenents/TodoForm'
import TodoList from './Compenents/TodoList'
import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {
 

  return (
    <>
     <Routes>
      <Route path='/' element={<TodoList/>}></Route>
      <Route path='/add' element={<TodoForm/>}/>
      <Route path='/edit/:id' element={<TodoForm/>}></Route>
     </Routes>
    </>
  )
}

export default App
