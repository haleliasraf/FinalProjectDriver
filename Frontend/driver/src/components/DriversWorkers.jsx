import React, { useState, useEffect } from 'react';
import { addDriver, deleteDriver, getDrivers } from '../utils/draiverUtil.js'
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Button, Dialog } from '@mui/material';
import EditDialog from './EditDialog.jsx'
import DriverRow from './DriverRow.jsx';
import AddDriver from './AddDriver.jsx';

const DriversWorkers = () => {
  const [alldraiver, setalldraiver] = useState([]);
  const connectedUser = useSelector(state => state.user.connectedUser);
  let user = { userid: connectedUser.id }
  const [adddriver, setAdddriver] = useState(false);

  useEffect(() => {
    getDrivers()
      .then(res => setalldraiver(res.data))
      .catch(error => console.error('Error:', error));

  }, []);

  return (<>

    <h1>עובדים</h1>
    <TableContainer component={Paper} sx={{ width: '80%', margin: 'auto' }}>
      <Table aria-label="collapsible table">
        <TableHead sx={{
          backgroundColor: '#eae2d8 !important'
          , color: 'white',
          direction: 'rtl',
          display: 'flex !important',

        }}>
          <TableRow sx={{ direction: 'rtl', display: 'flex !important' }}>

            <TableCell width={100}sx={{ textAlign: 'center !important' }}>שם נהג</TableCell>
            <TableCell  width={100}sx={{ textAlign: 'center !important' }}>מספר נהג</TableCell>
            <TableCell width={200} sx={{ textAlign: 'center !important' }}> טלפון</TableCell>
            <TableCell width={100} sx={{ textAlign: 'center !important' }}> אזור נסיעה</TableCell>

            <TableCell width={100}></TableCell>
            <TableCell width={100}></TableCell>
            <TableCell width={100}></TableCell>

            <TableCell width={80}>
              <Button onClick={() => { setAdddriver(true) }}>הוספת נהג</Button>
            </TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {alldraiver.map((driver) => (
            <DriverRow
              row={driver}
              alldraiver={alldraiver}
              setalldraiver={setalldraiver}
              key={driver.id}
            />
          ))}
        </TableBody>
      </Table>
      {adddriver && <AddDriver
       alldraiver={alldraiver}
       setalldraiver={setalldraiver}
        open={addDriver} setOpen={setAdddriver} ></AddDriver>}
    </TableContainer>


  </>)
}

export default DriversWorkers






