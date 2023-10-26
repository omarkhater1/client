import React, { Fragment } from "react";

function EmployeePortal() {
  const handleEditHotelClick = () => {
    window.location = "/edithotel";
  };

  const handleEditRoomClick = () => {
    window.location = "/room";
  };

  return (
    <Fragment>
      <h1>Edit hotel or room</h1>
      <button 
        type="button" 
        className="btn btn-primary text-center m-2" 
        onClick={handleEditHotelClick}>
        Edit Hotel
      </button>
      <button 
        type="button" 
        className="btn btn-primary text-center m-2" 
        onClick={handleEditRoomClick}>
        Edit Room
      </button>
    </Fragment>
  );
}

export default EmployeePortal;