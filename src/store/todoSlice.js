import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todos",
    initialState: {
        todos: []
    },
    reducers: {
        addTodo(state, action) {
            console.log(state, action)
            state.todos.push({
                id: new Date().toISOString(),
                text: action.payload.text,
                completed: false,
              })
        },
        removeTodo(state, action) {
            console.log(state, action)
            state.todos = state.todos.filter(todo=>todo.id !== action.payload.id)
        },
        toggleTodoComplete(state, action) {
            console.log(state, action)
            const toggledTodo = state.todos.find(todo => todo.id === action.payload.id);
            toggledTodo.completed = !toggledTodo.completed;
        },
    }
})

export const {addTodo, removeTodo, toggleTodoComplete} = todoSlice.actions;

export default todoSlice.reducer;