import React, { Fragment, useEffect, useState } from "react";

// @ts-ignore
import EditHotel from "./EditHotel";
// @ts-ignore
import InputHotel from "./InputHotel";

const ListHotel = () => {
    const [hotel, setHotel] = useState([]);

    //delete hotel function
    const deleteHotel = async id => {
        try {
            const deleteTodo = await fetch(`http://localhost:5000/hotel/${id}`, {
                method: "DELETE"
            });

            setHotel(hotel.filter(hotel => hotel.id !== id));
            window.location = "/edithotel";
        } catch (err) {
            console.error(err.message)
        }
    }

    const getHotels = async () => {
        try {
            const response = await fetch(`http://localhost:5000/hotel`);
            const jsonData = await response.json();

            setHotel(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getHotels();
    }, []);

    // console.log(hotel);

    return (
        <Fragment>
            <InputHotel />
            {" "}
            <table class="table table-striped mt-5">
                <thead>
                    <tr>
                        <th>hotel_id</th>
                        <th>hotel_chain_id</th>
                        <th>name</th>
                        <th>address</th>
                        <th>email</th>
                        <th>phone</th>
                        <th>number_of_rooms</th>
                        <th>category</th>
                        <th>area</th>
                        <th>Edit/Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {hotel.map(hotel => (
                        <tr key={hotel.id}>
                            <td>{hotel.hotel_id}</td>
                            <td>{hotel.hotel_chain_id}</td>
                            <td>{hotel.name}</td>
                            <td>{hotel.address}</td>
                            <td>{hotel.email}</td>
                            <td>{hotel.phone}</td>
                            <td>{hotel.number_of_rooms}</td>
                            <td>{hotel.category}</td>
                            <td>{hotel.area}</td>
                            <td><EditHotel hotel={hotel}/><button className="btn btn-danger" onClick={() => deleteHotel(hotel.hotel_id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>  
    )  
};

export default ListHotel;
