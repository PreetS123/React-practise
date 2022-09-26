import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  RadioGroup,
  HStack,
  Radio,
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

  const handleForm = (e) => {
    e.preventDefault();
    dispatch(AddingHotelRoom(formData));
     
  };
   const handleChange=(e)=>{
      const inpname= e.target.name;
      if(e.target.type==='ckeckbox'){
        setFormData({...formData,[inpname]:e.target.checked})
      }
      else{
        setFormData({...formData,[inpname]:e.target.value})
      }
   }
  return (
    <>
     <Button variant={'solid'} m='auto' colorScheme='purple' onClick={()=>navigate('/adminpage')}> Back To Previous Page </Button>
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
        placeholder="Select Family Type"
        onChange={handleChange}
        name='category'
        >
          <option value="Couple">Couple</option>
          <option value="Family">Family</option>
          <option value="Single">Single</option>
        </Select>
        <FormControl>
          <FormLabel>Image</FormLabel>
          <Input type="url" name='image_url'  onChange={handleChange} />
        </FormControl>
        <FormControl as="fieldset">
          <FormLabel as="legend">Room Type</FormLabel>
          <RadioGroup defaultValue="AC">
            <HStack spacing="54px">
              <Radio value="AC" name='type_of_room' onChange={handleChange}>AC</Radio>
              <Radio value="NonAC" name='type_of_room' onChange={handleChange}>Non AC</Radio>
            </HStack>
          </RadioGroup>
        </FormControl>
        <Select placeholder="Select Bed Type" name='bed_type'  onChange={handleChange}>
          <option value="Single">Single</option>
          <option value="Duplex">Duplex</option>
          <option value="Suite">Suite</option>
        </Select>
        <FormControl>
          <FormLabel>No Of Person</FormLabel>
          <Input type="number" name='no_of_persons'  onChange={handleChange} />
        </FormControl>
        <FormControl>
          <FormLabel>Capacity</FormLabel>
          <Input type="text" name='capacity' onChange={handleChange} />
        </FormControl>
        <FormControl>
          <FormLabel>Cost</FormLabel>
          <Input type="number" name='cost'  onChange={handleChange} />
        </FormControl>
        <FormControl as="fieldset">
          <FormLabel as="legend">Booked</FormLabel>
          <RadioGroup defaultValue="false">
            <HStack spacing="54px">
              <Radio value="false" name='booked' onChange={handleChange}>False</Radio>
              <Radio value="true" name='booked'  onChange={handleChange}>True</Radio>
            </HStack>
          </RadioGroup>
        </FormControl>
        <Button 
        type="submit"
        colorScheme="pink"
        variant="solid"
        >
          SUBMIT DETAILS
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
