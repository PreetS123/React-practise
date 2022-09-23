import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../Redux/action";

export const AddUser = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const [error,setError]=useState('')
  const [state, setState] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
  });
  const { name, email, contact, address } = state;

  const handleInput = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
     if(!name ||!address ||!email || !contact){
      setError('Please fill all credentials')
     }
      else{
        dispatch(addUser(state))
        navigate('/');
        setError('');
      }
  }
 
  return (
    <>
      <Button
        varient="contained"
        color="secondary"
        onClick={() => navigate("/")}
      >
        Go Back
      </Button>
      <h2>Add Your Details</h2>
      {error && <h3 style={{color:'maroon'}}>{error}</h3>}
      <Box
        component="form"
        marginTop={"50px"}
        sx={{
          "& > :not(style)": { m: 1, width: "45ch" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          id="standard-basic"
          label="Name"
          value={name}
          name='name'
          type="text"
          variant="standard"
          onChange={handleInput}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Email"
          value={email}
          name='email'
          type="email"
          variant="standard"
          onChange={handleInput}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Contact"
          value={contact}
          name='contact'
          type="number"
          variant="standard"
          onChange={handleInput}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Address"
          value={address}
          name='address'
          type="text"
          variant="standard"
          onChange={handleInput}
        />
        <br />
        <Button varient="contained" color="primary" type="submit">
          SUBMIT
        </Button>
      </Box>
    </>
  );
};
