# react-hooks-app
practice with react hooks

#### useState
#### useEffect
```
useEffect(() => {
  // efectos secundarios
}, []) 
```
 </br>
[ ] dependency, it's just called once when the component is rendered.

```
useEffect(() => {
      
}, [formState])

```
 </br>
formstate dependency,  call when formState changes

#### useRef
change variable value without re-rendered the component

#### useMemo
#### useCallback

### Reducer:
is a function that should return a new state, usually receive two arguments; initial state and a action to excecute. must not have secondary effects or async task. Must not call the locarStorage or sessionStorage. It must not require more than one acction that could have an argument

```
const initialTodo = [{
    id:1,
    todo: 'Buy tomatoes',
    done: false
}]

const todoReducer = (state = initialTodo, action ) => {
    return state
}

```
