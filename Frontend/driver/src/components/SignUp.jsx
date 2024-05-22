import React, { useState } from "react";
import { addUser } from "../utils/userUtil";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setConnectedUser } from "../features/userSlice";
import './css/SignIn.css';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const SignUp = ({ open, setOpen }) => {
    const [phone, setphone] = useState("")
    const [password, setpassword] = useState("")
    const [firstname, setfirstname] = useState("")
    const [lastname, setlastname] = useState("")
    const [email, setemail] = useState("")
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [emailError, setEmailError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);



    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const validatePassword = (password) => {
        return password.length >= 8;
    }

    const validatePhone = (phone) => {
        var re = /^(\+?\d{1,4}[\s-])?(?!0+\s+,?$)\d{10}\s*,?$/;
        return re.test(String(phone));
    }
      
    const validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
    }

    const handlePasswordChange = (passwordInput) => {
        setpassword(passwordInput);
        if (!validatePassword(passwordInput)) {
           
            setPasswordError(true);
        } else {
            setError("");
            setPasswordError(false);
        }
    };

    const handlePhoneChange = (phoneInput) => {
        setphone(phoneInput);
        if (!validatePhone(phoneInput)) {
          
            setPhoneError(true);
        } else {
            setError("");
            setPhoneError(false);
        }
    };

    const handleEmailChange = (emailInput) => {
        setemail(emailInput);
        if (!validateEmail(emailInput)) {
           
            setEmailError(true);
        } else {
            setError("");
            setEmailError(false);
        }
    };
    

    
    const handleClickSignUp = async () => {
        let user = {
            email: email,
            password,
            phone: phone,
            firstname: firstname,
            lastname: lastname,
            error: error,
            //openSignup:openSignup
        }
        if(emailError !="" || passwordError != ""){
            return;
        }
        await addUser(user).then(res => {
            if (res.status === 200) {
                setError("");
                alert("התחברת בהצלחה");
                navigate("/");
                setEmailError(false);
            }
            else if(res.status === 204){
                console.log(res);
                setError("כתובת האיימיל כבר קיימת.");
            }
            else if(res.status === 500) {
                setError("אופס המערכת נתקלה בבעיה...");
            }


        });
    }
    return (
        <>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>הרשמה</DialogTitle>
                <DialogContent>
                    <h1>הרשמה</h1>
                    <label>הכנס כתובת מייל</label>
                    <input type="email"value={email}onChange={(e) => handleEmailChange(e.target.value)}style={{ borderColor: emailError ? 'red' : 'initial' }} /><br />
                { emailError && <><span style={{color: 'red'}}>*</span><small 
                     style={{color: 'red'}}> המייל שהוזן אינו תקין</small><br />
                     </>}
                     
                    <label>הכנס סיסמא</label>
                    <input type="password"value={password}onChange={(e) => handlePasswordChange(e.target.value)}style={{ borderColor: passwordError ? 'red' : 'initial' }} /><br />
                     { passwordError && <><span style={{color: 'red'}}>*</span><small 
                     style={{color: 'red'}}  >הססמא שהוזנה אינה תקינה </small><br /></>}
                     <small style={{color: 'blue'}}>הסיסמה חייבת לכלול לפחות 8 תווים</small><br />
                    <label>הכנס שם פרטי</label>
                    <input type="firstname" value={firstname} onChange={(e) => setfirstname(e.target.value)} /><br />
                    <label>הכנס שם משפחה</label>
                    <input type="lastname" value={lastname} onChange={(e) => setlastname(e.target.value)} /><br />
                    <label>הכנס מספר טלפון</label>
                    <input type="phone"value={phone}onChange={(e) => handlePhoneChange(e.target.value)}style={{ borderColor: phoneError ? 'red' : 'initial' }} /><br />
                { phoneError && <><span style={{color: 'red'}}>*</span><small 
                     style={{color: 'red'}}> המספר שהוזן אינו תקין</small><br /></>}

                    {error != "" && <><span>{error}</span><br /></>}
                    {/* {error!="" ? <span></span>: null} */}
                    {/* <button onClick={handleClickSignUp}>הרשמה</button> */}
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClickSignUp}>הרשמה
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );

};

// const Popup = ({ message }) => {
//     return (
//         <div className="popup">
//             <div className="popup-content">
//                 <h2>התחברות מוצלחת</h2>
//                 <p>{message}</p>
//             </div>
//         </div>
//     );
// }
export default SignUp;

