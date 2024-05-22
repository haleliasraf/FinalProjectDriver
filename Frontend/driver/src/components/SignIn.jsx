import React, { useEffect, useState } from "react";
import { login } from "../utils/userUtil";
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

const SignIn = ({open, setOpen,setOpenSingUp}) => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [error, setError] = useState("");
    const [issuccess, setissuccess] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [passwordError, setPasswordError] = useState(false);
    const [emailError, setEmailError] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    

    const handleClose = () => {
        setOpen(false);
    };
    const validatePassword = (password) => {
        return password.length >= 8;
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

    const validateEmail = (email) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
        }

        const handleEmailChange = (emailInput) => {
            setemail(emailInput);
            if (!validateEmail(emailInput)) {
                
                setEmailError(true);
            } else {
                setError("");
                setEmailError(false);
            }
        };

    const handleClickSignIn = async() => {
        let user = {
            email: email,
            password
      }
        await login(user).then(res => {
            if(res.status === 200){
                dispatch(setConnectedUser(res.data));
                if(res.data.level===1){ 
                    navigate("/WorkersManagement");
                }
                else{
                setError("");
                setissuccess("התחברת בהצלחה"); 
                navigate("/");
                }
            }
            else{
                setError("אחד מהנתונים שהוקשו שגוי");
                setissuccess(" "); 
            }
        });
    }

    return (
        <>
        {/* <div className="sign-in-popup">
            <div className="container">
            <h1>התחברות</h1>
            <Link to="/SignUp">להרשמה</Link><br/>
            <label>הכנס כתובת מייל</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/><br/>
            <label>הכנס סיסמא</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/><br/>
            {error !== "" && <><span>{error}</span><br/></>}
            {issuccess && <Popup message={issuccess} />} 
            
            <button onClick={handleClickSignIn}>התחברות</button>
            </div>
        </div> */}
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>התחברות</DialogTitle>
        <DialogContent>
        {/* <Link to="/SignUp">להרשמה</Link><br/> */}
            <label>הכנס כתובת מייל</label>
            <input type="email"value={email}onChange={(e) => handleEmailChange(e.target.value)}style={{ borderColor: emailError ? 'red' : 'initial' }} /><br />
        { emailError && <><span style={{color: 'red'}}>*</span><small style={{color: 'red'}}> האימייל שהוזן אינו תקין</small><br /></>}     
            <label>הכנס סיסמא</label>
            <input type="password"value={password}onChange={(e) => handlePasswordChange(e.target.value)}  style={{ borderColor: passwordError ? 'red' : 'initial' }} /><br />
            { passwordError && <><span style={{color: 'red'}}>*</span><small style={{color: 'red'}}  >הסיסמא שהוזנה אינה תקינה </small><br /></>} 
            {/* <small style={{color: 'blue'}}>הסיסמה חייבת לכלול לפחות 8 תווים</small><br /> */}
         {error !== "" && <><span>{error}</span><br/></>}
            {issuccess && <Popup message={issuccess} />} {/* הפעלת ה-Popup עם הודעת הצלחת התחברות */}
        
        </DialogContent>
        <DialogActions>
         
          <Button onClick={handleClickSignIn} disabled={passwordError||emailError}>התחברות </Button><br/>
          <Button ></Button> 
          <Button ></Button> 
         <br/> 
          <p>אין לך עדין חשבון <Link to="/SignUp">הרשם</Link></p><br/>
          {/* <Button onClick={<Link to="/SignUp">להרשמה</Link>}>הרשמה</Button> */}
        </DialogActions>
      </Dialog>
        </>

    );


}


const Popup = ({ message }) => {
    return (
        <div className="popup">
            <div className="popup-content">
                <h2>התחברות מוצלחת</h2>
                <p>{message}</p>
            </div>
        </div>
    );
}

export default SignIn;
