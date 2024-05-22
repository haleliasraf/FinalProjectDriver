import React, { useState, useEffect } from 'react';
import {getShipByUserId} from '../utils/shipUtil.js'
import {getUpcomingById} from '../utils/upcomingUtil.js'
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
import { partition } from 'lodash';

const AllOrders = () => {
  const [orders, setOrders] = useState([]);
  const [ordersUpComing, setordersUpComing] = useState([]);
  const connectedUser = useSelector(state => state.user.connectedUser);
  let user ={userid:connectedUser.id }
  let phon={userid:connectedUser.phon}
  useEffect(() => {
    // החליפי את 'נתיב-ל-API' עם הנתיב המתאים ל-API שלך
    getShipByUserId(user.userid)//צריכים להוסיף גם מנסיעות עתידיות הזמנות

      //.then(response => response.json())//איך אני קוראת מJESONZ
      .then(res => setOrders(res.data))
      .catch(error => console.error('Error:', error));

    getUpcomingById(user.userid)
    .then(res => setordersUpComing(res.data))
    .catch(error => console.error('Error:', error));

  }, []);

  function createData(orderType, orderNumber,phon, date, userName) {
    return {
      orderType,
      orderNumber,
      date,
      phon,
      userName
    };
  }
  
  // Row component
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
          <TableCell component="th" scope="row">
            {'משלוח'}
          </TableCell>
          <TableCell>{row.id}</TableCell>
          <TableCell>{row.date}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 0 }}>
                <Typography variant="h6" gutterBottom component="div">
                  Order Details
                </Typography>
                <Table size="small" aria-label="order-details">
                  <TableBody>
                  <TableRow>
                      <TableCell>User Name</TableCell>
                      <TableCell>{row.name}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Phone Number</TableCell>
                      <TableCell>{row.user?.phone}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>User adress</TableCell>
                      <TableCell>{row.shipAdress}</TableCell>
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
      orderType: PropTypes.string.isRequired,
      orderNumber: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      phoneNumber: PropTypes.string.isRequired,
      userName: PropTypes.string.isRequired,
    }).isRequired,
  };
  
  const [a, b] = partition(orders, n => n  === new Date())

  return (
    <div>
      <p>הזמנות שנקלטו במערכת:</p>

      <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead  sx={{backgroundColor: '#eae2d8 !important'
              ,color: 'white',
        }}>
          <TableRow>
            <TableCell />
            <TableCell>Order Type</TableCell>
            <TableCell>Order Number</TableCell>
            <TableCell>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <Row key={order.id} row={order} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead  sx={{backgroundColor: '#eae2d8 !important'
              ,color: 'white',
        }}>
          <TableRow>
            <TableCell />
            <TableCell>Order Type</TableCell>
            <TableCell>Order Number</TableCell>
            <TableCell>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ordersUpComing.map((order) => (
            <Row key={order.id} row={order} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>

      <p>נסיעות עתידיות:</p> 
      {ordersUpComing.length > 0 
      ? ( ordersUpComing.map((order, index) => (
          <div key={index} className="order-container">
            {/* הוסיפי כאן את התוכן שברצונך להציג לכל הזמנה */}
            <p>מספר הזמנה: {order.id}</p>
            <p>שם הלקוח: {order.name}</p>
            <p></p>
          </div>


        ))
      ) 
      : (<p>אין הזמנות להצגה.</p> )}
      <p></p> 
    </div>
  );
};

export default AllOrders;

// {orders.length > 0 ? (
//   orders.map((order, index) => (
//     <div key={index} className="order-container">
//       {/* הוסיפי כאן את התוכן שברצונך להציג לכל הזמנה */}
//       <p>מספר הזמנה: {order.id}</p>
//       <p>שם הלקוח: {order.name}</p>
//       <p></p>
//     </div>


//   ))
// ) : (
//   <p>אין הזמנות להצגה.</p>
// )}