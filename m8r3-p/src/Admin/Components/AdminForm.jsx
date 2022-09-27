import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AddingHotelRoom } from "../Redux/action";

export const AdminForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});

 
   const handleChange=(e)=>{
      const inpname= e.target.name;
      setFormData({...formData,[inpname]:e.target.value})
      
   }

   const handleForm = (e) => {
    e.preventDefault();
    dispatch(AddingHotelRoom(formData));
     
  };


  return (
    <>
     <Button variant={'solid'} margin='auto' colorScheme='purple' onClick={()=>navigate('/adminpage')}> Back To Previous Page </Button>
       {/* Admin hotel form */}
      <form
        onSubmit={handleForm}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          margin: "50px auto",
          height: "fit-content",
          padding: "2%",
          width: "50%",
          justifyContent: "space-around",
          boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
        }}
      >
        <Select 
        placeholder="Choose Category"
        name='category'
        id='category'
        onChange={handleChange}
        >
          <option value="Suit">Suit</option>
          <option value="Family">Family</option>
          <option value="Duluxe">Dulxe</option>
        </Select>
        <FormControl>
          <FormLabel>Image of the room</FormLabel>
          <Input type="text" name='image_url'  id='image_url'  onChange={handleChange} />
        </FormControl>
        <Select 
        placeholder="Choose Category"
        name='bed_type'
        id='bed_type'
        onChange={handleChange}
        >
          <option value="Single">Single</option>
          <option value="Double">Double</option>
          {/* <option value="Duluxe">Dulxe</option> */}
        </Select>

        <Select placeholder="Choose Room Type" id="type_of_room" name='type_of_room'  onChange={handleChange} >
          <option value="AC">AC</option>
          <option value="Non-AC">Non-AC</option>
          {/* <option value="Suite">Suite</option> */}
        </Select>
        <FormControl>
          <FormLabel>No Of Adults</FormLabel>
          <Input type="number" id='no_of_persons' name='no_of_persons'  onChange={handleChange} />
        </FormControl>
        <FormControl>
          <FormLabel>Max Capacity</FormLabel>
          <Input type="number" name='capacity' id='capacity'   onChange={handleChange}/>
        </FormControl>
        <FormControl>
          <FormLabel>Cost per night</FormLabel>
          <Input type="number" name='cost' id='cost'   onChange={handleChange}/>
        </FormControl>
        <Select placeholder="Room Status" id="booked" name='booked'  onChange={handleChange} >
          <option value="true">Booked</option>
          <option value="false">Not Booked</option>
        </Select>
        <Button 
        type="submit"
        colorScheme="pink"
        variant="solid"
        >
          ENTER ROOM DETAILS
        </Button>
      </form>
    </>
  );
};

// {
//     "category": "Family",
//     "image_url": "https://tse1.mm.bing.net/th?id=OIP.64vruKVtxRHxLXYAMRYtZAHaKM&pid=Api&P=0",
//     "type_of_room": "AC",
//     "bed_type": "Single",
//     "no_of_persons": 4,
//     "capacity": "Max Capacity",
//     "cost": 4000,
//     "booked": false
//   }
