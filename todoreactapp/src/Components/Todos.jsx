import React ,{useState,useEffect} from 'react'
import { AddTodo } from './AddTodo'
import { Todo } from './Todo';
import styled from 'styled-components';

export const Todos = () => {
    const [todos,setTodos]= useState([]);
      
    const onAdd=()=>{
        setTodos([...todos])
    }

    const getTodos=async()=>{
        try{
            let res= await fetch('http://localhost:8080/todoslist')
            let data= await res.json();
            setTodos(data);
        }
        catch(e){
            console.log(e)
        }
       
    }
    useEffect(()=>{
     getTodos();
    },[])
  return (
    <TodosWrapper>
         <AddTodo onAdd={onAdd} />
         {
            todos.map(todo=>{
                return <Todo key={todo.id} todo={todo}   />
            })
         }
    </TodosWrapper>
  )
}

const TodosWrapper=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 20px;
`;

