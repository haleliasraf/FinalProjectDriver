import { Dialog, DialogTitle, DialogContent, Popup, DialogActions, Button, TextField } from "@mui/material"
import { useState } from "react";
import { addDriver } from "../utils/draiverUtil";
import { stubFalse } from "lodash";
import Swal from "sweetalert2";

const AddDriver = (props) => {

    const { open, setOpen, alldraiver, setalldraiver } = props;

    const [newDriver, setNewDriver] = useState({})

    const handleChangeDriver = (e) => {
        const { name, value } = e.target;
        setNewDriver({ ...newDriver, [name]: value })
    }

    const onSave = () => {
        addDriver(newDriver).then(res => {
            if (res.status == 200) {
                setOpen(false)
                setalldraiver([...alldraiver, res.data])
                Swal.fire({
                    title: "נוסף!",
                    text: "הוספת הנהג הצליחה!",
                    icon: "success"
                });
            }
        })
            .catch(err => console.log('error', err))
    }

    return <Dialog
        open={open}
        // TransitionComponent={Transition}
        keepMounted
        onClose={() => setOpen(false)}
        aria-describedby="alert-dialog-slide-description"
    >
        <DialogTitle> הוסף נהג</DialogTitle>
        <DialogContent>
            <TextField
                sx={{ textAlign: 'right' }}
                id="outlined-multiline-flexible"
                name='name'
                value={newDriver.name}
                label="שם הנהג"
                type="text"
                multiline
                maxRows={4}
                fullWidth
                margin="normal"
                required
                onChange={handleChangeDriver}
            />

            <TextField
                sx={{ textAlign: 'right' }}
                id="outlined-multiline-flexible"
                name='phon'
                value={newDriver.phon}
                label="מספר טלפון"
                type="text"
                multiline
                maxRows={4}
                fullWidth
                margin="normal"
                required
                onChange={handleChangeDriver}
            />

            <TextField
                sx={{ textAlign: 'right' }}
                id="outlined-multiline-flexible"
                name='typeTaxis'
                value={newDriver.typeTaxis}
                label="אזור נסיעה"
                type="text"
                multiline
                maxRows={4}
                fullWidth
                margin="normal"
                required
                onChange={handleChangeDriver}
            />

        </DialogContent>
        <DialogActions>

            <Button onClick={onSave}>הוסף </Button><br />
            <Button ></Button>
            <Button ></Button>
            <br />
        </DialogActions>
    </Dialog>

}
export default AddDriver