import { Box, Flex, Image } from '@chakra-ui/react'
import React from 'react'

export const Navbar = () => {
  return (
    <>
       <Flex p={'0.5rem 1rem'}>
           <Box>
            <Image  src='/Adidas_Logo.png' width='60px' alt='logo' display='block'  />
           </Box>
           <Box></Box>
       </Flex>
    </>
  )
}
