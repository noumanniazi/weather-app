// lib
import React from "react";
import PropTypes from "prop-types";
// Smart imports reduces the build size, instead of building the whole
// library it builds with only specific components
import AntDCard from "antd/lib/card";

// src
import { formatDate, DATE_FORMAT } from '../../utils';
import "./Card.scss";

const Card = props => {
  const { temperature, date, humidity, handleCardClick, isSelected } = props;
  return (
    <div
      className={`cardWrapper ${isSelected === true ? "selected" : ""}`}
      onClick={() => {
        handleCardClick(date);
      }}
    >
      <AntDCard hoverable>
        <div>
          <span className="bold-text">Temp: </span>
          <span>{temperature}</span>
        </div>
        <div>
          <span className="bold-text">Date: </span>
          <span>{formatDate(date, DATE_FORMAT)}</span>
        </div>
        <div>
          <span className="bold-text">humidity: </span>
          <span>{humidity}</span>
        </div>
      </AntDCard>
    </div>
  );
};

Card.prototype = {
  temperature: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  humidity: PropTypes.string.isRequired,
  handleCardClick: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired
};
export default Card;
