import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
  
  export const AdminLogin=()=> {
    const [admin,setAdmin]= useState('');
    const [password,setPassword]= useState('');
    const navigate= useNavigate();
    
     const handleLogin=()=>{
            if(admin==='admin@gmail.com' && password==='masai')
            {
                alert('Grow Your Buisness With Us');
                navigate('/adminpage');
            }
            else{
                alert('Wrong Credentials')
            }
     }

    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Access  your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to grow your buisness and take it to a new height.
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input 
                type="email" 
                value={admin}
                onChange={e=>setAdmin(e.target.value)}
                required 
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input 
                type="password"
                value={password}
                onChange={e=>setPassword(e.target.value)}
                 required 
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  onClick={handleLogin}
                  >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }