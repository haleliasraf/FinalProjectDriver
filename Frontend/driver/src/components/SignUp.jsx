import React, { useEffect, useState } from "react";
import { addUser } from "../utils/userUtil";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setConnectedUser } from "../features/userSlice";
import './css/SignIn.css';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TextField, Button, Box, IconButton } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import SendIcon from '@mui/icons-material/Send';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const SignUp = ({ open, setOpen }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        setOpen(true);
    }, []);

    const handleClose = () => {
        setOpen(false);
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('כתובת האימייל שהוזנה אינה תקינה').required('נדרש אימייל'),
        password: Yup.string().min(8, 'הסיסמה חייבת לכלול לפחות 8 תווים').required('נדרשת סיסמה'),
        firstname: Yup.string().required('נדרש שם פרטי'),
        lastname: Yup.string().required('נדרש שם משפחה'),
        phone: Yup.string().matches(/^(\+?\d{1,4}[\s-])?(?!0+\s+,?$)\d{10}\s*,?$/, 'המספר שהוזן אינו תקין').required('נדרש מספר טלפון')
    });

    const handleClickSignUp = async (values, { setSubmitting, setErrors }) => {
        try {
            const response = await addUser(values);
            if (response.status === 200) {
                // alert("התחברת בהצלחה");
                // dispatch(setConnectedUser(response.data));
                // if(res.data.level===1){ 
                //     navigate("/WorkersManagement");
                // }
                // else{
                //     setErrors("");
                //     setissuccess("התחברת בהצלחה"); 
                //     navigate("/");
                // }
                navigate("/");
            } else if (response.status === 204) {
                setErrors({ email: 'כתובת האימייל כבר קיימת' });
            } else if (response.status === 500) {
                setErrors({ server: 'אופס המערכת נתקלה בבעיה...' });
            }
        } catch (error) {
            setErrors({ server: 'אופס המערכת נתקלה בבעיה...' });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <div
                sx={{
                    border: '4px solid #000000',
                    borderImage: 'linear-gradient(to right ,#4b4944, #c7b451)',
                    borderImageSlice: 3,
                    borderRadius: '10px',
                }}
            >
                <DialogTitle>הרשמה</DialogTitle>
                <DialogContent>
                    <Formik
                        initialValues={{ email: '', password: '', firstname: '', lastname: '', phone: '' }}
                        validationSchema={validationSchema}
                        onSubmit={handleClickSignUp}
                    >
                        {({ isSubmitting, errors }) => (
                            <Form>
                                <Field
                                    as={TextField}
                                    name="email"
                                    label="הכנס כתובת מייל"
                                    type="email"
                                    fullWidth
                                    margin="normal"
                                    required
                                    error={!!errors.email}
                                    helperText={<ErrorMessage name="email" component="small" style={{ color: 'red' }} />}
                                />
                                <Field
                                    as={TextField}
                                    name="password"
                                    label="הכנס סיסמא"
                                    type="password"
                                    fullWidth
                                    margin="normal"
                                    required
                                    error={!!errors.password}
                                    helperText={<ErrorMessage name="password" component="small" style={{ color: 'red' }} />}
                                />
                                <Field
                                    as={TextField}
                                    name="firstname"
                                    label="הכנס שם פרטי"
                                    type="text"
                                    fullWidth
                                    margin="normal"
                                    required
                                    error={!!errors.firstname}
                                    helperText={<ErrorMessage name="firstname" component="small" style={{ color: 'red' }} />}
                                />
                                <Field
                                    as={TextField}
                                    name="lastname"
                                    label="הכנס שם משפחה"
                                    type="text"
                                    fullWidth
                                    margin="normal"
                                    required
                                    error={!!errors.lastname}
                                    helperText={<ErrorMessage name="lastname" component="small" style={{ color: 'red' }} />}
                                />
                                <Field
                                    as={TextField}
                                    name="phone"
                                    label="הכנס מספר טלפון"
                                    type="text"
                                    fullWidth
                                    margin="normal"
                                    required
                                    error={!!errors.phone}
                                    helperText={<ErrorMessage name="phone" component="small" style={{ color: 'red' }} />}
                                />
                                {errors.server && <div style={{ color: 'red' }}>{errors.server}</div>}
                                <DialogActions>
                                    <Button type="submit" disabled={isSubmitting}>
                                        הרשמה
                                    </Button>
                                </DialogActions>
                            </Form>
                        )}
                    </Formik>
                </DialogContent>
            </div>
        </Dialog>
    );
};

export default SignUp;
