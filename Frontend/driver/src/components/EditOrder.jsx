import { Dialog, DialogTitle, DialogContent, Popup, DialogActions, Button, TextField } from "@mui/material"
import { useState } from "react";
import { updateUpcoming } from "../utils/upcomingUtil";

const EditOrder = (props) => {

    const { open, handleClose, driver, setEditDetails } = props;
  
    const [orderEdit, setorderEdit] = useState({...driver, phone: driver.user?.phone});
    const [isEdit, setIsEdit] = useState(false);
  
    const handleChangeOrder = (e) => {
      const { name, value } = e.target;
      console.log('!!', name, value);
      setorderEdit({ ...orderEdit, [name]: value })
    }
  
    const onSave = () => {
        updateUpcoming(orderEdit).then(res => {
        if (res.status == 200) {
          setEditDetails(false)
        }
      })
      .catch(err => console.log('error' , err))
    }
  
    return <Dialog
      open={open}
      // TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>עדכן פרטים</DialogTitle>
      <DialogContent>
        <Button onClick={() => setIsEdit(!isEdit)}>עריכה✏️</Button>
        <TextField
          sx={{ textAlign: 'right' }}
          id="outlined-multiline-flexible"
          name='name'
          value={orderEdit.firstname ?? orderEdit.name}
          label="שם לקוח"
          type="text"
          multiline
          maxRows={4}
          fullWidth
          margin="normal"
          required
          disabled={!isEdit}
          onChange={handleChangeOrder}
        />
  
  <TextField
          sx={{ textAlign: 'right' }}
          id="outlined-multiline-flexible"
          name='phon'
          value={orderEdit.phon ?? orderEdit.phone}
          label="טלפון"
          type="text"
          multiline
          maxRows={4}
          fullWidth
          margin="normal"
          required
          disabled={!isEdit}
          onChange={handleChangeOrder}
        />
        <TextField
          sx={{ textAlign: 'right' }}
          id="outlined-multiline-flexible"
          name='date'
          value={orderEdit.date}
          label="תאריך "
          type="text"
          multiline
          maxRows={4}
          fullWidth
          margin="normal"
          required
          disabled={!isEdit}
          onChange={handleChangeOrder}
        />
       <TextField
          sx={{ textAlign: 'right' }}
          id="outlined-multiline-flexible"
          name='adressExit'
          value={orderEdit.adressExit ?? orderEdit.shipAdress}
          label=" מוצא"
          type="text"
          multiline
          maxRows={4}
          fullWidth
          margin="normal"
          required
          disabled={!isEdit}
          onChange={handleChangeOrder}
        />
        <TextField
          sx={{ textAlign: 'right' }}
          id="outlined-multiline-flexible"
          name='adressGounn'
          value={orderEdit.adressGounn ??  orderEdit.shipSdress}
          label=" יעד"
          type="text"
          multiline
          maxRows={4}
          fullWidth
          margin="normal"
          required
          disabled={!isEdit}
          onChange={handleChangeOrder}
        />
     { orderEdit.payment &&(
  <TextField
   
          sx={{ textAlign: 'right' }}
          id="outlined-multiline-flexible"
          name='payment'
          value={orderEdit.payment}
          label=" תשלום"
          type="text"
          multiline
          maxRows={4}
          fullWidth
          margin="normal"
          required
          disabled={!isEdit}
          onChange={handleChangeOrder}
        />
 )}
    { orderEdit.numpassenger && ( 
<TextField
          sx={{ textAlign: 'right' }}
          id="outlined-multiline-flexible"
          name='numpassenger'
          value={orderEdit.numpassenger}
          label="מספר נוסעים"
          type="text"
          multiline
          maxRows={4}
          fullWidth
          margin="normal"
          required
          disabled={!isEdit}
          onChange={handleChangeOrder}
        />
)}
      </DialogContent>
      <DialogActions>
  
        <Button onClick={onSave} disabled={false}>עדכן </Button><br />
        <Button ></Button>
        <Button ></Button>
        <br />
      </DialogActions>
    </Dialog>
  
  }
  export default EditOrder