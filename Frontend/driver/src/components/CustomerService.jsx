import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { addContact } from "../utils/contactUtil";
import { useSelector } from "react-redux";
import SendIcon from '@mui/icons-material/Send';
import { TextField, Button, Box, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import Diversity2RoundedIcon from '@mui/icons-material/Diversity2Rounded';
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";

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

const CustomerService = () => {
  const connectedUser = useSelector(state => state.user.connectedUser);
  const navigate = useNavigate()


  const validationSchema = Yup.object({
    phon: Yup.string().matches(/^\d{10}$/, "יש להזין מספר טלפון חוקי.").required("יש להזין מספר טלפון."),
    name: Yup.string().required("יש להזין שם."),
    details: Yup.string().required("יש להזין הודעה."),
    
  });

  const formik = useFormik({
    initialValues: {
      phon: "",
      name: "",
      details: "",
     

    },
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      let user = {
        id: 0,
        phon: values.phon,
        name: values.name,
        details: values.details,
        status: "",
        date: new Date(),
        time: "",
        statusId: 5
      };

      await addContact(user).then(res => {
        setSubmitting(false);
        if (res.status === 200) {
          Swal.fire({
            title: `<strong>פרטי הזמנה</strong>`,
            html: `
              <p><strong>שם לקוח:</strong> ${connectedUser.firstName}</p>
              <p><strong>טלפון:</strong> ${values.phon}</p>
              <p><strong> פרטי הפניה:</strong> ${values.details}</p>
              
            `,
            icon: 'success',
            showCloseButton: true,
            focusConfirm: false,
            confirmButtonText: 'Close',
            didClose: () => {
              navigate('/');
            }
          })
        } else {
          formik.setFieldError("general", "אחד מהנתונים שהוקשו שגוי");
        }
      });
    }
  });

  return (
    <div className="costumerService" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: "cover",
    }}>
      <Container component="main" maxWidth="200px">
        <Box sx={{ marginTop: 3, display: 'flex', flexDirection: 'column' }}>
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
              backgroundColor: 'white',
              borderRadius: '5px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
            autoComplete="on"
          >
            <Diversity2RoundedIcon sx={{ fontSize: '60px', margin: 0 }} />
            <h2 style={{ margin: '0px' }}>צור קשר</h2>
            <h4>יש לכם שאלה לגבי הזמנה או נסיעה?</h4>
            <h4>זקוקים לתמיכה טכנית? עזרה בהצטרפות לשירות?</h4>
            <h4>השאירו פרטים / התקשרו 08-9947654</h4>

            <TextField
              sx={{ textAlign: 'right' }}
              id="name"
              name="name"
              value={formik.values.name}
              label="שם הלקוח"
              multiline
              maxRows={4}
              onChange={formik.handleChange}
              fullWidth
              margin="normal"
              required
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />

            <TextField
              id="phon"
              name="phon"
              value={formik.values.phon}
              label="טלפון"
              type="phon"
              onChange={formik.handleChange}
              fullWidth
              margin="normal"
              required
              error={formik.touched.phon && Boolean(formik.errors.phon)}
              helperText={formik.touched.phon && formik.errors.phon}
            />

            <TextField
              id="details"
              name="details"
              value={formik.values.details}
              label="הודעה"
              multiline
              maxRows={4}
              onChange={formik.handleChange}
              fullWidth
              margin="normal"
              required
              error={formik.touched.details && Boolean(formik.errors.details)}
              helperText={formik.touched.details && formik.errors.details}
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
              .שלח
            </Button>
            {formik.errors.general && (
              <div style={{ color: 'red', fontSize: '12px' }}>{formik.errors.general}</div>
            )}
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default CustomerService;
