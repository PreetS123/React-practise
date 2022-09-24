import { Button, Flex } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const MAin = () => {
    const navigate=useNavigate();
  return (
    <Flex justify={'center'} align='center' p={2} gap='20px'  >
        <Button 
        backgroundColor='purple'
        color='white'
        onClick={()=>navigate('/adminlogin')}
        >
            Admin Section
        </Button>
        <Button
        backgroundColor={'purple'} 
        color='white'
        >
            User Section
        </Button>
    </Flex>
  )
}
