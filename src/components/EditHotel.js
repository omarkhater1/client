import React, { Fragment, useState } from "react";

const EditHotel = ({ hotel }) => {
  const [hotel_chain_id, setHotel_chain_id] = useState(hotel.hotel_chain_id);
  const [name, setName] = useState(hotel.name);
  const [address, setAddress] = useState(hotel.address);
  const [email, setEmail] = useState(hotel.email);
  const [phone, setPhone] = useState(hotel.phone);
  const [numberOfRooms, setNumberOfRooms] = useState(hotel.number_of_rooms);
  const [category, setCategory] = useState(hotel.category);
  const [area, setArea] = useState(hotel.area);

  const updateHotel = async (e) => {
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
      const response = await fetch(
        `http://localhost:5000/hotel/${hotel.hotel_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );

      window.location = "/edithotel";
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <h1>
      <Fragment>
        <button
          type="button"
          className="btn btn-warning"
          data-bs-toggle="modal"
          data-bs-target={`#id${hotel.hotel_id}`}
        >
          Edit
        </button>

        <div className="modal" id={`id${hotel.hotel_id}`}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Edit Hotel</h4>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  onClick={() => {
                    setHotel_chain_id(hotel_chain_id)
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

              <div className="">
                <button
                  type="button"
                  className="btn btn-warning"
                //   data-bs-dismiss="modal"
                  onClick={e => updateHotel(e)}>
                    Edit
                </button>
                <button type="button" class="btn btn-danger" data-bs-dismiss="">Close</button>
               </div>

              </div>
          </div>
        </div>
      </Fragment>
    </h1>
    )
}

export default EditHotel;