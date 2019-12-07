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
    <main className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {arr}
      </div>
    </main>
  );
}

export default App;
