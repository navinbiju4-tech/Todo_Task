import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
    name: 'Todo',
    initialState: {
        Todo: []
    },
    reducers: {
        // this action we used for adding the date
        AddTodo: (state, action) => {
            state.Todo.push(action.payload)
        },
        UpdateTodo: (state, action) => {
            state.Todo = state.Todo.map((item) => item.id == action.payload.id ? action.payload : item)
        },
        DeleteTodo: (state, action) => {
            state.Todo = state.Todo.filter(
                (item) => item.id != action.payload
            )
        }
    }
})

export const { AddTodo, UpdateTodo, DeleteTodo } = TodoSlice.actions
export default TodoSlice.reducer