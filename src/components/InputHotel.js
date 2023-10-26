import React, { Fragment, useState } from "react";

const InputHotel = ({hotel}) => {

    const [hotel_chain_id, setHotel_chain_id] = useState("");
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [numberOfRooms, setNumberOfRooms] = useState("");
    const [category, setCategory] = useState("");
    const [area, setArea] = useState("");


    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
          const body = {
            hotel_chain_id, 
            name,
            address,
            email,
            phone,
            number_of_rooms: numberOfRooms,
            category,
            area,
          };
          const response = await fetch("http://localhost:5000/hotel", {
            method: "POST",
            headers: { "Content-Type" : "application/json" },
            body: JSON.stringify(body)
          });
      
          window.location = "/edithotel";
        } catch (err) {
          console.error(err.message);   
        }
      }

    return(
        <Fragment>
            <div className="text-center mt-5">
                <button
          type="button"
          className="btn btn-success"
          data-bs-toggle="modal"
          data-bs-target="#inputhotel"
        >
          Add new hotel
        </button>
            </div>
            

        <div className="modal" id="inputhotel">
            <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="text-center modal-title">Input Hotel</h4>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  onClick={() => {
                    setName(hotel.hotel_chain_id);
                    setName(hotel.name);
                    setAddress(hotel.address);
                    setEmail(hotel.email);
                    setPhone(hotel.phone);
                    setNumberOfRooms(hotel.number_of_rooms);
                    setCategory(hotel.category);
                    setArea(hotel.area);
                  }}
                ></button>
              </div>

              <div className="modal-body">

                <small className="text-muted h6">hotel_chain_id</small>
                <input
                  type="text"
                  className="form-control"
                  value={hotel_chain_id}
                  onChange={(e) => setHotel_chain_id(e.target.value)}
                />

                <small className="text-muted h6">Name</small>
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <small className="text-muted h6">Address</small>
                <input
                  type="text"
                  className="form-control"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />

                <small className="text-muted h6">Email</small>
                <input
                  type="text"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <small className="text-muted h6">Phone</small>
                <input
                  type="text"
                  className="form-control"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />

                <small className="text-muted h6">Number of Rooms</small>
                <input
                  type="number"
                  className="form-control"
                  value={numberOfRooms}
                  onChange={(e) => setNumberOfRooms(e.target.value)}
                />

                <small className="text-muted h6">Category</small>
                <input
                  type="number"
                  className="form-control"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />

                <small className="text-muted h6">Area</small>
                <input
                  type="text"
                  className="form-control"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                />    
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-success"
                  data-bs-dismiss="modal"
                  onClick={e => onSubmitForm(e)}>
                    Add
                </button>
                <button type="button" className="btn btn-warning" data-bs-dismiss="modal">Close</button>
               </div>

              </div>
          </div>
          </div>
        </Fragment>
    );
};

export default InputHotel;