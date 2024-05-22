import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import UpcomingTravel from './components/UpcomingTravel';
import Travel from './components/travel';
import AboutUs from './components/AboutUs';
import Deliveries from './components/Deliveries';
import CustomerService from './components/CustomerService';
import Tracking from './components/Tracking';
import AllOrders from './components/OrderMenagment';
import WorkersManagement from './components/WorkersManagement';

import { BrowserRouter, Route, Router, Routes, useNavigate } from 'react-router-dom';
import AppRouter from './components/App-Router';
import Nav from './components/Nav';
import { useEffect, useState } from 'react';
import DriversWorkers from'./components/DriversWorkers';
import CustomerOrders from './components/CustomerOrders';
import Inquiries from './components/Inquiries';



function App() {
  const [openSignIn, setOpenSignIn] = useState(false);
  const navigate = useNavigate();
  const [openSignUp, setOpenSignUp] = useState(false);

  useEffect(()=> {
    setOpenSignIn(true);
    const timerSignIn = setTimeout(() => {
        navigate('/signIn');
    },3000);

    return() => {
      clearTimeout(timerSignIn);
    }

  },[]);


  // useEffect(()=> {
  //   const timerSignup = setTimeout(() => {
  //       setOpenSignup(true);
  //       navigate1('/signUp');
  //   },5000);

  //   return() => {
  //     clearTimeout(timerSignup);
  //   }

  // },[]);
  
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={Home} /> */}
        {/* <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn/>} /> */}
        <Route path="" element={<Nav setOpenSignIn={setOpenSignIn} setOpenSignUp={setOpenSignUp}/>} >
            <Route path="/" element={<HomePage/>} />
            <Route path="/travel" element={<Travel/>} />
            <Route path="/UpcomingTravel" element={<UpcomingTravel/>} />
            <Route path="/aboutUs" element={<AboutUs/>} />
            <Route path="/deliveries" element={<Deliveries/>} />
            <Route path="/tracking" element={<Tracking/>} />
            <Route path="/signUp" element={<SignUp open={openSignUp} setOpen={setOpenSignUp}/>} />
            <Route path="/customerService" element={<CustomerService />} />
            <Route path="/OrderMenagment" element={<AllOrders />} />
            <Route path="/signIn" element={<SignIn open={openSignIn} setOpen={setOpenSignIn} setOpenSignUp={setOpenSignUp}/>} />
            <Route path="/WorkersManagement" element={<WorkersManagement/>}></Route>
            <Route path="/Inquiries" element={<Inquiries/>}></Route>
            <Route path="/DriversWorkers" element={<DriversWorkers/>}></Route>
            <Route path="/customerOrders" element={<CustomerOrders/>}></Route>


        </Route>    
      </Routes>  
        </div>

  );
}

export default App;
