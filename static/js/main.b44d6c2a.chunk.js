(this.webpackJsonpoptileweathertest=this.webpackJsonpoptileweathertest||[]).push([[0],{110:function(e,t,a){},204:function(e,t,a){},213:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(25),i=a.n(c),u=a(32),s=a(93),l=a(43),o=(a(108),a(10)),m=a(64),d=a.n(m),p=a(34),f=a(65),h=a.n(f),v=a(19),g=a.n(v),E=a(98),b=a.n(E),y={chart:{type:"column"},title:{text:""},subtitle:{text:""},xAxis:{categories:[]},yAxis:{title:{text:"Temperature"}},tooltip:{},plotOptions:{column:{pointPadding:.2,borderWidth:0}},credits:{enabled:!1}},S=a(35),j=function(e,t){return"C"===t?Math.round(100*e)/100:Math.round(100*(9*e/5+32))/100},O=function(e){return function(e){return e.reduce((function(e,t){var a=t.dt_txt.split(" ")[0];return e.includes(a)?Object(S.a)(e):[].concat(Object(S.a)(e),[a])}),[])}(e).map((function(t){var a=e.reduce((function(e,a){return a.dt_txt.split(" ")[0]===t?{temperatureSum:e.temperatureSum+a.main.temp,humiditySum:e.humiditySum+a.main.humidity,count:e.count+1}:{temperatureSum:e.temperatureSum,humiditySum:e.humiditySum,count:e.count}}),{temperatureSum:0,humiditySum:0,count:0});return{date:t,avgTemp:a.temperatureSum/a.count,avgHumidity:Math.round(a.humiditySum/a.count*100)/100}}))},x=function(e){return e.dt_txt.split(" ")},C=function(e){return x(e[0])[0]},w=function(e,t){return t.reduce((function(t,a){var n=x(a);return n[0]===e?{categories:[].concat(Object(S.a)(t.categories),[n[1]]),series:[].concat(Object(S.a)(t.series),[a.main.temp])}:Object(o.a)({},t)}),{categories:[],series:[]})},_="http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=".concat("75f972b80e26f14fe6c920aa6a85ad57","&cnt=40&units=metric"),F=a(1),N=a.n(F),k=a(95),q=a.n(k),A=(a(110),function(e){var t=e.temperature,a=e.date,n=e.humidity,c=e.handleCardClick,i=e.isSelected;return r.a.createElement("div",{className:"cardWrapper ".concat(!0===i?"selected":""),onClick:function(){c(a)}},r.a.createElement(q.a,{hoverable:!0},r.a.createElement("div",null,r.a.createElement("span",{className:"bold-text"},"Temp: "),r.a.createElement("span",null,t)),r.a.createElement("div",null,r.a.createElement("span",{className:"bold-text"},"Date: "),r.a.createElement("span",null,a)),r.a.createElement("div",null,r.a.createElement("span",{className:"bold-text"},"humidity: "),r.a.createElement("span",null,n))))});A.prototype={temperature:N.a.string.isRequired,date:N.a.string.isRequired,humidity:N.a.string.isRequired,handleCardClick:N.a.func.isRequired,isSelected:N.a.bool.isRequired};var D=A,R=(a(204),a(44)),P=a.n(R),T=function(e){var t=e.currentScale,a=e.setCurrentScale;return r.a.createElement("div",{className:"temperature-scale"},r.a.createElement(P.a.Group,{onChange:function(e){a(e.target.value)},value:t},r.a.createElement(P.a,{value:"C"},"Celsius"),r.a.createElement(P.a,{value:"F"},"Fahrenheit")))};T.prototype={currentScale:N.a.string.isRequired,setCurrentScale:N.a.func.isRequired};var M=T,W=a(97),H=a.n(W),I=function(e){var t=e.chartData,a=e.date,n=e.scale,c=t.series.map((function(e){return j(e,n)})),i=Object(o.a)({},y,{series:[{name:a,data:c}],xAxis:{categories:t.categories},yAxis:Object(o.a)({},y.yAxis,{title:{text:"Temperature(".concat(n,")")}})});return r.a.createElement(H.a,{config:i})};I.defaultProps={date:""};var J=I,z=Object(l.b)((function(e){return Object(o.a)({},e)}),{stopFetching:function(){return function(e){e({type:"stop_fetching"})}},startFetching:function(){return function(e){e({type:"start_fetching"})}},fetchData:function(){return function(e){return new Promise((function(t,a){fetch(_).then((function(e){return e.json()})).then((function(a){e({type:"fetch_data",payload:a}),t("fetch_successful")})).catch((function(e){a("fetch_unsuccessful")}))}))}}})((function(e){var t=Object(n.useState)("C"),a=Object(p.a)(t,2),c=a[0],i=a[1],u=Object(n.useState)(0),s=Object(p.a)(u,2),l=s[0],o=s[1],m=Object(n.useState)(null),f=Object(p.a)(m,2),v=f[0],E=f[1],y=Object(n.useState)(null),S=Object(p.a)(y,2),x=S[0],_=S[1];Object(n.useEffect)((function(){e.startFetching();return d.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.awrap(e.fetchData());case 2:t.sent,e.stopFetching();case 4:case"end":return t.stop()}})),function(){}}),[]);var F=e.isFetching,N=e.data.list,k=[];N&&(k=O(N),x||(E(C(N)),_(w(C(N),N))));var q=function(e){e!==v&&(_(w(e,N)),E(e))};return r.a.createElement("div",null,F&&r.a.createElement("div",{className:"loading-screen"},r.a.createElement(b.a,{size:"large",tip:"Loading Weather Data..."})),!F&&r.a.createElement("div",{className:"content-container"},r.a.createElement(M,{currentScale:c,setCurrentScale:i}),r.a.createElement("div",{className:"buttons-container"},r.a.createElement("div",null,l>0&&r.a.createElement(h.a,{onClick:function(){o(l-1)},type:"primary",shape:"circle"},r.a.createElement(g.a,{type:"arrow-left"}))),k.length-l>3&&r.a.createElement("div",null,r.a.createElement(h.a,{onClick:function(){o(l+1)},type:"primary",shape:"circle"},r.a.createElement(g.a,{type:"arrow-right"})))),r.a.createElement("div",{className:"temp-cards"},k.map((function(e,t){if(t>=l&&t<l+3)return r.a.createElement(D,{key:e.date,temperature:"".concat(j(e.avgTemp,c)).concat(c),humidity:e.avgHumidity,date:e.date,handleCardClick:q,isSelected:v===e.date})}))),x&&r.a.createElement(J,{chartData:x,date:v,scale:c})))}));var B=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(z,null))},G={isFetching:!1,data:{}},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"start_fetching":return Object(o.a)({},e,{isFetching:!0});case"fetch_data":return Object(o.a)({},e,{data:t.payload});case"stop_fetching":return Object(o.a)({},e,{isFetching:!1});default:return e}};i.a.render(r.a.createElement(l.a,{store:Object(u.c)(L,Object(u.a)(s.a))},r.a.createElement(B,null)),document.getElementById("root"))},99:function(e,t,a){e.exports=a(213)}},[[99,1,2]]]);
//# sourceMappingURL=main.b44d6c2a.chunk.js.map