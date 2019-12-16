// lib
import React from "react";
import PropTypes from "prop-types";
import Radio from "antd/lib/radio";

const TemperatureScales = props => {
  const { currentScale, setCurrentScale } = props;
  return (
    <div className="temperature-scale">
      <Radio.Group
        onChange={e => {
          setCurrentScale(e.target.value);
        }}
        value={currentScale}
      >
        <Radio value={"C"}>Celsius</Radio>
        <Radio value={"F"}>Fahrenheit</Radio>
      </Radio.Group>
    </div>
  );
};

TemperatureScales.prototype = {
  currentScale: PropTypes.string.isRequired,
  setCurrentScale: PropTypes.func.isRequired
};

export default TemperatureScales;
