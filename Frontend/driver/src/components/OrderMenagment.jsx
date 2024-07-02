import React, { useState, useEffect } from 'react';
import { deleteShip, getShipByUserId } from '../utils/shipUtil.js'
import { deleteUpcoming, getUpcomingByUserId } from '../utils/upcomingUtil.js'
import { useSelector } from "react-redux";
import Swal from 'sweetalert2';
import DeleteIcon from '@mui/icons-material/Delete';
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
import { Button, Dialog } from '@mui/material';
import EditOrder from './EditOrder.jsx';
import { format } from 'date-fns';



const AllOrders = () => {
  const [orders, setOrders] = useState([]);
  const [ordersUpComing, setordersUpComing] = useState([]);
  const connectedUser = useSelector(state => state.user.connectedUser);
  let user = { userid: connectedUser.id }
  let phon = { userid: connectedUser.phon }


  useEffect(() => {
    // החליפי את 'נתיב-ל-API' עם הנתיב המתאים ל-API שלך
    getShipByUserId(user.userid)//צריכים להוסיף גם מנסיעות עתידיות הזמנות
      .then(res => setOrders(res.data))
      .catch(error => console.error('Error:', error));

      getUpcomingByUserId(user.userid)
      .then(res => setordersUpComing(res.data))
      .catch(error => console.error('Error:', error));

  }, []);


  function createData(orderType, orderNumber, phon, date, userName) {
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
    const [editDetails, setEditDetails] = useState(false);
    const [editorder, setEditorder] = useState(false);


    useEffect(() => {
      console.log('editDetails', editDetails);
    }, [editDetails])

    const handleClose = () => {
      setEditDetails(false);
    }

    const removeOrder = () => {
    
      Swal.fire({
        title: "?אתה בטוח",
        text: "אתה לא תוכל להחזיר את זה!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "כן, מחק את זה!"
      }).then((res) => {
        if (row.url) {
          deleteShip(row.id).then(res => {
            if (res.status === 200) {
              Swal.fire({
                title: "מחיקה",
                text: "המשלוח נמחק בהצלחה:)",
                icon: "success"
              });
              let _orders = [...orders];
              let index = _orders.findIndex(order => order.id == row.id);
              if (index >= 0) {
                _orders.splice(index, 1);
              }
              setOrders(_orders);
            }
          })
        } else {
          deleteUpcoming(row.id).then(res => {
            if (res.status === 200) {
              Swal.fire({
                title: "מחיקה",
                text: "ההזמנה נמחקה בהצלחה",
                icon: "success"
              });
              let _ordersUpComing = [...ordersUpComing];
              let index = _ordersUpComing.findIndex(ordersUpComing => ordersUpComing.id == row.id);
              if (index >= 0) {
                _ordersUpComing.splice(index, 1);
              }
              setordersUpComing(_ordersUpComing);
            }
          })
        }

      });
    }

    return (
      <React.Fragment>
        <div dir="rtl">
          <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
           
            <TableCell width={20} component="th" scope="row">
              {row.statusId === 3 ? " משלוח" : " נסיעה "}
            </TableCell>
            <TableCell width={35}>{row.id}</TableCell>
            <TableCell width={75} sx={{textAlign: 'center !important' }}>{format(row.date, 'yyyy-MM-dd')}</TableCell>
            <TableCell width={35} sx={{textAlign: 'center !important' }}>{row.statusId === 3 ? "ממתין לאיסוף" : " ההזמנה נקלטה" }</TableCell>
            <TableCell width={35} sx={{textAlign: 'center !important' }}><Button onClick={() => setEditDetails(true)} sx={{ color: '#919193' }}>עדכן</Button></TableCell>
            <TableCell width={35} sx={{textAlign: 'center !important' }}><Button onClick={removeOrder}><DeleteIcon sx={{ color: '#919193' }}>ביטול הזמנה</DeleteIcon></Button></TableCell>
            <TableCell width={35}>
              <IconButton
                aria-label="expand row"
                size="small"
                onClick={() => setOpen(!open)}
              >
                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </IconButton>
            </TableCell>
            <TableCell colSpan={14}></TableCell>
            {editDetails && <EditOrder
              open={editDetails}
              handleClose={handleClose}
              driver={row}
              setOpen={setOpen}
            ></EditOrder>
            }

          </TableRow>
          <TableRow>
            <TableCell sx={{ paddingBottom: 0, paddingTop: 0, textAlign: 'right !important' }} colSpan={17}>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <div sx={{ margin: 0, direction: 'rtl', dispaly: 'flex !important', justifyContent: 'right' }}>
                  <Typography variant="h6" gutterBottom component="div"
                    sx={{ dispaly: 'flex !important', justifyContent: 'right' }}>
                    פרטי הזמנה
                  </Typography>
                  <Table size="small" aria-label="order-details" sx={{ direction: 'rtl' }}>
                    <TableBody>
                      <TableRow>
                        <TableCell sx={{ textAlign: 'center !important' }}> שם לקוח</TableCell>
                        <TableCell sx={{ textAlign: 'center !important' }}>{row.name?? row.user.firstName}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell sx={{ textAlign: 'center !important' }}> טלפון</TableCell>
                        <TableCell sx={{ textAlign: 'center !important' }}>{row.user?.phone}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell sx={{ textAlign: 'center !important' }}> כתובת מוצא</TableCell>
                        <TableCell sx={{ textAlign: 'center !important' }}>{row.shipAdress?? row.adressExit}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </Collapse>
            </TableCell>
          </TableRow>
        </div>
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

  const [a, b] = partition(orders, n => n === new Date())

  return (
    <div>
      <p>הזמנות שנקלטו במערכת:</p>
      <TableContainer component={Paper} sx={{ width: '80%', margin: 'auto' }}>
        <Table aria-label="collapsible table">
          <TableHead
            sx={{
              backgroundColor: '#eae2d8 !important'
              , color: 'white',
              direction: 'rtl',
              display: 'flex !important',

            }}>
            <TableRow sx={{
              direction: 'rtl', display: 'flex !important', width: '100%'
            }}>
              
              <TableCell width={35} sx={{textAlign: 'center !important' }}> סוג הזמנה</TableCell>
              <TableCell width={35} sx={{textAlign: 'center !important' }}> מספר הזמנה</TableCell>
              <TableCell width={75} sx={{textAlign: 'center !important' }}>תאריך</TableCell>
              <TableCell width={35} sx={{textAlign: 'center !important' }}>סטטוס</TableCell>
              <TableCell colSpan={17}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders?.length ? (
              orders.map((order) => (
                <Row key={order.id} row={order} />
              ))

            ) :
              <TableRow sx={{
                direction: 'rtl', display: 'flex !important',
              }}>
                <TableCell colSpan="6" align="center">
                  <p style={{ margin: 0, textAlign: 'center' }}>אין הזמנות להצגה.</p>
                </TableCell>
              </TableRow>
            }
          </TableBody>
        </Table>
      </TableContainer>

      <TableContainer component={Paper} sx={{ width: '80%', margin: 'auto' }}>
        <Table aria-label="collapsible table">
          <TableHead sx={{
            backgroundColor: '#eae2d8 !important'
            , color: 'white',
            display: 'flex !important',
            direction: 'rtl'
          }}>
            <TableRow>
              <TableCell width={35} sx={{textAlign: 'center !important' }}>סוג הזמנה </TableCell>
              <TableCell width={35} sx={{textAlign: 'center !important' }}> מספר הזמנה</TableCell>
              <TableCell width={75} sx={{textAlign: 'center !important' }}>תאריך</TableCell>
              <TableCell width={35} sx={{textAlign: 'center !important' }}>סטטוס</TableCell>
              <TableCell colSpan={17}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ordersUpComing?.length
              ? ordersUpComing.map((ordersUpComing) => (
                <Row key={ordersUpComing.id} row={ordersUpComing} />
              ))
              : <p style={{ textAlign: 'center' }}>אין הזמנות להצגה.</p>
            }
          </TableBody>
        </Table>
      </TableContainer>



      <p></p>
    </div>
  );
};

export default AllOrders;

