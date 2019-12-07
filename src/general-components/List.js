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
    <section className="List">
      <header className="List-header">
        <h2>{props.header}</h2>
      </header>
      <div className="List-cards">
        {arr}
        <button type="button" class="List-add-button">
          + Add Random Card
        </button>
      </div>
    </section>
    
  );
}

export default List;
