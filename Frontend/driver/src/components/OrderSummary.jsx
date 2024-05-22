import React, { useState } from "react";
import { getShipById } from "../utils/shipUtil";
import { useSelector } from "react-redux";
import axios from 'axios';

 
const OrderSummary=(props)=>{

        return (
               <>
              <h1>סיכום הזמנה</h1><br/>
               <h4> יעד</h4>
               <p >{props.adressGounn}</p>
               <h4> מוצא</h4>
               <p >{props.adressExit}</p>
               <h4> מספר טלפון</h4>
               <p >{props.phone}</p>
               <h4> מספר נוסעים</h4>
               <p >{(props.numpassenger)}</p>
               <h4> תשלום</h4>
               <p >{ props.payment}</p>
               



              <button > </button>

              </>
   
        )
        }
    export default OrderSummary;
