import { useNavigate } from "react-router-dom/dist"
const WorkersManagement=() =>{
 const navigate = useNavigate();

const handleInquryClick=()=>{

    navigate('/Inquiries')
 }
 
const handleDriversWorkersClick=()=>{

    navigate('/DriversWorkers')
 }

 const handlecustomerOrdersClick=()=>{

    navigate('/customerOrders')
 }



return(<>

<h1>hello manager</h1>

 
     

<button onClick={handleInquryClick}>ניהול פניות לקוח</button>
<br></br>
<button onClick={handleDriversWorkersClick}>ניהול עובדים</button>
<br></br>

<button onClick={handlecustomerOrdersClick}>ניהול הזמנות</button>

</>)

}
export default WorkersManagement