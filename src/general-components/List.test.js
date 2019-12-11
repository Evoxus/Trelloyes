import React from "react";
import ReactDOM from "react-dom";
import renderer from 'react-test-renderer'
import List from './List';

describe('<List />', () => {
  it('Mounts without error', () => {
    const div = document.createElement('div');
    const dummyData = {
      id: "3",
      header: "Third list",
      cardIds: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m"]
    };
    ReactDOM.render(<List data={dummyData}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('Matches snapshot', () => {
    const dummyData = {
      id: "3",
      header: "Third list",
      cardIds: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m"]
    };
    const tree = renderer.create(<List data={dummyData}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});