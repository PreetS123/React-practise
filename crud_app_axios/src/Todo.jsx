import axios from "axios";
import { nanoid } from "nanoid";
import React, { useState, useEffect } from "react";

export const Todo = () => {
  const [data, setData] = useState([]);
  const [inpdata, setInpData] = useState("");

  let api = `http://localhost:8080/posts`;

   //////////////// Posting with axios ////////////////////////

  const handleClick = () => {
    let value = inpdata.trim();
    addTodo(value);
  };
  const addTodo = (value) => {
    let obj = {
      title: value,
      completed: false,
    };
    axios
      .post(api, obj)
      .then(r=>fetchData(r))
      .catch((e) => console.log(e));
  };
  /////////////////////// Fetching code with axios ////////////////////////

  const fetchData=()=>{
    axios.get(api)
    .then(r=>setData(r.data))
    .catch(e=>console.log(e));
  }

  useEffect(()=>{
    fetchData();
  },[data.length])
//   console.log(data)


  return (
    <>
      <div className="addtodo">
        <input type="text" onChange={(e) => setInpData(e.target.value)} />
        <button onClick={handleClick}>Add</button>
      </div>
      <div className="mapdata">
        {
            data.length>0 && data?.map(item=>{
                return (
                    <div key={nanoid()}>
                       <h5>{item.id}</h5>
                       <h4>{item.title}</h4>
                    </div>
                )
            })
        }
      </div>
    </>
  );
};
