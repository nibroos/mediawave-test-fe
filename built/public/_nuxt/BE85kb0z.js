import{b7 as N}from"./DPHdV5Tz.js";function _(v,u){for(var r=0;r<u.length;r++){const f=u[r];if(typeof f!="string"&&!Array.isArray(f)){for(const i in f)if(i!=="default"&&!(i in v)){const a=Object.getOwnPropertyDescriptor(f,i);a&&Object.defineProperty(v,i,a.get?a:{enumerable:!0,get:()=>f[i]})}}}return Object.freeze(Object.defineProperty(v,Symbol.toStringTag,{value:"Module"}))}var U={exports:{}};(function(v){(function(u){v.exports?(u.default=u,v.exports=u):u(typeof Highcharts<"u"?Highcharts:void 0)})(function(u){var r=u?u._modules:{};function f(i,a,l,m){i.hasOwnProperty(a)||(i[a]=m.apply(null,l),typeof CustomEvent=="function"&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:a,module:i[a]}})))}f(r,"Extensions/DragPanes/AxisResizerDefaults.js",[],function(){return{minLength:"10%",maxLength:"100%",resize:{controlledAxis:{next:[],prev:[]},enabled:!1,cursor:"ns-resize",lineColor:"#cccccc",lineDashStyle:"Solid",lineWidth:4,x:0,y:0}}}),f(r,"Extensions/DragPanes/AxisResizer.js",[r["Extensions/DragPanes/AxisResizerDefaults.js"],r["Core/Utilities.js"]],function(i,a){let{addEvent:l,clamp:m,isNumber:b,relativeLength:M}=a;class D{constructor(e){this.init(e)}init(e,t){this.axis=e,this.options=e.options.resize||{},this.render(),t||this.addMouseEvents()}render(){let e=this.axis,t=e.chart,o=this.options,s=o.x||0,h=o.y,n=m(e.top+e.height+h,t.plotTop,t.plotTop+t.plotHeight),c={};t.styledMode||(c={cursor:o.cursor,stroke:o.lineColor,"stroke-width":o.lineWidth,dashstyle:o.lineDashStyle}),this.lastPos=n-h,this.controlLine||(this.controlLine=t.renderer.path().addClass("highcharts-axis-resizer")),this.controlLine.add(e.axisGroup);let p=t.styledMode?this.controlLine.strokeWidth():o.lineWidth;c.d=t.renderer.crispLine([["M",e.left+s,n],["L",e.left+e.width+s,n]],p),this.controlLine.attr(c)}addMouseEvents(){let e,t,o,s=this,h=s.controlLine.element,n=s.axis.chart.container,c=[];s.mouseMoveHandler=e=p=>s.onMouseMove(p),s.mouseUpHandler=t=p=>s.onMouseUp(p),s.mouseDownHandler=o=()=>s.onMouseDown(),c.push(l(n,"mousemove",e),l(n.ownerDocument,"mouseup",t),l(h,"mousedown",o),l(n,"touchmove",e),l(n.ownerDocument,"touchend",t),l(h,"touchstart",o)),s.eventsToUnbind=c}onMouseMove(e){if(!e.touches||e.touches[0].pageX!==0){let t=this.axis.chart.pointer;this.grabbed&&t&&(this.hasDragged=!0,this.updateAxes(t.normalize(e).chartY-(this.options.y||0)))}}onMouseUp(e){let t=this.axis.chart.pointer;this.hasDragged&&t&&this.updateAxes(t.normalize(e).chartY-(this.options.y||0)),this.grabbed=this.hasDragged=this.axis.chart.activeResizer=void 0}onMouseDown(){var e;(e=this.axis.chart.pointer)==null||e.reset(!1,0),this.grabbed=this.axis.chart.activeResizer=!0}updateAxes(e){let t=this.axis.chart,o=this.options.controlledAxis,s=o.next.length===0?[t.yAxis.indexOf(this.axis)+1]:o.next,h=[this.axis].concat(o.prev),n=[],c=t.plotTop,p=t.plotHeight,j=c+p,w=g=>100*g/p+"%",k=(g,z,d)=>Math.round(m(g,z,d));e=m(e,c,j);let L=!1,P=e-this.lastPos;if(P*P<1)return;let A=!0;for(let g of[h,s])for(let z of g){let d,x,y=b(z)?t.yAxis[z]:A?z:t.get(z),E=y&&y.options;if(!E||E.isInternal){A=!1;continue}x=y.top;let O=Math.round(M(E.minLength||NaN,p)),R=Math.round(M(E.maxLength||NaN,p));if(A)(d=k(e-x,O,R))===R&&(L=!0),e=x+d,n.push({axis:y,options:{height:w(d)}});else{if(P=e-this.lastPos,d=k(y.len-P,O,R),(x=y.top+P)+d>j){let H=j-d-x;e+=H,x+=H}x<c&&(x=c)+d>j&&(d=p),d===O&&(L=!0),n.push({axis:y,options:{top:w(x-c),height:w(d)}})}A=!1}if(!L){for(let g of n)g.axis.update(g.options,!1);t.redraw(!1)}}destroy(){let e=this.axis;for(let t of(delete e.resizer,this.eventsToUnbind&&this.eventsToUnbind.forEach(o=>o()),this.controlLine.destroy(),Object.keys(this)))this[t]=null}}return D.resizerOptions=i,D}),f(r,"Extensions/DragPanes/DragPanes.js",[r["Extensions/DragPanes/AxisResizer.js"],r["Core/Defaults.js"],r["Core/Utilities.js"]],function(i,a,l){let{defaultOptions:m}=a,{addEvent:b,merge:M,wrap:D}=l;function C(){let s=this.resizer,h=this.options.resize;if(h){let n=h.enabled!==!1;s?n?s.init(this,!0):s.destroy():n&&(this.resizer=new i(this))}}function e(s){!s.keepEvents&&this.resizer&&this.resizer.destroy()}function t(s){this.chart.activeResizer||s.apply(this,[].slice.call(arguments,1))}function o(s){this.chart.activeResizer||s.apply(this,[].slice.call(arguments,1))}return{compose:function(s,h){s.keepProps.includes("resizer")||(M(!0,m.yAxis,i.resizerOptions),s.keepProps.push("resizer"),b(s,"afterRender",C),b(s,"destroy",e),D(h.prototype,"runPointActions",o),D(h.prototype,"drag",t))}}}),f(r,"masters/modules/drag-panes.src.js",[r["Core/Globals.js"],r["Extensions/DragPanes/AxisResizer.js"],r["Extensions/DragPanes/DragPanes.js"]],function(i,a,l){return i.AxisResizer=a,l.compose(i.Axis,i.Pointer),i})})})(U);var T=U.exports;const S=N(T),G=_({__proto__:null,default:S},[T]);export{G as d};
