import React from "react";
import List from "./general-components/List";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: this.props.store.lists,
      allCards: this.props.store.allCards,
    }
  }

  newRandomCard = (list) => {
    let id = Math.random().toString(36).substring(2, 4)
      + Math.random().toString(36).substring(2, 4);
    let newRandomCard = {
      id,
      title: `Random Card ${id}`,
      content: 'lorem ipsum',
    }
    let newList = this.state.lists.map(item => {
      if (item.id === list){
        item.cardIds.push(newRandomCard.id)
      }
      return item
    });
    let newCards = {...this.state.allCards};
    newCards[newRandomCard.id] = newRandomCard;
    this.setState({
      lists: newList,
      allCards: newCards,
    })
  }

  render() {
    const arr = this.state.lists.map(item => 
    <List data={item} key={item.id} allCards={this.state.allCards} newRandomCard={this.newRandomCard} />);
    return (
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">{arr}</div>
      </main>
    );
  }
}

export default App;
