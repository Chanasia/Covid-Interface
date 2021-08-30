(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{205:function(e,t,s){},206:function(e,t,s){"use strict";s.r(t);var i=s(1),c=s.n(i),n=s(67),a=s.n(n),l=(s(75),s(76),s(77),s(0));var r=function(){return Object(l.jsx)("div",{className:"Navbar",children:Object(l.jsxs)("div",{className:"nav",children:[Object(l.jsx)("h2",{children:"Covid-19 Interface"}),Object(l.jsx)("h2",{children:"About"}),Object(l.jsx)("i",{class:"fab fa-github"})]})})},o=s(6),d=(s(79),s(80),s(70)),j=s(23),u=s.n(j);var b=function(){var e=Object(i.useState)({}),t=Object(o.a)(e,2),s=t[0],c=t[1],n=function(e){var t=[],s=[],i=[],n=[],a=[];u.a.get("https://disease.sh/v3/covid-19/historical/all?lastdays="+e).then((function(e){a=Object.keys(e.data.cases),t=Object.values(e.data.cases),i=Object.values(e.data.deaths),s=t.map((function(e,s){return s==t.length-1?e-t[s-1]:t[s+1]-e})),n=i.map((function(e,t){return t==i.length-1?e-i[t-1]:i[t+1]-e})),c({labels:a,datasets:[{label:"\u0e15\u0e34\u0e14\u0e40\u0e0a\u0e37\u0e49\u0e2d",data:s,borderColor:"#FF0000",backgroundColor:"#FF0000",fill:!1,cubicInterpolationMode:"monotone",tension:.4},{label:"\u0e40\u0e2a\u0e35\u0e22\u0e0a\u0e35\u0e27\u0e34\u0e15",data:n,borderColor:"#000000",backgroundColor:"#000000",fill:!1,cubicInterpolationMode:"monotone",tension:.4}]})})).catch((function(e){console.log(e)}))};return Object(i.useEffect)((function(){n(7)}),[]),Object(l.jsxs)("div",{className:"ChartWorldWideCovid",children:[Object(l.jsx)(d.a,{data:s,options:{responsive:!0,plugins:{title:{display:!0,text:"Worldwide covid chart"}},interaction:{intersect:!1},scales:{x:{display:!0,title:{display:!0,text:"\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48"}},y:{display:!0,title:{display:!0,text:"\u0e22\u0e2d\u0e14\u0e04\u0e19"}}}}}),Object(l.jsxs)("select",{className:"retrospect-world-wide",onChange:function(e){var t,s=e.target.value;n(1==(t=s)?7:2==t?14:3==t?30:4==t?90:0)},children:[Object(l.jsx)("option",{value:"1",children:"7 \u0e27\u0e31\u0e19\u0e17\u0e35\u0e48\u0e1c\u0e48\u0e32\u0e19\u0e21\u0e32"}),Object(l.jsx)("option",{value:"2",children:"14 \u0e27\u0e31\u0e19\u0e17\u0e35\u0e48\u0e1c\u0e48\u0e32\u0e19\u0e21\u0e32"}),Object(l.jsx)("option",{value:"3",children:"1 \u0e40\u0e14\u0e37\u0e2d\u0e19\u0e1c\u0e48\u0e32\u0e19\u0e21\u0e32"}),Object(l.jsx)("option",{value:"4",children:"3 \u0e40\u0e14\u0e37\u0e2d\u0e19\u0e1c\u0e48\u0e32\u0e19\u0e21\u0e32"})]})]})};s(205);function h(e){for(;/(\d+)(\d{3})/.test(e.toString());)e=e.toString().replace(/(\d+)(\d{3})/,"$1,$2");return e}function m(e){var t=new Date(e),s=""+["\u0e21\u0e01\u0e23\u0e32\u0e04\u0e21","\u0e01\u0e38\u0e21\u0e20\u0e32\u0e1e\u0e31\u0e19\u0e18\u0e4c","\u0e21\u0e35\u0e19\u0e32\u0e04\u0e21","\u0e40\u0e21\u0e29\u0e32\u0e22\u0e19","\u0e1e\u0e24\u0e29\u0e20\u0e32\u0e04\u0e21","\u0e21\u0e34\u0e16\u0e38\u0e19\u0e32\u0e22\u0e19","\u0e01\u0e23\u0e01\u0e0e\u0e32\u0e04\u0e21","\u0e2a\u0e34\u0e07\u0e2b\u0e32\u0e04\u0e21","\u0e01\u0e31\u0e19\u0e22\u0e32\u0e22\u0e19","\u0e15\u0e38\u0e25\u0e32\u0e04\u0e21","\u0e1e\u0e24\u0e28\u0e08\u0e34\u0e01\u0e32\u0e22\u0e19","\u0e18\u0e31\u0e19\u0e27\u0e32\u0e04\u0e21"][t.getMonth()],i=""+t.getDate(),c=t.getFullYear()+543;return s.length<2&&(s="0"+s),i.length<2&&(i="0"+i),"\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48 "+i+" "+s+" \u0e1e.\u0e28."+c}var p=function(){var e=Object(i.useState)(null),t=Object(o.a)(e,2),s=t[0],c=t[1];return Object(i.useEffect)((function(){u.a.get("https://disease.sh/v3/covid-19/all").then((function(e){c(e.data)}))}),[]),s?Object(l.jsxs)("div",{className:"WorldWideCovidBoard",children:[Object(l.jsxs)("div",{className:"label",children:[Object(l.jsx)("h2",{children:"Worldwide covid-19"}),Object(l.jsx)("h2",{children:m(s.updated)})]}),Object(l.jsxs)("div",{className:"main-group",children:[Object(l.jsxs)("div",{className:"group n1",children:[Object(l.jsxs)("span",{children:[Object(l.jsx)("img",{src:"./img/icon/virus.png",className:"icon"}),Object(l.jsxs)("div",{className:"text",children:[Object(l.jsx)("h4",{children:"\u0e15\u0e34\u0e14\u0e40\u0e0a\u0e37\u0e49\u0e2d\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e02\u0e36\u0e49\u0e19\u0e27\u0e31\u0e19\u0e19\u0e35\u0e49"}),Object(l.jsx)("h2",{children:h(s.todayCases)})]})]}),Object(l.jsxs)("div",{className:"span-inline",children:[Object(l.jsxs)("span",{children:[Object(l.jsx)("img",{src:"./img/icon/skull.png",className:"icon"}),Object(l.jsxs)("div",{className:"text",children:[Object(l.jsx)("h4",{children:"\u0e40\u0e2a\u0e35\u0e22\u0e0a\u0e35\u0e27\u0e34\u0e15\u0e27\u0e31\u0e19\u0e19\u0e35\u0e49"}),Object(l.jsx)("h2",{children:h(s.todayDeaths)})]})]}),Object(l.jsxs)("span",{children:[Object(l.jsx)("img",{src:"./img/icon/patient.png",className:"icon"}),Object(l.jsxs)("div",{className:"text",children:[Object(l.jsx)("h4",{children:"\u0e40\u0e02\u0e49\u0e32\u0e23\u0e31\u0e01\u0e29\u0e32\u0e43\u0e2b\u0e21\u0e48"}),Object(l.jsx)("h2",{children:h(s.todayRecovered)})]})]})]})]}),Object(l.jsxs)("div",{className:"group n2",children:[Object(l.jsxs)("span",{children:[Object(l.jsxs)("div",{className:"label",children:[Object(l.jsx)("img",{src:"./img/icon/virus.png",className:"icon"}),Object(l.jsx)("h4",{children:"\u0e15\u0e34\u0e14\u0e40\u0e0a\u0e37\u0e49\u0e2d\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14"})]}),Object(l.jsx)("h2",{children:h(s.cases)})]}),Object(l.jsxs)("span",{children:[Object(l.jsxs)("div",{className:"label",children:[Object(l.jsx)("img",{src:"./img/icon/skull.png",className:"icon"}),Object(l.jsx)("h4",{children:"\u0e40\u0e2a\u0e35\u0e22\u0e0a\u0e35\u0e27\u0e34\u0e15\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14"})]}),Object(l.jsx)("h2",{children:h(s.deaths)})]}),Object(l.jsxs)("span",{children:[Object(l.jsxs)("div",{className:"label",children:[Object(l.jsx)("img",{src:"./img/icon/patient.png",className:"icon"}),Object(l.jsx)("h4",{children:"\u0e23\u0e31\u0e01\u0e29\u0e32\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14"})]}),Object(l.jsx)("h2",{children:h(s.recovered)})]})]})]})]}):null};var O=function(){var e=Object(i.useState)(1),t=Object(o.a)(e,2),s=t[0],c=t[1],n=function(e){c(e)};return Object(l.jsxs)("div",{className:"Tab",children:[Object(l.jsxs)("div",{className:"block-tabs",children:[Object(l.jsx)("div",{className:1===s?"tabs active":"tabs",onClick:function(){n(1)},children:"\u0e1c\u0e39\u0e49\u0e04\u0e19\u0e17\u0e31\u0e48\u0e27\u0e42\u0e25\u0e01"}),Object(l.jsx)("div",{className:2===s?"tabs active":"tabs",onClick:function(){n(2)},children:"\u0e1c\u0e39\u0e49\u0e04\u0e19\u0e43\u0e19\u0e1b\u0e23\u0e30\u0e40\u0e17\u0e28"})]}),Object(l.jsxs)("div",{className:"content-tabs",children:[Object(l.jsxs)("div",{className:1===s?"content active":"content",children:[Object(l.jsx)(p,{}),Object(l.jsx)(b,{})]}),Object(l.jsx)("div",{className:2===s?"content active":"content",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nihil magni cupiditate! Libero repellat nisi animi totam culpa! Ipsum omnis, incidunt rem voluptate animi nostrum expedita natus accusamus eos cupiditate tenetur vero ipsa similique commodi quae inventore, asperiores quo dolorum! Magni fugiat doloribus impedit deserunt maiores, perferendis culpa sequi necessitatibus aliquam, laboriosam officiis. Enim illo commodi, deserunt quam animi fugit, accusamus hic ea omnis iusto ratione pariatur, natus reprehenderit odio non doloribus nulla tempore repellat nisi nihil vero. Culpa nam quia laborum incidunt, nostrum, omnis suscipit, voluptatum expedita id temporibus quas magni! Harum quidem pariatur ipsa officiis consequatur dicta quis?"})]})]})};var x=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(r,{}),Object(l.jsx)(O,{})]})},v=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,207)).then((function(t){var s=t.getCLS,i=t.getFID,c=t.getFCP,n=t.getLCP,a=t.getTTFB;s(e),i(e),c(e),n(e),a(e)}))};a.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(x,{})}),document.getElementById("root")),v()},75:function(e,t,s){},76:function(e,t,s){},77:function(e,t,s){},79:function(e,t,s){},80:function(e,t,s){}},[[206,1,2]]]);
//# sourceMappingURL=main.0c0f32e5.chunk.js.map