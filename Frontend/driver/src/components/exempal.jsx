

//   הכנסת מורה חדש ע"י מנהל
import React ,{useState }from "react";
import { useNavigate } from 'react-router-dom';
import { setTeacherConnect } from "../redux/teacherSlice";
import { useDispatch } from "react-redux";
import { AddTeacher } from "../utils/TeacherUtils";

import './CSS/baseCSS.css';


import { TextField, Button, Box, IconButton } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FormControl from '@mui/material/FormControl';
import { Container } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';


const AddNewTeacher = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  let teacherEmpty = {
    teacherName:"",
    idNumberT:"",
    phoneT:"",
    emailT:"",
    schoolId:1,
    status:true,
    password:""
  }

  const [teacher, setTeacher] = useState(teacherEmpty);
  const [error, setError] = useState("");

  const handleClickLogin = () => {
    AddTeacher(teacher).then(res => {
        if(res.status === 200){
            alert("מורה נרשם בהצלחה לכניסה ראשונית על המורה להכנס כמורה חדש רשום")     
            dispatch(setTeacherConnect(res.data));
            navigate('/privateAreaManager');              
              }

        else{
             setError("מורה לא נקלט");
               }
           }).catch(err => {
               console.log(err);
               alert("ישנה תקלה נסה שוב");
           });
        
  }

  const handleChangeTeacher = (e) => {
    let {name, value} = e.target;
    let _teacher = {...teacher};
    _teacher[name] = value;
    setTeacher(_teacher);
    console.log(_teacher);

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:');
    handleClickLogin();
  };

  return (<>

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
            onSubmit={handleSubmit}
            autoComplete="on"
          >
            {/* <div> */}

            <h2 > הכנסת מורה חדש</h2>

                <TextField
                  id="outlined-multiline-flexible"
                  name='teacherName'
                  value={teacher.teacherName}
                  label=" שם מלא"
                  multiline
                  maxRows={4}
                  onChange={handleChangeTeacher}
                  required
                  fullWidth
                  margin="normal"
                />
                <TextField
                  sx={{ textAlign: 'right' }}
                  id="outlined-multiline-flexible"
                  name='idNumberT'
                  value={teacher.idNumberT}
                  label="מספר זהות"
                  multiline
                  maxRows={4}
                  onChange={handleChangeTeacher}
                  fullWidth
                  margin="normal"
                  required
                />

          
                <TextField
                  id="outlined-multiline-flexible"
                  name='phoneT'
                  value={teacher.phoneT}
                  label="טלפון"
                  multiline
                  maxRows={4}
                  onChange={handleChangeTeacher}
                  required
                  fullWidth
                  margin="normal"
                />

                <TextField
                  id="outlined-multiline-flexible"
                  name='emailT'
                  value={teacher.emailT}
                  label="מייל"
                  type='email'
                  onChange={handleChangeTeacher}
                  required
                  fullWidth
                  margin="normal"
                // inputProps={{
                //   pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$",
                // }}

                />
                  <Button
          variant="contained"
          color="primary"
          startIcon={<SaveIcon />}
          type="submit"
          size="large"
          sx={{ marginTop: '20px' }}
       
        >
            _הכנס   
        </Button>
          <span>{error}</span>
            </Box>
        </Box>

      </Container>

   {/* <form action="" method="post" class="formTeacher" onSubmit={handleSubmit}>
      <div className="formTeacher">
        <label for="teacherName">שם המורה: </label>
        <input type="text" name="teacherName" id="teacherName" value={teacher.teacherName} required onChange={handleChangeTeacher}/>
      </div>
         <div className="formTeacher">
        <label htmlFor="idNumberT">מספר זהות : </label>
        <input type="text" name="idNumberT" id="idNumberT" value={teacher.idNumberT} required   onChange={handleChangeTeacher}/>
      </div>
      <div className="formTeacher">
        <label for="phoneT">טלפון : </label>
        <input type="text" name="phoneT" id="phoneT" value={teacher.phoneT} required   onChange={handleChangeTeacher}/>
      </div>
      <div className="formTeacher">
        <label for="emailT">אימייל :  </label>
        <input type="email" name="emailT" id="emailT" value={teacher.emailT} required  onChange={handleChangeTeacher} />
      </div>  */}
    {/* <button onClick={handleClickLogin} ></button>   */}
      {/* <div class="formTeacher">
        <input type="submit" value="הכנס"/>  
      </div>
    </form> */}




  </>)
}
export default AddNewTeacher;