export const SUCCESSFUL = "fetch_successful";
export const UNSUCCESSFUL = "fetch_unsuccessful";
export const SERVER_DATE_FORMAT = 'YYYY-MM-DD';
export const DATE_FORMAT = 'DD MMMM, YYYY';
export const chartConfig = {
  chart: {
    type: "column"
  },
  title: {
    text: ""
  },
  subtitle: {
    text: ""
  },
  xAxis: {
    categories: []
  },
  yAxis: {
    title: {
      text: "Temperature"
    }
  },
  tooltip: {
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0
    }
  },
  credits: { enabled: false }
};
