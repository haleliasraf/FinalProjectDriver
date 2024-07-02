import { Box, Button, Table, Collapse, IconButton, TableBody, TableCell, TableRow, Typography } from "@mui/material";
import EditDialog from "./EditDialog";
import Swal from "sweetalert2";
import { deleteDriver } from "../utils/draiverUtil";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import DeleteIcon from '@mui/icons-material/Delete';

import React, { useState } from "react";
import PropTypes from 'prop-types';

// Row.propTypes = {
//     row: PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       phon: PropTypes.string.isRequired,
//       typeTaxis: PropTypes.string.isRequired,
//     }).isRequired,
//   };

const DriverRow = (props) => {
    const { row, alldraiver, setalldraiver } = props;
    const [open, setOpen] = React.useState(false);
    const [editDetails, setEditDetails] = useState(false);

    const handleClose = () => {
        setEditDetails(false);
    }

    const onDeleteDriver = () => {
        Swal.fire({
            title: "?אתה בטוח",
            text: "אתה לא תוכל להחזיר את זה!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "כן ,אני רוצה!"
        }).then((res) => {
            if (res.isConfirmed) {
                deleteDriver(row.id).then(res => {
                    if (res.status == 200) {
                        setalldraiver(alldraiver.filter(driver => driver.id !== row.id))
                        Swal.fire({
                            title: "נמחק!",
                            text: "מחיקת הנהג הצליחה!.",
                            icon: "success"
                        });
                    }

                })
            }

        });
    }
    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' }, direction: 'rtl', display: 'flex !important' }}>


                <TableCell width={100} sx={{ textAlign: 'center !important' }}>{row.name}</TableCell>
                <TableCell width={100} sx={{ textAlign: 'center !important' }}>{row.id}</TableCell>
                <TableCell width={200} sx={{ textAlign: 'center !important' }}>{row.phon}</TableCell>
                <TableCell width={100}sx={{ textAlign: 'center !important' }}>{row.typeTaxis}</TableCell>

                <TableCell width={100} sx={{ textAlign: 'center !important' }}><Button onClick={() => { setEditDetails(true); }}>עדכן</Button></TableCell>

                <TableCell width={100}><Button onClick={onDeleteDriver}> <DeleteIcon sx={{ color: '#919193' }}> </DeleteIcon> </Button></TableCell>
<TableCell width={100}></TableCell>
<TableCell width={100}></TableCell>

                {editDetails &&
                    <EditDialog
                        open={editDetails}
                        handleClose={handleClose}
                        driver={row}
                        setEditDetails={setEditDetails}
                    ></EditDialog>
                }

            </TableRow>
            {/* <TableRow sx={{ direction: 'rtl', display: 'flex !important' }}>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0, direction: 'rtl', display: 'flex !important' }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 0 }}>
                            <Typography variant="h6" gutterBottom component="div" sx={{ direction: 'rtl', display: 'flex !important' }}>
                                פרטי נהג
                            </Typography>
                            <Table size="small" aria-label="draiver-details" sx={{ direction: 'rtl', display: 'flex !important' }}>
                                <TableBody >
                                    <TableRow>
                                        <TableCell width={35} sx={{ textAlign: 'center !important' }}>{row.name}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell width={35} sx={{ textAlign: 'center !important' }}> מספר טלפון</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell sx={{ textAlign: 'center !important' }}>אזור נסיעה </TableCell>

                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow> */}
        </React.Fragment>
    );
}

export default DriverRow
