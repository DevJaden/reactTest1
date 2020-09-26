import React,{useState, useCallback, useRef} from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from "react-icons/md";
import {useTodoDispatch, useTodoNextId} from './TodoContext';

const BoxShowBtn = styled.button`
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 50%);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: green;
    color: #fff;
    font-size: 40px;
    transition: transform .3s ease;
    ${props => props.check && css`
        background: #f00;
        transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const CreateBox = styled.form`
    height: 111px;
    padding: 20px;
    background: #f6f6f6;
    border-radius : 0 0 10px 10px;
    display: none;
    ${props => props.block && css`
        display: flex;
    `}
    input{
        height: 36px;
        flex: 1;
        border: 1px solid #ccc;
        padding: 10px;
    }
`;

function TodoFooter(){
    const createInput = useRef();

    const [toggle, setToggle] = useState(false);

    const createBoxToggle = useCallback(() =>{
        setToggle(!toggle);
        setTimeout(()=>{
            createInput.current.focus();
        },30)
    },[toggle]);

    const todoDispatch = useTodoDispatch();
    const nextId = useTodoNextId();
    const onSubmit = (e) =>{
        e.preventDefault()
        todoDispatch({
            type: 'CREATE',
            item:{
                id: nextId.current,
                text: createInput.current.value,
                clear: false
            }
        });
        nextId.current += 1;
        createInput.current.value = '';
    }

    return (
        <>
        <BoxShowBtn check={toggle} onClick={createBoxToggle}><MdAdd /></BoxShowBtn>
        <CreateBox block={toggle} onSubmit={onSubmit}>
            <input ref={createInput} placeholder="입력후 Enter를 입력하세요" />
        </CreateBox>
        </>
    );
};

export default TodoFooter;