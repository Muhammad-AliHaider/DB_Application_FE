import { Box, Container, TextField } from '@mui/material';
import { Deserts, HomePageTitle, Orders, TableNames, Table_columns, Users } from '../../dataController/strings';

import AddIcon from '@mui/icons-material/Add';
import BasicTable from '../../components/dataTable/table';
import CustomButton from '../../components/customButton';
import PopUpForm from '../../components/popUp';
import React from 'react';
import SearchField from '../../components/searchField';
import Tabs from '../../components/tabs';
import style from "./styleSheet.module.css";

const Home =()=>{

    const [openPopUp , setOpenPopUp] = React.useState(false);
    const [tabData, setTabData] = React.useState(0);

    const [Field1, setField1] = React.useState();
    const [Field2, setField2] = React.useState();
    const [Field3, setField3] = React.useState();
    const [Field4, setField4] = React.useState();
    const [Field5, setField5] = React.useState();
    const [Field6, setField6] = React.useState();

    React.useEffect(() => {

        setField1("");
        setField2("");
        setField3("");
        setField4("");
        setField5("");
        setField6("");

    },[tabData, openPopUp])
    
    
    function handleField1(value){
        setField1(value);
    }
    function handleField2(value){
        setField2(value);
    }
    function handleField3(value){
        setField3(value);
    }
    function handleField4(value){
        setField4(value);
    }
    function handleField5(value){
        setField5(value);
    }
    function handleField6(value){
        setField6(value);
    }




    function handleTab(index){
        setTabData(index);
    }

    function handleClickOpen(){
        setOpenPopUp((prev ) => !prev);
    }
    return(
        <>

        {openPopUp ? <PopUpForm Title = {"Add New"} handleClickOpen = {handleClickOpen} TableFields = {Table_columns[tabData]} tabActive = {tabData} Field1 = {Field1} handleField1 ={handleField1} Field2 = {Field2} handleField2 ={handleField2} Field3 = {Field3} handleField3 ={handleField3} Field4 = {Field4} handleField4 ={handleField4} Field5 = {Field5} handleField5 ={handleField5} Field6 = {Field6} handleField6 ={handleField6} /> : <></>}
        
        <div className={style.divClass}>
            <h1>{HomePageTitle}</h1>
        </div>

        <Container className={style.containerClass}>
            <div className = {style.divClass2}>
            <SearchField/>
            <AddIcon className={style.addIcon} onClick = {handleClickOpen}/>

            <div style={{width : "50%"}}/>
                <Tabs handleButton = {handleTab} b1 = {TableNames[0]} b2 = {TableNames[1]} b3 = {TableNames[2]} tabsActive = {tabData}/>
            </div>
            <Box className = {style.boxClass}>
                <BasicTable tabActive = {tabData} TableNames = {TableNames} Table_columns={Table_columns[tabData]} Data = {tabData === 0 ? Deserts : tabData === 1? Users : Orders} Field1 = {Field1} handleField1 ={handleField1} Field2 = {Field2} handleField2 ={handleField2} Field3 = {Field3} handleField3 ={handleField3} Field4 = {Field4} handleField4 ={handleField4} Field5 = {Field5} handleField5 ={handleField5} Field6 = {Field6} handleField6 ={handleField6}     />
            </Box>
        </Container>

        
        </>
        
    )
}

export default Home;