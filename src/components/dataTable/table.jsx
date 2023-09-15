import * as React from 'react';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Paper from '@mui/material/Paper';
import PopUpForm from '../../components/popUp';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableElementRow from './tableRow';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import style from "./styleSheet.module.css";

export default function BasicTable(props) {

  const keysArray = Object.keys(props.Data[0])

  const [openPopUp , setOpenPopUp] = React.useState(false);



  function handleEdit(){

    // props.handleField1()
    

    setOpenPopUp((prev) => !prev);
    
  }
  

  return (
    <>
    {openPopUp?  <PopUpForm Title = {"Update"} handleClickOpen = {handleEdit} TableFields = {props.Table_columns} tabActive = {props.tabActive} Field1 = {props.Field1} handleField1 ={props.handleField1} Field2 = {props.Field2} handleField2 ={props.handleField2} Field3 = {props.Field3} handleField3 ={props.handleField3} Field4 = {props.Field4} handleField4 ={props.handleField4} Field5 = {props.Field5} handleField5 ={props.handleField5} Field6 = {props.Field6} handleField6 ={props.handleField6} /> : <></>}
    <TableContainer component={Paper}  style = {{backgroundColor : "rgba(128,128,128,0.5)",  maxHeight : 400 ,overflow : "auto" }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell align="right"></TableCell>
            {
              
              props.Table_columns.columns.map((column) => {
                return(
                  <TableCell align="left">{column}</TableCell>
                )
              })

            }
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.Data.map((row,index) => (

            <TableElementRow  handleEdit ={handleEdit} row = {row} keysArray = {keysArray} index = {index} Data = {props.Data}  TableFields = {props.Table_columns} tabActive = {props.tabActive} Field1 = {props.Field1} handleField1 ={props.handleField1} Field2 = {props.Field2} handleField2 ={props.handleField2} Field3 = {props.Field3} handleField3 ={props.handleField3} Field4 = {props.Field4} handleField4 ={props.handleField4} Field5 = {props.Field5} handleField5 ={props.handleField5} Field6 = {props.Field6} handleField6 ={props.handleField6} />
            // <TableRow
            //   key={row.name}
            //   sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            // >
            //   <div className={ index === (props.Data.length - 1) ?style.divClass2: style.divClass} >

            //     <EditIcon style = {{fontSize : "17.5px"}} />
              
            //   </div>

            //   {
            //     keysArray.map((key) => {
            //       if(key !== "id"){
            //       return(
            //         <TableCell align="left">{row[key]}</TableCell>
            //       )
            //       }
            //       else{
            //         return(
            //           <></>
            //         )
            //       }
            //     })
            //   }
              
            //   <TableCell align="left">
            //     <DeleteIcon style = {{fontSize : "17.5px"}} />
            //   </TableCell>
            // </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}