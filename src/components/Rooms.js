import React, { Fragment, useEffect, useState } from "react";

// @ts-ignore
import EditRoom from "./EditRoom";
// @ts-ignore
import InputRoom from "./InputRoom";

const ListRooms = () => {
    const [room, setRoom] = useState([]);

    //delete room function
    const deleteRoom = async id => {
        try {
            const deleteTodo = await fetch(`http://localhost:5000/room/${id}`, {
                method: "DELETE"
            });

            setRoom(room.filter(room => room.id !== id));
            window.location = "/room";
        } catch (err) {
            console.error(err.message)
        }
    }

    const getRooms = async () => {
        try {
            const response = await fetch(`http://localhost:5000/room`);
            const jsonData = await response.json();

            setRoom(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getRooms();
    }, []);

    function checkBool(params) {
        if (params) {
            return "Yes"
        }
        else {
            return "No"
        }
    }

    function checkNull(params) {
        if (params == null) {
            return "No damages"
        }
    }

    // console.log(room);

    return (
        <Fragment>
            <InputRoom />
            {" "}
            <table class="text-center table table-striped mt-5">
                <thead>
                    <tr>
                        <th>room_id</th>
                        <th>hotel_id</th>
                        <th>price</th>
                        <th>amenities</th>
                        <th>capacity</th>
                        <th>the_view</th>
                        <th>extendable</th>
                        <th>damages</th>
                        <th>Edit/Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {room.map(room => (
                        <tr key={room.id}>
                            <td>{room.room_id}</td>
                            <td>{room.hotel_id}</td>
                            <td>{room.price}</td>
                            <td>{room.amenities}</td>
                            <td>{room.capacity}</td>
                            <td>{room.the_view}</td>
                            <td>{checkBool(room.extendable)}</td>
                            <td>{checkNull(room.damages)}</td>
                            <td><EditRoom room={room}/><button className="btn btn-danger" onClick={() => deleteRoom(room.room_id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>  
    )  
};

export default ListRooms;