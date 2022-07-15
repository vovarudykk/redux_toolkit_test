import React from 'react'
import { useDispatch } from 'react-redux'
import { removeTodo, toggleTodoComplete } from '../store/todoSlice'

export const TodoItem = ({id, text, completed}) => {
  const dispatch = useDispatch();

  return (
    <li key={id}>
        <input type="checkbox" checked={completed} onClick={() => dispatch(toggleTodoComplete({id}))}/>
        <span>{text}</span>
        <span className='btn-del' onClick={() => dispatch(removeTodo({id}))}>&times;</span>
    </li>
  )
}
