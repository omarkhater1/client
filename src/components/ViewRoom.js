import React, { Fragment, useEffect, useState } from "react";

const Viewcriteria = () => {
  const [criteria, setCriteria] = useState([]);
  const [filteredCriteria, setFilteredCriteria] = useState([]);
  const [filters, setFilters] = useState({
    hotelChainName: "",
    area: "",
    numberOfRooms: "",
    capacity: "",
    price: "",
    category: "",
  });

  const getCriteria = async () => {
    try {
      const response = await fetch(`http://localhost:5000/criteria`);
      const jsonData = await response.json();

      setCriteria(jsonData);
      setFilteredCriteria(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getCriteria();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFilters({ ...filters, [name]: value });
  };

  const applyFilters = () => {
    let filteredCriteria = criteria;

    if (filters.hotelChainName) {
      filteredCriteria = filteredCriteria.filter(
        (criteria) =>
          criteria.hotel_chain_name
            .toLowerCase()
            .includes(filters.hotelChainName.toLowerCase())
      );
    }

    if (filters.area) {
      filteredCriteria = filteredCriteria.filter(
        (criteria) =>
          criteria.area.toLowerCase().includes(filters.area.toLowerCase())
      );
    }

    if (filters.numberOfRooms) {
      filteredCriteria = filteredCriteria.filter((criteria) =>
        criteria.number_of_rooms.toString().includes(filters.numberOfRooms)
      );
    }

    if (filters.capacity) {
      filteredCriteria = filteredCriteria.filter((criteria) =>
        criteria.capacity.toString().includes(filters.capacity)
      );
    }

    if (filters.price) {
      filteredCriteria = filteredCriteria.filter((criteria) =>
        criteria.price.toString().includes(filters.price)
      );
    }

    if (filters.category) {
      filteredCriteria = filteredCriteria.filter((criteria) =>
        criteria.category.toString().includes(filters.category)
      );
    }

    setFilteredCriteria(filteredCriteria);
  };
  
  

  return (
    <Fragment>
      <div>
        <label htmlFor="hotelChainName">Hotel Chain Name:</label>
        <input
          type="text"
          name="hotelChainName"
          value={filters.hotelChainName}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="area">Area:</label>
        <input
          type="text"
          name="area"
          value={filters.area}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="numberOfRooms">Number of Rooms:</label>
        <input
          type="text"
          name="numberOfRooms"
          value={filters.numberOfRooms}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="capacity">Capacity:</label>
        <input
          type="text"
          name="capacity"
          value={filters.capacity}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input
          type="text"
          name="price"
          value={filters.price}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="category">Category:</label>
        <input
          type="text"
          name="category"
          value={filters.category}
          onChange={handleInputChange}
        />
      </div>
      <button onClick={applyFilters}>Apply Filters</button>
      <table className="text-center table table-striped mt-5">
        <thead>
        <tr>
            <th>hotel chain name</th>
            <th>area</th>
            <th>number of rooms</th>
            <th>capacity</th>
            <th>price</th>
            <th>category</th>
          </tr>
        </thead>
        <tbody>
  {filteredCriteria.map((criteria) => (
    <tr key={criteria.id}>
      <td>{criteria.hotel_chain_name}</td>
      <td>{criteria.area}</td>
      <td>{criteria.number_of_rooms}</td>
      <td>{criteria.capacity}</td>
      <td>{criteria.price}</td>
      <td>{criteria.category}</td>
    </tr>
  ))}
</tbody>
      </table>
    </Fragment>
  );
};

export default Viewcriteria;
