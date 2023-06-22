import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer'
import { TodoList } from './TodoList'
import { TodoForm } from './TodoForm'
import { useTodo } from '../hooks/useTodo'


export const TodoApp = () => {
    const {todos, handleDeleteTodo, handleToogleTodo, handleNewTodo} = useTodo();

  return (
    <>
        <h1>TodoApp: {todos.length} <small>pendients: {todos.filter(todo => !todo.done).length}</small></h1>
        <hr />
        <div className='row'>
            <div className='col-7'>
                <TodoList 
                todos={todos} 
                onDeleteTodo = {handleDeleteTodo}
                onToggleTodo = {handleToogleTodo}/>
            </div>

            <div className='col-5'>
                <h4>Add TODO</h4>
                <hr />
                <TodoForm onNewTodo={handleNewTodo}/>
            </div>
        </div>
    </>
  )
}
