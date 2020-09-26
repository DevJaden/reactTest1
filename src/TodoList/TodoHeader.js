import React,{useCallback} from 'react';
import styled from 'styled-components';
import { useTodoState } from './TodoContext';

const HeaderBox = styled.div`
    padding: 30px 20px;
    border-bottom: 1px solid #ccc;
    h2{
        font-size: 24px;
        font-weight: bold;
    }
    h3{
        margin-top: 14px;
        font-size: 20px;
    }
    p{
        margin-top: 14px;
        color: blue;
    }
`;


const today = new Date();
const week = ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'];
const year = today.getFullYear();
const month = today.getMonth() + 1;
const date = today.getDate();
const day = today.getDay();

function TodoHeader(){
    const todoState = useTodoState();
    const todoLength = useCallback(todoState.filter(item => {
        return !item.clear
    }),[todoState]);

    return (
        <HeaderBox>
            <h2>{year}년 {month}월 {date}일</h2>
            <h3>{week[day]}</h3>
            <p>남은 개수 : {todoLength.length}개</p>
        </HeaderBox>
    )
}

export default TodoHeader;