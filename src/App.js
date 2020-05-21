const React = require('react');
import Todolist from './components/Todolist';
import CreateTodo from './components/CreateTodo';
import TodoContext from './TodoContext';
import TodoHead from './components/TodoHead';
import TodoTemplate from './components/TodoTemplate';
import { createGlobalStyle } from 'styled-components';

const App = () => {

    return(
        <>
        <GlobalStyle/>  
        <TodoContext>
            <TodoTemplate>       
                <TodoHead/>
                <Todolist/>    
                <CreateTodo/>
            </TodoTemplate> 
        </TodoContext>
        </>
    )

}
export default App;

//AppLayout
    //App
        //|todoHead   현재 날자, todo갯수
        //|createTodo todo를 생성하는 form
        //|todoitem   todo를 하나씩 만드는 각각의 item
        //|todolist   todos를 map으로 todoitem컴포넌트 생성
    //App/
//AppLayout


const GlobalStyle = createGlobalStyle`
    body{
        background:#e9ecef;
    }
`
