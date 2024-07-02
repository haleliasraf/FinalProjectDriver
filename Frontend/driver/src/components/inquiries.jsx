import React, { useState, useEffect } from 'react';
import {getContacts} from '../utils/contactUtil.js'
import { useSelector } from "react-redux";

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
import { Link } from 'react-router-dom';


function createData(id, name, phon,details) {
  return {
     id,
      name,
    phon,
    details
    
  };
}


Row.propTypes = {
  row: PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phon: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  }).isRequired,
  };


function Row(props) {
  
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  
return (
  <React.Fragment>
  <TableRow sx={{ '& > *': { borderBottom: 'unset' }  ,direction: 'rtl', display: 'flex !important'}}>
  
    <TableCell width={75} sx={{textAlign: 'center !important' }}>{row.name}</TableCell>
    <TableCell width={75} sx={{textAlign: 'center !important' }}>{row.id}</TableCell>
    <TableCell width={75} sx={{textAlign: 'center !important' }}>{row.statusId===5?"נשלחה פניה" :row.statusId===6?"בטיפול ":" טופל"}</TableCell>
    <TableCell width={40}>
      <IconButton
        aria-label="expand row"
        size="small"
        onClick={() => {
          console.log(open);
          setOpen(!open)}}
      >
        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </IconButton>
    </TableCell>
  </TableRow>
  <TableRow>
    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6} sx={{direction: 'rtl', display: 'flex !important'}}>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Box sx={{ margin: 0 }}>
          <Typography variant="h6" gutterBottom component="div" sx={{direction: 'rtl', display: 'flex !important'}}>
            פרטי הפניה
          </Typography>
          <Table size="small" aria-label="Inquirie's-details">
            <TableBody>
            <TableRow>
                <TableCell sx={{textAlign:'center !important'}}> שם לקוח </TableCell>
                <TableCell sx={{textAlign:'center !important'}}>{row.name}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{textAlign:'center !important'}}> מספר טלפון</TableCell>
                <TableCell sx={{textAlign:'center !important'}}>{row.phon}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{textAlign:'center !important'}}>תוכן הפניה</TableCell>
                <TableCell sx={{textAlign:'center !important'}}>{row.details}</TableCell>
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

const Inquiries = () => {
  const [allinqurie, setallinqurie]= useState([]);
  const connectedUser = useSelector(state => state.user.connectedUser);
  // let user ={userid:connectedUser.id }

  useEffect(() => {
      getContacts()
        .then(res => setallinqurie(res.data))
        .catch(error => console.error('Error:', error));

  },[]); 

    return (<>
    
    <h1>פניות לקוח</h1>
        <TableContainer component={Paper} sx={{width: '80%', margin:'auto'}}>
      <Table aria-label="collapsible table">
        <TableHead  sx={{
              backgroundColor: '#eae2d8 !important',
              color: 'white',
              direction: 'rtl', 
              display: 'flex !important'
        }}>
          <TableRow>
            <TableCell width={75} sx={{textAlign: 'center !important' }}>שם לקוח</TableCell>
            <TableCell width={75} sx={{textAlign: 'center !important' }}>מספר פניה</TableCell>
            <TableCell width={75} sx={{textAlign: 'center !important' }}>סטטוס פניה</TableCell>
            <TableCell width={40} />

            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allinqurie.map((allinqurie) => (
            <Row key={allinqurie.id} row={allinqurie} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>        
</>)

}
export default Inquiries;
 


