import React,{useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';



export const AddUser = () => {
const [state,setState]= useState({
    name:"",
    email:'',
    contact:'',
    address:'',
})
const {name,email,contact,address}= state;

  return (
    <>
       <Box
      component="form"
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
    </Box>
    </>
  )
}
