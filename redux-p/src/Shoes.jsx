import React,{useEffect, useState} from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { getShoesFailure, getShoesRequest, getShoesSuccess, reduceCounter, updateCounter } from './Redux/Action';
import axios from 'axios';
import { SimpleGrid } from '@chakra-ui/react';
import { ShoesCard } from './Components/ShoesCard';

export const Shoes = () => {
    const dataofShoes= useSelector(state=>state.shoes);
    const cart_quantity= useSelector(state=>state.count);
   
    const dispatch = useDispatch();

    const getShoes=()=>{
        dispatch(getShoesRequest());
        axios.get('http://localhost:8080/shoes')
        .then(r=>dispatch(getShoesSuccess(r.data)))
        .catch(e=>dispatch(getShoesFailure()))
    }
          
    const handleCounter=(val)=>{
        console.log(val,'handlecounter')
        dispatch(updateCounter(val))
        dispatch(reduceCounter(val))
    }
    useEffect(()=>{
        getShoes();
    },[])
    // console.log(dataofShoes)
   
  return (
    <>
     <SimpleGrid m={'auto'} w='80%' h='fit-content' columns={{base:1,sm:2,md:3,lg:4}} spacing='20px'  >
        {
            dataofShoes?.map(el=>{
                return <ShoesCard key={nanoid()} {...el} cart_quantity={cart_quantity} handleCount={handleCounter} />
            })
        }
     </SimpleGrid>
    </>
  )
}
