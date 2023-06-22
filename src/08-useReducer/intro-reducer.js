const initialState = [{
    id: 1,
    todo: 'study react',
    done: false
}];

const todoReducer = (state = initialState, action = {}) => {
    if (action.type === '[TODO] Add todo') {
        return [...state, action.payLoad]
    }
    return state;
}

let todos = todoReducer

const newTodo = {
    id: 2,
    todo: 'study AWS',
    done: false
}

const addTodoAction = {
    tye: '[TODO] Add todo',
    payLoad: newTodo
}

todos = todoReducer(todos, addTodoAction)