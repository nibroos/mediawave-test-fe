import{b7 as V}from"./DPHdV5Tz.js";function X(m,g){for(var l=0;l<g.length;l++){const f=g[l];if(typeof f!="string"&&!Array.isArray(f)){for(const h in f)if(h!=="default"&&!(h in m)){const c=Object.getOwnPropertyDescriptor(f,h);c&&Object.defineProperty(m,h,c.get?c:{enumerable:!0,get:()=>f[h]})}}}return Object.freeze(Object.defineProperty(m,Symbol.toStringTag,{value:"Module"}))}var H={exports:{}};(function(m){(function(g){m.exports?(g.default=g,m.exports=g):g(typeof Highcharts<"u"?Highcharts:void 0)})(function(g){var l=g?g._modules:{};function f(h,c,L,P){h.hasOwnProperty(c)||(h[c]=P.apply(null,L),typeof CustomEvent=="function"&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:c,module:h[c]}})))}f(l,"Series/Timeline/TimelinePoint.js",[l["Core/Series/Point.js"],l["Core/Series/SeriesRegistry.js"],l["Core/Utilities.js"]],function(h,c,L){let{line:{prototype:{pointClass:P}},pie:{prototype:{pointClass:T}}}=c.seriesTypes,{defined:O,isNumber:x,merge:D,objectEach:A,pick:S}=L;return class extends P{alignConnector(){let s=this.series,r=this.dataLabel,a=r.connector,o=r.options||{},v=o.connectorWidth||0,t=this.series.chart,e=a.getBBox(),i={x:e.x+(r.translateX||0),y:e.y+(r.translateY||0)};t.inverted?i.y-=v/2:i.x+=v/2,a[t.isInsidePlot(i.x,i.y)?"animate":"attr"]({d:this.getConnectorPath()}),a.addClass("highcharts-color-"+this.colorIndex),s.chart.styledMode||a.attr({stroke:o.connectorColor||this.color,"stroke-width":o.connectorWidth,opacity:r[O(r.newOpacity)?"newOpacity":"opacity"]})}drawConnector(){let{dataLabel:s,series:r}=this;s&&(s.connector||(s.connector=r.chart.renderer.path(this.getConnectorPath()).attr({zIndex:-1}).add(s)),this.series.chart.isInsidePlot(s.x||0,s.y||0)&&this.alignConnector())}getConnectorPath(){var n;let{plotX:s=0,plotY:r=0,series:a,dataLabel:o}=this,v=a.chart,t=a.xAxis.len,e=v.inverted,i=e?"x2":"y2";if(o){let p=o.targetPosition,b=(o.alignAttr||o)[i[0]]<a.yAxis.len/2,d={x1:s,y1:r,x2:s,y2:x(p.y)?p.y:o.y};return e&&(d={x1:r,y1:t-s,x2:p.x||o.x,y2:t-s}),b&&(d[i]+=o[e?"width":"height"]||0),A(d,(w,y)=>{d[y]-=(o.alignAttr||o)[y[0]]}),v.renderer.crispLine([["M",d.x1,d.y1],["L",d.x2,d.y2]],((n=o.options)==null?void 0:n.connectorWidth)||0)}return[]}constructor(s,r){super(s,r),this.name??(this.name="Event"),this.y=1}isValid(){return this.options.y!==null}setState(){let s=super.setState;this.isNull||s.apply(this,arguments)}setVisible(s,r){let a=this.series;r=S(r,a.options.ignoreHiddenPoint),T.prototype.setVisible.call(this,s,!1),a.processData(),r&&a.chart.redraw()}applyOptions(s,r){return s=h.prototype.optionsToObject.call(this,s),this.userDLOptions=D(this.userDLOptions,s.dataLabels),super.applyOptions(s,r)}}}),f(l,"Series/Timeline/TimelineSeriesDefaults.js",[],function(){return{colorByPoint:!0,stickyTracking:!1,ignoreHiddenPoint:!0,legendType:"point",lineWidth:4,tooltip:{headerFormat:'<span style="color:{point.color}">●</span> <span style="font-size: 0.8em"> {point.key}</span><br/>',pointFormat:"{point.description}"},states:{hover:{lineWidthPlus:0}},dataLabels:{enabled:!0,allowOverlap:!0,alternate:!0,backgroundColor:"#ffffff",borderWidth:1,borderColor:"#999999",borderRadius:3,color:"#333333",connectorWidth:1,distance:void 0,formatter:function(){return(this.series.chart.styledMode?'<span class="highcharts-color-'+this.point.colorIndex+'">● </span>':'<span style="color:'+this.point.color+'">● </span>')+('<span class="highcharts-strong">'+(this.key||""))+"</span><br/>"+(this.point.label||"")},style:{textOutline:"none",fontWeight:"normal",fontSize:"0.8em"},shadow:!1,verticalAlign:"middle"},marker:{enabledThreshold:0,symbol:"square",radius:6,lineWidth:2,height:15},showInLegend:!1,colorKey:"x",legendSymbol:"rectangle"}}),f(l,"Series/Timeline/TimelineSeries.js",[l["Core/Series/SeriesRegistry.js"],l["Series/Timeline/TimelinePoint.js"],l["Series/Timeline/TimelineSeriesDefaults.js"],l["Core/Utilities.js"]],function(h,c,L,P){let{column:T,line:O}=h.seriesTypes,{addEvent:x,arrayMax:D,arrayMin:A,defined:S,extend:s,merge:r,pick:a}=P;class o extends O{alignDataLabel(t,e,i,n){var W;let p,b,d,w=this.chart.inverted,y=this.visibilityMap.filter(U=>!!U),u=this.visiblePointsCount||0,j=y.indexOf(t),C=this.options.dataLabels,k=t.userDLOptions||{},M=C.alternate?j&&j!==u-1?2:1.5:1,E=Math.floor(this.xAxis.len/u),I=e.padding;t.visible&&(p=Math.abs(k.x||t.options.dataLabels.x),w?(b=(p-I)*2-(t.itemHeight||0)/2,d={width:a((W=C.style)==null?void 0:W.width,`${.4*this.yAxis.len}px`),textOverflow:(e.width||0)/b*(e.height||0)/2>E*M?"ellipsis":"none"}):d={width:(k.width||C.width||E*M-2*I)+"px"},e.css(d),this.chart.styledMode||e.shadow(C.shadow)),super.alignDataLabel.apply(this,arguments)}bindAxes(){super.bindAxes(),this.xAxis.userOptions.type||(this.xAxis.categories=this.xAxis.hasNames=!0)}distributeDL(){let t=this.options.dataLabels,e=this.chart.inverted,i=1;if(t){let n=a(t.distance,e?20:100);for(let p of this.points){let b={[e?"x":"y"]:t.alternate&&i%2?-n:n};e&&(b.align=t.alternate&&i%2?"right":"left"),p.options.dataLabels=r(b,p.userDLOptions),i++}}}generatePoints(){super.generatePoints();let t=this.points;for(let e=0,i=t.length;e<i;++e)t[e].applyOptions({x:this.xData[e]},this.xData[e])}getVisibilityMap(){return(this.data.length?this.data:this.userOptions.data||[]).map(t=>!!t&&t.visible!==!1&&!t.isNull&&t)}getXExtremes(t){let e=this,i=t.filter((n,p)=>e.points[p].isValid()&&e.points[p].visible);return{min:A(i),max:D(i)}}init(){let t=this;super.init.apply(t,arguments),t.eventsToUnbind.push(x(t,"afterTranslate",function(){let e,i=Number.MAX_VALUE;for(let n of t.points)n.isInside=n.isInside&&n.visible,n.visible&&!n.isNull&&(S(e)&&(i=Math.min(i,Math.abs(n.plotX-e))),e=n.plotX);t.closestPointRangePx=i})),t.eventsToUnbind.push(x(t,"drawDataLabels",function(){t.distributeDL()})),t.eventsToUnbind.push(x(t,"afterDrawDataLabels",function(){let e;for(let i of t.points)(e=i.dataLabel)&&(e.animate=function(n){return this.targetPosition&&(this.targetPosition=n),this.renderer.Element.prototype.animate.apply(this,arguments)},e.targetPosition||(e.targetPosition={}),i.drawConnector())})),t.eventsToUnbind.push(x(t.chart,"afterHideOverlappingLabel",function(){for(let e of t.points)e.dataLabel&&e.dataLabel.connector&&e.dataLabel.oldOpacity!==e.dataLabel.newOpacity&&e.alignConnector()}))}markerAttribs(t,e){let i=this.options.marker,n=t.marker||{},p=n.symbol||i.symbol,b=a(n.width,i.width,this.closestPointRangePx),d=a(n.height,i.height),w,y=0;if(this.xAxis.dateTime)return super.markerAttribs(t,e);e&&(w=i.states[e]||{},y=a((n.states&&n.states[e]||{}).radius,w.radius,y+(w.radiusPlus||0))),t.hasImage=p&&p.indexOf("url")===0;let u={x:Math.floor(t.plotX)-b/2-y/2,y:t.plotY-d/2-y/2,width:b+y,height:d+y};return this.chart.inverted?{y:u.x&&u.width&&this.xAxis.len-u.x-u.width,x:u.y&&u.y,width:u.height,height:u.width}:u}processData(){let t=0,e;for(let i of(this.visibilityMap=this.getVisibilityMap(),this.visibilityMap))i&&t++;for(e=0,this.visiblePointsCount=t;e<this.xData.length;e++)this.yData[e]=1;super.processData.call(this,arguments)}}return o.defaultOptions=r(O.defaultOptions,L),s(o.prototype,{drawTracker:T.prototype.drawTracker,pointClass:c,trackerGroups:["markerGroup","dataLabelsGroup"]}),h.registerSeriesType("timeline",o),o}),f(l,"masters/modules/timeline.src.js",[l["Core/Globals.js"]],function(h){return h})})})(H);var N=H.exports;const _=V(N),z=X({__proto__:null,default:_},[N]);export{z as t};
