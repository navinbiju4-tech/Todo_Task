import React, { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AddTodo, UpdateTodo } from '../Redux/Slices/TodoSlices'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

function TodoForm() {

  const { id } = useParams()
  console.log(id);

  const Todos = useSelector((state) => state.Todo.Todo)

  const EditTodo = Todos.find((items) => items.id == id)
  useEffect(() => {
    if (EditTodo) {
      setName(EditTodo.Name)
      setEmail(EditTodo.Email)
      setPhone(EditTodo.Phone)
    }

  }, [id])

  const [name, setName] = useState(" ")
  const [email, setEmail] = useState(" ")
  const [phone, setPhone] = useState(" ")


  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault()

    const newTodo = {
      id: id ? Number(id) : Date.now(),
      Name: name,
      Email: email,
      Phone: phone
    }
    if (id) {
      dispatch(UpdateTodo(newTodo))
      alert("sucessFully edited")
    } else {
      dispatch(AddTodo(newTodo))
      alert("succesfully added")
    }


    setName("");
    setEmail("");
    setPhone("");

  }



  return (
    <div className='my-5 container '>

      <div className='d-flex justify-content-center align-items-center  flex-column  border p-4 rounded shadow'>


        <h3 >{id ? "Edit Todo" : "Add New Todo"}</h3>


        <form onSubmit={handleSubmit} className='w-75 md:w-25 my-5  '>
          <div>
            <input value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder='name' className='form-control'></input>
          </div>
          <div className='mt-3'>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='email' className='form-control' />
          </div>
          <div className='mt-3'>
            <input value={phone} onChange={(e) => setPhone(e.target.value)} type='number' placeholder='number' className='form-control' />
          </div>
          <div className='mt-3 d-grid'>
            <button type='submit' className='btn btn-outline-success w-100' > {id ? "Edit Todo" : "Add Todo"}</button>
            <Link to={'/'}><button className='btn btn-outline-primary mt-2 w-100'>Todo-List</button></Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default TodoForm