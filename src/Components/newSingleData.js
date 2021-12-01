import React from "react";

const NewSingleData = ({ item }) => (
  <li>
    <p>
      {item.firstname} {item.lastname} {item.email} {item.phone} {item.gender}
    </p>
  </li>
);

export default NewSingleData;
