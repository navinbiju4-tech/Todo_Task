import { configureStore } from "@reduxjs/toolkit";

import TodoSlice from './Slices/TodoSlices'

const TodoStore = configureStore({
    reducer:{
       Todo:TodoSlice
    }
})

export default TodoStore