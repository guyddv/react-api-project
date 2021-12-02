import React from "react";

const NewSingleData = ({ item }) => (
  <li>
    <div class="card">
      <ul>
        <li>
          <b>First Name: </b>
          {item.firstname}{" "}
        </li>

        <li>
          <b>Last Name: </b>
          {item.lastname}{" "}
        </li>

        <li>
          <b>Email Address: </b>
          {item.email}{" "}
        </li>

        <li>
          <b>Phone Number: </b> {item.phone}{" "}
        </li>

        <li>
          <b>Gender: </b>
          {item.gender}{" "}
        </li>
      </ul>
      <br></br>
      <br></br>
      <br></br>
    </div>
  </li>
);

export default NewSingleData;
