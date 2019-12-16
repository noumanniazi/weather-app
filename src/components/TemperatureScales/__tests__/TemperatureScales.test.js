// lib
import React from "react";
import renderer from "react-test-renderer";

// src
import TemperatureScales from "../TemperatureScales";

describe("Testing TemperatureScales Component", () => {
  it("Matches TemperatureScales snapshot", () => {
    const data = {
        "currentScale": "C",
        setCurrentScale: ()=>{}
      };
    const temperatureScales = renderer.create(<TemperatureScales {...data} />);
    let tree = temperatureScales.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
