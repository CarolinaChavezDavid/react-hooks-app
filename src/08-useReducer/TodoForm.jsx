import React from 'react'
import { useForm } from '../hooks/useForm'

export const TodoForm = ({onNewTodo}) => {
    const {description, onResetForm, onInputChange} = useForm({
        description: ''
})

const onFormSubmit = (event) => {
    event.preventDefault();
    if(description.length <= 1) return;

    const newTodo = {
        id: new Date().getTime(),
        done: false,
        description
    }
    onNewTodo(newTodo);
    onResetForm();
}

  return (
    <form onSubmit={onFormSubmit}>
        <input 
            type='text'
            placeholder='Is there something to do ?'
            className='form-control'
            name='description'
            value={description}
            onChange={onInputChange}
            />
        <button type= 'submit' className='btn btn-outline-primary mt-1'>
            Add
        </button>
                  
    </form>
  )
}
