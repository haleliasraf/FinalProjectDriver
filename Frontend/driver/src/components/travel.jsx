import React, { useState } from "react";
import { addUpcoming } from "../utils/upcomingUtil";
import { useSelector } from "react-redux";
 
import { TextField, Button, Box, IconButton } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FormControl from '@mui/material/FormControl';
import { Container } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';


const Travel=()=>{
    const[areaId,setareaId]= useState("")
    const[adressExit,setadressExit]= useState("")
    const[adressGounn,setadressGounn]= useState("")
    const[payment,setpayment]= useState("")
    const[phone,setphone]= useState("")
    const[numpassenger,setnumpassenger]= useState("")
    const [error, setError] = useState("");
    const connectedUser = useSelector(state => state.user.connectedUser);
    const [orderPlaced, setOrderPlaced] = useState(false);
    const [orderData, setOrderData] = useState({});

    const handleClickTravel = async() => {
        let user = {
            userId: connectedUser.id,
            areaId: areaId,
            adressExit:adressExit,
            adressGounn:adressGounn,
            payment:payment,
            error,
            driverId: 3,
            time: "",
            date: new Date(),
            numpassenger,
            phone
        }
        await addUpcoming(user).then(res => {
            if(res.status === 200){
                setError("");
                alert("הזמנתך נקלטה בהצלחה ");
                setOrderData(user); // שמירת הנתונים של ההזמנה
                openOrderSummaryInNewTab(user); // פתיחת סיכום ההזמנה בכרטיסיה חדשה
            }
            else{
                setError("אחד מהנתונים שהוקשו שגוי");
            }
        });
    }

    
  const openOrderSummaryInNewTab = (orderData) => {
    const newWindow = window.open('', '_blank');
    
    newWindow.document.write(`<h1>סיכום הזמנה</h1>`);
    // newWindow.document.write(`<p>יעד: ${orderData.Area.areaId.description}</p>`);
    newWindow.document.write(`<p>יעד: ${orderData.adressGounn}</p>`);
    newWindow.document.write(`<p>מוצא: ${orderData.adressExit}</p>`);
    newWindow.document.write(`<p>מספר טלפון: ${orderData.phone}</p>`);
    newWindow.document.write(`<p>מספר הנוסעים: ${orderData.numpassenger}</p>`);
    newWindow.document.write(`<p>תשלום: ${orderData.payment}</p>`);

    // ...הוספת כל הנתונים הרלוונטיים...
    newWindow.document.close();
  }
        return (
            <>
              <h1>כאן ועכשיו</h1><br/>
              <button onClick={() => setareaId(1)}>דרום</button>
              <button onClick={() => setareaId(2)}>מרכז</button>
              <button onClick={() => setareaId(3)}>צפון</button><br/>

              <label>כתובת מוצא</label>
              <input type="adressExit" value={adressExit} onChange={(e) => setadressExit(e.target.value)}/><br/>
              <label>כתובת יעד</label>
              <input type="adressGounn" value={adressGounn} onChange={(e) => setadressGounn(e.target.value)}/><br/><br/>
              <label> מספר טלפון </label>
              <input type="text" value={phone} onChange={(e) => setphone(e.target.value)}/><br/>
              <label>מספר נוסעים</label>
              <input type="number" value={numpassenger} onChange={(e) => setnumpassenger(e.target.value)}/><br/>
             
             
              <h3>צורת תשלום</h3><br/>
              <button onClick={() => setpayment(1)}>מזומן</button>
              <button onClick={() => setpayment(2)}>אשראי</button>
              {error!="" && <><span>{error}</span><br/></>}<br/>
              {/* {error!="" ? <span></span>: null} */}
              <button onClick={handleClickTravel}>שלח הזמנה</button>
            </>
        );
    
    };

    export default Travel;
    
