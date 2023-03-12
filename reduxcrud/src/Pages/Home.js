import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Paper from "@mui/material/Paper";
import {
  Box,
  Button,
  Card,
  Grid,
  IconButton,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import { addUserData, deleteUserData, loadUserData } from "../Redux/action";

const modaldeletestyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    borderColor: theme.palette.common.gray,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
}));
const useStyle = makeStyles({
  table: {
    minWidth: 900,
    marginTop: 100,
  },
});

export const Home = () => {
  const classes = useStyle();
  const { users } = useSelector((state) => state.data);
  const [dltid, setdltid] = useState("");
  const [inpuser,setInpUser]= useState({
    name: "",
    email: "",
    contact: "",
    address: "",
  })
  const [errori,setErrori]= useState('');
  const {name,email,contact,address}= inpuser;
  // modal handleing useState
  const [open, setOpen] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const handleAddOpen = () => setOpenAdd(true);
  const handleAddClose = () => setOpenAdd(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    handleOpen();
    setdltid(id);
  };
  const deleteUser = () => {
    if (dltid !== "") {
      dispatch(deleteUserData(dltid));
    }
    handleClose();
  };

  const handleInpChange=(e)=>{
    let {name,value}=e.target;
    setInpUser({...inpuser,[name]:value})
  }
   const handleAddUser=(e)=>{
    e.preventDefault();
   if(!name || !address || !contact ||!email){
     setErrori('Please fill all required field');
   }else{
    dispatch(addUserData(inpuser));
    handleAddClose();
    setErrori('')
   }
   
   }
  useEffect(() => {
    dispatch(loadUserData());
  }, []);
  return (
    <>
      <Card
        sx={{ width: "40%", margin: "30px auto", padding: "2%" }}
        align="center"
      >
        <Button
          variant="filled"
          sx={{
            textTransform: "none",
            fontWeight: 700,
            color: "white",
            backgroundColor: "green",
            ":hover": { backgroundColor: "green" },
          }}
          onClick={handleAddOpen}
        >
          Add User
        </Button>
      </Card>
      <Card sx={{ marginTop: "20px", padding: "4% 2%" }}>
        <TableContainer className={classes.table} component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center" sx={{ border: "1px solid" }}>
                  Name
                </StyledTableCell>
                <StyledTableCell align="center" sx={{ border: "1px solid" }}>
                  Email
                </StyledTableCell>
                <StyledTableCell align="center" sx={{ border: "1px solid" }}>
                  Contact
                </StyledTableCell>
                <StyledTableCell align="center" sx={{ border: "1px solid" }}>
                  Address
                </StyledTableCell>
                <StyledTableCell align="center" sx={{ border: "1px solid" }}>
                  Action
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.length > 0
                ? users?.map((row) => (
                    <StyledTableRow key={row.id}>
                      <StyledTableCell
                        align="left"
                        sx={{ border: "1px solid lightgray" }}
                      >
                        {row.name}
                      </StyledTableCell>
                      <StyledTableCell
                        align="left"
                        sx={{ border: "1px solid lightgray" }}
                      >
                        {row.email}
                      </StyledTableCell>
                      <StyledTableCell
                        align="left"
                        sx={{ border: "1px solid lightgray" }}
                      >
                        {row.contact}
                      </StyledTableCell>
                      <StyledTableCell
                        align="left"
                        sx={{ border: "1px solid lightgray" }}
                      >
                        {row.address}
                      </StyledTableCell>
                      <StyledTableCell
                        align="center"
                        sx={{ border: "1px solid lightgray" }}
                      >
                        <IconButton variant="container" color="primary">
                          <EditIcon />
                        </IconButton>
                        <IconButton
                          variant="contained"
                          color="secondary"
                          onClick={() => handleDelete(row.id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))
                : null}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
      {/* modal add and update */}
      <Modal
        keepMounted
        open={openAdd}
        onClose={handleAddClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={modaldeletestyle}>
          <Typography
            textAlign={"center"}
            id="keep-mounted-modal-title"
            variant="h6"
            component="h2"
          >
            User Form
          </Typography>
          {errori && <h5 style={{color:'red'}}>{errori}</h5>}
          <form  autoComplete="off" onSubmit={handleAddUser}>
          <Stack spacing={2} p={2} >
            <Grid item lg={12}>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                type='text'
                value={name}
                name={'name'}
                onChange={handleInpChange}
              />
            </Grid>
            <Grid item lg={12}>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                type='email'
                value={email}
                name={'email'}
                onChange={handleInpChange}
              />
            </Grid>
            <Grid item lg={12}>
              <TextField
                label="Contact"
                variant="outlined"
                fullWidth
                type='text'
                value={contact}
                name={'contact'}
                onChange={handleInpChange}
              />
            </Grid>
            <Grid item lg={12}>
              <TextField
                label="Address"
                variant="outlined"
                fullWidth
                type='text'
                value={address}
                name={'address'}
                onChange={handleInpChange}
              />
            </Grid>
          </Stack>
         
          <Box
            sx={{
              mt: 2,
              display: "flex",
              gap: "20px",
              alignItems: "center",
              justifyContent: "end",
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "black",
                color: "white",
                ":hover": { backgroundColor: "black" },
              }}
              onClick={handleAddClose}
            >
              Cancel
            </Button>
            <Button
              sx={{
                backgroundColor: "green",
                color: "white",
                ":hover": { backgroundColor: "green" },
              }}
              type={'submit'}
              
            >
              Add User
            </Button>
          </Box>
          </form>
        </Box>
      </Modal>
      {/* modal delete */}
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={modaldeletestyle}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            Are you sure you want to delete this user?
          </Typography>
          <Box
            sx={{
              mt: 2,
              display: "flex",
              gap: "20px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              variant="filled"
              sx={{
                backgroundColor: "black",
                color: "white",
                ":hover": { backgroundColor: "black" },
              }}
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button
              sx={{
                backgroundColor: "maroon",
                color: "white",
                ":hover": { backgroundColor: "maroon" },
              }}
              onClick={deleteUser}
            >
              Delete
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};
