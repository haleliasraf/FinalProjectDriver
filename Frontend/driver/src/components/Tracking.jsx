import React, { useState } from "react";
import { getShipById } from "../utils/shipUtil";

import { useSelector } from "react-redux";
import axios from 'axios';
 
import { TextField, Button, Box, IconButton } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FormControl from '@mui/material/FormControl';
import { Container } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';



const Tracking = () => {
  const [id, setid] = useState("")
  const connectedUser = useSelector(state => state.user.connectedUser);
  const [response, setResponse] = useState();


  const fetchData = async () => {
    try {
      await getShipById(id).then((res) => {
        debugger
        setResponse(res.data)
      }

      )

      console.log(response.data); // מדפיס את הנתונים שהתקבלו מהבקשה GET
    } catch (error) {
      console.error('מספר הזמנה לא נמצא ', error);
    }
  };

  return (
    <>
 <>

<Container component="main" maxWidth="200px">
<Box
sx={{
marginTop: 8,
display: 'flex',
flexDirection: 'column'
}}
>
<Box
component="form"
sx={{
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  width:'500px',
  '& .MuiTextField-root': { width: '90%' },
  backgroundColor: 'white',
  borderRadius:'5px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  marginLeft: 'auto',
  marginRight: 'auto',

}}
// noValidate
// onSubmit={handleSubmit}
 autoComplete="on"
>
{/* <div> */}

<h2 >  מעקב אחרי משלוח</h2>


    <TextField
      sx={{ textAlign: 'right' }}
      id="outlined-multiline-flexible"
      name='traking'
      value={id}
      label="מספר הזמנה"
      multiline
      maxRows={4}
      onChange={(e) => setid(e.target.value)}
      fullWidth
      margin="normal"
      required
    />
    
      <Button
variant="contained"
color="primary"
startIcon={<SaveIcon />}
type="button"
size="large"
sx={{ marginTop: '20px' }}
onClick={fetchData}
>
קבלת סטטוס 
</Button>

</Box>
</Box>

</Container>

</>
<div className="container">

{response && (
<p>
<p> {response.status.description} </p>

</p>
)}

</div>
    </>
  )
}

export default Tracking


{/* <>
<lable>מספר הזמנה </lable>
<input type="string" value={id} onChange={(e) => setid(e.target.value)}></input>
<button onClick={fetchData}>קבלת סטטוס</button><br />
<lable> סטטוס הזמנה</lable><br />
<div className="container">

{response && (
<p>
<p> {response.status.description} </p>

</p>
)}

</div>
</> */}