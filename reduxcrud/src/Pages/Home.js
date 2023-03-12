import React, { useEffect } from 'react'
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
import { Card, IconButton } from '@mui/material';
import {makeStyles} from '@mui/styles'
import { useDispatch, useSelector } from 'react-redux';
import { loadUserData } from '../Redux/action';

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
    const {users}= useSelector(state=>state.data)
    const dispatch= useDispatch();

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
                variant='contained' color='secondary'>
                <DeleteIcon/>
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          
          ))):null}
        </TableBody>
      </Table>
    </TableContainer>
    </Card>
    </>
  )
}
