
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { addUpcoming } from "../utils/upcomingUtil";
import { useSelector } from "react-redux";
import Swal from 'sweetalert2';
import { TextField, Button, Box, ToggleButton, ToggleButtonGroup, Container } from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import SendIcon from '@mui/icons-material/Send';
import HailRoundedIcon from '@mui/icons-material/HailRounded';
import { useNavigate } from "react-router-dom";

const Travel = () => {
  const connectedUser = useSelector(state => state.user.connectedUser);
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    areaId: Yup.string().required("יש לבחור אזור."),
    adressExit: Yup.string().required("יש להזין כתובת מוצא."),
    adressGounn: Yup.string().required("יש להזין כתובת יעד."),
    payment: Yup.number().required("יש לבחור אמצעי תשלום."),
    phone: Yup.string().matches(/^\d{10}$/, "יש להזין מספר טלפון חוקי.").required("יש להזין מספר טלפון."),
    numpassenger: Yup.number().min(1, "יש להזין מספר נוסעים חוקי.").required("יש להזין מספר נוסעים."),
  });

  const formik = useFormik({
    initialValues: {
      areaId: "",
      adressExit: "",
      adressGounn: "",
      payment: "",
      phone: "",
      numpassenger: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      let user = {
        userId: connectedUser.id,
        areaId: values.areaId,
        adressExit: values.adressExit,
        adressGounn: values.adressGounn,
        payment: values.payment,
        driverId: 3,
        time: "",
        date: new Date(),
        numpassenger: values.numpassenger,
        phone: values.phone,
        statusId: 9
      };

      await addUpcoming(user).then(res => {
        if (res.status === 200) {
          Swal.fire({
            title: `<strong>פרטי הזמנהls</strong>`,
            html: `
              <p><strong>שם לקוח:</strong> ${connectedUser.firstName}</p>
              <p><strong>טלפון:</strong> ${values.phone}</p>
              <p><strong>כתובת מוצא:</strong> ${values.adressExit}</p>
              <p><strong>כתובת יעד:</strong> ${values.adressGounn}</p>
              <p><strong>מספר נוסעים:</strong> ${values.numpassenger}</p>
              <p><strong>אופן תשלום:</strong> ${values.payment === 1 ? "מזומן" : "אשראי"}</p>
            `,
            icon: 'success',
            showCloseButton: true,
            focusConfirm: false,
            confirmButtonText: 'Close',
            didClose: () => {
              navigate('/');
            }
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'שגיאה',
            text: 'אחד מהנתונים שהוקשו שגוי',
          });
        }
      });
    }
  });

  const areaChildren = [
    <ToggleButton onClick={() => formik.setFieldValue('areaId', '1')} value="1" key="דרום">
      דרום
    </ToggleButton>,
    <ToggleButton onClick={() => formik.setFieldValue('areaId', '3')} value="3" key="צפון">
      צפון
    </ToggleButton>,
    <ToggleButton onClick={() => formik.setFieldValue('areaId', '2')} value="2" key="מרכז">
      מרכז
    </ToggleButton>,
  ];

  const paymentChildren = [
    <ToggleButton onClick={() => formik.setFieldValue( 2)} value="2" key="CreditCard">
      <CreditCardIcon />
    </ToggleButton>,
    <ToggleButton onClick={() => formik.setFieldValue( 1)} value="1" key="Cash">
      <MonetizationOnIcon />
    </ToggleButton>,
  ];

  return (
    <Container
      className="travel"
      sx={{
        marginTop: '0px',
        backgroundSize: 'cover',
      }} component="main" maxWidth="200px">
      <Box
        sx={{
          height: '84vh',
          overflow: 'hidden',
          width: '95vw',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '5px',
          borderRadius: '4px'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            '& > *': {
              m: 1,
            },
          }}
        ></Box>
        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          sx={{
            borderRadius: '10px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '500px',
            '& .MuiTextField-root': { width: '90%' },
            backgroundColor: '#faf9f1',
            borderRadius: '5px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
          autoComplete="on"
        >
          <HailRoundedIcon sx={{ fontSize: '60px', mergin: 0 }}></HailRoundedIcon>
          <h2 style={{ margin: '0px' }} >כאן ועכשיו</h2>

          <ToggleButtonGroup
            value={formik.values.areaId}
            exclusive
            onChange={(event, newAlignment) => formik.setFieldValue('areaId', newAlignment)}
            aria-label="Medium sizes"
            sx={{ marginTop: '7px' }}
          >
            {areaChildren}
          </ToggleButtonGroup>
          {formik.touched.areaId && formik.errors.areaId && (
            <div style={{ color: 'red', fontSize: '12px' }}>{formik.errors.areaId}</div>
          )}

          <TextField
            sx={{ textAlign: 'right' }}
            id="adressExit"
            name='adressExit'
            value={formik.values.adressExit}
            label="כתובת מוצא"
            multiline
            maxRows={4}
            onChange={formik.handleChange}
            fullWidth
            margin="normal"
            required
          />
          {formik.touched.adressExit && formik.errors.adressExit && (
            <div style={{ color: 'red', fontSize: '12px' }}>{formik.errors.adressExit}</div>
          )}

          <TextField
            sx={{ textAlign: 'right' }}
            id="adressGounn"
            name='adressGounn'
            value={formik.values.adressGounn}
            label="כתובת יעד"
            multiline
            maxRows={4}
            onChange={formik.handleChange}
            fullWidth
            margin="normal"
            required
          />
          {formik.touched.adressGounn && formik.errors.adressGounn && (
            <div style={{ color: 'red', fontSize: '12px' }}>{formik.errors.adressGounn}</div>
          )}

          <TextField
            sx={{ textAlign: 'right' }}
            id="phone"
            name='phone'
            value={formik.values.phone}
            label="טלפון"
            multiline
            maxRows={4}
            onChange={formik.handleChange}
            fullWidth
            margin="normal"
            required
          />
          {formik.touched.phone && formik.errors.phone && (
            <div style={{ color: 'red', fontSize: '12px' }}>{formik.errors.phone}</div>
          )}

          <TextField
            sx={{ textAlign: 'right' }}
            id="numpassenger"
            name='numpassenger'
            value={formik.values.numpassenger}
            label="מספר נוסעים"
            multiline
            maxRows={4}
            onChange={formik.handleChange}
            fullWidth
            type="number"
            margin="normal"
            required
          />
          {formik.touched.numpassenger && formik.errors.numpassenger && (
            <div style={{ color: 'red', fontSize: '12px' }}>{formik.errors.numpassenger}</div>
          )}

          <ToggleButtonGroup
            value={formik.values.payment}
            exclusive
            onChange={(event, newAlignment) => formik.setFieldValue('payment', newAlignment)}
            aria-label="Medium sizes"
          >
            {paymentChildren}
          </ToggleButtonGroup>
          {formik.touched.payment && formik.errors.payment && (
            <div style={{ color: 'red', fontSize: '12px' }}>{formik.errors.payment}</div>
          )}

          <Button
            color="primary"
            startIcon={<SendIcon />}
            type="submit"
            size="large"
            sx={{ marginTop: '20px', backgroundColor: '#bdad73', color: "black" }}
          >.שלח
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Travel;

