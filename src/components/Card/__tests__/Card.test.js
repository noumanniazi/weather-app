// lib
import React from "react";
import renderer from "react-test-renderer";

// src
import Card from "../Card";

describe("Testing Card Component", () => {
  it("Matches Card snapshot", () => {
    const data = {
      temperature: "6.13C",
      humidity: 81.75,
      date: "2019-12-18",
      isSelected: false
    };
    const card = renderer.create(<Card {...data} />);
    let tree = card.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
