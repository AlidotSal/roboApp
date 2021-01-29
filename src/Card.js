import React from 'react';
import './card.css';

const Card = (props) => {

  return (
    <div className="card">
      <img alt="robot" src={`https://robohash.org/${props.name}.jpg?size=200x200`}></img>
      <h3>{props.name}</h3>
      <p>{props.email}</p>
    </div>
  );
}

export default Card;