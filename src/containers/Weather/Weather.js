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
  calculateAvgTempAndHumidityOfDays,
  calculateChartsData,
  getFirstDay,
} from "../../utils";
import Card from "../../components/Card";
import "./Weather.scss";
import TemperatureScales from "../../components/TemperatureScales";
import BarChart from "../../components/BarChart";

const NUMBER_OF_VISIBLE_CARDS = 3;

const Weather = props => {
  // STATEFUL Logic
  const [currentScale, setCurrentScale] = useState("C");
  const [pageIndex, setPageIndex] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);
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
    return () => { };
  }, []);

  // Calculation Logic
  const { isFetching, data } = props;
  const { list } = data;

  let dataAverages = [];


  if (list) {
    dataAverages = calculateAvgTempAndHumidityOfDays(list);
    if (!chartData) {
      setSelectedDate(getFirstDay(list));
      setChartData(calculateChartsData(getFirstDay(list), list));
    }
  }
  const handleCardClick = date => {
    if (date !== selectedDate) {
      setChartData(calculateChartsData(date, list));
      setSelectedDate(date);
    }
  };

  const getIndexByDate = (selectedDate, dataAverages) => {
    return dataAverages.findIndex((el) => el.date === selectedDate);
  }

  const updatePageAndDate = (newIndex) => {
    setPageIndex(newIndex);
    const currentDateIndex = getIndexByDate(selectedDate, dataAverages);
    if (currentDateIndex >= newIndex && currentDateIndex < newIndex + NUMBER_OF_VISIBLE_CARDS) {
      return;
    }
    setSelectedDate(dataAverages[newIndex].date);
    handleCardClick(dataAverages[newIndex].date);
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
                    updatePageAndDate(pageIndex - 1);
                  }}
                  type="primary"
                  shape="circle"
                >
                  <Icon type="arrow-left" />
                </Button>
              )}
            </div>
            {dataAverages.length - pageIndex > NUMBER_OF_VISIBLE_CARDS && (
              <div>
                <Button
                  onClick={() => {
                    updatePageAndDate(pageIndex + 1)
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
              if (index >= pageIndex && index < pageIndex + NUMBER_OF_VISIBLE_CARDS) {
                return (
                  <Card
                    key={item.date}
                    temperature={`${tempConverter(
                      item.avgTemp,
                      currentScale
                    )}${currentScale}`}
                    humidity={item.avgHumidity}
                    date={item.date}
                    handleCardClick={handleCardClick}
                    isSelected={selectedDate === item.date}
                  />
                );
              }
            })}
          </div>
          {chartData && <BarChart chartData={chartData} date={selectedDate} scale={currentScale} />}
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
