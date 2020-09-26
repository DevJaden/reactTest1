import React from 'react';
import styled,{ createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';
import UserBox from './UserBox';
import User from './User';

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
function UserList(){
    return (
        <>
            <GlobalStyle />
            <MainBox>
                <h1>API Communication</h1>
                <LinkBox>
                    <li><Link to="/">Main</Link></li>
                    <li><Link to="/todolist">TodoList</Link></li>
                </LinkBox>
                <hr />
                <UserBox />
            </MainBox>
        </>
    );
};

export default UserList;