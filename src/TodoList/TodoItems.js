import React,{useCallback} from 'react';
import styled,{css} from 'styled-components';
import { MdCheck,MdDelete } from "react-icons/md";
import { useTodoDispatch } from './TodoContext';
const TodoItem = styled.li`
    display: flex;
    padding: 10px 0;
    align-items: center;
    .todoText{
        flex: 1;
        font-size: 20px;
        padding: 0 10px;
        cursor: default;
    }
    &:hover .remove{
        display: flex;
    }
`;

const CheckBox = styled.button`
    display: flex;
    width: 30px;
    height: 30px;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 20px;
    border: 1px solid #aaa;
    color: #aaa;
    ${props => props.check && css`
        color: blue;
        border: 1px solid blue;
    `}
`;

const Remove = styled.button`
    display: none;
    padding: 5px;
    font-size: 20px;
    &:hover{
        color: #f00;
    }
    &:active{
        transform: rotate3d(1, 0, 0, 45deg);
    }
`;

function TodoItems({id, text, clear}){
    const todoDispatch = useTodoDispatch();

    const checkOnClick = useCallback(() =>{
        todoDispatch({
            type: 'TOGGLE',
            id,
        })
    },[]);

    const removeOnClick = useCallback(() =>{
        todoDispatch({
            type: 'REMOVE',
            id,
        })
    },{});

    return (
        <TodoItem>
            <CheckBox check={clear} onClick={checkOnClick} ><MdCheck /></CheckBox>
            <span className="todoText">{text}</span>
            <Remove className="remove" onClick={removeOnClick}><MdDelete /></Remove>
        </TodoItem>
    );
};

export default TodoItems;