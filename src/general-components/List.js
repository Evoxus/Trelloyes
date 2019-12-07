import React from 'react';
import Card from "./Card";
import './List.css';

function List(props) {
  const cardInfo = props.cardInfo;
  const arr = [];
  props.cardIds.forEach(item =>
    arr.push(
      <Card
        title={cardInfo[item].title}
        content={cardInfo[item].content}
        key={cardInfo[item].id}
      />
    )
  );
  return (
    <div className="List-cards">
      <header>{props.header}</header>
      {arr}
    </div>
  );
}

export default List;
