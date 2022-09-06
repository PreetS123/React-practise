import React from 'react';
import { Heading, Image, Flex, Text, Link } from "@chakra-ui/react";

export const SingleCard = ({item}) => {
  return (
    <>
       <Link href={item.owner.html_url} isExternal>
      <Flex
        flexDirection="column"
        justify="space-between"
        p={"10px"}
        border="2px solid black"
        borderRadius={"5px"}
      >
        <Image src={item.owner.avatar_url} width="100%" height={"200px"} />
        <Heading textAlign={"center"} fontSize={"17px"}>
          {item.name}
        </Heading>
        <Heading mt="12px" textAlign={"center"} fontSize={"16px"}>
          {item.language}
        </Heading>
        <Flex mt="20px" justifyContent="space-between" align="center">
          <Text>⭐{item.stargazers_count}</Text>
          <Text>{item.forks}</Text>
        </Flex>
      </Flex>
    </Link>
    </>
  )
}
