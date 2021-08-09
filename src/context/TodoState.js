import React, { useReducer } from 'react';
import TodoContext from './todo-context';
import todoReducer from './todo-reducer';
import { TOGGLE_TODO, DELETE_TODO, ADD_TODO } from './todo-action';


function TodoState(props) {
    const initialState = {
        todos: [] // {id :'123' , text :'text',complete:false}
    }


    const [state, dispatch] = useReducer(todoReducer, initialState)


    // ADD todo
    const addTodo = (todo) => {
        dispatch({
            type: ADD_TODO,
            paylaod: todo,
        })
    }

    // TOGGLE todo
    const toggleTodo = (todoId) => {
        dispatch({
            type: TOGGLE_TODO,
            paylaod: todoId
        })
    }

    // DELETE todo
    const deleteTodo = (todoId) => {
        dispatch({
            type: DELETE_TODO,
            payload: todoId
        })
    }




    return (
        <TodoContext.Provider
            value={{
                todos: state.todos,
                addTodo,
                toggleTodo,
                deleteTodo
            }}
        >
            {props.children}

        </TodoContext.Provider>
    )
}

export default TodoState
