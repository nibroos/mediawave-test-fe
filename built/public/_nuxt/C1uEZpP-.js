import{b7 as K}from"./DPHdV5Tz.js";function Q(I,L){for(var i=0;i<L.length;i++){const b=L[i];if(typeof b!="string"&&!Array.isArray(b)){for(const h in b)if(h!=="default"&&!(h in I)){const p=Object.getOwnPropertyDescriptor(b,h);p&&Object.defineProperty(I,h,p.get?p:{enumerable:!0,get:()=>b[h]})}}}return Object.freeze(Object.defineProperty(I,Symbol.toStringTag,{value:"Module"}))}var q={exports:{}};(function(I){(function(L){I.exports?(L.default=L,I.exports=L):L(typeof Highcharts<"u"?Highcharts:void 0)})(function(L){var i=L?L._modules:{};function b(h,p,S,U){h.hasOwnProperty(p)||(h[p]=U.apply(null,S),typeof CustomEvent=="function"&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:p,module:h[p]}})))}b(i,"Series/Funnel3D/SVGElement3DFunnel.js",[i["Core/Color/Color.js"],i["Core/Globals.js"],i["Core/Renderer/RendererRegistry.js"],i["Core/Utilities.js"]],function(h,p,S,U){let{parse:C}=h,{charts:E}=p,{Element3D:y}=S.getRendererType().prototype,{merge:R}=U;return class extends y{constructor(){super(...arguments),this.mainParts=["top","bottom"],this.parts=["top","bottom","frontUpper","backUpper","frontLower","backLower","rightUpper","rightLower"],this.sideGroups=["upperGroup","lowerGroup"],this.sideParts={upperGroup:["frontUpper","backUpper","rightUpper"],lowerGroup:["frontLower","backLower","rightLower"]},this.pathType="funnel3d"}opacitySetter(l){let e=parseFloat(l),t=this.parts,n=E[this.renderer.chartIndex],s="group-opacity-"+e+"-"+n.index;if(this.parts=this.mainParts,this.singleSetterForParts("opacity",e),this.parts=t,!n.renderer.filterId){for(let r of(n.renderer.definition({tagName:"filter",attributes:{id:s},children:[{tagName:"feComponentTransfer",children:[{tagName:"feFuncA",attributes:{type:"table",tableValues:"0 "+e}}]}]}),this.sideGroups))this[r].attr({filter:"url(#"+s+")"});if(this.renderer.styledMode)for(let r of(n.renderer.definition({tagName:"style",textContent:".highcharts-"+s+" {filter:url(#"+s+")}"}),this.sideGroups))this[r].addClass("highcharts-"+s)}return this}fillSetter(l){let e=C(l),t=e.rgba[3],n={top:C(l).brighten(.1).get(),bottom:C(l).brighten(-.2).get()};if(t<1?(e.rgba[3]=1,e=e.get("rgb"),this.attr({opacity:t})):e=l,e.linearGradient||e.radialGradient||!this.gradientForSides||(e={linearGradient:{x1:0,x2:1,y1:1,y2:1},stops:[[0,C(l).brighten(-.2).get()],[.5,l],[1,C(l).brighten(-.2).get()]]}),e.linearGradient)for(let s of this.sideGroups){let r=this[s].gradientBox,d=e.linearGradient,x=R(e,{linearGradient:{x1:r.x+d.x1*r.width,y1:r.y+d.y1*r.height,x2:r.x+d.x2*r.width,y2:r.y+d.y2*r.height}});for(let v of this.sideParts[s])n[v]=x}else if(R(!0,n,{frontUpper:e,backUpper:e,rightUpper:e,frontLower:e,backLower:e,rightLower:e}),e.radialGradient)for(let s of this.sideGroups){let r=this[s].gradientBox,d=r.x+r.width/2,x=r.y+r.height/2,v=Math.min(r.width,r.height);for(let u of this.sideParts[s])this[u].setRadialReference([d,x,v])}if(this.singleSetterForParts("fill",null,n),this.color=this.fill=l,e.linearGradient)for(let s of[this.frontLower,this.frontUpper]){let r=s.element,d=r&&this.renderer.gradients[r.gradient];d&&d.attr("gradientUnits")!=="userSpaceOnUse"&&d.attr({gradientUnits:"userSpaceOnUse"})}return this}adjustForGradient(){let l;for(let e of this.sideGroups){let t={x:Number.MAX_VALUE,y:Number.MAX_VALUE},n={x:-Number.MAX_VALUE,y:-Number.MAX_VALUE};for(let s of this.sideParts[e])l=this[s].getBBox(!0),t={x:Math.min(t.x,l.x),y:Math.min(t.y,l.y)},n={x:Math.max(n.x,l.x+l.width),y:Math.max(n.y,l.y+l.height)};this[e].gradientBox={x:t.x,width:n.x-t.x,y:t.y,height:n.y-t.y}}}zIndexSetter(){return this.finishedOnAdd&&this.adjustForGradient(),this.renderer.Element.prototype.zIndexSetter.apply(this,arguments)}onAdd(){this.adjustForGradient(),this.finishedOnAdd=!0}}}),b(i,"Series/Funnel3D/Funnel3DComposition.js",[i["Series/Funnel3D/SVGElement3DFunnel.js"],i["Core/Globals.js"],i["Core/Utilities.js"]],function(h,p,S){let{charts:U}=p,{error:C,extend:E,merge:y}=S;function R(e){let t=this.element3d("funnel3d",e),n=this.styledMode,s={"stroke-width":1,stroke:"none"};for(let r of(t.upperGroup=this.g("funnel3d-upper-group").attr({zIndex:t.frontUpper.zIndex}).add(t),[t.frontUpper,t.backUpper,t.rightUpper]))n||r.attr(s),r.add(t.upperGroup);for(let r of(t.lowerGroup=this.g("funnel3d-lower-group").attr({zIndex:t.frontLower.zIndex}).add(t),[t.frontLower,t.backLower,t.rightLower]))n||r.attr(s),r.add(t.lowerGroup);return t.gradientForSides=e.gradientForSides,t}function l(e){this.getCylinderEnd||C("A required Highcharts module is missing: cylinder.js",!0,U[this.chartIndex]);let t=U[this.chartIndex],n=e.alphaCorrection=90-Math.abs(t.options.chart.options3d.alpha%180-90),s=this.cuboidPath.call(this,y(e,{depth:e.width,width:(e.width+e.bottom.width)/2})),r=s.isTop,d=!s.isFront,x=!!e.middle,v=this.getCylinderEnd(t,y(e,{x:e.x-e.width/2,z:e.z-e.width/2,alphaCorrection:n})),u=e.bottom.width,m=y(e,{width:u,x:e.x-u/2,z:e.z-u/2,alphaCorrection:n}),a=this.getCylinderEnd(t,m,!0),f=u,F=m,G=a,D=a,o;x&&(f=e.middle.width,F=y(e,{y:e.y+e.middle.fraction*e.height,width:f,x:e.x-f/2,z:e.z-f/2}),G=this.getCylinderEnd(t,F,!1),D=this.getCylinderEnd(t,F,!1));let j={top:v,bottom:a,frontUpper:this.getCylinderFront(v,G),zIndexes:{group:s.zIndexes.group,top:r!==0?0:3,bottom:r!==1?0:3,frontUpper:d?2:1,backUpper:d?1:2,rightUpper:d?2:1}};return j.backUpper=this.getCylinderBack(v,G),o=Math.min(f,e.width)/Math.max(f,e.width)!=1,j.rightUpper=this.getCylinderFront(this.getCylinderEnd(t,y(e,{x:e.x-e.width/2,z:e.z-e.width/2,alphaCorrection:o?-n:0}),!1),this.getCylinderEnd(t,y(F,{alphaCorrection:o?-n:0}),!x)),x&&(o=Math.min(f,u)/Math.max(f,u)!=1,y(!0,j,{frontLower:this.getCylinderFront(D,a),backLower:this.getCylinderBack(D,a),rightLower:this.getCylinderFront(this.getCylinderEnd(t,y(m,{alphaCorrection:o?-n:0}),!0),this.getCylinderEnd(t,y(F,{alphaCorrection:o?-n:0}),!1)),zIndexes:{frontLower:d?2:1,backLower:d?1:2,rightLower:d?1:2}})),j}return{compose:function(e){let t=e.prototype;t.funnel3d||(t.Element3D.types.funnel3d=h,E(t,{funnel3d:R,funnel3dPath:l}))}}}),b(i,"Series/Funnel3D/Funnel3DSeriesDefaults.js",[],function(){return{center:["50%","50%"],width:"90%",neckWidth:"30%",height:"100%",neckHeight:"25%",reversed:!1,gradientForSides:!0,animation:!1,edgeWidth:0,colorByPoint:!0,showInLegend:!1,dataLabels:{align:"right",crop:!1,inside:!1,overflow:"allow"}}}),b(i,"Series/Funnel3D/Funnel3DPoint.js",[i["Core/Series/SeriesRegistry.js"],i["Core/Utilities.js"]],function(h,p){let{seriesTypes:{column:S}}=h,{extend:U}=p;class C extends S.prototype.pointClass{}return U(C.prototype,{shapeType:"funnel3d"}),C}),b(i,"Series/Funnel3D/Funnel3DSeries.js",[i["Series/Funnel3D/Funnel3DComposition.js"],i["Series/Funnel3D/Funnel3DSeriesDefaults.js"],i["Series/Funnel3D/Funnel3DPoint.js"],i["Core/Globals.js"],i["Core/Math3D.js"],i["Core/Series/SeriesRegistry.js"],i["Core/Utilities.js"]],function(h,p,S,U,C,E,y){let{noop:R}=U,{perspective:l}=C,{series:e,seriesTypes:{column:t}}=E,{extend:n,merge:s,pick:r,relativeLength:d}=y;class x extends t{alignDataLabel(u,m,a){let f=u.dlBoxRaw,F=this.chart.inverted,G=u.plotY>r(this.translatedThreshold,this.yAxis.len),D=r(a.inside,!!this.options.stacking),o={x:f.x,y:f.y,height:0};a.align=r(a.align,!F||D?"center":G?"right":"left"),a.verticalAlign=r(a.verticalAlign,F||D?"middle":G?"top":"bottom"),a.verticalAlign!=="top"&&(o.y+=f.bottom/(a.verticalAlign==="bottom"?1:2)),o.width=this.getWidthAt(o.y),this.options.reversed&&(o.width=f.fullWidth-o.width),D?o.x-=o.width/2:a.align==="left"?(a.align="right",o.x-=1.5*o.width):a.align==="right"?(a.align="left",o.x+=o.width/2):o.x-=o.width/2,u.dlBox=o,t.prototype.alignDataLabel.apply(this,arguments)}bindAxes(){e.prototype.bindAxes.apply(this,arguments),n(this.xAxis.options,{gridLineWidth:0,lineWidth:0,title:void 0,tickPositions:[]}),s(!0,this.yAxis.options,{gridLineWidth:0,title:void 0,labels:{enabled:!1}})}translate(){e.prototype.translate.apply(this,arguments);let u=this.chart,m=this.options,a=m.reversed,f=m.ignoreHiddenPoint,F=u.plotWidth,G=u.plotHeight,D=m.center,o=d(D[0],F),j=d(D[1],G),W=d(m.width,F),w=d(m.height,G),_=d(m.neckWidth,F),N=d(m.neckHeight,G),O=j-w/2+w-N,X=this.points,H=0,T=0,A,z,P,V,k,M,Y,B,c;for(let g of(this.getWidthAt=z=function($){return $>O||w===N?_:_+(W-_)*(1-($-(j-w/2))/(w-N))},this.center=[o,j,w],this.centerX=o,X))f&&g.visible===!1||(H+=g.y);for(let g of X)Y=null,P=H?g.y/H:0,M=(k=j-w/2+T*w)+P*w,A=z(k),B=M-k,c={gradientForSides:r(g.options.gradientForSides,m.gradientForSides),x:o,y:k,height:B,width:A,z:1,top:{width:A}},A=z(M),c.bottom={fraction:P,width:A},k>=O?c.isCylinder=!0:M>O&&(Y=M,A=z(O),M=O,c.bottom.width=A,c.middle={fraction:B?(O-k)/B:0,width:A}),a&&(c.y=k=j+w/2-(T+P)*w,c.middle&&(c.middle.fraction=1-(B?c.middle.fraction:0)),A=c.width,c.width=c.bottom.width,c.bottom.width=A),g.shapeArgs=n(g.shapeArgs,c),g.percentage=100*P,g.plotX=o,a?g.plotY=j+w/2-(T+P/2)*w:g.plotY=(k+(Y||M))/2,V=l([{x:o,y:g.plotY,z:a?-(W-z(g.plotY))/2:-z(g.plotY)/2}],u,!0)[0],g.tooltipPos=[V.x,V.y],g.dlBoxRaw={x:o,width:z(g.plotY),y:k,bottom:c.height||0,fullWidth:W},f&&g.visible===!1||(T+=P)}}return x.compose=h.compose,x.defaultOptions=s(t.defaultOptions,p),n(x.prototype,{pointClass:S,translate3dShapes:R}),E.registerSeriesType("funnel3d",x),x}),b(i,"masters/modules/funnel3d.src.js",[i["Core/Globals.js"],i["Series/Funnel3D/Funnel3DSeries.js"],i["Core/Renderer/RendererRegistry.js"]],function(h,p,S){return p.compose(S.getRendererType()),h})})})(q);var J=q.exports;const Z=K(J),te=Q({__proto__:null,default:Z},[J]);export{te as f};
