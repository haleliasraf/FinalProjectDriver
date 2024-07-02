import { Dialog, DialogTitle, DialogContent, Popup, DialogActions, Button, TextField } from "@mui/material"
import { useState } from "react";
import { updateDriver } from "../utils/draiverUtil";

const EditDialog = (props) => {

  const { open, handleClose, driver, setEditDetails } = props;

  const [driverEdit, setDriverEdit] = useState(driver);
  const [isEdit, setIsEdit] = useState(false);

  const handleChangeDriver = (e) => {
    const { name, value } = e.target;
    console.log('!!', name, value);
    setDriverEdit({ ...driverEdit, [name]: value })
  }

  const onSave = () => {
    updateDriver(driverEdit).then(res => {
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
        value={driverEdit.name}
        label="שם הנהג"
        type="text"
        multiline
        maxRows={4}
        fullWidth
        margin="normal"
        required
        disabled={!isEdit}
        onChange={handleChangeDriver}
      />

      <TextField
        sx={{ textAlign: 'right' }}
        id="outlined-multiline-flexible"
        name='phon'
        value={driverEdit.phon}
        label="מספר טלפון"
        type="text"
        multiline
        maxRows={4}
        fullWidth
        margin="normal"
        required
        disabled={!isEdit}
        onChange={handleChangeDriver}
      />

      <TextField
        sx={{ textAlign: 'right' }}
        id="outlined-multiline-flexible"
        name='typeTaxis'
        value={driverEdit.typeTaxis}
        label="אזור נסיעה"
        type="text"
        multiline
        maxRows={4}
        fullWidth
        margin="normal"
        required
        disabled={!isEdit}
        onChange={handleChangeDriver}
      />

    </DialogContent>
    <DialogActions>

      <Button onClick={onSave} disabled={false}>עדכן </Button><br />
      <Button ></Button>
      <Button ></Button>
      <br />
    </DialogActions>
  </Dialog>

}
export default EditDialog