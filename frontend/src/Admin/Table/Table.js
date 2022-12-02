import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Table.css'
import { getAllUser, updateUserAdmin } from '../../api/UserRequest';
import {useState,useEffect} from 'react'


export default function BasicTable() {

  const [allUser,setAllUsers] = useState([])

  useEffect(()=>{
    const fetchPersons = async() =>{
        const {data} = await getAllUser();
        setAllUsers(data)

    }
    fetchPersons()
},[])

// block user
const blockUser = (userId) =>{
 
 let data ={
     block : true,
     _id :userId
 }
 updateUserAdmin(userId,data)
     
}

// unblock user
const unBlockUser = (userId) =>{
  let data = {
    block:false
  }
  updateUserAdmin(userId,data)
}
   
  return (
    <div className="Table">
    <h2 >Users</h2>

    <TableContainer component={Paper} style={{boxShadow:"rgb(38, 57, 77) 0px 20px 30px -10px"}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Users</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left">Report</TableCell>
            <TableCell align="left">Edit User</TableCell>
            <TableCell align="left">id User</TableCell>

           
          </TableRow>
        </TableHead>
        <TableBody>
          {allUser.map((row,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.firstName}
              </TableCell>
              <TableCell align="left">{row.block?"Not Active" :"Active"}</TableCell>
              <TableCell align="left">report</TableCell>
              {row.block?
              <TableCell align="left"><button className='button' onClick={() => unBlockUser(row._id)}>Unblock</button> </TableCell>:
              <TableCell align="left"><button className='button' onClick={() => blockUser(row._id)}>Block</button> </TableCell>}
                            <TableCell align="left">{row._id}</TableCell>

              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
