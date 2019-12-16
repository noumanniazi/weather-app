import {
  convertToFahrenheit,
  tempConverter,
  uniqDates,
  calculateAvgTempAndHumidityOfDays,
  getFirstDay,
  calculateChartsData
} from "../helpers";

const list = [
    {
      dt: 1576530000,
      main: {
        temp: 1.33,
        feels_like: -2.48,
        temp_min: 1.33,
        temp_max: 4.51,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 937,
        humidity: 80,
        temp_kf: -3.18
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n"
        }
      ],
      clouds: {
        all: 61
      },
      wind: {
        speed: 2.26,
        deg: 161
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2019-12-16 21:00:00"
    },
    {
      dt: 1576540800,
      main: {
        temp: 1.86,
        feels_like: -1.31,
        temp_min: 1.86,
        temp_max: 4.25,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 937,
        humidity: 82,
        temp_kf: -2.39
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n"
        }
      ],
      clouds: {
        all: 58
      },
      wind: {
        speed: 1.52,
        deg: 162
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2019-12-17 00:00:00"
    },
    {
      dt: 1576551600,
      main: {
        temp: 2.79,
        feels_like: -0.33,
        temp_min: 2.79,
        temp_max: 4.38,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 936,
        humidity: 81,
        temp_kf: -1.59
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n"
        }
      ],
      clouds: {
        all: 67
      },
      wind: {
        speed: 1.59,
        deg: 175
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2019-12-17 03:00:00"
    },
    {
      dt: 1576562400,
      main: {
        temp: 3.61,
        feels_like: 0.43,
        temp_min: 3.61,
        temp_max: 4.41,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 937,
        humidity: 82,
        temp_kf: -0.8
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n"
        }
      ],
      clouds: {
        all: 83
      },
      wind: {
        speed: 1.89,
        deg: 205
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2019-12-17 06:00:00"
    },
    {
      dt: 1576573200,
      main: {
        temp: 6.75,
        feels_like: 3.82,
        temp_min: 6.75,
        temp_max: 6.75,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 938,
        humidity: 74,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d"
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 1.9,
        deg: 195
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2019-12-17 09:00:00"
    },
    {
      dt: 1576584000,
      main: {
        temp: 10.38,
        feels_like: 8.4,
        temp_min: 10.38,
        temp_max: 10.38,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 938,
        humidity: 68,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d"
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 1.14,
        deg: 184
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2019-12-17 12:00:00"
    },
    {
      dt: 1576594800,
      main: {
        temp: 7.79,
        feels_like: 5.63,
        temp_min: 7.79,
        temp_max: 7.79,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 939,
        humidity: 78,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d"
        }
      ],
      clouds: {
        all: 98
      },
      wind: {
        speed: 1.25,
        deg: 122
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2019-12-17 15:00:00"
    },
    {
      dt: 1576605600,
      main: {
        temp: 5.89,
        feels_like: 3.16,
        temp_min: 5.89,
        temp_max: 5.89,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 940,
        humidity: 81,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n"
        }
      ],
      clouds: {
        all: 90
      },
      wind: {
        speed: 1.73,
        deg: 169
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2019-12-17 18:00:00"
    },
    {
      dt: 1576616400,
      main: {
        temp: 4.82,
        feels_like: 1.92,
        temp_min: 4.82,
        temp_max: 4.82,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 941,
        humidity: 84,
        temp_kf: 0
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n"
        }
      ],
      clouds: {
        all: 41
      },
      wind: {
        speed: 1.84,
        deg: 210
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2019-12-17 21:00:00"
    },
    {
      dt: 1576627200,
      main: {
        temp: 4.87,
        feels_like: 1.81,
        temp_min: 4.87,
        temp_max: 4.87,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 943,
        humidity: 84,
        temp_kf: 0
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n"
        }
      ],
      clouds: {
        all: 48
      },
      wind: {
        speed: 2.07,
        deg: 190
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2019-12-18 00:00:00"
    },
    {
      dt: 1576638000,
      main: {
        temp: 4.87,
        feels_like: 2.03,
        temp_min: 4.87,
        temp_max: 4.87,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 943,
        humidity: 85,
        temp_kf: 0
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n"
        }
      ],
      clouds: {
        all: 46
      },
      wind: {
        speed: 1.81,
        deg: 218
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2019-12-18 03:00:00"
    },
    {
      dt: 1576648800,
      main: {
        temp: 5.15,
        feels_like: 2.45,
        temp_min: 5.15,
        temp_max: 5.15,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 945,
        humidity: 82,
        temp_kf: 0
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n"
        }
      ],
      clouds: {
        all: 70
      },
      wind: {
        speed: 1.55,
        deg: 202
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2019-12-18 06:00:00"
    },
    {
      dt: 1576659600,
      main: {
        temp: 6.94,
        feels_like: 4.9,
        temp_min: 6.94,
        temp_max: 6.94,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 947,
        humidity: 77,
        temp_kf: 0
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d"
        }
      ],
      clouds: {
        all: 79
      },
      wind: {
        speed: 0.81,
        deg: 197
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2019-12-18 09:00:00"
    },
    {
      dt: 1576670400,
      main: {
        temp: 10.51,
        feels_like: 8.43,
        temp_min: 10.51,
        temp_max: 10.51,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 946,
        humidity: 66,
        temp_kf: 0
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d"
        }
      ],
      clouds: {
        all: 67
      },
      wind: {
        speed: 1.21,
        deg: 83
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2019-12-18 12:00:00"
    },
    {
      dt: 1576681200,
      main: {
        temp: 6.73,
        feels_like: 4.39,
        temp_min: 6.73,
        temp_max: 6.73,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 946,
        humidity: 82,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d"
        }
      ],
      clouds: {
        all: 7
      },
      wind: {
        speed: 1.42,
        deg: 79
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2019-12-18 15:00:00"
    },
    {
      dt: 1576692000,
      main: {
        temp: 4.97,
        feels_like: 2.54,
        temp_min: 4.97,
        temp_max: 4.97,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 946,
        humidity: 89,
        temp_kf: 0
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n"
        }
      ],
      clouds: {
        all: 46
      },
      wind: {
        speed: 1.41,
        deg: 110
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2019-12-18 18:00:00"
    },
    {
      dt: 1576702800,
      main: {
        temp: 4.98,
        feels_like: 2.83,
        temp_min: 4.98,
        temp_max: 4.98,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 945,
        humidity: 89,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n"
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 1.01,
        deg: 106
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2019-12-18 21:00:00"
    },
    {
      dt: 1576713600,
      main: {
        temp: 4.96,
        feels_like: 2.92,
        temp_min: 4.96,
        temp_max: 4.96,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 944,
        humidity: 86,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n"
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 0.73,
        deg: 118
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2019-12-19 00:00:00"
    },
    {
      dt: 1576724400,
      main: {
        temp: 3.96,
        feels_like: 1.81,
        temp_min: 3.96,
        temp_max: 3.96,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 943,
        humidity: 88,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n"
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 0.72,
        deg: 205
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2019-12-19 03:00:00"
    },
    {
      dt: 1576735200,
      main: {
        temp: 3.82,
        feels_like: 1.16,
        temp_min: 3.82,
        temp_max: 3.82,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 943,
        humidity: 84,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n"
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 1.26,
        deg: 176
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2019-12-19 06:00:00"
    },
    {
      dt: 1576746000,
      main: {
        temp: 6.14,
        feels_like: 4.01,
        temp_min: 6.14,
        temp_max: 6.14,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 942,
        humidity: 72,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d"
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 0.53,
        deg: 81
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2019-12-19 09:00:00"
    },
    {
      dt: 1576756800,
      main: {
        temp: 9.44,
        feels_like: 7.16,
        temp_min: 9.44,
        temp_max: 9.44,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 940,
        humidity: 62,
        temp_kf: 0
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d"
        }
      ],
      clouds: {
        all: 73
      },
      wind: {
        speed: 1,
        deg: 82
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2019-12-19 12:00:00"
    },
    {
      dt: 1576767600,
      main: {
        temp: 5.93,
        feels_like: 3.74,
        temp_min: 5.93,
        temp_max: 5.93,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 938,
        humidity: 84,
        temp_kf: 0
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d"
        }
      ],
      clouds: {
        all: 31
      },
      wind: {
        speed: 1.09,
        deg: 80
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2019-12-19 15:00:00"
    },
    {
      dt: 1576778400,
      main: {
        temp: 4.91,
        feels_like: 2.61,
        temp_min: 4.91,
        temp_max: 4.91,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 937,
        humidity: 90,
        temp_kf: 0
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n"
        }
      ],
      clouds: {
        all: 66
      },
      wind: {
        speed: 1.25,
        deg: 186
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2019-12-19 18:00:00"
    },
    {
      dt: 1576789200,
      main: {
        temp: 5.23,
        feels_like: 2.24,
        temp_min: 5.23,
        temp_max: 5.23,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 937,
        humidity: 80,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n"
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 1.89,
        deg: 201
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2019-12-19 21:00:00"
    },
    {
      dt: 1576800000,
      main: {
        temp: 3.93,
        feels_like: 1.08,
        temp_min: 3.93,
        temp_max: 3.93,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 935,
        humidity: 83,
        temp_kf: 0
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n"
        }
      ],
      clouds: {
        all: 66
      },
      wind: {
        speed: 1.52,
        deg: 209
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2019-12-20 00:00:00"
    },
    {
      dt: 1576810800,
      main: {
        temp: 3.33,
        feels_like: 0.37,
        temp_min: 3.33,
        temp_max: 3.33,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 934,
        humidity: 84,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n"
        }
      ],
      clouds: {
        all: 0
      },
      wind: {
        speed: 1.58,
        deg: 159
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2019-12-20 03:00:00"
    },
    {
      dt: 1576821600,
      main: {
        temp: 3.26,
        feels_like: -0.28,
        temp_min: 3.26,
        temp_max: 3.26,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 931,
        humidity: 84,
        temp_kf: 0
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02n"
        }
      ],
      clouds: {
        all: 18
      },
      wind: {
        speed: 2.39,
        deg: 121
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2019-12-20 06:00:00"
    },
    {
      dt: 1576832400,
      main: {
        temp: 6.61,
        feels_like: 2.3,
        temp_min: 6.61,
        temp_max: 6.61,
        pressure: 1002,
        sea_level: 1002,
        grnd_level: 928,
        humidity: 68,
        temp_kf: 0
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d"
        }
      ],
      clouds: {
        all: 33
      },
      wind: {
        speed: 3.57,
        deg: 118
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2019-12-20 09:00:00"
    },
    {
      dt: 1576843200,
      main: {
        temp: 11.69,
        feels_like: 8.42,
        temp_min: 11.69,
        temp_max: 11.69,
        pressure: 997,
        sea_level: 997,
        grnd_level: 924,
        humidity: 57,
        temp_kf: 0
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d"
        }
      ],
      clouds: {
        all: 51
      },
      wind: {
        speed: 2.65,
        deg: 142
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2019-12-20 12:00:00"
    },
    {
      dt: 1576854000,
      main: {
        temp: 9.03,
        feels_like: 5.31,
        temp_min: 9.03,
        temp_max: 9.03,
        pressure: 996,
        sea_level: 996,
        grnd_level: 922,
        humidity: 69,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d"
        }
      ],
      clouds: {
        all: 89
      },
      wind: {
        speed: 3.33,
        deg: 131
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2019-12-20 15:00:00"
    },
    {
      dt: 1576864800,
      main: {
        temp: 7.13,
        feels_like: 2.14,
        temp_min: 7.13,
        temp_max: 7.13,
        pressure: 998,
        sea_level: 998,
        grnd_level: 925,
        humidity: 76,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n"
        }
      ],
      clouds: {
        all: 94
      },
      wind: {
        speed: 5.03,
        deg: 267
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2019-12-20 18:00:00"
    },
    {
      dt: 1576875600,
      main: {
        temp: 4.98,
        feels_like: 1.65,
        temp_min: 4.98,
        temp_max: 4.98,
        pressure: 1000,
        sea_level: 1000,
        grnd_level: 928,
        humidity: 87,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n"
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 2.61,
        deg: 256
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2019-12-20 21:00:00"
    },
    {
      dt: 1576886400,
      main: {
        temp: 4.69,
        feels_like: 0.06,
        temp_min: 4.69,
        temp_max: 4.69,
        pressure: 1002,
        sea_level: 1002,
        grnd_level: 930,
        humidity: 93,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n"
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 4.64,
        deg: 263
      },
      rain: {
        "3h": 1.88
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2019-12-21 00:00:00"
    },
    {
      dt: 1576897200,
      main: {
        temp: 3.94,
        feels_like: 0.42,
        temp_min: 3.94,
        temp_max: 3.94,
        pressure: 1003,
        sea_level: 1003,
        grnd_level: 931,
        humidity: 96,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n"
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 2.98,
        deg: 252
      },
      rain: {
        "3h": 2.75
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2019-12-21 03:00:00"
    },
    {
      dt: 1576908000,
      main: {
        temp: 3.32,
        feels_like: -0.41,
        temp_min: 3.32,
        temp_max: 3.32,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 933,
        humidity: 96,
        temp_kf: 0
      },
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "moderate rain",
          icon: "10n"
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 3.12,
        deg: 237
      },
      rain: {
        "3h": 3.31
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2019-12-21 06:00:00"
    },
    {
      dt: 1576918800,
      main: {
        temp: 4.63,
        feels_like: 0.48,
        temp_min: 4.63,
        temp_max: 4.63,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 935,
        humidity: 88,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 3.74,
        deg: 237
      },
      rain: {
        "3h": 0.63
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2019-12-21 09:00:00"
    },
    {
      dt: 1576929600,
      main: {
        temp: 6.28,
        feels_like: 1.78,
        temp_min: 6.28,
        temp_max: 6.28,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 935,
        humidity: 78,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ],
      clouds: {
        all: 95
      },
      wind: {
        speed: 4.22,
        deg: 261
      },
      rain: {
        "3h": 0.25
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2019-12-21 12:00:00"
    },
    {
      dt: 1576940400,
      main: {
        temp: 4.22,
        feels_like: 1.16,
        temp_min: 4.22,
        temp_max: 4.22,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 936,
        humidity: 87,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ],
      clouds: {
        all: 91
      },
      wind: {
        speed: 2.04,
        deg: 247
      },
      rain: {
        "3h": 0.25
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2019-12-21 15:00:00"
    },
    {
      dt: 1576951200,
      main: {
        temp: 1.82,
        feels_like: -1.52,
        temp_min: 1.82,
        temp_max: 1.82,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 937,
        humidity: 93,
        temp_kf: 0
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n"
        }
      ],
      clouds: {
        all: 47
      },
      wind: {
        speed: 2.11,
        deg: 201
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2019-12-21 18:00:00"
    }
  ];

describe("Testing Helpers Functions", () => {
    describe("Testing convertToFahrenheit", () => {
        it("Checks if convertToFahrenheit is working correctly", () => {
        expect(convertToFahrenheit(35)).toEqual(95);
        });
      });
  describe("tests tempConverter scenarios", () => {
    it("Checks if scale is 'C'", () => {
      expect(tempConverter(30, "C")).toEqual(30);
    });
    it("Checks if scale is 'F'", () => {
      expect(tempConverter(30, "F")).toEqual(86);
    });
  });
  describe("tests uniqDates", () => {
    it("Checks if uniqDates function is working correctly", () => {
      expect(uniqDates(list)).toEqual([
        "2019-12-16",
        "2019-12-17",
        "2019-12-18",
        "2019-12-19",
        "2019-12-20",
        "2019-12-21"
      ]);
    });
  });
  describe("tests getFirstDay", () => {
    it("Checks if getFirstDay function is working correctly", () => {
      expect(getFirstDay(list)).toEqual("2019-12-16");
    });
  });
  describe("tests calculateChartsData", () => {
    it("Checks if calculateChartsData function is working correctly", () => {
      expect(calculateChartsData("2019-12-16",list)).toEqual({"categories": ["21:00:00"], "series": [1.33]});
    });
  });
  describe("tests calculateAvgTempAndHumidityOfDays", () => {
    it("Checks if calculateAvgTempAndHumidityOfDays function is working correctly", () => {
      expect(calculateAvgTempAndHumidityOfDays(list)).toEqual([{"avgHumidity": 80, "avgTemp": 1.33, "date": "2019-12-16"}, {"avgHumidity": 78.75, "avgTemp": 5.48625, "date": "2019-12-17"}, {"avgHumidity": 81.75, "avgTemp": 6.127500000000001, "date": "2019-12-18"}, {"avgHumidity": 80.75, "avgTemp": 5.54875, "date": "2019-12-19"}, {"avgHumidity": 76, "avgTemp": 6.245000000000001, "date": "2019-12-20"}, {"avgHumidity": 90.14, "avgTemp": 4.128571428571429, "date": "2019-12-21"}]);
    });
  });
});
