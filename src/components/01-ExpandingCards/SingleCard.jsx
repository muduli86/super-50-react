import React from "react";

import "./style.css";

const SingleCard = ({ id, name, url, active, handleClick, ac }) => {
  return (
    <div
      className={`panel ${active && "active"}`}
      style={{
        backgroundImage: `url(${url})`,
      }}
      onClick={() => handleClick(id)}
    >
      <h3>{name}</h3>
    </div>
  );
};

export default SingleCard;
