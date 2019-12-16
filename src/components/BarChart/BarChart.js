// lib
import React from "react";
import ReactHighCharts from "react-highcharts";

// src
import { chartConfig } from "../../utils";

const BarChart = props => {
  const { chartData } = props;
  console.log("chartData", chartData);
  const config = {
    ...chartConfig,
    series: chartData.series,
    xAxis: {
      categories: chartData.categories
    }
  };
  console.log(config);
  return <ReactHighCharts config={config} />;
};

export default BarChart;
