// lib
import React from "react";
import PropTypes from "prop-types";
import ReactHighCharts from "react-highcharts";

// src
import { chartConfig, tempConverter, formatDate, DATE_FORMAT } from "../../utils";

const BarChart = props => {
  const { chartData, date, scale } = props;

  const convertedSeriest = chartData.series.map(item => {
    return tempConverter(item, scale);
  });
  const config = {
    ...chartConfig,
    series: [{ name: formatDate(date, DATE_FORMAT), data: convertedSeriest }],
    xAxis: {
      categories: chartData.categories
    },
    yAxis: {
      ...chartConfig.yAxis,
      title: {
        text: `Temperature(${scale})`
      }
    }
  };
  return <ReactHighCharts config={config} />;
};

BarChart.defaultProps = {
  date: ""
};

BarChart.propTypes = {
  // chartData: PropTypes.obj
  scale: PropTypes.string.isRequired,
  date: PropTypes.string
};

export default BarChart;
