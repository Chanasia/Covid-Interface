(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{121:function(e,c,t){},122:function(e,c,t){},123:function(e,c,t){},125:function(e,c,t){},126:function(e,c,t){},250:function(e,c,t){},251:function(e,c,t){},257:function(e,c,t){"use strict";t.r(c);var s=t(0),n=t.n(s),i=t(11),a=t.n(i),l=(t(121),t(122),t(123),t(2));var j=function(){return Object(l.jsx)("div",{className:"Navbar",children:Object(l.jsxs)("div",{className:"nav",children:[Object(l.jsx)("h2",{children:"Covid-19 Interface"}),Object(l.jsx)("h2",{children:"About"}),Object(l.jsx)("i",{class:"fab fa-github"})]})})},r=t(14),d=(t(125),t(126),t(108)),o=t(33),b=t.n(o);var h=function(){var e=Object(s.useState)({}),c=Object(r.a)(e,2),t=c[0],n=c[1],i=function(e){var c=[],t=[],s=[],i=[],a=[];b.a.get("https://disease.sh/v3/covid-19/historical/all?lastdays="+e).then((function(e){a=Object.keys(e.data.cases),c=Object.values(e.data.cases),s=Object.values(e.data.deaths),t=c.map((function(e,t){return t===c.length-1?e-c[t-1]:c[t+1]-e})),i=s.map((function(e,c){return c===s.length-1?e-s[c-1]:s[c+1]-e})),n({labels:a,datasets:[{label:"\u0e15\u0e34\u0e14\u0e40\u0e0a\u0e37\u0e49\u0e2d",data:t,borderColor:"#FF0000",backgroundColor:"#FF0000",fill:!1,cubicInterpolationMode:"monotone",tension:.4},{label:"\u0e40\u0e2a\u0e35\u0e22\u0e0a\u0e35\u0e27\u0e34\u0e15",data:i,borderColor:"#000000",backgroundColor:"#000000",fill:!1,cubicInterpolationMode:"monotone",tension:.4}]})})).catch((function(e){console.log(e)}))};return Object(s.useEffect)((function(){i(7)}),[]),Object(l.jsxs)("div",{className:"ChartWorldWideCovid",children:[Object(l.jsx)(d.a,{data:t,options:{responsive:!0,plugins:{title:{display:!0,text:"Worldwide covid chart"}},interaction:{intersect:!1},scales:{x:{display:!0,title:{display:!0,text:"\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48"}},y:{display:!0,title:{display:!0,text:"\u0e22\u0e2d\u0e14\u0e04\u0e19"}}}}}),Object(l.jsxs)("select",{className:"retrospect-world-wide",onChange:function(e){var c,t=e.target.value;i("1"===(c=t)?7:"2"===c?14:"3"===c?30:"4"===c?90:0)},children:[Object(l.jsx)("option",{value:"1",children:"7 \u0e27\u0e31\u0e19\u0e17\u0e35\u0e48\u0e1c\u0e48\u0e32\u0e19\u0e21\u0e32"}),Object(l.jsx)("option",{value:"2",children:"14 \u0e27\u0e31\u0e19\u0e17\u0e35\u0e48\u0e1c\u0e48\u0e32\u0e19\u0e21\u0e32"}),Object(l.jsx)("option",{value:"3",children:"1 \u0e40\u0e14\u0e37\u0e2d\u0e19\u0e1c\u0e48\u0e32\u0e19\u0e21\u0e32"}),Object(l.jsx)("option",{value:"4",children:"3 \u0e40\u0e14\u0e37\u0e2d\u0e19\u0e1c\u0e48\u0e32\u0e19\u0e21\u0e32"})]})]})};t(250);function O(e){for(;/(\d+)(\d{3})/.test(e.toString());)e=e.toString().replace(/(\d+)(\d{3})/,"$1,$2");return e}function x(e){var c=new Date(e),t=""+["\u0e21\u0e01\u0e23\u0e32\u0e04\u0e21","\u0e01\u0e38\u0e21\u0e20\u0e32\u0e1e\u0e31\u0e19\u0e18\u0e4c","\u0e21\u0e35\u0e19\u0e32\u0e04\u0e21","\u0e40\u0e21\u0e29\u0e32\u0e22\u0e19","\u0e1e\u0e24\u0e29\u0e20\u0e32\u0e04\u0e21","\u0e21\u0e34\u0e16\u0e38\u0e19\u0e32\u0e22\u0e19","\u0e01\u0e23\u0e01\u0e0e\u0e32\u0e04\u0e21","\u0e2a\u0e34\u0e07\u0e2b\u0e32\u0e04\u0e21","\u0e01\u0e31\u0e19\u0e22\u0e32\u0e22\u0e19","\u0e15\u0e38\u0e25\u0e32\u0e04\u0e21","\u0e1e\u0e24\u0e28\u0e08\u0e34\u0e01\u0e32\u0e22\u0e19","\u0e18\u0e31\u0e19\u0e27\u0e32\u0e04\u0e21"][c.getMonth()],s=""+c.getDate(),n=c.getFullYear()+543;return t.length<2&&(t="0"+t),s.length<2&&(s="0"+s),"\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48 "+s+" "+t+" \u0e1e.\u0e28."+n}var u=function(){var e=Object(s.useState)(null),c=Object(r.a)(e,2),t=c[0],n=c[1];if(Object(s.useEffect)((function(){b.a.get("https://disease.sh/v3/covid-19/all").then((function(e){n(e.data)}))}),[]),!t)return null;var i=new Date;return Object(l.jsxs)("div",{className:"WorldWideCovidBoard",children:[Object(l.jsxs)("div",{className:"label",children:[Object(l.jsx)("h2",{children:"Worldwide Covid-19"}),Object(l.jsx)("h2",{children:x(i.getTime())})]}),Object(l.jsxs)("div",{className:"main-group",children:[Object(l.jsxs)("div",{className:"group n1",children:[Object(l.jsxs)("span",{children:[Object(l.jsx)("img",{src:"./img/icon/virus.png",className:"icon"}),Object(l.jsxs)("div",{className:"text",children:[Object(l.jsx)("h4",{children:"\u0e15\u0e34\u0e14\u0e40\u0e0a\u0e37\u0e49\u0e2d\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e02\u0e36\u0e49\u0e19\u0e27\u0e31\u0e19\u0e19\u0e35\u0e49"}),Object(l.jsx)("h2",{children:O(t.todayCases)})]})]}),Object(l.jsxs)("div",{className:"span-inline",children:[Object(l.jsxs)("span",{children:[Object(l.jsx)("img",{src:"./img/icon/skull.png",className:"icon"}),Object(l.jsxs)("div",{className:"text",children:[Object(l.jsx)("h4",{children:"\u0e40\u0e2a\u0e35\u0e22\u0e0a\u0e35\u0e27\u0e34\u0e15\u0e27\u0e31\u0e19\u0e19\u0e35\u0e49"}),Object(l.jsx)("h2",{children:O(t.todayDeaths)})]})]}),Object(l.jsxs)("span",{children:[Object(l.jsx)("img",{src:"./img/icon/patient.png",className:"icon"}),Object(l.jsxs)("div",{className:"text",children:[Object(l.jsx)("h4",{children:"\u0e40\u0e02\u0e49\u0e32\u0e23\u0e31\u0e01\u0e29\u0e32\u0e43\u0e2b\u0e21\u0e48"}),Object(l.jsx)("h2",{children:O(t.todayRecovered)})]})]})]})]}),Object(l.jsxs)("div",{className:"group n2",children:[Object(l.jsxs)("span",{children:[Object(l.jsxs)("div",{className:"label",children:[Object(l.jsx)("img",{src:"./img/icon/virus.png",className:"icon"}),Object(l.jsx)("h4",{children:"\u0e15\u0e34\u0e14\u0e40\u0e0a\u0e37\u0e49\u0e2d\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14"})]}),Object(l.jsx)("h2",{children:O(t.cases)})]}),Object(l.jsxs)("span",{children:[Object(l.jsxs)("div",{className:"label",children:[Object(l.jsx)("img",{src:"./img/icon/skull.png",className:"icon"}),Object(l.jsx)("h4",{children:"\u0e40\u0e2a\u0e35\u0e22\u0e0a\u0e35\u0e27\u0e34\u0e15\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14"})]}),Object(l.jsx)("h2",{children:O(t.deaths)})]}),Object(l.jsxs)("span",{children:[Object(l.jsxs)("div",{className:"label",children:[Object(l.jsx)("img",{src:"./img/icon/patient.png",className:"icon"}),Object(l.jsx)("h4",{children:"\u0e23\u0e31\u0e01\u0e29\u0e32\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14"})]}),Object(l.jsx)("h2",{children:O(t.recovered)})]})]})]})]})},m=t(26),v=(t(251),t(295)),g=t(296);function p(e){var c=new Date(e),t=""+["\u0e21\u0e01\u0e23\u0e32\u0e04\u0e21","\u0e01\u0e38\u0e21\u0e20\u0e32\u0e1e\u0e31\u0e19\u0e18\u0e4c","\u0e21\u0e35\u0e19\u0e32\u0e04\u0e21","\u0e40\u0e21\u0e29\u0e32\u0e22\u0e19","\u0e1e\u0e24\u0e29\u0e20\u0e32\u0e04\u0e21","\u0e21\u0e34\u0e16\u0e38\u0e19\u0e32\u0e22\u0e19","\u0e01\u0e23\u0e01\u0e0e\u0e32\u0e04\u0e21","\u0e2a\u0e34\u0e07\u0e2b\u0e32\u0e04\u0e21","\u0e01\u0e31\u0e19\u0e22\u0e32\u0e22\u0e19","\u0e15\u0e38\u0e25\u0e32\u0e04\u0e21","\u0e1e\u0e24\u0e28\u0e08\u0e34\u0e01\u0e32\u0e22\u0e19","\u0e18\u0e31\u0e19\u0e27\u0e32\u0e04\u0e21"][c.getMonth()],s=""+c.getDate(),n=c.getFullYear()+543;return t.length<2&&(t="0"+t),s.length<2&&(s="0"+s),"\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48 "+s+" "+t+" \u0e1e.\u0e28."+n}function f(e){for(;/(\d+)(\d{3})/.test(e.toString());)e=e.toString().replace(/(\d+)(\d{3})/,"$1,$2");return e}var N=function(){var e=[],c=[],t=Object(s.useState)(null),n=Object(r.a)(t,2),i=n[0],a=n[1],j=Object(s.useState)([]),d=Object(r.a)(j,2),o=d[0],h=d[1],O=Object(s.useState)({title:"Thailand",code:"TH",id:201}),x=Object(r.a)(O,2),u=x[0],N=x[1];if(Object(s.useEffect)((function(){b.a.get("https://disease.sh/v3/covid-19/countries").then((function(t){a(t.data),e=t.data,c=e.map((function(e,c){return{title:e.country,code:e.countryInfo.iso2,id:c}})),h(c)}))}),[]),!o||!i)return null;var C=new Date;return Object(l.jsxs)("div",{className:"CountryCovid",children:[Object(l.jsxs)("div",{className:"ChooseCountry",children:[Object(l.jsx)("div",{className:"label-choose-country",children:"\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e1b\u0e23\u0e30\u0e40\u0e17\u0e28"}),Object(l.jsx)("div",{className:"autocomplete",children:Object(l.jsx)(g.a,{className:"cp-complete",autoSelect:!0,options:o,onChange:function(e,c){N(c)},defaultValue:{title:"Thailand",code:"TH",id:201},getOptionLabel:function(e){return e.title},renderInput:function(e){return Object(l.jsx)(v.a,Object(m.a)(Object(m.a)({},e),{},{variant:"outlined",label:""}))}})}),Object(l.jsx)("div",{className:u?"flag-img":"flag-img hide",children:Object(l.jsx)("img",{src:u?"https://www.countryflags.io/"+u.code+"/flat/64.png":""})})]}),Object(l.jsxs)("div",{className:"CountryCovidBoard",children:[Object(l.jsxs)("div",{className:"label",children:[Object(l.jsx)("h2",{children:"Country Covid-19"}),Object(l.jsx)("h2",{children:p(C.getTime())})]}),Object(l.jsxs)("div",{className:"main-group",children:[Object(l.jsxs)("div",{className:"group n1",children:[Object(l.jsxs)("span",{children:[Object(l.jsx)("img",{src:"./img/icon/virus.png",className:"icon"}),Object(l.jsxs)("div",{className:"text",children:[Object(l.jsx)("h4",{children:"\u0e15\u0e34\u0e14\u0e40\u0e0a\u0e37\u0e49\u0e2d\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e02\u0e36\u0e49\u0e19\u0e27\u0e31\u0e19\u0e19\u0e35\u0e49"}),Object(l.jsx)("h2",{children:f(u?i[u.id].todayCases:0)})]})]}),Object(l.jsxs)("div",{className:"span-inline",children:[Object(l.jsxs)("span",{children:[Object(l.jsx)("img",{src:"./img/icon/skull.png",className:"icon"}),Object(l.jsxs)("div",{className:"text",children:[Object(l.jsx)("h4",{children:"\u0e40\u0e2a\u0e35\u0e22\u0e0a\u0e35\u0e27\u0e34\u0e15\u0e27\u0e31\u0e19\u0e19\u0e35\u0e49"}),Object(l.jsx)("h2",{children:f(u?i[u.id].todayDeaths:0)})]})]}),Object(l.jsxs)("span",{children:[Object(l.jsx)("img",{src:"./img/icon/patient.png",className:"icon"}),Object(l.jsxs)("div",{className:"text",children:[Object(l.jsx)("h4",{children:"\u0e40\u0e02\u0e49\u0e32\u0e23\u0e31\u0e01\u0e29\u0e32\u0e43\u0e2b\u0e21\u0e48"}),Object(l.jsx)("h2",{children:f(u?i[u.id].todayRecovered:0)})]})]})]})]}),Object(l.jsxs)("div",{className:"group n2",children:[Object(l.jsxs)("span",{children:[Object(l.jsxs)("div",{className:"label",children:[Object(l.jsx)("img",{src:"./img/icon/virus.png",className:"icon"}),Object(l.jsx)("h4",{children:"\u0e15\u0e34\u0e14\u0e40\u0e0a\u0e37\u0e49\u0e2d\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14"})]}),Object(l.jsx)("h2",{children:f(u?i[u.id].cases:0)})]}),Object(l.jsxs)("span",{children:[Object(l.jsxs)("div",{className:"label",children:[Object(l.jsx)("img",{src:"./img/icon/skull.png",className:"icon"}),Object(l.jsx)("h4",{children:"\u0e40\u0e2a\u0e35\u0e22\u0e0a\u0e35\u0e27\u0e34\u0e15\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14"})]}),Object(l.jsx)("h2",{children:f(u?i[u.id].deaths:0)})]}),Object(l.jsxs)("span",{children:[Object(l.jsxs)("div",{className:"label",children:[Object(l.jsx)("img",{src:"./img/icon/patient.png",className:"icon"}),Object(l.jsx)("h4",{children:"\u0e23\u0e31\u0e01\u0e29\u0e32\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14"})]}),Object(l.jsx)("h2",{children:f(u?i[u.id].recovered:0)})]})]})]})]})]})};var C=function(){var e=Object(s.useState)(1),c=Object(r.a)(e,2),t=c[0],n=c[1],i=function(e){n(e)};return Object(l.jsxs)("div",{className:"Tab",children:[Object(l.jsxs)("div",{className:"block-tabs",children:[Object(l.jsx)("div",{className:1===t?"tabs active":"tabs",onClick:function(){i(1)},children:"\u0e1c\u0e39\u0e49\u0e04\u0e19\u0e17\u0e31\u0e48\u0e27\u0e42\u0e25\u0e01"}),Object(l.jsx)("div",{className:2===t?"tabs active":"tabs",onClick:function(){i(2)},children:"\u0e1c\u0e39\u0e49\u0e04\u0e19\u0e43\u0e19\u0e1b\u0e23\u0e30\u0e40\u0e17\u0e28"})]}),Object(l.jsxs)("div",{className:"content-tabs",children:[Object(l.jsxs)("div",{className:1===t?"content active":"content",children:[Object(l.jsx)(u,{}),Object(l.jsx)(h,{})]}),Object(l.jsx)("div",{className:2===t?"content active":"content",children:Object(l.jsx)(N,{})})]})]})};var y=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(j,{}),Object(l.jsx)(C,{})]})},w=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,298)).then((function(c){var t=c.getCLS,s=c.getFID,n=c.getFCP,i=c.getLCP,a=c.getTTFB;t(e),s(e),n(e),i(e),a(e)}))};a.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(y,{})}),document.getElementById("root")),w()}},[[257,1,2]]]);
//# sourceMappingURL=main.da25b279.chunk.js.map