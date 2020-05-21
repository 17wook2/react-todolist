import React, { useContext } from 'react';
import Todoitem from './Todoitem';
import {TodoStateContext, TodoDispatchContext} from '../TodoContext';
import styled from 'styled-components';
const TodolistBlock = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
    
`


const Todolist = () => {
    const todos = useContext(TodoStateContext);
    const dispatch = useContext(TodoDispatchContext);
    console.log(todos);
    return(
        <TodolistBlock>
        {todos.map((v)=>{
        return <Todoitem key={v.id} id={v.id} text={v.text} done={v.done}/>
        })}
        </TodolistBlock>
    )
}
export default Todolist;

