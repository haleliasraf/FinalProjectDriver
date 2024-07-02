

import React from "react";
import { getShipById } from "../utils/shipUtil";
import { useSelector } from "react-redux";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Box, Container } from '@mui/material';
import ShareLocationIcon from '@mui/icons-material/ShareLocation';
import SendIcon from '@mui/icons-material/Send';
import  { useState } from "react";


const Tracking = () => {
  const connectedUser = useSelector(state => state.user.connectedUser);
  const [response, setResponse] = useState();

  const formik = useFormik({
    initialValues: {
      id: '',
    },
    validationSchema: Yup.object({
      id: Yup.string()
        .required('מספר הזמנה הוא שדה חובה')
    }),
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        const res = await getShipById(values.id);
        setResponse(res.data);
     
       if (res.status===204) {
        console.error('מספר הזמנה לא נמצא');
        setErrors({ id: 'מספר הזמנה לא נמצא' });
      }
    }
       catch (error) {
        console.error('יש בעיה בצד שלנו ');
        setErrors({ id: 'יש בעיה בצד שלנו' });
     
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <Container className="tracking"
      sx={{
        marginTop: '0px',
        backgroundSize: 'cover', // Optional: Ensures the image covers the container
      }}
      component="main" maxWidth="200px">
      <Box
        sx={{
          height: '84vh',
          width: '95vw',
          display: 'flex',
          flexDirection: 'column',
          padding: '5px',
          borderRadius: '7px'
        }}
      >
        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          sx={{
            marginTop: '100px',
            padding: '5px',
            borderRadius: '10px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '500px',
            '& .MuiTextField-root': { width: '90%' },
            backgroundColor: '#faf9f1',
            borderRadius: '2px',
            boxShadow: '0 2px 2px rgba(0, 0, 0, 0.1)',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
          autoComplete="on"
        >
          <ShareLocationIcon sx={{ fontSize: '60px', mergin: 0 }}></ShareLocationIcon>
          <h2 style={{ margin: '0px' }}>מעקב אחרי משלוח</h2>
          <TextField
            sx={{ textAlign: 'right' }}
            id="id"
            name="id"
            label="מספר הזמנה"
            value={formik.values.id}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.id && Boolean(formik.errors.id)}
            helperText={formik.touched.id && formik.errors.id}
            multiline
            maxRows={4}
            fullWidth
            margin="normal"
            required
          />
          <Button
            variant="contained"
            color="primary"
            startIcon={<SendIcon />}
            type="submit"
            size="large"
            sx={{ marginTop: '20px', backgroundColor: '#bdad73', color: "black" }}
            disabled={formik.isSubmitting}
          >
            .קבלת סטטוס
          </Button>
          <br />
          <br />
          <div className="container">
            {response && (
              <p>{response.status.description}</p>
            )}
          </div>
        </Box>
      </Box>
    </Container>
  );
}

export default Tracking;
