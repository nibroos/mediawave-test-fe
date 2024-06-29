import{b7 as D}from"./DPHdV5Tz.js";function b(c,l){for(var o=0;o<l.length;o++){const r=l[o];if(typeof r!="string"&&!Array.isArray(r)){for(const t in r)if(t!=="default"&&!(t in c)){const s=Object.getOwnPropertyDescriptor(r,t);s&&Object.defineProperty(c,t,s.get?s:{enumerable:!0,get:()=>r[t]})}}}return Object.freeze(Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}))}var y={exports:{}};(function(c){(function(l){c.exports?(l.default=l,c.exports=l):l(typeof Highcharts<"u"?Highcharts:void 0)})(function(l){var o=l?l._modules:{};function r(t,s,u,d){t.hasOwnProperty(s)||(t[s]=d.apply(null,u),typeof CustomEvent=="function"&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:s,module:t[s]}})))}r(o,"Series/HollowCandlestick/HollowCandlestickPoint.js",[o["Core/Series/SeriesRegistry.js"]],function(t){let{seriesTypes:{candlestick:s}}=t;class u extends s.prototype.pointClass{getClassName(){let p=super.getClassName.apply(this),f=this.index,g=this.series.hollowCandlestickData[f];return g.isBullish||g.trendDirection!=="up"||(p+="-bearish-up"),p}}return u}),r(o,"Series/HollowCandlestick/HollowCandlestickSeries.js",[o["Series/HollowCandlestick/HollowCandlestickPoint.js"],o["Core/Series/SeriesRegistry.js"],o["Core/Utilities.js"],o["Core/Axis/Axis.js"]],function(t,s,u,d){let{seriesTypes:{candlestick:p}}=s,{addEvent:f,merge:g}=u;class h extends p{constructor(){super(...arguments),this.hollowCandlestickData=[]}getPriceMovement(){let e=this.allGroupedData||this.yData,n=this.hollowCandlestickData;n.length=0,n.push({isBullish:!0,trendDirection:"up"});for(let a=1;a<e.length;a++){let i=e[a],k=e[a-1];n.push(this.isBullish(i,k))}}getLineColor(e){return e==="up"?this.options.upColor||"#06b535":this.options.color||"#f21313"}getPointFill(e){return e.isBullish?"transparent":e.trendDirection==="up"?this.options.upColor||"#06b535":this.options.color||"#f21313"}init(){super.init.apply(this,arguments),this.hollowCandlestickData=[]}isBullish(e,n){return{isBullish:e[0]<=e[3],trendDirection:e[3]<n[3]?"down":"up"}}pointAttribs(e,n){let a,i=super.pointAttribs.call(this,e,n),k=e.index,w=this.hollowCandlestickData[k];return i.fill=this.getPointFill(w)||i.fill,i.stroke=this.getLineColor(w.trendDirection)||i.stroke,n&&(a=this.options.states[n],i.fill=a.color||i.fill,i.stroke=a.lineColor||i.stroke,i["stroke-width"]=a.lineWidth||i["stroke-width"]),i}}return h.defaultOptions=g(p.defaultOptions,{color:"#f21313",dataGrouping:{groupAll:!0,groupPixelWidth:10},lineColor:"#f21313",upColor:"#06b535",upLineColor:"#06b535"}),f(h,"updatedData",function(){this.hollowCandlestickData.length&&(this.hollowCandlestickData.length=0)}),f(d,"postProcessData",function(){this.series.forEach(function(C){C.is("hollowcandlestick")&&C.getPriceMovement()})}),h.prototype.pointClass=t,s.registerSeriesType("hollowcandlestick",h),h}),r(o,"masters/modules/hollowcandlestick.src.js",[o["Core/Globals.js"]],function(t){return t})})})(y);var m=y.exports;const j=D(m),v=b({__proto__:null,default:j},[m]);export{v as h};
