

import React from "react";
import { login } from "../utils/userUtil";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setConnectedUser } from "../features/userSlice";
import './css/SignIn.css';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TextField, Box } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const SignIn = ({ open, setOpen, setOpenSingUp }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('המייל שהוזן אינו תקין')
        .required('שדה המייל הוא חובה'),
      password: Yup.string()
        .min(8, 'הסיסמה חייבת לכלול לפחות 8 תווים')
        .required('שדה הסיסמא הוא חובה'),
    }),
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      let user = {
        email: values.email,
        password: values.password
      };
      try {
        const res = await login(user);
        if (res.status === 200) {
          dispatch(setConnectedUser(res.data));
          if (res.data.level === 1) {
            navigate("/WorkersManagement");
          } else {
            navigate("/");
          }
        } else {
          setErrors({ general: "אחד מהנתונים שהוקשו שגוי" });
        }
      } catch (error) {
        setErrors({ general: "אחד מהנתונים שהוקשו שגוי" });
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <form onSubmit={formik.handleSubmit}>
        <DialogTitle>התחברות</DialogTitle>
        <DialogContent>
          <TextField
            sx={{ textAlign: 'right' }}
            id="email"
            name="email"
            label="הכנס כתובת מייל"
            type="email"
            fullWidth
            margin="normal"
            required
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            sx={{ textAlign: 'right' }}
            id="password"
            name="password"
            label="הכנס סיסמא"
            type="password"
            fullWidth
            margin="normal"
            required
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          {formik.errors.general && (
            <span style={{ color: 'red' }}>{formik.errors.general}</span>
          )}
        </DialogContent>
        <DialogActions>
          <Button type="submit" disabled={formik.isSubmitting}>
            התחברות
          </Button>
          <Button></Button>
          <p>אין לך עדין חשבון <Link to="/SignUp">הרשם</Link></p>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default SignIn;
