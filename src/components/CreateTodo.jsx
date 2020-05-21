import React, { useState, useContext } from 'react';
import {TodoDispatchContext, TodoNextIdContext} from '../TodoContext';

const CreateTodo = () => {
    const [todo, setTodo] = useState('');
    const dispatch = useContext(TodoDispatchContext);
    const id = useContext(TodoNextIdContext);
    const onChange = (e) => {
        setTodo(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'ADD_TODO',
             todo:{ 
                 id: id.current,
                 text: todo,
                 done: false,
                }})
        setTodo(prev=>'');
        id.current+=1;
    }

    return(
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" value={todo} onChange={onChange}/>
                <button>입력</button>
            </form>
        </div>
    )
}
export default CreateTodo;

// //AppLayout
//     //App
//         //|todoHead   현재 날자, todo갯수
//         //|createTodo todo를 생성하는 form
//         //|todoitem   todo를 하나씩 만드는 각각의 item
//         //|todolist   todos를 map으로 todoitem컴포넌트 생성
//     //App/
// //AppLayout
