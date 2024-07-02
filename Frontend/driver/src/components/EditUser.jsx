import { Dialog, DialogTitle, DialogContent, Popup, DialogActions, Button, TextField, Box } from "@mui/material"
import { useEffect, useState } from "react";
import { updateUser } from "../utils/userUtil";
import { useDispatch, useSelector } from "react-redux";
import { setConnectedUser } from "../features/userSlice";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";

const EditUsers = (props) => {

    const [EditUser, setEditUser] = useState({});
    const [isEdit, setIsEdit] = useState(false);
    const connectedUser = useSelector(state => state.user.connectedUser);
    const navigate = useNavigate();

    const dispatch = useDispatch()

    useEffect(() => {
        setEditUser(connectedUser)
    }, [connectedUser])

    const handleChangeUser = (e) => {
        const { name, value } = e.target;
        setEditUser({ ...EditUser, [name]: value })
    }

    const onSave = () => {
        updateUser(EditUser).then(res => {
            if (res.status == 200) {
               dispatch(setConnectedUser(res.data))
               Swal.fire({
                title: `עדכון פרטים `,
                html: `
                  <p>העדכון בוצע בהצלחה  </p>
            
                `,
                icon: 'success',
                showCloseButton: true,
                focusConfirm: false,
                confirmButtonText: 'Close',
                didClose: () => {
                  navigate('/');
                }
    });
            }
        })
            .catch(err => console.log('error', err))
    }

    return <Box
    sx={{
        marginTop: '30px',
        // border: '4px solid #000000',
        // borderImage: 'linear-gradient(to right ,#b29685, #c68a4f)', 
        // // מעבר צבעים משחור לזהב
        // borderImageSlice: 3, // מסגרת בעובי של 2 פיקסלים
        padding: '5px',
        borderRadius: '10px', // פינ// פינות מעוגלות
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width:'500px',
        '& .MuiTextField-root': { width: '90%' },
        backgroundColor: '#faf9f1',
        borderRadius:'2px',
        boxShadow: '0 2px 2px rgba(0, 0, 0, 0.1)',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
      >
        <h2> פרטים אישיים
        
        </h2>
            <Button onClick={() => setIsEdit(!isEdit)}>עריכה✏️</Button>
            <TextField
                sx={{ textAlign: 'right' }}
                id="outlined-multiline-flexible"
                name='firstName'
                value={EditUser?.firstName}
                label="שם פרטי"
                type="text"
                multiline
                maxRows={4}
                fullWidth
                margin="normal"
                required
                disabled={!isEdit}
                onChange={handleChangeUser}
            />

            <TextField
                sx={{ textAlign: 'right' }}
                id="outlined-multiline-flexible"
                name='lastName'
                value={EditUser?.lastName}
                label="שם משפחה"
                type="text"
                multiline
                maxRows={4}
                fullWidth
                margin="normal"
                required
                disabled={!isEdit}
                onChange={handleChangeUser}
            />
            <TextField
                sx={{ textAlign: 'right' }}
                id="outlined-multiline-flexible"
                name='phone'
                value={EditUser?.phone}
                label="מספר טלפון"
                type="text"
                multiline
                maxRows={4}
                fullWidth
                margin="normal"
                required
                disabled={!isEdit}
                onChange={handleChangeUser}
            />
            <TextField
                sx={{ textAlign: 'right' }}
                id="outlined-multiline-flexible"
                name='typeTaxis'
                value={EditUser?.email}
                label=" מייל"
                type="text"
                multiline
                maxRows={4}
                fullWidth
                margin="normal"
                required
                disabled={!isEdit}
                onChange={handleChangeUser}
            />
            <TextField
                sx={{ textAlign: 'right' }}
                id="outlined-multiline-flexible"
                name='typeTaxis'
                value={EditUser?.password}
                label=" סיסמא"
                type="text"
                multiline
                maxRows={4}
                fullWidth
                margin="normal"
                required
                disabled={!isEdit}
                onChange={handleChangeUser}
            />
            <Button onClick={onSave} disabled={false}>עדכן </Button><br />
            
    </Box>

}
export default EditUsers