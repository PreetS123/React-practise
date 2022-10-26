import { nanoid } from 'nanoid';
import React from 'react'
import { useState ,useEffect} from 'react'

export const Todo = () => {
    const [data,setData]=useState([]);
    const [inpdata,setInpData]=useState('');
    const [chk,setChk]= useState(false);

    let api=`http://localhost:8080/posts`

    //////// Function for posting data //////////////

    const addTodoData=(value)=>{
        let obj={
            title:value,
            completed:chk
        }
        fetch(api,{
            method:'post',
            body:JSON.stringify(obj),
            headers:{
                'content-type':'application/json'
            }
        }).then(r=>r.json())
        .then(d=>fetchData(d))
        .catch(e=>console.log(e));
    }

     const handleClick=()=>{
        let value=inpdata.trim();
        addTodoData(value);
     }

     ///////////////Function for fetching data///////////////////
   
      const fetchData=()=>{
         fetch(api,{
            method:'get'
         })
         .then(r=>r.json()).then(r=>setData(r))
         .catch(e=>console.log(e));
      }
      useEffect(()=>{
            fetchData();
      },[data.length])
    //   console.log(data);

      ////////////////////////Function for deleting data///////////////////
           const handleDelete=(id)=>{
               fetch(api+`/${id}`,{
                method:'DELETE'
               }).then(r=>fetchData())
               .catch(e=>console.log(e))
           }
 
  return (
    <>
     <div className="addtodo">
        <input type="text" onChange={(e)=>setInpData(e.target.value)} />
        <button onClick={handleClick}>Add</button>
     </div>
     <div className='maptodo' >
         {
            data.length>0 && data?.map(item=>{
                return(
                    <div key={nanoid()} className='todoitem'>
                        <h5>{item.id}</h5>
                        <h4>{item.title}</h4>
                        <button onClick={()=>handleDelete(item.id)}>Delete</button>
                    </div>
                )
            })
         }
     </div>
    </>
  )
}
