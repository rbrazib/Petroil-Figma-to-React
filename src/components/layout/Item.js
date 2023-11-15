import React from "react";
import { Link } from "react-router-dom";
const Item = ({ className, itemName, href }) => {
  return (
    <div className={(className, href)}>
      <Link to={href}>
        <li>{itemName}</li>
      </Link>
    </div>
  );
};

export default Item;
