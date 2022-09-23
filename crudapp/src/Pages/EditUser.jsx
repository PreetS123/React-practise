import React, { useState,useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useNavigate ,useParams} from "react-router-dom";
import { useDispatch ,useSelector} from "react-redux";
import { getSingleUser ,updateUser} from "../Redux/action";

export const EditUser = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const {user}= useSelector(state=>state.users)
  const {id}= useParams();
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
        dispatch(updateUser(state,id))
        navigate('/');
        setError('');
      }
  }

   useEffect(()=>{
    dispatch(getSingleUser(id))
   },[])

   useEffect(()=>{
    if(user){
         setState({...user});
    }
   },[user])
 
  return (
    <>
      <Button
        varient="contained"
        color="secondary"
        onClick={() => navigate("/")}
      >
        Go Back
      </Button>
      <h2>Edit Your Details</h2>
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
          value={name||''}
          name='name'
          type="text"
          variant="standard"
          onChange={handleInput}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Email"
          value={email||''}
          name='email'
          type="email"
          variant="standard"
          onChange={handleInput}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Contact"
          value={contact||''}
          name='contact'
          type="number"
          variant="standard"
          onChange={handleInput}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Address"
          value={address||''}
          name='address'
          type="text"
          variant="standard"
          onChange={handleInput}
        />
        <br />
        <Button varient="contained" color="primary" type="submit">
          UPDATE
        </Button>
      </Box>
    </>
  );
};
