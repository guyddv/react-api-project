import React from "react";

const NewSingleData = ({ item }) => (
  <li>
    <p>
      <b>First Name: </b>
      {item.firstname} <b>Last Name: </b>
      {item.lastname} <b>Email Address: </b>
      {item.email} <b>Phone Number: </b>
      {item.phone} <b>Gender: </b>
      {item.gender}
    </p>
  </li>
);

export default NewSingleData;
