import React from "react";
import ReactDOM from "react-dom";
import renderer from 'react-test-renderer'
import Card from './Card';

describe('<Card />', () => {
  it('Mounts without error', () => {
    const div = document.createElement('div');
    const dummyData = { id: "a", title: "First card", content: "lorem ipsum" };
    ReactDOM.render(<Card data={dummyData}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('Matches snapshot', () => {
    const dummyData = { id: "a", title: "First card", content: "lorem ipsum" };
    const tree = renderer.create(<Card data={dummyData}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});