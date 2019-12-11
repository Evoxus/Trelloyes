import React from "react";
import ReactDOM from "react-dom";
import List from "./List";
import renderer from "react-test-renderer";

// smoke testing
describe("<list/>", () => {
  it("List of cards mounted succesful", () => {
    const div = document.createElement("div");
    const dummyData = {
      id: "1",
      header: "First list",
      cardIds: ["a", "b", "e", "f", "g", "j", "l", "m"]
    };

    ReactDOM.render(<List data={dummyData} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  // snap shot testing
  it("matches snap shot", () => {
    const dummyData = {
      id: "1",
      header: "First list",
      cardIds: ["a", "b", "e", "f", "g", "j", "l", "m"]
    };
    const tree = renderer.create(<List data={dummyData} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
