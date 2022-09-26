import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  ButtonGroup,
  Flex,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { loadHotelRoom } from "../Redux/action";
import { nanoid } from "nanoid";

export const AdminPage = () => {
  const { hotels } = useSelector((state) => state.admin);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadHotelRoom());
  }, [dispatch]);
  console.log(hotels);

  return (
    <>
      <Flex justify={"center"} align="center" p={2} m="20px auto">
        <Button
          backgroundColor={"purple"}
          color="white"
          onClick={() => navigate("/adminform")}
        >
          Add Data
        </Button>
      </Flex>
      <TableContainer>
        <Table variant="striped" colorScheme="black">
          <TableCaption>
            Store your hotel vacant room details and make it available for
            costomers
          </TableCaption>
          <Thead>
            <Tr color={"#fff"} backgroundColor="black">
              <Th>Category</Th>
              <Th>Image</Th>
              <Th>Type</Th>
              <Th>Bed Type</Th>
              <Th>Person</Th>
              <Th>Capacity</Th>
              <Th>Cost</Th>
              <Th>Status</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {hotels &&
              hotels?.map((el) => (
                <Tr key={nanoid()}> 
                  <Td>{el.category}</Td>
                  <Td>{el.image_url}</Td>
                  <Td>{el.type_of_room}</Td>
                  <Td>{el.bed_type}</Td>
                  <Td>{el.no_of_persons}</Td>
                  <Td>{el.capacity}</Td>
                  <Td>{el.cost}</Td>
                  <Td>{el.booked}</Td>
                  <Td>
                    <ButtonGroup gap="1">
                      <Button colorScheme="purple">Edit</Button>
                      <Button colorScheme="purple">Delete</Button>
                    </ButtonGroup>
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

