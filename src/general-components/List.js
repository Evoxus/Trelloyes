import React from "react";
import Card from "./Card";
import "./List.css";

function List(props) {
<<<<<<< HEAD
  // console.log(props);
  // const arr = Object.keys(props.allCards).map(item => {
  //   return <Card data={props.allCards[item]} deleteButton={props.deleteButton}/>

  const arr = props.data.cardIds.map(item => {
    return <Card data={props.allCards[item]} id={props.data.id} card={item} deleteButton={props.deleteButton}/>;
  });

  return (
    <section className="List" >
=======
  const arr = props.data.cardIds.map(item => {
    return <Card data={props.allCards[item]} key={item} />;
  });

  return (
    <section className="List" key={props.data.id}>
>>>>>>> 821efe1ceca9d947d24cad36497c14446527117f
      <header className="List-header">
        <h2>{props.data.header}</h2>
      </header>
      <div className="List-cards">
        {arr}
<<<<<<< HEAD
        <button
          type="button"
          className="List-add-button"
          onClick={() => props.newRandomCard(props.data.id)}
        >
=======
        <button type="button" className="List-add-button"
        onClick={() => props.newRandomCard(props.data.id)}>
>>>>>>> 821efe1ceca9d947d24cad36497c14446527117f
          + Add Random Card
        </button>
      </div>
    </section>
  );
}

export default List;
