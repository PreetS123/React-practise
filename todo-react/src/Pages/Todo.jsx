import { nanoid } from 'nanoid';
import React,{useState,useEffect} from 'react'

export const Todo = () => {
  const [todoVal,setTodoVal]= useState([]);
  const [inpVal,setInpVal]= useState({
    item:"",
    image:"",
    completed:false
  })

   const handleInp=(e)=>{
    // console.log(e.target.value)
     setInpVal({...inpVal,[e.target.name]:e.target.value})
   }


  ///////////  posting Data //////////////
    const handleAddTodo=async()=>{
         await fetch(`http://localhost:8080/todo`,{
          method:'POST',
          body:JSON.stringify(inpVal),
          headers:{
            'content-type':'application/json'
          }
         })
    }
    
   //////// fetching data//////////
      const FetchData=async()=>{
           await fetch(`http://localhost:8080/todo`,{
            method:'GET'
           }).then(r=>r.json())
           .then(r=>{
            console.log(r)
            setTodoVal(r)
           })
           .catch(er=>{
            console.log('er in fetching',er)
           })
      }
    

    /////// deleting data ///////////////
    

    /////// edit data ///////////////
    

    useEffect(()=>{
      FetchData();
    },[])

  return (
    <div className='todoMain'>
            {/* add todo section  */}
            <div className='addTodo'>
                  <input type="text" name='item'  onChange={handleInp} autoComplete='off' />
                  <input type="url"  name='image' onChange={handleInp} autoComplete='off' />
                  <button onClick={handleAddTodo} >ADD</button>
            </div>
            
            <div className='todoMapping'>
             <div className='tododatamap'>
             {
                todoVal?.map(item=>{
                  return(
                    <div key={nanoid()} className='todoitem'>
                      <p>{item.item}</p>
                      <img src={item.image} alt={item.item} />
                      
                      <button>DELETE</button>
                    </div>
                  )
                })
             }
             </div>
            </div>
    </div>
  )
}
