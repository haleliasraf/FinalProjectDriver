import React, { useState, useEffect } from 'react';
import {getDrivers} from '../utils/draiverUtil.js'
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
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

function createData( id, name, phon, typeTaxis) {
  return {
      id,
      name,
    phon,
    typeTaxis
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
 
return (
<React.Fragment>
<TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
  <TableCell>
    <IconButton
      aria-label="expand row"
      size="small"
      onClick={() => setOpen(!open)}
    >
      {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
    </IconButton>
  </TableCell>
  <TableCell>{row.name}</TableCell>
  <TableCell>{row.id}</TableCell>
</TableRow>
<TableRow>
  <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
    <Collapse in={open} timeout="auto" unmountOnExit>
      <Box sx={{ margin: 0 }}>
        <Typography variant="h6" gutterBottom component="div">
          draiver Details
        </Typography>
        <Table size="small" aria-label="draiver-details">
          <TableBody>
          <TableRow>
              <TableCell> שם נהג</TableCell>
              <TableCell>{row.name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell> מספר טלפון</TableCell>
              <TableCell>{row.phon}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>אזור נסיעה </TableCell>
              <TableCell>{row.typeTaxis}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
    </Collapse>
  </TableCell>
</TableRow>
</React.Fragment>
);
}

Row.propTypes = {
  row: PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phon: PropTypes.string.isRequired,
  typeTaxis: PropTypes.string.isRequired,
  }).isRequired,
  };

const DriversWorkers = () => {
    const [alldraiver, setalldraiver]= useState([]);
    const connectedUser = useSelector(state => state.user.connectedUser);
     let user ={userid:connectedUser.id }

    useEffect(() => {
        getDrivers()
        
          .then(res => setalldraiver(res.data))
          .catch(error => console.error('Error:', error));

    },[]);
    
    return (<>

        <h1>Workers</h1>
        <TableContainer component={Paper} sx={{width: '80%', margin:'auto'}}>
      <Table aria-label="collapsible table">
        <TableHead  sx={{backgroundColor: '#eae2d8 !important'
              ,color: 'white',
        }}>
          <TableRow>
            <TableCell />
            <TableCell>שם נהג</TableCell>
            <TableCell>מספר נהג</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {alldraiver.map((alldraiver) => (
            <Row key={alldraiver.id} row={alldraiver} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    <Link to="/DriversWorkers">הרשם</Link>
        
</>)
}  
export default DriversWorkers





       
   