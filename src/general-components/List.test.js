import React from "react";
import ReactDOM from "react-dom";
import renderer from 'react-test-renderer'
import List from './List';
import STORE from '../store'

describe('<List />', () => {
  it('Mounts without error', () => {
    const div = document.createElement('div');
    const dummyData = STORE.lists[0];
    ReactDOM.render(<List data={dummyData}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('Matches snapshot', () => {
    const data = STORE.lists[0];
    const tree = renderer.create(<List data={data}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});