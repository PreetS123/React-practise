import React, { useState, useEffect } from "react";
import axios from "axios";
import { Heading, SimpleGrid ,Spinner} from "@chakra-ui/react";
import { SingleCard } from "../components/SingleCard";
import {nanoid} from 'nanoid';

export const All = () => {
  const [allData, setAllData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchAllData = async () => {
    setIsLoading(true);
    axios
      .get(
        "https://api.github.com/search/repositories?q=stars:%3E1+language:all"
      )
      .then((res) => {
        setAllData(res.data.items);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchAllData();
  }, []);
  // console.log(allData)

  if(isLoading)
    return (
      <>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
        <Heading>Loading.......</Heading>
        
      </>
    );
  
 if(!isLoading)
  return (
  <>
    <SimpleGrid 
    w={'80%'}
    m='30px auto'
    columns={{
        base:1,
        md:2,
        lg:4
    }}
    gap='20px'
    >
        {allData?.map(item=>{
            return <SingleCard item={item}  key={item.id} />
        })}
    </SimpleGrid>
  </>
  )
}


