import{b7 as A}from"./DPHdV5Tz.js";function D(c,i){for(var r=0;r<i.length;r++){const a=i[r];if(typeof a!="string"&&!Array.isArray(a)){for(const t in a)if(t!=="default"&&!(t in c)){const e=Object.getOwnPropertyDescriptor(a,t);e&&Object.defineProperty(c,t,e.get?e:{enumerable:!0,get:()=>a[t]})}}}return Object.freeze(Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}))}var x={exports:{}};(function(c){(function(i){c.exports?(i.default=i,c.exports=i):i(typeof Highcharts<"u"?Highcharts:void 0)})(function(i){var r=i?i._modules:{};function a(t,e,p,u){t.hasOwnProperty(e)||(t[e]=u.apply(null,p),typeof CustomEvent=="function"&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:e,module:t[e]}})))}a(r,"Extensions/PriceIndication.js",[r["Core/Globals.js"],r["Core/Utilities.js"]],function(t,e){let{composed:p}=t,{addEvent:u,isArray:m,merge:L,pushUnique:j}=e;function v(){let o=this.options,b=o.lastVisiblePrice,f=o.lastPrice;if((b||f)&&o.id!=="highcharts-navigator-series"){let l,C=this.xAxis,s=this.yAxis,I=s.crosshair,E=s.cross,V=s.crossLabel,n=this.points,w=this.yData.length,h=n.length,y=this.xData[this.xData.length-1],P=this.yData[w-1];if(f&&f.enabled&&(s.crosshair=s.options.crosshair=o.lastPrice,!this.chart.styledMode&&s.crosshair&&s.options.crosshair&&o.lastPrice&&(s.crosshair.color=s.options.crosshair.color=o.lastPrice.color||this.color),s.cross=this.lastPrice,l=m(P)?P[3]:P,this.lastPriceLabel&&this.lastPriceLabel.destroy(),delete s.crossLabel,s.drawCrosshair(null,{x:y,y:l,plotX:C.toPixels(y,!0),plotY:s.toPixels(l,!0)}),this.yAxis.cross&&(this.lastPrice=this.yAxis.cross,this.lastPrice.addClass("highcharts-color-"+this.colorIndex),this.lastPrice.y=l),this.lastPriceLabel=s.crossLabel),b&&b.enabled&&h>0){s.crosshair=s.options.crosshair=L({color:"transparent"},o.lastVisiblePrice),s.cross=this.lastVisiblePrice;let d=n[h-1].isInside?n[h-1]:n[h-2];this.lastVisiblePriceLabel&&this.lastVisiblePriceLabel.destroy(),delete s.crossLabel,s.drawCrosshair(null,d),s.cross&&(this.lastVisiblePrice=s.cross,d&&typeof d.y=="number"&&(this.lastVisiblePrice.y=d.y)),this.lastVisiblePriceLabel=s.crossLabel}s.crosshair=s.options.crosshair=I,s.cross=E,s.crossLabel=V}}return{compose:function(o){j(p,"PriceIndication")&&u(o,"afterRender",v)}}}),a(r,"masters/modules/price-indicator.src.js",[r["Core/Globals.js"],r["Extensions/PriceIndication.js"]],function(t,e){return e.compose(t.Series),t})})})(x);var g=x.exports;const O=A(g),H=D({__proto__:null,default:O},[g]);export{H as p};
