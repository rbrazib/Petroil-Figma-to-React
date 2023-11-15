import React from "react";

const Button = ({ item, className }) => {
  return (
    <div className={className}>
      <button>{item}</button>
    </div>
  );
};

export default Button;
