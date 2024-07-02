// import React, { useState } from "react";
// import { addShip } from "../utils/shipUtil";
// import { useSelector } from "react-redux"

// import '../index.css';
// import { TextField, Button, Box, IconButton } from '@mui/material';
// import InputAdornment from '@mui/material/InputAdornment';
// import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import FormControl from '@mui/material/FormControl';
// import { Container } from '@mui/material';
// import SendIcon from '@mui/icons-material/Send';
// import { styled } from '@mui/material/styles';
// import CloudUploadIcon from '@mui/icons-material/CloudUpload';
// import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
// import { uploadImage } from '../utils/imageUtil';
// import Swal from 'sweetalert2';
// import { useNavigate } from "react-router-dom";

// const VisuallyHiddenInput = styled('input')({
//   clip: 'rect(0 0 0 0)',
//   clipPath: 'inset(50%)',
//   height: 1,
//   overflow: 'hidden',
//   position: 'absolute',
//   bottom: 0,
//   left: 0,
//   whiteSpace: 'nowrap',
//   width: 1,
// });

// const Deliveries = () => {
//   const [shipAdress, setshipAdress] = useState("");
//   const [name, setname] = useState("");
//   const [data, setdata] = useState("");
//   const [error, seterror] = useState("");
//   const [shipSdress, setshipSdress] = useState("");
//   const [image, setImage] = useState(null);
//   const navigate = useNavigate()

//   const connectedUser = useSelector(state => state.user.connectedUser);

//   const handleUploadFile = (e) => {
//     setImage(e.target.files[0]);
//   }

//   const handleClickDeliver = async (e) => {
//     e.preventDefault();
//     let deliver = {
//       shipAdress,
//       userId: connectedUser.id,
//       url: "string",
//       name,
//       date: new Date(),
//       statusId: 3,
//       driverId: 3,
//       shipSdress,
//       phon: connectedUser.phon,
//       error,

//     }
//     const file = new FormData();
//     file.append("image", image);
//     await uploadImage(file).then((res) => {
//       if(res.status == 200) {
//         deliver.url = res.data;
//         addShip(deliver).then(res => {
//           if (res.status === 200) {
//             seterror("");
//             // alert("הזמנתך נקלטה בהצלחה ");
    
//             Swal.fire({
//               title: `<strong> פרטי הזמנה</strong>`,
//               html: `
//                   // <p><strong>שם לקוח:</strong> ${connectedUser.firstName}</p>
//                   <p><strong> טלפון:</strong> ${connectedUser.phone}</p>
//                   <p><strong>כתובת מוצא:</strong> ${shipSdress}</p>
//                   <p><strong>כתובת מוצא:</strong> ${shipAdress}</p>
//                   <p><strong>תאריך:</strong> ${data}</p>
    
//               `,
//               icon: 'success',
//               showCloseButton: true,
//               focusConfirm: false,
//               confirmButtonText: 'Close',
//               didClose: () => {
//                 navigate('/');
//             }
//             });
//           }
//           else {
//             Swal.fire({
//               icon: "error",
//               title: "שגיאה",
//               text: "אחד מהנתונים שהוקשו שגוי!",
//             });          }
//         });
//       }
//     })
//   }

//   return (
//     <>
//       <Container
//       className="deliver"
//         sx={{
//           marginTop: '0px',
//           backgroundSize: 'cover',
//           // height: '86vh',
//           // // overflow: 'hidden' ,  
//           // width: '100vw', // Optional: Ensures the image covers the container
//         }}
//         component="main" maxWidth="200px">
//         <Box
//           sx={{
//             // marginTop: 8,
//             display: 'flex',
//             flexDirection: 'column'
//           }}
//         >
//           <Box
//             component="form"
//             sx={{
//               // border: '4px solid #000000',
//               // borderImage: 'linear-gradient(to right ,#b29685, #c68a4f)', // מעבר צבעים משחור לזהב
//               // borderImageSlice: 3,
//               borderRadius: '10px',
//               display: 'flex',
//               flexDirection: 'column',
//               justifyContent: 'space-between',
//               alignItems: 'center',
//               width: '500px',
//               '& .MuiTextField-root': { width: '90%' },
//               backgroundColor: '#FAF9F1',
//               borderRadius: '5px',
//               boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//               marginLeft: 'auto',
//               marginRight: 'auto',
//               marginTop: '30px',
//               marginBottom:'8px'
//             }}
//             // noValidate
//             // onSubmit={handleSubmit}
//             autoComplete="on"
//           >
//             {/* <div> */}
//             <div>
//               <DeliveryDiningIcon sx={{ fontSize: '60px', mergin: 0 ,backgroundColor:'linear-gradient(to right ,#b29685, #c68a4f)'}}></DeliveryDiningIcon>
//               <h2 style={{ margin: '0px' }} >משלוחים</h2>
//             </div>
//             <TextField
//               sx={{ textAlign: 'right' }}
//               id="outlined-multiline-flexible"
//               name='name'
//               value={name}
//               label=" שם לקוח"
//               multiline
//               maxRows={4}
//               onChange={(e) => setname(e.target.value)}
//               fullWidth
//               margin="normal"
//               required
//             />
//             <TextField
//               id="outlined-multiline-flexible"
//               name='shipAdress'
//               value={shipAdress}
//               label="כתובת לאיסוף"
//               multiline
//               maxRows={4}
//               onChange={(e) => setshipAdress(e.target.value)}
//               required
//               fullWidth
//               margin="normal"
//             />

//             <TextField
//               id="outlined-multiline-flexible"
//               name='shiptarget'
//               value={shipSdress}
//               label="כתובת יעד"
//               multiline
//               maxRows={4}
//               onChange={(e) => setshipSdress(e.target.value)}
//               required
//               fullWidth
//               margin="normal"
//             />

//             <TextField
//               id="outlined-multiline-flexible"
//               name='date'
//               value={data}
//               label="תאריך"
//               type='date'
//               onChange={(e) => setdata(e.target.value)}
//               required
//               fullWidth
//               margin="normal"
//             // inputProps={{
//             //   pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$",
//             // }}

//             />
//             {/* <div fullWidth style={{border:'1px solid gray', borderRadius:'3px'}}> */}
//             <Button
//               component="label"
//               role={undefined}
//               variant="contained"
//               tabIndex={-1}
//               startIcon={<CloudUploadIcon />}
//               onChange={handleUploadFile}
//               sx={{ marginTop: '20px', backgroundColor: '#bdad73', color: "black" }}

//             >
//               צירוף קבלה
//               <VisuallyHiddenInput type="file" accept="image/*" required />
//             </Button>
//             {image != null ? <span>{image.name}</span>: <span>לא צורף קובץ</span>}
//             {/* </div> */}
//             {/* <TextField
//                   id="outlined-multiline-flexible"
//                   name='image'
//                   accept="image/*"
//                   label="צרוף קבלה"
//                   type='file'       
//                   required
//                   fullWidth
//                   margin="normal"
//                 // inputProps={{
//                 //   pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$",
//                 // }}

//                 /> */}
//             <Button
//               variant="contained"
//               color="primary"
//               startIcon={<SendIcon />}
//               type="submit"
//               size="large"
//               sx={{ marginTop: '20px', backgroundColor: '#bdad73', color: "black" }}
//               onClick={handleClickDeliver}
//             >
//               שלח משלוח
//             </Button>
//             <span>{error}</span>
//           </Box>
//         </Box>

//       </Container>

//     </>



//   )
// }

// export default Deliveries



// // <div>

// // <lable>כתובת לאיסוף</lable>
// // <input type="string" value={shipAdress} onChange={(e) => setshipAdress(e.target.value)}></input><br/>

// // {/* defualt - השם של הuser */}

// // <lable>שם הלקוח</lable>

// // <input type="string" value={name} onChange={(e) => setname(e.target.value)}></input><br/>

// // <lable>כתובת יעד</lable>
// // <input type="string" value={shipSdress} onChange={(e) => setshipSdress(e.target.value)}></input><br/>

// // <label>תאריך</label>
// // <input type="date" value={data} onChange={(e) => setdata(e.target.value) }/><br/>


// // </div>

// // <div>
// // <lable>העלת קבלת הזמנה</lable>
// // <input type="file" accept="image/*"/><br/>
// // </div>
// // <div>
// // <lable>חשבונית דרייבר בע"מ</lable><br/>
// // <lable>לכבוד</lable>
// // <input></input><br/>

import React, { useState } from "react";
import { Formik, Form, Field } from 'formik';
import { addShip } from "../utils/shipUtil";
import { useSelector } from "react-redux";
import * as Yup from 'yup';
import '../index.css';
import { TextField, Button, Box, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import { uploadImage } from '../utils/imageUtil';
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import { Container } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
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

const validationSchema = Yup.object().shape({
  name: Yup.string().required('שם לקוח הוא שדה חובה'),
  shipAdress: Yup.string().required('כתובת לאיסוף היא שדה חובה'),
  shipSdress: Yup.string().required('כתובת יעד היא שדה חובה'),
  date: Yup.date().required('תאריך הוא שדה חובה'),
  image: Yup.mixed().required('צירוף קבלה הוא שדה חובה'),
});

const Deliveries = () => {
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const connectedUser = useSelector(state => state.user.connectedUser);

  const handleUploadFile = (e, setFieldValue) => {
    const file = e.target.files[0];
    setImage(file);
    setFieldValue('image', file);
  };

  const handleClickDeliver = async (values) => {
    let deliver = {
      shipAdress: values.shipAdress,
      userId: connectedUser.id,
      url: "string",
      name: values.name,
      date: values.date,
      statusId: 3,
      driverId: 3,
      shipSdress: values.shipSdress,
      phon: connectedUser.phon,
    };

    const file = new FormData();
    file.append("image", image);
    await uploadImage(file).then((res) => {
      if(res.status == 200) {
        deliver.url = res.data;
        addShip(deliver).then(res => {
          if (res.status === 200) {
            Swal.fire({
              title: `<strong> פרטי הזמנה</strong>`,
              html: `
                <p><strong>שם לקוח:</strong> ${connectedUser.firstName}</p>
                <p><strong> טלפון:</strong> ${connectedUser.phone}</p>
                <p><strong>כתובת מוצא:</strong> ${values.shipSdress}</p>
                <p><strong>כתובת יעד:</strong> ${values.shipAdress}</p>
                <p><strong>תאריך:</strong> ${values.date}</p>
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
              icon: "error",
              title: "שגיאה",
              text: "אחד מהנתונים שהוקשו שגוי!",
            });
          }
        });
      }
    });
  };

  return (
    <Formik
      initialValues={{
        name: '',
        shipAdress: '',
        shipSdress: '',
        date: '',
        image: null,
      }}
      validationSchema={validationSchema}
      onSubmit={handleClickDeliver}
    >
      {({ setFieldValue, errors, touched }) => (
        <Form>
          <Container className="deliver" component="main" maxWidth="200px">
            <Box sx={{ display: 'flex', flexDirection: 'column' ,padding:'5px' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', width: '500px', backgroundColor: '#FAF9F1', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', marginLeft: 'auto', marginRight: 'auto', marginTop: '30px', marginBottom:'8px',    padding: '15px' }}>
                <div>
                  <DeliveryDiningIcon sx={{ fontSize: '60px', margin: 0 }}></DeliveryDiningIcon>
                  <h2 style={{ margin: '0px' }}>משלוחים</h2>
                </div>
                <Field name="name">
                  {({ field }) => (
                    <TextField {...field} label=" שם לקוח" fullWidth margin="normal" error={touched.name && !!errors.name} helperText={touched.name && errors.name} />
                  )}
                </Field>
                <Field name="shipAdress">
                  {({ field }) => (
                    <TextField {...field} label="כתובת לאיסוף" fullWidth margin="normal" error={touched.shipAdress && !!errors.shipAdress} helperText={touched.shipAdress && errors.shipAdress} />
                  )}
                </Field>
                <Field name="shipSdress">
                  {({ field }) => (
                    <TextField {...field} label="כתובת יעד" fullWidth margin="normal" error={touched.shipSdress && !!errors.shipSdress} helperText={touched.shipSdress && errors.shipSdress} />
                  )}
                </Field>
                <Field name="date">
                  {({ field }) => (
                    <TextField {...field} type="date" label="תאריך" fullWidth margin="normal" error={touched.date && !!errors.date} helperText={touched.date && errors.date} InputLabelProps={{ shrink: true }} />
                  )}
                </Field>
                <Button component="label" variant="contained" startIcon={<CloudUploadIcon />} sx={{ marginTop: '20px', backgroundColor: '#bdad73', color: "black" }}>
                  .צירוף קבלה
                  <VisuallyHiddenInput type="file" accept="image/*" onChange={(e) => handleUploadFile(e, setFieldValue)} />
                </Button>
                {touched.image && errors.image ? <div>{errors.image}</div> : null}
                {image != null ? <span>{image.name}</span>: <span>לא צורף קובץ</span>}
                <Button variant="contained" color="primary" startIcon={<SendIcon />} type="submit" size="large" sx={{ marginTop: '20px', backgroundColor: '#bdad73', color: "black" }}>
                  .שלח 
                </Button>
              </Box>
            </Box>
          </Container>
        </Form>
      )}
    </Formik>
  );
};

export default Deliveries;
