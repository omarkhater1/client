import React, { Fragment, useState } from "react";

const InputRoom = ({room}) => {

    const [hotel_id, setHotel_id] = useState("");
    const [price, setPrice] = useState("");
    const [amenities, setAmenities] = useState("");
    const [capacity, setCapacity] = useState("");
    const [the_view, setThe_view] = useState("");

    const onAddRoom = async (e) => {
        e.preventDefault();
        try {
          const body = {
            hotel_id,
            price,
            amenities,
            capacity,
            the_view,
          };
          const response = await fetch("http://localhost:5000/room", {
            method: "POST",
            headers: { "Content-Type" : "application/json" },
            body: JSON.stringify(body)
          });
      
          window.location = "/room";
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
          data-bs-target="#inputroom"
        >
          Add new Room
        </button>
            </div>
            

        <div className="modal" id="inputroom">
            <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="text-center modal-title">Input Room</h4>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  onClick={() => {
                    setHotel_id(room.hotel_id)
                    setPrice(room.price);
                    setAmenities(room.amenities);
                    setCapacity(room.capacity);
                    setThe_view(room.the_view);
                  }}
                ></button>
              </div>

              <div className="modal-body">
              <small className="text-muted h6">hotel_id</small>
                <input
                  type="text"
                  className="form-control"
                  value={hotel_id}
                  onChange={(e) => setHotel_id(e.target.value)}
                />

                <small className="text-muted h6">Price</small>
                <input
                  type="text"
                  className="form-control"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />

                <small className="text-muted h6">amenities</small>
                <input
                  type="text"
                  className="form-control"
                  value={amenities}
                  onChange={(e) => setAmenities(e.target.value)}
                />

                <small className="text-muted h6">Capacity</small>
                <input
                  type="text"
                  className="form-control"
                  value={capacity}
                  onChange={(e) => setCapacity(e.target.value)}
                />

                <small className="text-muted h6">The_view</small>
                <input
                  type="text"
                  className="form-control"
                  value={the_view}
                  onChange={(e) => setThe_view(e.target.value)}
                />

                <small className="text-muted h6">Extendable</small>
                <input
                  type="number"
                  className="form-control"
                //   value={extendable}
                //   onChange={(e) => setExtendable(e.target.value)}
                />

                <small className="text-muted h6">Damages</small>
                <input
                  type="number"
                  className="form-control"
                />
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-success"
                  data-bs-dismiss="modal"
                  onClick={e => onAddRoom(e)}>
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

export default InputRoom;