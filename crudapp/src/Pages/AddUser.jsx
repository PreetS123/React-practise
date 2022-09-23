import React,{useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';



export const AddUser = () => {
const [state,setState]= useState({
    name:"",
    email:'',
    contact:'',
    address:'',
})
const {name,email,contact,address}= state;
const navigate=useNavigate();

  return (
    <>
    <Button
     varient='contained' 
     color='secondary' 
      onClick={()=>navigate('/')}
     >
        Go Back
        </Button>
    <h2>Add Your Details</h2>
       <Box
      component="form"
      marginTop={'50px'}
      sx={{
        '& > :not(style)': { m: 1, width: '45ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label="Name" value={name} type='text' variant="standard" />
      <br/>
      <TextField id="standard-basic" label="Email" value={email} type='email' variant="standard" />
      <br/>
      <TextField id="standard-basic" label="Contact" value={contact} type='number' variant="standard" />
      <br/>
      <TextField id="standard-basic" label="Address" value={address} type='text' variant="standard" />
      <br/>
      <Button
     varient='contained' 
     color='primary' 
      type='submit'
      
     >
        SUBMIT
        </Button>
    </Box>
    </>
  )
}
