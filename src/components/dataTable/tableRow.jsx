import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PopUpForm from '../../components/popUp';
import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import style from "./styleSheet.module.css";

const TableElementRow = (props) => {

    function handleEditRow(){
        // console.log(props.row,"props.row")
        // console.log(props.keysArray,"props.keysArray")

        if(props.tabActive === 0){
            props.handleField1(props.row[props.keysArray[1]] );
            props.handleField2(props.row[props.keysArray[2]]);
            props.handleField3(props.row[props.keysArray[3]]);
            props.handleField4(props.row[props.keysArray[4]]);
            props.handleField5( props.row[props.keysArray[5]]);
        }
        else if(props.tabActive === 1){
            props.handleField2(props.row[props.keysArray[1]]);
            props.handleField3(props.row[props.keysArray[2]]);
            props.handleField4(props.row[props.keysArray[3]]);
            props.handleField5( props.row[props.keysArray[4]]);
        }
        else if(props.tabActive === 2){
            props.handleField1(props.row[props.keysArray[2]]);
            props.handleField2(props.row[props.keysArray[7]]);
            props.handleField3(props.row[props.keysArray[4]]);
            props.handleField4(props.row[props.keysArray[5]]);
            props.handleField5( props.row[props.keysArray[6]]);
            props.handleField6( props.row[props.keysArray[3]]);
        }

        props.handleEdit();
    }

    function DeleteRecord(){
        
        console.log(props.row[props.keysArray[0]],"delete record of id")
    }

    return(
        <>
        {/* {openPopUp?  <PopUpForm Title = {"Update"} handleClickOpen = {handleEdit} TableFields = {props.TableFields} tabActive = {props.tabActive} Field1 = {props.Field1} handleField1 ={props.handleField1} Field2 = {props.Field2} handleField2 ={props.handleField2} Field3 = {props.Field3} handleField3 ={props.handleField3} Field4 = {props.Field4} handleField4 ={props.handleField4} Field5 = {props.Field5} handleField5 ={props.handleField5} Field6 = {props.Field6} handleField6 ={props.handleField6} /> : <></>} */}
        <TableRow
        key={props.row.name}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <div className={ props.index === (props.Data.length - 1) ?style.divClass2: style.divClass} >

          <EditIcon style = {{fontSize : "17.5px"}} onClick = {()=>handleEditRow()} />
        
        </div>

        {
          props.keysArray.map((key) => {
            if(key !== "id"){
            return(
              <TableCell align="left">{props.row[key]}</TableCell>
            )
            }
            else{
              return(
                <></>
              )
            }
          })
        }
        
        <TableCell align="left">
          <DeleteIcon style = {{fontSize : "17.5px"}} onClick = {()=>{DeleteRecord()}} />
        </TableCell>
      </TableRow>
      </>
    )
}

export default TableElementRow;