import React from 'react';
import { useSelector } from 'react-redux';


export const Home = () => {
  const books=useSelector(state=>state.books)

  //  useEffect(()=>{
       
  //  },[])
   
  console.log(books);
  return (
    <>
     {
      books?.map(item=>{
        return <div>
          <h1>{item.name}</h1>
        </div>
      })
     }
    </>
  )
}
