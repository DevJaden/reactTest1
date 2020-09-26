import React, { useState } from 'react';
import styled from 'styled-components';
import useCommunication from './Communication';
import axios from 'axios';
import User from './User';

const users = async () =>{
    const userArray = await axios.get('https://jsonplaceholder.typicode.com/users');
    return userArray.data
}

const LoadBtn = styled.button`
    display: block;
    margin: 20px auto 0;
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 10px;
    &:hover{
        background: blue;
        color: #fff;
    }
    &:active{
        box-shadow: 0 0 4px rgba(0,0,0,.5) inset;
    }
`;

const HeadTitle = styled.h2`
    font-size: 26px;
    font-weight: bold;
    text-align: center;
    margin-top: 30px;
    color: blue;
`;
const Title = styled.h3`
    text-align: center;
    margin: 20px 0;
    font-size: 24px;
`;

const Li = styled.li`
    text-align: center;
    padding: 10px 0;
    & + li{
        margin-top: 10px;
    }
    & button:hover{
        text-decoration: underline;
    }
`;

function UserBox(){
    const [asyncOn] = useState(false)
    const [userId, setUserId] = useState(null);
    const [state, refetch] = useCommunication(users, [], asyncOn);

    const {loading, data, error} = state;

    if(loading){
        console.log('loading....')
        return false
    };

    if(!data){
        return (
            <LoadBtn onClick={() => { refetch() }}>유저 불러오기</LoadBtn>
        )
    };
   
    if(error){
        return <div>error: {error}</div>
    }

    return (
        <>
        <HeadTitle>유저를 클릭하시면 정보를 확인할 수 있습니다.</HeadTitle>
        <Title>UserList</Title>
        <ul>
        {
            data.map(user =>{
                return  <Li key={user.id}>
                            <button onClick={() => setUserId(user.id)}>{user.name}</button>
                        </Li>
            })
        }
        {userId && <User id={userId} />}
        </ul>
        </>
    )
};

export default UserBox;