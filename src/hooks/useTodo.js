import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";


const initialState = [{
    id: new Date().getTime(),
    description: 'Study React',
    done: false
},
{
    id: new Date().getTime() * 3,
    description: 'Study AWS',
    done: false
},]

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];

}

export const useTodo = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState, init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    
    }, [todos])
    

    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add todo',
            payload: todo
        }
        dispatch(action)
    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type:'[TODO] Remove todo',
            payload: id
        })
    }

    const handleToogleTodo = (id) => {
        dispatch({
            type:'[TODO] Toggle todo',
            payload: id
        })
    }
  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToogleTodo
  }
}
