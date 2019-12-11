import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="Card">
      <button type="button">delete</button>
      <h3>{props.data.title}</h3>
      <p>{props.data.content}</p>
    </div>
  );
}

export default Card;
