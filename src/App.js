import React from "react";
import Store from "./store";
import List from "../src/general-components/List";

function App(props) {
  const arr = [];
  const listData = Store.lists.forEach(item =>
    arr.push(<List header={item.header} cardIds={item.cardIds} />)
  );
  return <div className="App">{arr}</div>;
}

export default App;
