
import React, { useState } from "react";
import { addUpcoming } from "../utils/upcomingUtil";
import { useSelector } from "react-redux";
import './css/openOrderSummaryInNewTab.css';
import Swal from 'sweetalert2';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  TextField, Button, Box, Container, ToggleButtonGroup, ToggleButton
} from '@mui/material';
import { Send as SendIcon, CreditCard as CreditCardIcon, MonetizationOn as MonetizationOnIcon, PermContactCalendarOutlined as PermContactCalendarOutlinedIcon } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";

const UpcomingTravel = () => {
  const navigate = useNavigate();
  const connectedUser = useSelector(state => state.user.connectedUser);
  const [payment, setPayment] = useState("");
  const [areaId, setAreaId] = useState("");

  const handleChangeArea = (event, newAreaId) => {
    setAreaId(newAreaId);
    formik.setFieldValue('areaId', newAreaId);
  };

  const formik = useFormik({
    initialValues: {
      areaId: '',
      adressExit: '',
      adressGounn: '',
      payment: '',
      phone: '',
      numpassenger: '',
      date: '',
      statusId: 8,
    },
    validationSchema: Yup.object({
      areaId: Yup.string().required('בחירת אזור היא שדה חובה'),
      adressExit: Yup.string().required('כתובת מוצא היא שדה חובה'),
      adressGounn: Yup.string().required('כתובת יעד היא שדה חובה'),
      phone: Yup.string().required('מספר טלפון הוא שדה חובה'),
      numpassenger: Yup.number().required('מספר נוסעים הוא שדה חובה').positive('מספר נוסעים חייב להיות חיובי').integer('מספר נוסעים חייב להיות שלם'),
      date: Yup.date().required('תאריך הוא שדה חובה'),
      payment: Yup.string().required('אופן תשלום הוא שדה חובה'),
    }),
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      const user = {
        ...values,
        userId: connectedUser.id,
        driverId: 3,
        time: "",
      };
      try {
        const res = await addUpcoming(user);
        if (res.status === 200) {
          Swal.fire({
            title: `<strong>פרטי הזמנה</strong>`,
            html: `
              <p><strong>שם לקוח:</strong> ${connectedUser.firstName}</p>
              <p><strong>טלפון:</strong> ${values.phone}</p>
              <p><strong>כתובת מוצא:</strong> ${values.adressExit}</p>
              <p><strong>כתובת יעד:</strong> ${values.adressGounn}</p>
              <p><strong>מספר נוסעים:</strong> ${values.numpassenger}</p>
              <p><strong>אופן תשלום:</strong> ${values.payment == 1 ? "מזומן" : "אשראי"}</p>
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
          setErrors({ submit: "אחד מהנתונים שהוקשו שגוי" });
        }
      } catch (error) {
        setErrors({ submit: "התרחשה שגיאה במהלך שליחת הטופס" });
      }
      setSubmitting(false);
    }
  });

  const handlePaymentChange = (event, newPayment) => {
    setPayment(newPayment);
    formik.setFieldValue('payment', newPayment);
  };

  const areaChildren = [
    <ToggleButton onClick={(e) => {setAreaId('1'); handleChangeArea(e, '1');}} value="1" key="1">
      דרום
    </ToggleButton>,
    <ToggleButton onClick={(e) => {setAreaId('2'); handleChangeArea(e, '2');}} value="2" key="2">
      צפון
    </ToggleButton>,
    <ToggleButton onClick={(e) =>{setAreaId('3'); handleChangeArea(e, '3');}} value="3" key="3">
      מרכז
    </ToggleButton>,
  ];

  return (
    <div className="upcomingTravel" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundRepeat: 'no-repeat', backgroundSize: "cover" }}>
      <Container component="main" maxWidth="200px">
        <Box sx={{ marginTop: 0, display: 'flex', flexDirection: 'column' }}>
          <Box component="form" onSubmit={formik.handleSubmit} sx={{ marginTop: 3, padding: '5px', borderRadius: '5px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', width: '500px', '& .MuiTextField-root': { width: '90%' }, backgroundColor: 'white', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', marginLeft: 'auto', marginRight: 'auto' }}>
            <PermContactCalendarOutlinedIcon sx={{ fontSize: '60px', margin: 0 }} />
            <h2 style={{ margin: '0px' }}>נסיעות עתידיות</h2>

            <ToggleButtonGroup value={areaId} exclusive 
            // onChange={handleChangeArea} 
            aria-label="Medium sizes" sx={{ marginTop: '7px' }}>
              {areaChildren}
            </ToggleButtonGroup>
            {formik.touched.areaId && formik.errors.areaId && (
              <div style={{ color: 'red', marginTop: '5px' }}>{formik.errors.areaId}</div>
            )}

            <TextField
              id="adressGounn"
              name="adressGounn"
              label="כתובת יעד"
              value={formik.values.adressGounn}
              onChange={formik.handleChange}
              error={formik.touched.adressGounn && Boolean(formik.errors.adressGounn)}
              helperText={formik.touched.adressGounn && formik.errors.adressGounn}
              fullWidth
              margin="normal"
            />
            <TextField
              id="adressExit"
              name="adressExit"
              label="כתובת מוצא"
              value={formik.values.adressExit}
              onChange={formik.handleChange}
              error={formik.touched.adressExit && Boolean(formik.errors.adressExit)}
              helperText={formik.touched.adressExit && formik.errors.adressExit}
              fullWidth
              margin="normal"
            />
            <TextField
              id="phone"
              name="phone"
              label="טלפון"
              value={formik.values.phone}
              onChange={formik.handleChange}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
              fullWidth
              margin="normal"
            />
            <TextField
              id="date"
              name="date"
              label="תאריך"
              type="date"
              value={formik.values.date}
              onChange={formik.handleChange}
              error={formik.touched.date && Boolean(formik.errors.date)}
              helperText={formik.touched.date && formik.errors.date}
              fullWidth
              margin="normal"
            />
            <TextField
              id="numpassenger"
              name="numpassenger"
              label="מספר נוסעים"
              type="number"
              value={formik.values.numpassenger}
              onChange={formik.handleChange}
              error={formik.touched.numpassenger && Boolean(formik.errors.numpassenger)}
              helperText={formik.touched.numpassenger && formik.errors.numpassenger}
              fullWidth
              margin="normal"
            />
            <ToggleButtonGroup value={payment} exclusive onChange={handlePaymentChange} aria-label="payment method">
              <ToggleButton value="2"><CreditCardIcon /></ToggleButton>
              <ToggleButton value="1"><MonetizationOnIcon /></ToggleButton>
            </ToggleButtonGroup>
            {formik.touched.payment && formik.errors.payment && (
              <div style={{ color: 'red', marginTop: '5px' }}>{formik.errors.payment}</div>
            )}

            <Button
              color="primary"
              startIcon={<SendIcon />}
              type="submit"
              size="large"
              sx={{ marginTop: '20px', backgroundColor: '#bdad73', color: "black" }}
              disabled={formik.isSubmitting}
            >
              .שלח
            </Button>
            {formik.errors.submit && <span>{formik.errors.submit}</span>}
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default UpcomingTravel;


