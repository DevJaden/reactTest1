import React,{useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import useCommunication from './Communication';

const userInfo = async (id) =>{
    const userInfoArray = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    return userInfoArray.data
};

const UserInfo = styled.div`
    text-align: center;
    margin-top: 100px;
    .name{
        font-size: 30px;
        margin-bottom: 20px;
    }
`;

function User({id}){
    const [unSkip] = useState(false)
    const [state, refetch] = useCommunication(() => {return userInfo(id)}, [id]);
    const {loading, data, error} = state;

    if(loading){
        console.log('UserInfo Loading...');
        return (
            <UserInfo>
                <div className='name'>Loading...</div>
            </UserInfo>
        )
    }

    if(!data){
        console.log('UserInfo Data null');
        return false
    }

    if(error){
        console.log(`UserInfo Error:${error}`);
        return false
    }
    
    return (
        <UserInfo>
            <div className='name'>{data.name}</div>
            <div className='email'>Email: {data.email}</div>
        </UserInfo>
    )
}
export default User;