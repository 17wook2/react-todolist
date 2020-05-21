import React, { createContext, useReducer, useRef } from 'react';

const todoReducer = (todos, action) => {
    switch(action.type){
        case 'ADD_TODO':
            return todos.concat(action.todo);
        case 'TOGGLE':
            return todos.map(todo=>
                todo.id===action.id ? {...todo, done: !todo.done} : todo
            )
        case 'REMOVE':
            return todos.filter(todo=>todo.id!==action.id);
        default:
            throw new Error(`Unhandled Error Type ${action.type}`);
    }
    
}
const initialState = [
    {
        id: 1,
        text: '1번 할일',
        done: false,
    },
    {
        id: 2,
        text: '2번 할일',
        done: false,
    },
    {
        id: 3,
        text: '3번 할일',
        done: false,
    }
]

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();
export const TodoNextIdContext = createContext();

const TodoContext = ({children}) => {
    const [todos, dispatch] = useReducer(todoReducer,initialState);
    const nextId = useRef(4);
    return(
        <TodoStateContext.Provider value={todos}>
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoNextIdContext.Provider value={nextId}>
                    {children}
                </TodoNextIdContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    )
}

export default TodoContext;