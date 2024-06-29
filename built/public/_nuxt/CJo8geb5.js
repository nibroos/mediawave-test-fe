import{b7 as H}from"./DPHdV5Tz.js";function I(F,M){for(var k=0;k<M.length;k++){const O=M[k];if(typeof O!="string"&&!Array.isArray(O)){for(const u in O)if(u!=="default"&&!(u in F)){const l=Object.getOwnPropertyDescriptor(O,u);l&&Object.defineProperty(F,u,l.get?l:{enumerable:!0,get:()=>O[u]})}}}return Object.freeze(Object.defineProperty(F,Symbol.toStringTag,{value:"Module"}))}var R={exports:{}};(function(F){(function(M){F.exports?(M.default=M,F.exports=M):M(typeof Highcharts<"u"?Highcharts:void 0)})(function(M){var k=M?M._modules:{};function O(u,l,e,r){u.hasOwnProperty(l)||(u[l]=r.apply(null,e),typeof CustomEvent=="function"&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:l,module:u[l]}})))}O(k,"Series/Organization/OrganizationPoint.js",[k["Core/Series/SeriesRegistry.js"],k["Core/Utilities.js"]],function(u,l){let{sankey:{prototype:{pointClass:e}}}=u.seriesTypes,{defined:r,find:g,pick:t}=l;return class extends e{constructor(s,n,f){super(s,n,f),this.isNode||(this.dataLabelOnNull=!0,this.formatPrefix="link")}getSum(){return 1}setNodeColumn(){super.setNodeColumn();let s=this,n=s.getFromNode().fromNode;if(!r(s.options.column)&&s.linksTo.length!==0&&n&&n.options.layout==="hanging"){let f=-1,b;s.options.layout=t(s.options.layout,"hanging"),s.hangsFrom=n,g(n.linksFrom,(c,m)=>{let L=c.toNode===s;return L&&(f=m),L});for(let c=0;c<n.linksFrom.length;++c)(b=n.linksFrom[c]).toNode.id===s.id?c=n.linksFrom.length:f+=function m(L){let z=L.linksFrom.length;return L.linksFrom.forEach(i=>{i.id===i.toNode.linksTo[0].id?z+=m(i.toNode):z--}),z}(b.toNode);s.column=(s.column||0)+f}}}}),O(k,"Series/Organization/OrganizationSeriesDefaults.js",[],function(){return{borderColor:"#666666",borderRadius:3,link:{color:"#666666",lineWidth:1,radius:10,type:"default"},borderWidth:1,dataLabels:{nodeFormatter:function(){let u={width:"100%",height:"100%",display:"flex","flex-direction":"row","align-items":"center","justify-content":"center"},l={"max-height":"100%","border-radius":"50%"},e={width:"100%",padding:0,"text-align":"center","white-space":"normal"};function r(f){return Object.keys(f).reduce(function(b,c){return b+c+":"+f[c]+";"},'style="')+'"'}let{description:g,image:t,title:s}=this.point;t&&(l["max-width"]="30%",e.width="70%"),this.series.chart.renderer.forExport&&(u.display="block",e.position="absolute",e.left=t?"30%":0,e.top=0);let n="<div "+r(u)+">";return t&&(n+='<img src="'+t+'" '+r(l)+">"),n+="<div "+r(e)+">",this.point.name&&(n+="<h4 "+r({margin:0})+">"+this.point.name+"</h4>"),s&&(n+="<p "+r({margin:0})+">"+(s||"")+"</p>"),g&&(n+="<p "+r({opacity:.75,margin:"5px"})+">"+g+"</p>"),n+="</div></div>"},style:{fontWeight:"normal",fontSize:"0.9em"},useHTML:!0,linkTextPath:{attributes:{startOffset:"95%",textAnchor:"end"}}},hangingIndent:20,hangingIndentTranslation:"inherit",hangingSide:"left",minNodeLength:10,nodeWidth:50,tooltip:{nodeFormat:"{point.name}<br>{point.title}<br>{point.description}"}}}),O(k,"Series/PathUtilities.js",[],function(){function u(l,e){let r=[];for(let g=0;g<l.length;g++){let t=l[g][1],s=l[g][2];if(typeof t=="number"&&typeof s=="number")if(g===0)r.push(["M",t,s]);else if(g===l.length-1)r.push(["L",t,s]);else if(e){let n=l[g-1],f=l[g+1];if(n&&f){let b=n[1],c=n[2],m=f[1],L=f[2];if(typeof b=="number"&&typeof m=="number"&&typeof c=="number"&&typeof L=="number"&&b!==m&&c!==L){let z=b<m?1:-1,i=c<L?1:-1;r.push(["L",t-z*Math.min(Math.abs(t-b),e),s-i*Math.min(Math.abs(s-c),e)],["C",t,s,t,s,t+z*Math.min(Math.abs(t-m),e),s+i*Math.min(Math.abs(s-L),e)])}}}else r.push(["L",t,s])}return r}return{applyRadius:u,getLinkPath:{default:function(l){let{x1:e,y1:r,x2:g,y2:t,width:s=0,inverted:n=!1,radius:f,parentVisible:b}=l;return b?u([["M",e,r],["L",e+s*(n?-.5:.5),r],["L",e+s*(n?-.5:.5),t],["L",g,t]],f):[["M",e,r],["L",e,r],["C",e,r,e,t,e,t],["L",e,t],["C",e,r,e,t,e,t],["L",e,t]]},straight:function(l){let{x1:e,y1:r,x2:g,y2:t,width:s=0,inverted:n=!1,parentVisible:f}=l;return f?[["M",e,r],["L",e+s*(n?-1:1),t],["L",g,t]]:[["M",e,r],["L",e,t],["L",e,t]]},curved:function(l){let{x1:e,y1:r,x2:g,y2:t,offset:s=0,width:n=0,inverted:f=!1,parentVisible:b}=l;return b?[["M",e,r],["C",e+s,r,e-s+n*(f?-1:1),t,e+n*(f?-1:1),t],["L",g,t]]:[["M",e,r],["C",e,r,e,t,e,t],["L",g,t]]}}}}),O(k,"Series/Organization/OrganizationSeries.js",[k["Series/Organization/OrganizationPoint.js"],k["Series/Organization/OrganizationSeriesDefaults.js"],k["Core/Series/SeriesRegistry.js"],k["Series/PathUtilities.js"],k["Core/Utilities.js"]],function(u,l,e,r,g){let{sankey:t}=e.seriesTypes,{css:s,crisp:n,extend:f,isNumber:b,merge:c,pick:m}=g;class L extends t{alignDataLabel(i,y,p){let d=i.shapeArgs;if(p.useHTML&&d){let a=this.options.borderWidth+2*this.options.dataLabels.padding,o=d.width||0,h=d.height||0;this.chart.inverted&&(o=h,h=d.width||0),h-=a,o-=a;let A=y.text;A&&(s(A.element.parentNode,{width:o+"px",height:h+"px"}),s(A.element,{left:0,top:0,width:"100%",height:"100%",overflow:"hidden"})),y.getBBox=()=>({width:o,height:h,x:0,y:0}),y.width=o,y.height=h}super.alignDataLabel.apply(this,arguments)}createNode(i){let y=super.createNode.call(this,i);return y.getSum=()=>1,y}pointAttribs(i,y){let p=t.prototype.pointAttribs.call(this,i,y),d=i.isNode?i.level:i.fromNode.level,a=this.mapOptionsToLevel[d||0]||{},o=i.options,h=a.states&&a.states[y]||{},A=m(h.borderRadius,o.borderRadius,a.borderRadius,this.options.borderRadius),C=m(h.linkColor,o.linkColor,a.linkColor,this.options.linkColor,h.link&&h.link.color,o.link&&o.link.color,a.link&&a.link.color,this.options.link&&this.options.link.color),T=m(h.linkLineWidth,o.linkLineWidth,a.linkLineWidth,this.options.linkLineWidth,h.link&&h.link.lineWidth,o.link&&o.link.lineWidth,a.link&&a.link.lineWidth,this.options.link&&this.options.link.lineWidth),x=m(h.linkOpacity,o.linkOpacity,a.linkOpacity,this.options.linkOpacity,h.link&&h.link.linkOpacity,o.link&&o.link.linkOpacity,a.link&&a.link.linkOpacity,this.options.link&&this.options.link.linkOpacity);return i.isNode?b(A)&&(p.r=A):(p.stroke=C,p["stroke-width"]=T,p.opacity=x,delete p.fill),p}translateLink(i){let y=this.chart,p=this.options,d=i.fromNode,a=i.toNode,o=m(p.linkLineWidth,p.link.lineWidth,0),h=m(p.link.offset,.5),A=m(i.options.link&&i.options.link.type,p.link.type);if(d.shapeArgs&&a.shapeArgs){let C=p.hangingIndent,T=p.hangingSide==="right",x=a.options.offset,W=/%$/.test(x)&&parseInt(x,10),w=y.inverted,j=n((d.shapeArgs.x||0)+(d.shapeArgs.width||0),o),S=n((d.shapeArgs.y||0)+(d.shapeArgs.height||0)/2,o),v=n(a.shapeArgs.x||0,o),N=n((a.shapeArgs.y||0)+(a.shapeArgs.height||0)/2,o),P;if(w&&(j-=d.shapeArgs.width||0,v+=a.shapeArgs.width||0),P=this.colDistance?n(v+(w?1:-1)*(this.colDistance-this.nodeWidth)/2,o):n((v+j)/2,o),W&&(W>=50||W<=-50)&&(P=v=n(v+(w?-.5:.5)*(a.shapeArgs.width||0),o),N=a.shapeArgs.y||0,W>0&&(N+=a.shapeArgs.height||0)),a.hangsFrom===d&&(y.inverted?(S=n(T?(d.shapeArgs.y||0)+C/2:(d.shapeArgs.y||0)+(d.shapeArgs.height||0)-C/2,o),N=T?(a.shapeArgs.y||0)+C/2:(a.shapeArgs.y||0)+(a.shapeArgs.height||0)):S=n((d.shapeArgs.y||0)+C/2,o),P=v=n((a.shapeArgs.x||0)+(a.shapeArgs.width||0)/2,o)),i.plotX=P,i.plotY=(S+N)/2,i.shapeType="path",A==="straight")i.shapeArgs={d:[["M",j,S],["L",v,N]]};else if(A==="curved"){let D=Math.abs(v-j)*h*(w?-1:1);i.shapeArgs={d:[["M",j,S],["C",j+D,S,v-D,N,v,N]]}}else i.shapeArgs={d:r.applyRadius([["M",j,S],["L",P,S],["L",P,N],["L",v,N]],m(p.linkRadius,p.link.radius))};i.dlBox={x:(j+v)/2,y:(S+N)/2,height:o,width:0}}}translateNode(i,y){super.translateNode(i,y);let p=this.chart,d=this.options,a=Math.max(Math.round(i.getSum()*this.translationFactor),d.minLinkWidth||0),o=d.hangingSide==="right",h=d.hangingIndent||0,A=d.hangingIndentTranslation,C=d.minNodeLength||10,T=Math.round(this.nodeWidth),x=i.shapeArgs,W=p.inverted?-1:1,w=i.hangsFrom;if(w)if(A==="cumulative")for(x.height-=h,p.inverted&&!o&&(x.y-=W*h);w;)x.y+=(o?1:W)*h,w=w.hangsFrom;else if(A==="shrink")for(;w&&x.height>h+C;)x.height-=h,(!p.inverted||o)&&(x.y+=h),w=w.hangsFrom;else x.height-=h,(!p.inverted||o)&&(x.y+=h);i.nodeHeight=p.inverted?x.width:x.height,i.shapeArgs&&!i.hangsFrom&&(i.shapeArgs=c(i.shapeArgs,{x:(i.shapeArgs.x||0)+T/2-(i.shapeArgs.width||0)/2,y:(i.shapeArgs.y||0)+a/2-(i.shapeArgs.height||0)/2}))}drawDataLabels(){let i=this.options.dataLabels;if(i.linkTextPath&&i.linkTextPath.enabled)for(let y of this.points)y.options.dataLabels=c(y.options.dataLabels,{useHTML:!1});super.drawDataLabels()}}return L.defaultOptions=c(t.defaultOptions,l),f(L.prototype,{pointClass:u}),e.registerSeriesType("organization",L),L}),O(k,"masters/modules/organization.src.js",[k["Core/Globals.js"]],function(u){return u})})})(R);var E=R.exports;const _=H(E),B=I({__proto__:null,default:_},[E]);export{B as o};
