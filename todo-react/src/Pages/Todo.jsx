import React,{useState,useEffect} from 'react'

export const Todo = () => {
  const [inpVal,setInpVal]=useState({
     item:"",
     image:""
  })
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
    
    useEffect(()=>{
          fetch(`http://localhost:8080/todo`)
          .then(r=>r.json())
          .then(r=>console.log(r))
          .catch(e=>console.log(e))
    },[])
    
  return (
    <div className='todoMain'>
            {/* add todo section  */}
            <div className='addTodo'>
                <input type="text" placeholder='add name' name='item'  onChange={handleChange} autoComplete='off'  />
                <input type="text" placeholder='Add Image' name='image' onChange={handleChange} autoComplete='off' />
                <button onClick={handleSubmit}>ADD</button>
            </div>
            
    </div>
  )
}
