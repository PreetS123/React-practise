import React, { useEffect,useState } from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Paper from '@mui/material/Paper';
import { Box, Button, Card, IconButton, Modal, Typography } from '@mui/material';
import {makeStyles} from '@mui/styles'
import { useDispatch, useSelector } from 'react-redux';
import { deleteUserData, loadUserData } from '../Redux/action';


const modaldeletestyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    borderColor:theme.palette.common.gray,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  
}));
const useStyle=makeStyles({
    table:{
        minWidth:900,
        marginTop:100,
    }
})




export const Home = () => {
    const classes=useStyle();
    const {users}= useSelector(state=>state.data);
    const [dltid,setdltid]= useState('');
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const dispatch= useDispatch();


    const handleDelete=(id)=>{
        handleOpen();
        setdltid(id);
    }
    const deleteUser=()=>{
      if(dltid!==''){
        dispatch(deleteUserData(dltid));
      } 
      handleClose();
    }
     
    useEffect(()=>{
      dispatch(loadUserData());
    },[])
  return (
    <>
    <Card sx={{marginTop:'20px',padding:'4% 2%'}}>
     <TableContainer className={classes.table} component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align='center' sx={{border:'1px solid'}}>Name</StyledTableCell>
            <StyledTableCell align="center" sx={{border:'1px solid'}}>Email</StyledTableCell>
            <StyledTableCell align="center" sx={{border:'1px solid'}}>Contact</StyledTableCell>
            <StyledTableCell align="center" sx={{border:'1px solid'}}>Address</StyledTableCell>
            <StyledTableCell align="center" sx={{border:'1px solid'}}>Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.length>0?(users?.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell align='left' sx={{border:'1px solid lightgray'}}>
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="left" sx={{border:'1px solid lightgray'}}>{row.email}</StyledTableCell>
              <StyledTableCell align="left" sx={{border:'1px solid lightgray'}}>{row.contact}</StyledTableCell>
              <StyledTableCell align="left" sx={{border:'1px solid lightgray'}}>{row.address}</StyledTableCell>
              <StyledTableCell align="center" sx={{border:'1px solid lightgray'}}>
                <IconButton 
                variant='container' color='primary'>
                <EditIcon/>
                </IconButton>
                <IconButton 
                variant='contained' color='secondary' onClick={()=>handleDelete(row.id)}>
                <DeleteIcon/>
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          
          ))):null}
        </TableBody>
      </Table>
    </TableContainer>
    </Card>
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
          <Box  sx={{ mt: 2 }}>
             <Button variant='filled' sx={{backgroundColor:'black',color:'white'}} onClick={handleClose}>Cancel</Button>
             <Button sx={{backgroundColor:'maroon',color:'white'}} onClick={deleteUser}>Delete</Button>
          </Box>
        </Box>
      </Modal>
    </>
  )
}
