import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { AddTodo, DeleteTodo } from '../Redux/Slices/TodoSlices'


function TodoList() {

  const dispatch = useDispatch()

  
  const Todos = useSelector((state) => state.Todo.Todo)

  return (
    <div className='my-5 d-flex justify-content-center flex-column'>
      <div className='d-flex justify-content-evenly'>
        <h2 className='text-center'>Todo List</h2>
        <Link to={'/add'}><button className='btn btn-outline-primary'>Add Todo</button></Link>
      </div>
      <table className='table table-responsive w-75 my-5 mx-auto table-bordered table-striped text-center'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {
            Todos.map((item)=>(
            <tr key={item?.id}>
              <td>{item.Name}</td>
              <td>{item.Email}</td>
              <td>{item.Phone}</td>
              <td>
                <button onClick={()=>dispatch(DeleteTodo(item.id))} className='btn btn-danger'>Delete</button>
                <Link to={`/edit/${item.id}`}> <button className='btn btn-dark ms-3'>Edit</button></Link>
              </td>
            </tr>
            ))
          
          }
        </tbody>
      </table>
    </div>
  )
}

export default TodoList