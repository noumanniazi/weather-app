// lib
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Button from "antd/lib/button";
import Icon from "antd/lib/icon";
import Spin from "antd/lib/spin";

// src
import { startFetching, stopFetching, fetchData } from "../../actions";
import {
  SUCCESSFUL,
  tempConverter,
  calculateAvgTempAndHumidityOfDays
} from "../../utils";
import Card from "../../components/Card";
import "./Weather.scss";
import TemperatureScales from "../../components/TemperatureScales";
import BarChart from '../../components/BarChart';

const Weather = props => {
  // STATEFUL Logic
  const [currentScale, setCurrentScale] = useState("C");
  const [pageIndex, setPageIndex] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);
  const [initialSelectionFlag, setInitialSelectionFlag] = useState(true);
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    props.startFetching();
    const fetchAsychWrapper = async () => {
      const fetch_status = await props.fetchData();
      if (fetch_status === SUCCESSFUL) {
        props.stopFetching();
      } else {
        props.stopFetching();
      }
    };
    fetchAsychWrapper();
    return () => {};
  }, []);

  // Calculation Logic
  const { isFetching, data } = props;
  const { list } = data;

  let dataAverages = [];

  const splitDateAndTime = date => {
    return date.dt_txt.split(" ");
  };
  const getFirstDay = data => {
    return splitDateAndTime(data[0])[0];
  };
  const calculateChartsData = (selectedDate, data) => {
    // categories for the chart
    // ***********************************
    // * ['00:00', '03:00', '06:00', ..] *
    // ***********************************
    //
    // series for the chart
    // ******************************************
    // * {name: '', data: [49.9, 71.5, 106.4] } *
    // ******************************************
    console.log("selectedDate", selectedDate, "data", data);
    return data.reduce(
      (accum, dateItem) => {
        const splittedDate = splitDateAndTime(dateItem);
        if (splittedDate[0] === selectedDate) {
          return {
            categories: [...accum.categories, splittedDate[1]],
            series: [...accum.series, dateItem.main.temp]
          };
        }
        return {
          ...accum
        };
      },
      { categories: [], series: [] }
    );
  };
  if (list) {
    dataAverages = calculateAvgTempAndHumidityOfDays(list);
    if (!chartData) {
      setChartData(calculateChartsData(getFirstDay(list), list));
    }
    // // if(selectedDate!==getFirstDay)
    // // setSelectedDate(getFirstDay(list));
    // const chartData = calculateChartsData(getFirstDay(list), list);
    // console.log(chartData);
  }

  return (
    <div>
      {isFetching && (
        <div className="loading-screen">
          <Spin size="large" tip="Loading Weather Data..." />
        </div>
      )}
      {!isFetching && (
        <div className="content-container">
          <TemperatureScales
            currentScale={currentScale}
            setCurrentScale={setCurrentScale}
          />
          <div className="buttons-container">
            <div>
              {pageIndex > 0 && (
                <Button
                  onClick={() => {
                    setPageIndex(pageIndex - 1);
                  }}
                  type="primary"
                  shape="circle"
                >
                  <Icon type="arrow-left" />
                </Button>
              )}
            </div>
            {dataAverages.length - pageIndex > 3 && (
              <div>
                <Button
                  onClick={() => {
                    setPageIndex(pageIndex + 1);
                  }}
                  type="primary"
                  shape="circle"
                >
                  <Icon type="arrow-right" />
                </Button>
              </div>
            )}
          </div>
          <div className="temp-cards">
            {dataAverages.map((item, index) => {
              if (index >= pageIndex && index < pageIndex + 3) {
                return (
                  <Card
                    key={item.date}
                    temperature={`${tempConverter(
                      item.avgTemp,
                      currentScale
                    )}${currentScale}`}
                    humidity={item.avgHumidity}
                    date={item.date}
                  />
                );
              }
            })}
          </div>
          {chartData && <BarChart chartData={chartData} />}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(mapStateToProps, {
  stopFetching,
  startFetching,
  fetchData
})(Weather);
