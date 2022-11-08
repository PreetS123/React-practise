import { nanoid } from 'nanoid';
import React,{useState,useEffect} from 'react'

export const Todo = () => {
  const [todoData,setTodoData]= useState([]);
  const [inpVal,setInpVal]=useState({
     item:"",
     image:"",
     completed:false
  })


  ///////////  posting Data //////////////
  
  const handleChange=(e)=>{
    setInpVal({...inpVal,[e.target.name]:e.target.value})
}

    const handleSubmit=()=>{
      
        fetch(`http://localhost:8080/todo`,{
            method:'POST',
            body:JSON.stringify(inpVal),
            headers:{
                'content-type':'application/json'
            }
        })
    }
    
   //////// fetching data//////////

    const fetchData=()=>{
      fetch(`http://localhost:8080/todo`,{
        method:'get'
      })
      .then(r=>r.json())
      .then(r=>setTodoData(r))
      .catch(e=>console.log(e))
    }  

    useEffect(()=>{
         fetchData();
    },[todoData.length])
    
    console.log(todoData);


    /////// deleting data ///////////////
    const handleDelete=(id)=>{
       fetch(`http://localhost:8080/todo/${id}`,{
        method:'DELETE'
       }).then(r=>r.json())
        .then(d=>fetchData(d))
    }

  return (
    <div className='todoMain'>
            {/* add todo section  */}
            <div className='addTodo'>
                <input type="text" placeholder='add name' name='item'  onChange={handleChange} autoComplete='off'  />
                <input type="text" placeholder='Add Image' name='image' onChange={handleChange} autoComplete='off' />
                <button onClick={handleSubmit}>ADD</button>
            </div>
            
            <div className='todoMapping'>
             <div className='tododatamap'>
              {
                todoData?.map(item=>{
                   return <div key={nanoid()}  className='todoitem'>
                        <img src={item.image} alt={item.item} />
                        <p>{item.item}</p>
                        <button onClick={()=>handleDelete(item.id)}>DELETE</button>
                        <button>EDIT</button>
                   </div>
                })
              }
             </div>
            </div>
    </div>
  )
}
