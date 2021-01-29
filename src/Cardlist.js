import React from 'react';
import Card from './Card';
import { useState } from 'react';
import { useEffect } from 'react';

const CardList = (props) => {

  const [robots, setRobots] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(Response => Response.json())
      .then(users => setRobots(users))
  },[]);

  const filtered = robots.filter(robot => {
    return robot.name.toLowerCase().includes(props.term.toLowerCase());
  })

  const robotList = filtered.map(robot => {
    return (
      <Card name={robot.name} email={robot.email} key={robot.id}/>
    );
  });

  if (robots.length === 0) {
    return (
      <div>
        <h1>loading...</h1>
      </div>
    )
  } else {
      return (
        <div className="card-list">
            {robotList}
        </div>
      );
  }
}

export default CardList;