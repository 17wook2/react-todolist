import React, { useContext } from 'react';
import { TodoStateContext } from '../TodoContext';
import styled from 'styled-components';

const TodoHeadBlock = styled.div`
    padding-top: 48px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 24px;
    border-bottom: 1px solid #e9ecef;
    h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
    }
    .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
    }
    .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
    }
`

const TodoHead = () => {
    const todos = useContext(TodoStateContext);
    const LeftTodo = todos.filter(todo=>!todo.done);
    const Today = new Date();
    const dateString = Today.toLocaleDateString('ko-KR',{
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
    const dayName = Today.toLocaleDateString('ko-KR', { weekday: 'long' });
    return(
        <TodoHeadBlock>
        <h1>{dateString}</h1>
        <span className="day">{dayName}</span>
        <div className="tasks-left">오늘 할일{LeftTodo.length}개 </div>
        </TodoHeadBlock>
    )

}
export default TodoHead;