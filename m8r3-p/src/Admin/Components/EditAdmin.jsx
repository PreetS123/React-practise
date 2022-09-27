import React, { useEffect, useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  Heading,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadSingleRoom, updatedHotelRoom } from "../Redux/action";

export const EditAdmin = () => {
    const {hotel}= useSelector(state=>state.admin)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {id}= useParams();
  const [formData, setFormData] = useState({
    "category": "",
        "image_url": "",
        "type_of_room": "",
        "bed_type": "",
        "no_of_persons": "",
        "capacity": "",
        "cost":"",
        "booked":""
  });

  const {category,image_url,type_of_room,no_of_persons,capacity,cost,booked}=formData
 
   const handleChange=(e)=>{
      const {name,value}= e.target;
      setFormData({...formData,[name]:value})
      
   }

   const handleForm = (e) => {
    e.preventDefault();
    
    dispatch(updatedHotelRoom(formData,id));
     
  };

  useEffect(()=>{
    dispatch(loadSingleRoom(id))
  },[dispatch,id])

  useEffect(()=>{
    if(hotel){
        setFormData({...hotel})
    }
  },[hotel])


  return (
    <>
     <Button variant={'solid'} margin='auto' colorScheme='pink' onClick={()=>navigate('/adminpage')}> Back To Previous Page </Button>
       {/* Admin hotel form */}
       <Heading>Update Your Details</Heading>
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
        value={category||''}
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
          <Input type="text"value={image_url||''} name='image_url'  id='image_url'  onChange={handleChange} />
        </FormControl>
        <Select 
        placeholder="Choose Category"
        name='bed_type'
        id='bed_type'
        // value={bed_type||''}
        onChange={handleChange}
        >
          <option value="Single">Single</option>
          <option value="Double">Double</option>
          {/* <option value="Duluxe">Dulxe</option> */}
        </Select>

        <Select placeholder="Choose Room Type"  id="type_of_room" value={type_of_room||''} name='type_of_room'  onChange={handleChange} >
          <option value="AC">AC</option>
          <option value="Non-AC">Non-AC</option>
          {/* <option value="Suite">Suite</option> */}
        </Select>
        <FormControl>
          <FormLabel>No Of Adults</FormLabel>
          <Input type="number" value={no_of_persons||''} name='no_of_persons'  onChange={handleChange} />
        </FormControl>
        <FormControl>
          <FormLabel>Max Capacity</FormLabel>
          <Input type="number" name='capacity' value={capacity||''}   onChange={handleChange}/>
        </FormControl>
        <FormControl>
          <FormLabel>Cost per night</FormLabel>
          <Input type="number" name='cost' value={cost||''}   onChange={handleChange}/>
        </FormControl>
        <Select placeholder="Room Status" value={booked||''} name='booked'  onChange={handleChange} >
          <option value="true">Booked</option>
          <option value="false">Not Booked</option>
        </Select>
        <Button 
        type="submit"
        colorScheme="purple"
        variant="solid"
        >
          ENTER UPDATED DETAILS
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
