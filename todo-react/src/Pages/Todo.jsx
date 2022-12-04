import { nanoid } from 'nanoid';
import React,{useState,useEffect} from 'react'

export const Todo = () => {
  const [todoData,setTodoData]= useState([]);
  const [inpVal,setInpVal]= useState({
    item:"",
    image:"",
    completed:false,
  })

  const handleInpVal=(e)=>{
    setInpVal({...inpVal,[e.target.name]:e.target.value})
  }
  ///////////  posting Data //////////////
   const handleAdd=()=>{
     fetch(`http://localhost:8080/todo`,{
      method:'POST',
      body:JSON.stringify(inpVal),
      headers:{
        'content-type':'application/json'
      }
     }).then(r=>fetchData(r))
    
   }
    
   //////// fetching data//////////
      const fetchData=()=>{
        fetch(`http://localhost:8080/todo`,{
          method:'GET'
        }).then(r=>r.json())
        .then(d=>{
          console.log(d);
          setTodoData(d);
        }).catch(er=>console.log('er in fetch',er))
      }
    

    /////// deleting data ///////////////
      const handleDelete=(id)=>{
        fetch(`http://localhost:8080/todo/${id}`,{
          method:'DELETE',
          headers:{
            "content-type":"application/json"
          }
        }).then(r=>fetchData(r))
      }

    /////// edit data ///////////////
    

 useEffect(()=>{
  fetchData();
 },[])

  return (
    <div className='todoMain'>
            {/* add todo section  */}
            <div className='addTodo'>
                      <input type="text" name='item' onChange={handleInpVal}  autoComplete='off' />
                      <input type="text" name='image' onChange={handleInpVal}  autoComplete='off' />
                      <button  onClick={handleAdd}>ADD</button>
            </div>
            
            <div className='todoMapping'>
             <div className='tododatamap'>
             {
               todoData?.map(item=>(
                <div key={nanoid()} className='todoitem'>
                  <p>{item.item}</p>
                  <img src={item.image} alt={item.item} />
                  <button onClick={()=>handleDelete(item.id)}>DELETE</button>
                </div>
               ))
             }
             </div>
            </div>
    </div>
  )
}
