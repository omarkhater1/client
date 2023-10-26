import React, { Fragment, useState } from "react";

const EditRoom = ({ room }) => {
  const [hotel_id, setHotel_id] = useState(room.hotel_id);
  const [price, setPrice] = useState(room.price);
  const [ameneties, setAmeneties] = useState(room.ameneties);
  const [capacity, setCapacity] = useState(room.capacity);
  const [the_view, setThe_view] = useState(room.the_view);
  const [extendable, setExtendable] = useState(room.Extendable);
  const [damages, setDamages] = useState(room.damages);

  const updateRoom = async (e) => {
    e.preventDefault();
    try {
      const body = {
        hotel_id,
        price,
        ameneties,
        capacity,
        the_view,
        extendable,
        damages,
      };
      const response = await fetch(
        `http://localhost:5000/room/${room.room_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );

      window.location = "/room";
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
          data-bs-target={`#id${room.room_id}`}
        >
          Edit
        </button>

        <div className="modal" id={`id${room.room_id}`}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Edit Hotel</h4>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  onClick={() => {
                    setHotel_id(room.hotel_id)
                    setPrice(room.price);
                    setAmeneties(room.amenetiess);
                    setCapacity(room.capacity);
                    setThe_view(room.the_view);
                    setExtendable(room.Extendable);
                    setDamages(room.damages);
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

                <small className="text-muted h6">Ameneties</small>
                <input
                  type="text"
                  className="form-control"
                  value={ameneties}
                  onChange={(e) => setAmeneties(e.target.value)}
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
                  value={extendable}
                  onChange={(e) => setExtendable(e.target.value)}
                />

                <small className="text-muted h6">Damages</small>
                <input
                  type="number"
                  className="form-control"
                  value={damages}
                  onChange={(e) => setDamages(e.target.value)}
                />
              </div>

              <div className="">
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={e => updateRoom(e)}>
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

export default EditRoom;