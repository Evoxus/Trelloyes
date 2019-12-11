import React from "react";
import Card from "./Card";
import "./List.css";
import STORE from "../store";

function List(props) {
  const allCards = STORE.allCards;
  const arr = props.data.cardIds.map(item => {
    return <Card data={allCards[item]} key={item} />;
  });

  return (
    <section className="List" key={props.id}>
      <header className="List-header">
        <h2>{props.data.header}</h2>
      </header>
      <div className="List-cards">
        {arr}
        <button type="button" className="List-add-button">
          + Add Random Card
        </button>
      </div>
    </section>
  );
}

export default List;
