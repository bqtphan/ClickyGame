import React from "react";
import "./Cards.css";

const Cards = props => (
  <div className="card">
    <div className="img-container">
      <img src={props.image} onClick={() => props.Clicked(props.id)} className="remove" />
    </div>
  </div>
);

export default Cards;
