import React, { useState } from "react";
import { addShip } from "../utils/shipUtil";
import { useSelector } from "react-redux"


import { TextField, Button, Box, IconButton } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FormControl from '@mui/material/FormControl';
import { Container } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const Deliveries = () => {
    const[shipAdress,setshipAdress]= useState("")
    const[name,setname]= useState("")
    const[data,setdata]= useState("")
    const[error,seterror]= useState("")  
    const[shipSdress,setshipSdress]= useState("")  

    const connectedUser = useSelector(state => state.user.connectedUser);
     
    const handleClickDeliver = async(e) => {
        e.preventDefault();
        let deliver = {
            shipAdress,
            userId:connectedUser.id,
            url :"string",
            name,
            date: new Date(),
            statusId:6,
            driverId:3,
            shipSdress,
            phon:connectedUser.phon,
            error,

        }
        await addShip (deliver).then(res => {
            if(res.status === 200){
                seterror("");
                // alert("הזמנתך נקלטה בהצלחה ");
                
            }
            else{
                seterror("אחד מהנתונים שהוקשו שגוי");
            }
        });
    }


    return (
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

            <h2 >  משלוחים</h2>

            
                <TextField
                  sx={{ textAlign: 'right' }}
                  id="outlined-multiline-flexible"
                  name='name'
                  value={name}
                  label=" שם לקוח"
                  multiline
                  maxRows={4}
                  onChange={(e) => setname(e.target.value)}
                  fullWidth
                  margin="normal"
                  required
                />
                <TextField
                  id="outlined-multiline-flexible"
                  name='shipAdress'
                  value={shipAdress}
                  label="כתובת לאיסוף"
                  multiline
                  maxRows={4}
                  onChange={(e) => setshipAdress(e.target.value)}
                  required
                  fullWidth
                  margin="normal"
                />
          
                <TextField
                  id="outlined-multiline-flexible"
                  name='shiptarget'
                  value={shipSdress}
                  label="כתובת יעד"
                  multiline
                  maxRows={4}
                  onChange={(e) => setshipSdress(e.target.value)}
                  required
                  fullWidth
                  margin="normal"
                />

                <TextField
                  id="outlined-multiline-flexible"
                  name='date'
                  value={data}
                  label="תאריך"
                  type='date'
                  onChange={(e) => setdata(e.target.value) }                 
                  required
                  fullWidth
                  margin="normal"
                // inputProps={{
                //   pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$",
                // }}

                />
                {/* <div fullWidth style={{border:'1px solid gray', borderRadius:'3px'}}> */}
               <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
                >
                צירוף קבלה
                <VisuallyHiddenInput type="file" accept="image/*" required />
                </Button>
                {/* </div> */}
                {/* <TextField
                  id="outlined-multiline-flexible"
                  name='image'
                  accept="image/*"
                  label="צרוף קבלה"
                  type='file'       
                  required
                  fullWidth
                  margin="normal"
                // inputProps={{
                //   pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$",
                // }}

                /> */}
                  <Button
          variant="contained"
          color="primary"
          startIcon={<SaveIcon />}
          type="submit"
          size="large"
          sx={{ marginTop: '20px' }}
          onClick={handleClickDeliver}
        >
            שלח משלוח  
        </Button>
          <span>{error}</span>
            </Box>
        </Box>

      </Container>

        </>



    )
    }

export default Deliveries



// <div>

// <lable>כתובת לאיסוף</lable>
// <input type="string" value={shipAdress} onChange={(e) => setshipAdress(e.target.value)}></input><br/>

// {/* defualt - השם של הuser */}

// <lable>שם הלקוח</lable>

// <input type="string" value={name} onChange={(e) => setname(e.target.value)}></input><br/>

// <lable>כתובת יעד</lable>
// <input type="string" value={shipSdress} onChange={(e) => setshipSdress(e.target.value)}></input><br/>

// <label>תאריך</label>
// <input type="date" value={data} onChange={(e) => setdata(e.target.value) }/><br/>


// </div>

// <div>
// <lable>העלת קבלת הזמנה</lable>
// <input type="file" accept="image/*"/><br/>
// </div>
// <div>
// <lable>חשבונית דרייבר בע"מ</lable><br/>
// <lable>לכבוד</lable>
// <input></input><br/>