import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import renderer from "react-test-renderer";

// smoke testing//
describe("<Card/>", () => {
  it("Card mounted succesful", () => {
    const div = document.createElement("div");
    const dummyData = { id: "a", title: "First card", content: "lorem ipsum" };

    ReactDOM.render(<Card data={dummyData} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  // snap shot testing//
  it("matches snap shot", () => {
    const dummyData = { id: "a", title: "First card", content: "lorem ipsum" };
    const tree = renderer.create(<Card data={dummyData} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
