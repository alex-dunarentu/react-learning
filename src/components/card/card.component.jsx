import React from "react";
import "./card.styles.css";

export const Card = (props) => (
  <div className="card-container">
    <img alt="monster" src = {`https://robohash.org/${props.mymonster.id}?set=set2&size=180x180`}></img>
    <h2>{props.mymonster.name}</h2>
    <p>{props.mymonster.email}</p>
  </div>
);
