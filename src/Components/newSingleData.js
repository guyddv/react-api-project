import React from "react";

const NewSingleData = ({ item }) => (
  <li>
    <p>
      {item.firstname} {item.lastname} {item.email}
    </p>
  </li>
);

export default NewSingleData;
