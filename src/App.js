import React from "react";
import List from "./general-components/List";
import STORE from "./store";
import "./App.css";

function App(props) {
  const arr = STORE.lists.map(item => <List data={item} key={item.id} />);
  return (
    <main className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">{arr}</div>
    </main>
  );
}

export default App;
