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

const Inquiries = () => {
    const [allinqurie, setallinqurie]= useState([]);
    const connectedUser = useSelector(state => state.user.connectedUser);
    // let user ={userid:connectedUser.id }

    useEffect(() => {
        getContacts()
        
          .then(res => setallinqurie(res.data))
          .catch(error => console.error('Error:', error));

        });


    return (<>

        <h1>inquiries</h1>

        <div>
      <p>  פניות במערכת:</p>
      {allinqurie.length > 0 ? (
        allinqurie.map((order, index) => (
          <div key={index} className="order-container">
            {/* הוסיפי כאן את התוכן שברצונך להציג לכל הזמנה */}
            <p>שם הלקוח: {order.name}</p>
            <p> מספר פניה: {order.id}</p>
           
            <p></p>
          </div>


        ))
      ) : (
        <p>אין נהגים להצגה</p>
      )}
        </div>
    </>)

}
export default Inquiries;