import React from 'react';
import styled from 'styled-components';

const TodoBoxInner = styled.div`
    width: 500px;
    height: 600px;
    border-radius: 10px;
    box-shadow: 0 0 4px rgba(0,0,0,.5);
    margin: 20px auto 0;
    color: #2b2b2b;
    position: relative;
    background: #fff;
`;

function TodoBox({children}){
    return(
        <TodoBoxInner className="todoBox">
            {children}
        </TodoBoxInner>
    )
}

export default TodoBox;