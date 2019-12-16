export const SUCCESSFUL = "fetch_successful";
export const UNSUCCESSFUL = "fetch_unsuccessful";
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
    // categories: ["Jan", "Feb", "Mar"]
  },
  yAxis: {
    min: 0,
    title: {
      text: "Temperature"
    }
  },
  tooltip: {
    // headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    // pointFormat:
    //   '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
    //   '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
    // footerFormat: "</table>",
    // shared: true,
    // useHTML: true
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0
    }
  },
//   series: [
//     {
//       name: "DATE----",
//       data: [49.9, 71.5, 106.4]
//     }
//   ],
  credits: { enabled: false }
};
