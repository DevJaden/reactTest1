import React from 'react';
import styled from 'styled-components';
import TodoItems from './TodoItems';
import { useTodoState } from './TodoContext';

const TodoBodyBox = styled.ul`
    height: 340px;
    padding: 20px;
    overflow: auto;
`;

function TodoBody(){
    const todoState = useTodoState();
    return (
        <TodoBodyBox>
            {
                todoState.map((item) =>{
                    return <TodoItems id={item.id} text={item.text} clear={item.clear} key={item.id}  />
                })
            }
        </TodoBodyBox>
    );
}

export default TodoBody;