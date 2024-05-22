import React, { useState } from "react";
import { addContact } from "../utils/contactUtil";
import { useSelector } from "react-redux";
 
const CustomerService=()=>{

    const[phon,setphon]= useState("")
    const[name,setname]= useState("")
    const[details,setdetails]= useState("")
    const [error, setError] = useState("");
    const connectedUser = useSelector(state => state.user.connectedUser);

    const handleClickCustomerSrvice = async() => {
        //TODO -  connectedUser.id - לבדוק אם צריך לקשר אותו ליוזר מסוים שמחובר כרגע לאתר
        let user = {
            id: 0,
            phon,
            name,
            details,
            status : "1",//1=ממתין לטיפול ,2=טופל //TODO - לשנות למספר או bit - true/false
            date:new Date(),
            time: ""
          
        }
        await addContact(user).then(res => {
            if(res.status === 200){
                setError("");
                alert("פנייתך נקלטה בהצלחה ");
            }
            else{
                setError("אחד מהנתונים שהוקשו שגוי");
            }
        });
    }
        return (
            
         
            <>
              <h1>כאן ועכשיו</h1><br/>
              <h4>יש לכם שאלה לגבי הזמנה או נסיעה?</h4>
              <h4>זקוקים לתמיכה טכנית? עזרה בהצטרפות לשירות?</h4>
              <h4>השאירו פרטים / התקשרו 08-9947654</h4>
            
              <label> שם מלא</label>
              <input type="name" value={name} onChange={(e) => setname(e.target.value)}/><br/>
              <label> טלפון</label>
              <input type="phon" value={phon} onChange={(e) => setphon(e.target.value)}/><br/>
              <label> הודעה</label>
              <input type="text" value={details} onChange={(e) => setdetails(e.target.value)}/><br/>
              <button onClick={handleClickCustomerSrvice}>שלח</button>
            </>
            
        );
    
    };

    export default CustomerService;