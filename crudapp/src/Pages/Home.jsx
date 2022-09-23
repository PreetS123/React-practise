import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { deleteUser, loadUsers } from "../Redux/action";
import { Button, ButtonGroup } from "@mui/material";
import { useNavigate} from 'react-router-dom';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export const Home = () => {
  const { users } = useSelector((state) => state.users);
  let dispatch = useDispatch();
  const navigate= useNavigate();
   
    const handleDelete=(id)=>{
        if(window.confirm("Are you sure to delete it")){
            dispatch(deleteUser(id))
        }
    }

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  return (
    <>
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',padding:'2%'}}>
     <Button 
     varient='contained' 
     color='secondary' 
     onClick={()=>navigate('/addUser')}
     >
        Add User
        </Button>
     </div>
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 700, margin: "100px auto" }}
          aria-label="customized table"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Contact</StyledTableCell>
              <StyledTableCell align="center">Address</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users &&
              users.map((user) => (
                <StyledTableRow key={user.id}>
                  <StyledTableCell component="th" scope="row">
                    {user.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">{user.email}</StyledTableCell>
                  <StyledTableCell align="center">
                    {user.contact}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {user.address}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <ButtonGroup
                      variant="contained"
                      aria-label="outlined primary button group"
                    >
                      <Button 
                      style={{marginRight:'2px'}}
                       color='primary'
                       onClick={()=>handleDelete(user.id)}
                      >DELETE</Button>
                      <Button color='secondary'>EDIT</Button>
                      
                    </ButtonGroup>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
