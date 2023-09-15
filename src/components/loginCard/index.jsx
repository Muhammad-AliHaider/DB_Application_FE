import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CustomButton from '../customButton';
import { TextField } from '@mui/material';
import style  from "./styleSheet.module.css"

const loginCard = () => {

    return(
        <>
        <Box>
            <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                    <div className = {style.alignment}>
                    <TextField className={style.textField} variant = {"filled"} label = {"UserName"}/>

                    <TextField className={style.textField} variant = {"filled"} label = {"Password"} type = {"password"}/>
                    <TextField className={style.textField} variant = {"filled"} label = {"PortNumber"} type = {"number"}/>

                    <CustomButton ButtonName = {"Connect"}/>
                    </div>
                </CardContent>
            </Card>
        </Box>
        </>
    )
}

export default loginCard