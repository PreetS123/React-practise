import { nanoid } from 'nanoid';
import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import styles from '../Styles/AddTodo.module.css';

export const Todos = () => {
  const [data,setData]= useState([]);
  const [chk,setChk]=useState(false);
  const [ querry, setQuerry ]= useState("");
  
    ////////posting data in JSON-SERVER////////////
   const handleInp=(e)=>{
      let val= e.target.value;
      setQuerry(val);
   }
   const handleClick=()=>{
    let value= querry.trim();
     addMyTodo(value)
   }

  const addMyTodo = (value) => {
    let obj={
      item:value,
      completed:chk
    }
     fetch(`http://localhost:8080/posts`, {
      method: "post",
      body: JSON.stringify(obj),
      headers: {
        "content-type": "application/json",
      },
    })
    .then(res=>res.json())
    .then(d=>fetchData(d))
    .catch(er=>alert(er));
  };

    ////////////////////// fetching data from json-server////////////////
  const fetchData=()=>{
    fetch(`http://localhost:8080/posts`,{
      method:'get'
    }).then(r=>r.json())
    .then(res=>setData(res));
  }

  useEffect(() => {
    fetchData()
  }, [data.length]);

  //////////////////Deleting the todo/////////////////////

  const handleDelete=(id)=>{
    fetch(`http://localhost:8080/posts/${id}`,{
      method:'DELETE'
    }).then(r=>r.json())
    .then(d=>fetchData(d))
  }

  const handleChkbx=()=>{
     setChk(true)
  }

  return (
    <>
     {/* ///////////////////add todo data////////////////// */}
     <h1>Add Todos</h1>
      <div className={styles.addtodo}>
        <input
          type="text"
          placeholder="add your item"
          onChange={handleInp}
        />
        <button
          onClick={handleClick}
        >
          Add
        </button>
      </div>

      <TodoMappingWrapper>
          {
            data.map((item)=>{
              return(
                
                <div className={styles.itemdiv} key={nanoid()}>
                  <input type="checkbox" onChange={handleChkbx} className={styles.chkbx} />
                  <h5>{item.id}.</h5>
                  <h4>{item.item}</h4>
                  <button onClick={()=>handleDelete(item.id)}>Delete</button>
                </div>
              
              )
            })
          }
      </TodoMappingWrapper>
    </>
  )
}


const TodoMappingWrapper=styled.div`
  width:50%;
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  align-items:center;
  gap:20px;
  padding:1%;
`;