const convertToFahrenheit = celsius => {
  return (celsius * 9) / 5 + 32;
};
export const tempConverter = (temp, scale) => {
  if (scale === "C") {
    return Math.round(temp * 100) / 100;
  }
  return Math.round(convertToFahrenheit(temp) * 100) / 100;
};

export const uniqDates = data => data.reduce((accum, item) => {
	const date = item.dt_txt.split(" ")[0];
	if (!accum.includes(date)) {
		return [...accum, date];
	}
	return [...accum];
}, []);
export const calculateAvgTempAndHumidityOfDays = data => {
  const uniqueDates = uniqDates(data);
  const avgTemps = uniqueDates.map(date => {
    const compiledDayData = data.reduce(
      (accum, item) => {
        if (item.dt_txt.split(" ")[0] === date) {
          // assuming that avg of 5 days will be calculated from temp of each day and not by avg single day then avg all days
          return {
            temperatureSum: accum.temperatureSum + item.main.temp,
            humiditySum: accum.humiditySum + item.main.humidity,
            count: accum.count + 1
          };
        }
        return {
          temperatureSum: accum.temperatureSum,
          humiditySum: accum.humiditySum,
          count: accum.count
        };
      },
      { temperatureSum: 0, humiditySum: 0, count: 0 }
    );
    return {
      date: date,
      avgTemp: compiledDayData.temperatureSum / compiledDayData.count,
      avgHumidity:
        Math.round(
          (compiledDayData.humiditySum / compiledDayData.count) * 100
        ) / 100
    };
  });
  return avgTemps;
};
