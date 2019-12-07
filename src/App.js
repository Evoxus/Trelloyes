import React from "react";
import Store from "./store";
import List from "./general-components/List";
import STORE from "./store";
import './App.css'

function App(props) {
  const arr = [];
  Store.lists.forEach(item =>
    arr.push(<List header={item.header} cardIds={item.cardIds} cardInfo={STORE.allCards}/>)
  );
  return (
    <div className="App">
      {arr}
    </div>
  );
}

export default App;
