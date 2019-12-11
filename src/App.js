import React from "react";
import Store from "./store";
import List from "./general-components/List";
import STORE from "./store";
import './App.css'

function App(props) {
  const arr = Store.lists.map(item =>
    <List key={item.id} data={item} />
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
