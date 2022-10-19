import React,{useState} from 'react';
import styled from 'styled-components';
import './App.css';

function App() {
  const [count,setCount]= useState(0);


  return (
    <CounterDiv>
      {/* <input/> */}
      <button onClick={()=>setCount(count+1)}>Add</button>
      <h2>{count}</h2>
      <button onClick={()=>setCount(count-1)}>Reduce</button>
    </CounterDiv>
  );
}

export default App;


const CounterDiv=styled.div`
display:flex;
gap:20px;
justify-content:center;
align-items:center;
width:50%;
border:1px solid black;
margin:50px auto;

`;
