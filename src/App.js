import React, { Fragment } from "react";
import './App.css';

// @ts-ignore
import ListHotel from "./components/ListHotel";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Customer from "./components/Customer";
import Booking from "./components/Booking";
import ListRooms from "./components/Rooms";
import Employee from "./components/Employee";
import EmployeePortal from "./components/EmployeePortal";
import ViewRooms from "./components/ViewRoom";

function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Home />
      break;
    case "/edithotel":
      component = <ListHotel />
      break;
    case "/customer":
      component = <Customer />
      break;
    case "/booking":
      component = <Booking />
      break;
    case "/room":
      component = <ListRooms />
      break;
    case "/employee":
      component = <Employee />
    break;
    case "/employeePortal":
      component = <EmployeePortal />
    break;
    case "/viewroom":
      component = <ViewRooms />
  }
  return (
    <>
      <Navbar />
      {component}
    </>
    // <Fragment>
    //   <h1><Navbar /></h1>
    //   <div className="container">
    //     <InputHotel />
    //     <ListHotel />
    //   </div>
    // </Fragment>
  );
}

export default App;
