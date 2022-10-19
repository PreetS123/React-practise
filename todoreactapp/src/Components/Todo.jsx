import React from 'react';
import styled from 'styled-components';

export const Todo = ({todo}) => {
  return (
    <TodoListWrapper>
          <h3>{todo.value}</h3>
       <BtnWrapper>
           <button>Delete</button>
        </BtnWrapper> 
    </TodoListWrapper>
  )
}

const TodoListWrapper=styled.div`
width:100%;
justify-content:center;
align-items:center;
display:flex;
border:1px solid;
gap:20px;
padding:1%;
`;


const BtnWrapper=styled.div`
width:200px;
justify-content:center;
align-items:center;
display:flex;
gap:20px;
`;