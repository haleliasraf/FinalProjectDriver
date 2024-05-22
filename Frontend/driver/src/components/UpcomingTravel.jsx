import React, { useState } from "react";
import { addUpcoming } from "../utils/upcomingUtil";
import { useSelector } from "react-redux";
// import OrderSummary from './OrderSummary';
import './css/openOrderSummaryInNewTab.css'; // ייבוא של הקובץ CSS


 
const UpcomingTravel=()=>{
    const[areaId,setareaId]= useState("")
    const[adressExit,setadressExit]= useState("")
    const[adressGounn,setadressGounn]= useState("")
    const[payment,setpayment]= useState("")
    const[phone,setphone]= useState("")
    const[numpassenger,setnumpassenger]= useState("")
    const [error, setError] = useState("");
    const [date, setdate] = useState("");
    const [orderPlaced, setOrderPlaced] = useState(false);
    const [orderData, setOrderData] = useState({});
    const connectedUser = useSelector(state => state.user.connectedUser);

    const handleClickUpcomingTravel = async() => {
        let user = {
            userId: connectedUser.id,
            areaId: areaId,
            adressExit:adressExit,
            adressGounn:adressGounn,
            payment:payment,
            error,
            driverId: 3,
            time: "",
            date,
            numpassenger,
            phone
        }
        await addUpcoming(user).then(res => {
            if(res.status === 200){
                setError("");
                setOrderPlaced(true);
                setOrderData(user); // שמירת הנתונים של ההזמנה
                openOrderSummaryInNewTab(user); // פתיחת סיכום ההזמנה בכרטיסיה חדשה

                alert("הזמנתך נקלטה בהצלחה ");
              
                

            }
            else{
                setOrderPlaced(false);
                setError("אחד מהנתונים שהוקשו שגוי");
            }
        });
    }
    



    
    //  const openOrderSummaryInNewTab = (orderData) => {
    //   const orderSummaryUrl = 'components/order_sammery.js'; // הנתיב לקומפוננטת OrderSummary
    //  const newWindow = window.open(orderSummaryUrl,'_blank');
    // if (newWindow) {
    //   newWindow.orderData = orderData; // העברת פרטי ההזמנה לחלון החדש
    // } else {
    //   alert('לא ניתן לפתוח חלון חדש. אנא בדוק את הגדרות הדפדפן שלך.');
    // }
    //  };

  const openOrderSummaryInNewTab = (orderData) => {
    const newWindow = window.open('', '_blank');
    
    newWindow.document.write(`<h1>סיכום הזמנה</h1>`);
    newWindow.document.write(`<p>יעד: ${orderData.adressGounn}</p>`);
    newWindow.document.write(`<p>מוצא: ${orderData.adressExit}</p>`);
    newWindow.document.write(`<p>תאריך: ${orderData.date}</p>`);
    newWindow.document.write(`<p>מספר טלפון: ${orderData.phone}</p>`);
    newWindow.document.write(`<p>מספר הנוסעים: ${orderData.numpassenger}</p>`);
    newWindow.document.write(`<p>תשלום: ${orderData.payment}</p>`);

    // ...הוספת כל הנתונים הרלוונטיים...
    newWindow.document.close();
  }

        return (
            <>
              <h1>הזמנה עתידית</h1><br/>
              <button onClick={() => setareaId(1)}>דרום</button>
              <button onClick={() => setareaId(2)}>מרכז</button>
              <button onClick={() => setareaId(3)}>צפון</button><br/>
              <label>כתובת יעד</label>
              <input type="text" value={adressGounn} onChange={(e) => setadressGounn(e.target.value)}/><br/>
              <label>כתובת מוצא</label>
              <input type="text" value={adressExit} onChange={(e) => setadressExit(e.target.value)}/><br/>
              <label>שעה </label>
              <label>תאריך </label>
              <input type="date" value={date} onChange={(e) => setdate(e.target.value) }/><br/>
              <label> מספר טלפון </label>
              <input type="text" value={phone} onChange={(e) => setphone(e.target.value)}/><br/>
              <label>מספר נוסעים</label>
              <input type="number" value={numpassenger} onChange={(e) => setnumpassenger(e.target.value)}/><br/>
              <h3>צורת תשלום</h3><br/>
              <button onClick={() => setpayment(1)}>מזומן</button>
              <button onClick={() => setpayment(2)}>אשראי</button>
              {error!="" && <><span>{error}</span><br/></>}<br/>
              {/* {error!="" ? <span></span>: null} */}
              {/* {orderPlaced ? <OrderSummary {...orderData} /> : null}; */}
              <button onClick={handleClickUpcomingTravel}>הזמן נסיעה</button>

            </>
        );
    
    };

    export default UpcomingTravel;
    
