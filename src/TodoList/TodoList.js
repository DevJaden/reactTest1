import React from 'react';
import { Link } from 'react-router-dom';
import styled,{ createGlobalStyle } from 'styled-components';
import TodoBox from './TodoBox';
import TodoHeader from './TodoHeader';
import TodoBody from './TodoBody';
import TodoFooter from './TodoFooter';
import { TodoContext } from './TodoContext';

const GlobalStyle = createGlobalStyle`
    body{
        background: #f6f6f6;
    }
`;

const MainBox = styled.div`
    h1{
        padding: 50px 0;
        text-align: center;
        font-size: 30px;
        background :#fff;
    }
`;

const LinkBox = styled.ul`
    position: absolute;
    right: 20px;
    top: 20px;
    display: flex;
    li{
        &:hover{
            text-decoration: underline;
            a{
                color: blue;
            };
        }
        & + li{
            margin-left: 30px;
        }
    }
`;

function TodoList(){
    return (
        <>
        <GlobalStyle />
        <MainBox>
            <h1>TodoList</h1>
            <LinkBox>
                <li><Link to="/">Main</Link></li>
                <li><Link to="/api">API Communication</Link></li>
            </LinkBox>
            <hr />
            <TodoContext>
                <TodoBox>
                    <TodoHeader />
                    <TodoBody />
                    <TodoFooter />
                </TodoBox>
            </TodoContext>
        </MainBox>
        </>
    );
};

export default TodoList;