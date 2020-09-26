import React from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Title = styled.h1`
    font-size: 30px;
    text-align: center;
    margin-top: 50px;
`;
const SubTitle = styled.p`
    font-size: 28px;
    text-align: center;
    margin-top: 10px;
`;
const Line = styled.hr`
    margin-top: 50px;
    display: block;
`;
const StudyList = styled.ul`
    margin-top: 20px;
    li{
        text-align: center;
        & + li{
            margin-top: 20px;
        }
    }
    a{
        font-size: 20px;
        padding: 10px;
        &:hover{
            text-decoration: underline;
        }
    }
`;

function Main(){
    return (
        <>
        <Title>여기는 메인페이지 입니다.</Title>
        <SubTitle>Study List</SubTitle>
        <Line />
        <StudyList>
            <li>
                <Link to="/todoList">TodoList</Link>
            </li>
            <li>
                <Link to="/api">API Communication</Link>//
            </li>
        </StudyList>
        </>
    )
};

export default Main;