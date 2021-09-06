(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{121:function(e,t,c){},122:function(e,t,c){},123:function(e,t,c){},125:function(e,t,c){},126:function(e,t,c){},127:function(e,t,c){},251:function(e,t,c){},257:function(e,t,c){"use strict";c.r(t);var s=c(0),i=c.n(s),n=c(11),a=c.n(n),l=(c(121),c(122),c(123),c(2));var j=function(){return Object(l.jsxs)("div",{className:"Footer",children:[Object(l.jsx)("h3",{children:"Covid-19 Interface"}),Object(l.jsxs)("div",{className:"group-credit",children:[Object(l.jsx)("h3",{children:Object(l.jsx)("a",{href:"https://disease.sh/",children:"DISEASE"})}),Object(l.jsx)("h3",{children:Object(l.jsx)("a",{href:"https://www.countryflags.io",children:"FLAG"})})]})]})};c(125);var d=function(){return Object(l.jsx)("div",{className:"Navbar",children:Object(l.jsxs)("div",{className:"nav",children:[Object(l.jsx)("h2",{children:"Covid-19 Interface"}),Object(l.jsx)("a",{href:"https://github.com/Chanasia/Covid-Interface",children:Object(l.jsx)("i",{class:"fab fa-github"})})]})})},r=c(13),o=(c(126),c(127),c(33)),b=c.n(o),h=c(36);function O(e){for(;/(\d+)(\d{3})/.test(e.toString());)e=e.toString().replace(/(\d+)(\d{3})/,"$1,$2");return e}function u(e){var t=new Date(e),c=""+["\u0e21\u0e01\u0e23\u0e32\u0e04\u0e21","\u0e01\u0e38\u0e21\u0e20\u0e32\u0e1e\u0e31\u0e19\u0e18\u0e4c","\u0e21\u0e35\u0e19\u0e32\u0e04\u0e21","\u0e40\u0e21\u0e29\u0e32\u0e22\u0e19","\u0e1e\u0e24\u0e29\u0e20\u0e32\u0e04\u0e21","\u0e21\u0e34\u0e16\u0e38\u0e19\u0e32\u0e22\u0e19","\u0e01\u0e23\u0e01\u0e0e\u0e32\u0e04\u0e21","\u0e2a\u0e34\u0e07\u0e2b\u0e32\u0e04\u0e21","\u0e01\u0e31\u0e19\u0e22\u0e32\u0e22\u0e19","\u0e15\u0e38\u0e25\u0e32\u0e04\u0e21","\u0e1e\u0e24\u0e28\u0e08\u0e34\u0e01\u0e32\u0e22\u0e19","\u0e18\u0e31\u0e19\u0e27\u0e32\u0e04\u0e21"][t.getMonth()],s=""+t.getDate(),i=t.getFullYear()+543;return c.length<2&&(c="0"+c),s.length<2&&(s="0"+s),"\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48 "+s+" "+c+" \u0e1e.\u0e28."+i}var x=function(){var e=Object(s.useState)(null),t=Object(r.a)(e,2),c=t[0],i=t[1],n=Object(s.useState)({}),a=Object(r.a)(n,2),j=a[0],d=a[1],o=Object(s.useState)({}),x=Object(r.a)(o,2),p=x[0],v=x[1],m=function(e){var t=[],c=[],s=[],i=[],n=[];b.a.get("https://disease.sh/v3/covid-19/historical/all?lastdays="+e).then((function(e){n=Object.keys(e.data.cases),t=Object.values(e.data.cases),s=Object.values(e.data.deaths),c=t.map((function(e,c){return c===t.length-1?e-t[c-1]:t[c+1]-e})),i=s.map((function(e,t){return t===s.length-1?e-s[t-1]:s[t+1]-e})),v({labels:n,datasets:[{label:"\u0e15\u0e34\u0e14\u0e40\u0e0a\u0e37\u0e49\u0e2d",data:c,borderColor:"#FF0000",backgroundColor:"#FF0000",fill:!1,cubicInterpolationMode:"monotone",tension:.4},{label:"\u0e40\u0e2a\u0e35\u0e22\u0e0a\u0e35\u0e27\u0e34\u0e15",data:i,borderColor:"#000000",backgroundColor:"#000000",fill:!1,cubicInterpolationMode:"monotone",tension:.4}]})})).catch((function(e){console.log(e)}))};if(Object(s.useEffect)((function(){b.a.get("https://disease.sh/v3/covid-19/all").then((function(e){i(e.data),function(e,t){var c=(t/e*100).toFixed(2);d({labels:["\u0e1b\u0e23\u0e30\u0e0a\u0e32\u0e01\u0e23\u0e17\u0e31\u0e48\u0e27\u0e42\u0e25\u0e01 "+(100-c)+"%","\u0e04\u0e19\u0e15\u0e34\u0e14\u0e40\u0e0a\u0e37\u0e49\u0e2d\u0e2a\u0e30\u0e2a\u0e21 "+c+"%"],datasets:[{label:"\u0e1c\u0e39\u0e49\u0e15\u0e34\u0e14\u0e40\u0e0a\u0e37\u0e49\u0e2d",data:[e,t],backgroundColor:["#1e60c9","#9e1111"]}]})}(e.data.population,e.data.cases)})),m("7")}),[]),!c)return null;var g=new Date;return Object(l.jsxs)("div",{className:"WorldWideCovid",children:[Object(l.jsxs)("div",{className:"WorldWideCovidBoard",children:[Object(l.jsxs)("div",{className:"label",children:[Object(l.jsx)("h2",{children:"Worldwide Covid-19"}),Object(l.jsx)("h2",{children:u(g.getTime())})]}),Object(l.jsxs)("div",{className:"main-group",children:[Object(l.jsxs)("div",{className:"group n1",children:[Object(l.jsxs)("span",{children:[Object(l.jsx)("img",{src:"./img/icon/virus.png",className:"icon"}),Object(l.jsxs)("div",{className:"text",children:[Object(l.jsx)("h4",{children:"\u0e15\u0e34\u0e14\u0e40\u0e0a\u0e37\u0e49\u0e2d\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e02\u0e36\u0e49\u0e19\u0e27\u0e31\u0e19\u0e19\u0e35\u0e49"}),Object(l.jsx)("h2",{children:O(c.todayCases)})]})]}),Object(l.jsxs)("div",{className:"span-inline",children:[Object(l.jsxs)("span",{children:[Object(l.jsx)("img",{src:"./img/icon/skull.png",className:"icon"}),Object(l.jsxs)("div",{className:"text",children:[Object(l.jsx)("h4",{children:"\u0e40\u0e2a\u0e35\u0e22\u0e0a\u0e35\u0e27\u0e34\u0e15\u0e27\u0e31\u0e19\u0e19\u0e35\u0e49"}),Object(l.jsx)("h2",{children:O(c.todayDeaths)})]})]}),Object(l.jsxs)("span",{children:[Object(l.jsx)("img",{src:"./img/icon/patient.png",className:"icon"}),Object(l.jsxs)("div",{className:"text",children:[Object(l.jsx)("h4",{children:"\u0e40\u0e02\u0e49\u0e32\u0e23\u0e31\u0e01\u0e29\u0e32\u0e43\u0e2b\u0e21\u0e48"}),Object(l.jsx)("h2",{children:O(c.todayRecovered)})]})]})]})]}),Object(l.jsxs)("div",{className:"group n2",children:[Object(l.jsxs)("span",{className:"popution",children:[Object(l.jsxs)("div",{className:"label",children:[Object(l.jsx)("img",{src:"./img/icon/people.png",className:"icon"}),Object(l.jsx)("h4",{children:"\u0e1b\u0e23\u0e30\u0e0a\u0e32\u0e01\u0e23\u0e17\u0e31\u0e48\u0e27\u0e42\u0e25\u0e01"})]}),Object(l.jsx)("h2",{children:O(c.population)})]}),Object(l.jsxs)("div",{className:"grid",children:[Object(l.jsxs)("div",{className:"label-group",children:[Object(l.jsxs)("span",{children:[Object(l.jsxs)("div",{className:"label",children:[Object(l.jsx)("img",{src:"./img/icon/virus.png",className:"icon"}),Object(l.jsx)("h4",{children:"\u0e15\u0e34\u0e14\u0e40\u0e0a\u0e37\u0e49\u0e2d\u0e2a\u0e30\u0e2a\u0e21"})]}),Object(l.jsx)("h2",{children:O(c.cases)})]}),Object(l.jsxs)("span",{children:[Object(l.jsxs)("div",{className:"label",children:[Object(l.jsx)("img",{src:"./img/icon/skull.png",className:"icon"}),Object(l.jsx)("h4",{children:"\u0e40\u0e2a\u0e35\u0e22\u0e0a\u0e35\u0e27\u0e34\u0e15\u0e2a\u0e30\u0e2a\u0e21"})]}),Object(l.jsx)("h2",{children:O(c.deaths)})]}),Object(l.jsxs)("span",{children:[Object(l.jsxs)("div",{className:"label",children:[Object(l.jsx)("img",{src:"./img/icon/patient.png",className:"icon"}),Object(l.jsx)("h4",{children:"\u0e23\u0e31\u0e01\u0e29\u0e32\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14"})]}),Object(l.jsx)("h2",{children:O(c.recovered)})]})]}),Object(l.jsx)("div",{className:"chart-pie",children:Object(l.jsx)(h.b,{data:j,options:{rotation:30,responsive:!0,plugins:{legend:{position:"top"}}}})})]})]})]})]}),Object(l.jsx)("div",{className:"display-chart",children:Object(l.jsxs)("div",{className:"ChartWorldWideCovid",children:[Object(l.jsx)(h.a,{data:p,options:{responsive:!0,plugins:{title:{display:!0,text:"Worldwide covid chart"}},interaction:{intersect:!1},scales:{x:{display:!0,title:{display:!0,text:"\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48"}},y:{display:!0,title:{display:!0,text:"\u0e22\u0e2d\u0e14\u0e04\u0e19"}}}}}),Object(l.jsxs)("select",{className:"retrospect-world-wide",onChange:function(e){var t=e.target.value;m(t)},children:[Object(l.jsx)("option",{value:"7",children:"7 \u0e27\u0e31\u0e19\u0e17\u0e35\u0e48\u0e1c\u0e48\u0e32\u0e19\u0e21\u0e32"}),Object(l.jsx)("option",{value:"14",children:"14 \u0e27\u0e31\u0e19\u0e17\u0e35\u0e48\u0e1c\u0e48\u0e32\u0e19\u0e21\u0e32"}),Object(l.jsx)("option",{value:"30",children:"1 \u0e40\u0e14\u0e37\u0e2d\u0e19\u0e1c\u0e48\u0e32\u0e19\u0e21\u0e32"}),Object(l.jsx)("option",{value:"90",children:"3 \u0e40\u0e14\u0e37\u0e2d\u0e19\u0e1c\u0e48\u0e32\u0e19\u0e21\u0e32"})]})]})})]})},p=c(26),v=(c(251),c(295)),m=c(296);function g(e){var t=new Date(e),c=""+["\u0e21\u0e01\u0e23\u0e32\u0e04\u0e21","\u0e01\u0e38\u0e21\u0e20\u0e32\u0e1e\u0e31\u0e19\u0e18\u0e4c","\u0e21\u0e35\u0e19\u0e32\u0e04\u0e21","\u0e40\u0e21\u0e29\u0e32\u0e22\u0e19","\u0e1e\u0e24\u0e29\u0e20\u0e32\u0e04\u0e21","\u0e21\u0e34\u0e16\u0e38\u0e19\u0e32\u0e22\u0e19","\u0e01\u0e23\u0e01\u0e0e\u0e32\u0e04\u0e21","\u0e2a\u0e34\u0e07\u0e2b\u0e32\u0e04\u0e21","\u0e01\u0e31\u0e19\u0e22\u0e32\u0e22\u0e19","\u0e15\u0e38\u0e25\u0e32\u0e04\u0e21","\u0e1e\u0e24\u0e28\u0e08\u0e34\u0e01\u0e32\u0e22\u0e19","\u0e18\u0e31\u0e19\u0e27\u0e32\u0e04\u0e21"][t.getMonth()],s=""+t.getDate(),i=t.getFullYear()+543;return c.length<2&&(c="0"+c),s.length<2&&(s="0"+s),"\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48 "+s+" "+c+" \u0e1e.\u0e28."+i}function f(e){for(;/(\d+)(\d{3})/.test(e.toString());)e=e.toString().replace(/(\d+)(\d{3})/,"$1,$2");return e}var N=function(){var e=[],t=[],c=Object(s.useState)(null),i=Object(r.a)(c,2),n=i[0],a=i[1],j=Object(s.useState)([]),d=Object(r.a)(j,2),o=d[0],O=d[1],u=Object(s.useState)({title:"Thailand",code:"TH",id:201}),x=Object(r.a)(u,2),N=x[0],C=x[1],y=Object(s.useState)({}),S=Object(r.a)(y,2),F=S[0],k=S[1],w=Object(s.useState)({}),I=Object(r.a)(w,2),D=I[0],T=I[1],W=Object(s.useState)("7"),M=Object(r.a)(W,2),E=M[0],B=M[1],L=function(e,t){var c=(t/e*100).toFixed(2);T({labels:["\u0e1b\u0e23\u0e30\u0e0a\u0e32\u0e01\u0e23\u0e17\u0e31\u0e48\u0e27\u0e42\u0e25\u0e01 "+(100-c)+"%","\u0e04\u0e19\u0e15\u0e34\u0e14\u0e40\u0e0a\u0e37\u0e49\u0e2d\u0e2a\u0e30\u0e2a\u0e21 "+c+"%"],datasets:[{label:"\u0e1c\u0e39\u0e49\u0e15\u0e34\u0e14\u0e40\u0e0a\u0e37\u0e49\u0e2d",data:[e,t],backgroundColor:["#1e60c9","#9e1111"]}]})};if(Object(s.useEffect)((function(){b.a.get("https://disease.sh/v3/covid-19/countries").then((function(c){a(c.data),e=c.data,t=e.map((function(e,t){return{title:e.country,code:e.countryInfo.iso2,id:t}})),O(t),L(N?e[N.id].population:0,N?e[N.id].cases:0)}))}),[]),Object(s.useEffect)((function(){!function(e){if(N){var t=[],c=[],s=[],i=[],n=[];b.a.get("https://disease.sh/v3/covid-19/historical/"+N.code+"?lastdays="+e).then((function(e){n=Object.keys(e.data.timeline.cases),t=Object.values(e.data.timeline.cases),s=Object.values(e.data.timeline.deaths),c=t.map((function(e,c){return c===t.length-1?e-t[c-1]:t[c+1]-e})),i=s.map((function(e,t){return t===s.length-1?e-s[t-1]:s[t+1]-e})),k({labels:n,datasets:[{label:"\u0e15\u0e34\u0e14\u0e40\u0e0a\u0e37\u0e49\u0e2d",data:c,borderColor:"#FF0000",backgroundColor:"#FF0000",fill:!1,cubicInterpolationMode:"monotone",tension:.4},{label:"\u0e40\u0e2a\u0e35\u0e22\u0e0a\u0e35\u0e27\u0e34\u0e15",data:i,borderColor:"#000000",backgroundColor:"#000000",fill:!1,cubicInterpolationMode:"monotone",tension:.4}]})})).catch((function(e){console.log(e)}))}else k({})}(E);try{L(N.id?n[N.id].population:0,N?n[N.id].cases:0)}catch(e){L(0,0)}}),[N,E]),!o||!n)return null;var $=new Date;return Object(l.jsxs)("div",{className:"CountryCovid",children:[Object(l.jsxs)("div",{className:"ChooseCountry",children:[Object(l.jsx)("div",{className:"label-choose-country",children:"\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e1b\u0e23\u0e30\u0e40\u0e17\u0e28"}),Object(l.jsx)("div",{className:"autocomplete",children:Object(l.jsx)(m.a,{className:"cp-complete",autoSelect:!0,options:o,onChange:function(e,t){C(t)},defaultValue:{title:"Thailand",code:"TH",id:201},getOptionLabel:function(e){return e.title},renderInput:function(e){return Object(l.jsx)(v.a,Object(p.a)(Object(p.a)({},e),{},{variant:"outlined",label:""}))}})}),Object(l.jsx)("div",{className:N?"flag-img":"flag-img hide",children:Object(l.jsx)("img",{src:N?"https://www.countryflags.io/"+N.code+"/flat/64.png":""})})]}),Object(l.jsxs)("div",{className:"CountryCovidBoard",children:[Object(l.jsxs)("div",{className:"label",children:[Object(l.jsx)("h2",{children:"Country Covid-19"}),Object(l.jsx)("h2",{children:g($.getTime())})]}),Object(l.jsxs)("div",{className:"main-group",children:[Object(l.jsxs)("div",{className:"group n1",children:[Object(l.jsxs)("span",{children:[Object(l.jsx)("img",{src:"./img/icon/virus.png",className:"icon"}),Object(l.jsxs)("div",{className:"text",children:[Object(l.jsx)("h4",{children:"\u0e15\u0e34\u0e14\u0e40\u0e0a\u0e37\u0e49\u0e2d\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e02\u0e36\u0e49\u0e19\u0e27\u0e31\u0e19\u0e19\u0e35\u0e49"}),Object(l.jsx)("h2",{children:f(N?n[N.id].todayCases:0)})]})]}),Object(l.jsxs)("div",{className:"span-inline",children:[Object(l.jsxs)("span",{children:[Object(l.jsx)("img",{src:"./img/icon/skull.png",className:"icon"}),Object(l.jsxs)("div",{className:"text",children:[Object(l.jsx)("h4",{children:"\u0e40\u0e2a\u0e35\u0e22\u0e0a\u0e35\u0e27\u0e34\u0e15\u0e27\u0e31\u0e19\u0e19\u0e35\u0e49"}),Object(l.jsx)("h2",{children:f(N?n[N.id].todayDeaths:0)})]})]}),Object(l.jsxs)("span",{children:[Object(l.jsx)("img",{src:"./img/icon/patient.png",className:"icon"}),Object(l.jsxs)("div",{className:"text",children:[Object(l.jsx)("h4",{children:"\u0e40\u0e02\u0e49\u0e32\u0e23\u0e31\u0e01\u0e29\u0e32\u0e43\u0e2b\u0e21\u0e48"}),Object(l.jsx)("h2",{children:f(N?n[N.id].todayRecovered:0)})]})]})]})]}),Object(l.jsxs)("div",{className:"group n2",children:[Object(l.jsxs)("span",{className:"popution",children:[Object(l.jsxs)("div",{className:"label",children:[Object(l.jsx)("img",{src:"./img/icon/people.png",className:"icon"}),Object(l.jsx)("h4",{children:"\u0e1b\u0e23\u0e30\u0e0a\u0e32\u0e01\u0e23\u0e17\u0e31\u0e49\u0e07\u0e1b\u0e23\u0e30\u0e40\u0e17\u0e28"})]}),Object(l.jsx)("h2",{children:f(N?n[N.id].population:0)})]}),Object(l.jsxs)("div",{className:"grid",children:[Object(l.jsxs)("div",{className:"label-group",children:[Object(l.jsxs)("span",{children:[Object(l.jsxs)("div",{className:"label",children:[Object(l.jsx)("img",{src:"./img/icon/virus.png",className:"icon"}),Object(l.jsx)("h4",{children:"\u0e15\u0e34\u0e14\u0e40\u0e0a\u0e37\u0e49\u0e2d\u0e2a\u0e30\u0e2a\u0e21"})]}),Object(l.jsx)("h2",{children:f(N?n[N.id].cases:0)})]}),Object(l.jsxs)("span",{children:[Object(l.jsxs)("div",{className:"label",children:[Object(l.jsx)("img",{src:"./img/icon/skull.png",className:"icon"}),Object(l.jsx)("h4",{children:"\u0e40\u0e2a\u0e35\u0e22\u0e0a\u0e35\u0e27\u0e34\u0e15\u0e2a\u0e30\u0e2a\u0e21"})]}),Object(l.jsx)("h2",{children:f(N?n[N.id].deaths:0)})]}),Object(l.jsxs)("span",{children:[Object(l.jsxs)("div",{className:"label",children:[Object(l.jsx)("img",{src:"./img/icon/patient.png",className:"icon"}),Object(l.jsx)("h4",{children:"\u0e23\u0e31\u0e01\u0e29\u0e32\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14"})]}),Object(l.jsx)("h2",{children:f(N?n[N.id].recovered:0)})]})]}),Object(l.jsx)("div",{className:"chart-pie",children:Object(l.jsx)(h.b,{data:D,options:{rotation:30,responsive:!0,plugins:{legend:{position:"top"}}}})})]})]})]})]}),Object(l.jsxs)("div",{className:"ChartCountry",children:[Object(l.jsx)(h.a,{data:N?F:null,options:{responsive:!0,plugins:{title:{display:!0,text:"Worldwide covid chart"}},interaction:{intersect:!1},scales:{x:{display:!0,title:{display:!0,text:"\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48"}},y:{display:!0,title:{display:!0,text:"\u0e22\u0e2d\u0e14\u0e04\u0e19"}}}}}),Object(l.jsxs)("select",{className:"retrospect-country",onChange:function(e){var t=e.target.value;B(t)},children:[Object(l.jsx)("option",{value:"7",children:"7 \u0e27\u0e31\u0e19\u0e17\u0e35\u0e48\u0e1c\u0e48\u0e32\u0e19\u0e21\u0e32"}),Object(l.jsx)("option",{value:"14",children:"14 \u0e27\u0e31\u0e19\u0e17\u0e35\u0e48\u0e1c\u0e48\u0e32\u0e19\u0e21\u0e32"}),Object(l.jsx)("option",{value:"30",children:"1 \u0e40\u0e14\u0e37\u0e2d\u0e19\u0e1c\u0e48\u0e32\u0e19\u0e21\u0e32"}),Object(l.jsx)("option",{value:"90",children:"3 \u0e40\u0e14\u0e37\u0e2d\u0e19\u0e1c\u0e48\u0e32\u0e19\u0e21\u0e32"})]})]})]})};var C=function(){var e=Object(s.useState)(1),t=Object(r.a)(e,2),c=t[0],i=t[1],n=function(e){i(e)};return Object(l.jsxs)("div",{className:"Tab",children:[Object(l.jsxs)("div",{className:"block-tabs",children:[Object(l.jsx)("div",{className:1===c?"tabs active":"tabs",onClick:function(){n(1)},children:"\u0e1c\u0e39\u0e49\u0e04\u0e19\u0e17\u0e31\u0e48\u0e27\u0e42\u0e25\u0e01"}),Object(l.jsx)("div",{className:2===c?"tabs active":"tabs",onClick:function(){n(2)},children:"\u0e1c\u0e39\u0e49\u0e04\u0e19\u0e43\u0e19\u0e1b\u0e23\u0e30\u0e40\u0e17\u0e28"})]}),Object(l.jsxs)("div",{className:"content-tabs",children:[Object(l.jsx)("div",{className:1===c?"content active":"content",children:Object(l.jsx)(x,{})}),Object(l.jsx)("div",{className:2===c?"content active":"content",children:Object(l.jsx)(N,{})})]})]})};var y=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(d,{}),Object(l.jsx)(C,{}),Object(l.jsx)(j,{})]})},S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,298)).then((function(t){var c=t.getCLS,s=t.getFID,i=t.getFCP,n=t.getLCP,a=t.getTTFB;c(e),s(e),i(e),n(e),a(e)}))};a.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(y,{})}),document.getElementById("root")),S()}},[[257,1,2]]]);
//# sourceMappingURL=main.1054cc8c.chunk.js.map