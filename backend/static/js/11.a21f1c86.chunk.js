(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[11],{117:function(e,t,n){"use strict";n.r(t);n(0);var a=n(1);t.default=function(e){var t=e.dayList,n=e.activeDay,i=e.activities,r=e.onDayClick,c=e.region,l=new Date;return Object(a.jsx)(a.Fragment,{children:null===t||void 0===t?void 0:t.map((function(e,t){return Object(a.jsx)("div",{className:"calendar__table-row",children:e.map((function(e){if(e.dayNumber){var t=new Date(l.getFullYear(),e.monthNumber,e.dayNumber,12),s=t.toISOString()===n.toISOString(),d=0!==i.filter((function(e){return e.date.split("T")[0]===t.toISOString().split("T")[0]&&e.region===c})).length;return Object(a.jsx)("div",{tabIndex:0,onClick:function(){return r(t)},className:"calendar__table-item"+(d?" active":"")+(s?" selected":""),children:Object(a.jsx)("span",{children:e.dayNumber})},e.id)}return Object(a.jsx)("div",{className:"calendar__table-item",children:Object(a.jsx)("span",{})},e.id)}))},t)}))})}}}]);
//# sourceMappingURL=11.a21f1c86.chunk.js.map