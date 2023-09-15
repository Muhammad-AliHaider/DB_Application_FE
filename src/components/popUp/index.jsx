import { Box, Button, Container } from "@mui/material";

import CustomButton from "../customButton";
import CustomForm from "../form/form.jsx";
import style from "./styleSheet.module.css";

const PopUpForm = (props) =>{
    return(
        <>
        <Container className = {style.containerClass}>
            <Box className = {style.boxClass}>
                    <>
                        <CustomForm Title = {props.Title} TableFields = {props.TableFields} tabActive = {props.tabActive} Field1 = {props.Field1} handleField1 ={props.handleField1} Field2 = {props.Field2} handleField2 ={props.handleField2} Field3 = {props.Field3} handleField3 ={props.handleField3} Field4 = {props.Field4} handleField4 ={props.handleField4} Field5 = {props.Field5} handleField5 ={props.handleField5} Field6 = {props.Field6} handleField6 ={props.handleField6}/>
                    </> 
                <div className = {style.divClass}>
                    <CustomButton ButtonName = {"Cancel"} onhandleClick = {props.handleClickOpen}/>
                    <CustomButton ButtonName = {"Submit"} onhandleClick = {props.handleClickOpen}/>
                </div>
            </Box>
        </Container>
        </>
    );
}

export default PopUpForm;