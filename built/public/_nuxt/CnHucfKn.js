import{b7 as Re}from"./DPHdV5Tz.js";function Be(ge,ne){for(var u=0;u<ne.length;u++){const K=ne[u];if(typeof K!="string"&&!Array.isArray(K)){for(const g in K)if(g!=="default"&&!(g in ge)){const f=Object.getOwnPropertyDescriptor(K,g);f&&Object.defineProperty(ge,g,f.get?f:{enumerable:!0,get:()=>K[g]})}}}return Object.freeze(Object.defineProperty(ge,Symbol.toStringTag,{value:"Module"}))}var Le={exports:{}};(function(ge){(function(ne){ge.exports?(ne.default=ne,ge.exports=ne):ne(typeof Highcharts<"u"?Highcharts:void 0)})(function(ne){var u=ne?ne._modules:{};function K(g,f,C,P){g.hasOwnProperty(f)||(g[f]=P.apply(null,C),typeof CustomEvent=="function"&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:f,module:g[f]}})))}K(u,"Extensions/Breadcrumbs/BreadcrumbsDefaults.js",[],function(){return{lang:{mainBreadcrumb:"Main"},options:{buttonTheme:{fill:"none",height:18,padding:2,"stroke-width":0,zIndex:7,states:{select:{fill:"none"}},style:{color:"#334eff"}},buttonSpacing:5,floating:!1,format:void 0,relativeTo:"plotBox",rtl:!1,position:{align:"left",verticalAlign:"top",x:0,y:void 0},separator:{text:"/",style:{color:"#666666",fontSize:"0.8em"}},showFullPath:!0,style:{},useHTML:!1,zIndex:7}}}),K(u,"Extensions/Breadcrumbs/Breadcrumbs.js",[u["Extensions/Breadcrumbs/BreadcrumbsDefaults.js"],u["Core/Templating.js"],u["Core/Globals.js"],u["Core/Utilities.js"]],function(g,f,C,P){let{format:O}=f,{composed:B}=C,{addEvent:G,defined:S,extend:F,fireEvent:b,isString:r,merge:m,objectEach:L,pick:A,pushUnique:U}=P;function z(){if(this.breadcrumbs){let j=this.resetZoomButton&&this.resetZoomButton.getBBox(),d=this.breadcrumbs.options;j&&d.position.align==="right"&&d.relativeTo==="plotBox"&&this.breadcrumbs.alignBreadcrumbsGroup(-j.width-d.buttonSpacing)}}function I(){this.breadcrumbs&&(this.breadcrumbs.destroy(),this.breadcrumbs=void 0)}function k(){let j=this.breadcrumbs;if(j&&!j.options.floating&&j.level){let d=j.options,c=d.buttonTheme,w=(c.height||0)+2*(c.padding||0)+d.buttonSpacing,y=d.position.verticalAlign;y==="bottom"?(this.marginBottom=(this.marginBottom||0)+w,j.yOffset=w):y!=="middle"?(this.plotTop+=w,j.yOffset=-w):j.yOffset=void 0}}function X(){this.breadcrumbs&&this.breadcrumbs.redraw()}function q(j){j.resetSelection===!0&&this.breadcrumbs&&this.breadcrumbs.alignBreadcrumbsGroup()}class Y{static compose(d,c){U(B,"Breadcrumbs")&&(G(d,"destroy",I),G(d,"afterShowResetZoom",z),G(d,"getMargins",k),G(d,"redraw",X),G(d,"selection",q),F(c.lang,g.lang))}constructor(d,c){this.elementList={},this.isDirty=!0,this.level=0,this.list=[];let w=m(d.options.drilldown&&d.options.drilldown.drillUpButton,Y.defaultOptions,d.options.navigation&&d.options.navigation.breadcrumbs,c);this.chart=d,this.options=w||{}}updateProperties(d){this.setList(d),this.setLevel(),this.isDirty=!0}setList(d){this.list=d}setLevel(){this.level=this.list.length&&this.list.length-1}getLevel(){return this.level}getButtonText(d){let c=this.chart,w=this.options,y=c.options.lang,Z=A(w.format,w.showFullPath?"{level.name}":"← {level.name}"),V=y&&A(y.drillUpText,y.mainBreadcrumb),Q=w.formatter&&w.formatter(d)||O(Z,{level:d.levelOptions},c)||"";return(r(Q)&&!Q.length||Q==="← ")&&S(V)&&(Q=w.showFullPath?V:"← "+V),Q}redraw(){this.isDirty&&this.render(),this.group&&this.group.align(),this.isDirty=!1}render(){let d=this.chart,c=this.options;!this.group&&c&&(this.group=d.renderer.g("breadcrumbs-group").addClass("highcharts-no-tooltip highcharts-breadcrumbs").attr({zIndex:c.zIndex}).add()),c.showFullPath?this.renderFullPathButtons():this.renderSingleButton(),this.alignBreadcrumbsGroup()}renderFullPathButtons(){this.destroySingleButton(),this.resetElementListState(),this.updateListElements(),this.destroyListElements()}renderSingleButton(){let d=this.chart,c=this.list,w=this.options.buttonSpacing;this.destroyListElements();let y=this.group?this.group.getBBox().width:w,Z=c[c.length-2];!d.drillUpButton&&this.level>0?d.drillUpButton=this.renderButton(Z,y,w):d.drillUpButton&&(this.level>0?this.updateSingleButton():this.destroySingleButton())}alignBreadcrumbsGroup(d){if(this.group){let c=this.options,w=c.buttonTheme,y=c.position,Z=c.relativeTo==="chart"||c.relativeTo==="spacingBox"?void 0:"plotBox",V=this.group.getBBox(),Q=2*(w.padding||0)+c.buttonSpacing;y.width=V.width+Q,y.height=V.height+Q;let _=m(y);d&&(_.x+=d),this.options.rtl&&(_.x+=y.width),_.y=A(_.y,this.yOffset,0),this.group.align(_,!0,Z)}}renderButton(d,c,w){let y=this,Z=this.chart,V=y.options,Q=m(V.buttonTheme),_=Z.renderer.button(y.getButtonText(d),c,w,function(H){let N,l=V.events&&V.events.click;l&&(N=l.call(y,H,d)),N!==!1&&(V.showFullPath?H.newLevel=d.level:H.newLevel=y.level-1,b(y,"up",H))},Q).addClass("highcharts-breadcrumbs-button").add(y.group);return Z.styledMode||_.attr(V.style),_}renderSeparator(d,c){let w=this.chart,y=this.options.separator,Z=w.renderer.label(y.text,d,c,void 0,void 0,void 0,!1).addClass("highcharts-breadcrumbs-separator").add(this.group);return w.styledMode||Z.css(y.style),Z}update(d){m(!0,this.options,d),this.destroy(),this.isDirty=!0}updateSingleButton(){let d=this.chart,c=this.list[this.level-1];d.drillUpButton&&d.drillUpButton.attr({text:this.getButtonText(c)})}destroy(){this.destroySingleButton(),this.destroyListElements(!0),this.group&&this.group.destroy(),this.group=void 0}destroyListElements(d){let c=this.elementList;L(c,(w,y)=>{(d||!c[y].updated)&&((w=c[y]).button&&w.button.destroy(),w.separator&&w.separator.destroy(),delete w.button,delete w.separator,delete c[y])}),d&&(this.elementList={})}destroySingleButton(){this.chart.drillUpButton&&(this.chart.drillUpButton.destroy(),this.chart.drillUpButton=void 0)}resetElementListState(){L(this.elementList,d=>{d.updated=!1})}updateListElements(){let d=this.elementList,c=this.options.buttonSpacing,w=this.list,y=this.options.rtl,Z=y?-1:1,V=function(l,D){return Z*l.getBBox().width+Z*D},Q=function(l,D,x){l.translate(D-l.getBBox().width,x)},_=this.group?V(this.group,c):c,H,N;for(let l=0,D=w.length;l<D;++l){let x,E,W=l===D-1;d[(N=w[l]).level]?(x=(H=d[N.level]).button,H.separator||W?H.separator&&W&&(H.separator.destroy(),delete H.separator):(_+=Z*c,H.separator=this.renderSeparator(_,c),y&&Q(H.separator,_,c),_+=V(H.separator,c)),d[N.level].updated=!0):(x=this.renderButton(N,_,c),y&&Q(x,_,c),_+=V(x,c),W||(E=this.renderSeparator(_,c),y&&Q(E,_,c),_+=V(E,c)),d[N.level]={button:x,separator:E,updated:!0}),x&&x.setState(W?2:0)}}}return Y.defaultOptions=g.options,Y}),K(u,"Series/ColorMapComposition.js",[u["Core/Series/SeriesRegistry.js"],u["Core/Renderer/SVG/SVGElement.js"],u["Core/Utilities.js"]],function(g,f,C){var P;let{column:{prototype:O}}=g.seriesTypes,{addEvent:B,defined:G}=C;return function(S){function F(b){let r=this.series,m=r.chart.renderer;this.moveToTopOnHover&&this.graphic&&(r.stateMarkerGraphic||(r.stateMarkerGraphic=new f(m,"use").css({pointerEvents:"none"}).add(this.graphic.parentGroup)),(b==null?void 0:b.state)==="hover"?(this.graphic.attr({id:this.id}),r.stateMarkerGraphic.attr({href:`${m.url}#${this.id}`,visibility:"visible"})):r.stateMarkerGraphic.attr({href:""}))}S.pointMembers={dataLabelOnNull:!0,moveToTopOnHover:!0,isValid:function(){return this.value!==null&&this.value!==1/0&&this.value!==-1/0&&(this.value===void 0||!isNaN(this.value))}},S.seriesMembers={colorKey:"value",axisTypes:["xAxis","yAxis","colorAxis"],parallelArrays:["x","y","value"],pointArrayMap:["value"],trackerGroups:["group","markerGroup","dataLabelsGroup"],colorAttribs:function(b){let r={};return G(b.color)&&(!b.state||b.state==="normal")&&(r[this.colorProp||"fill"]=b.color),r},pointAttribs:O.pointAttribs},S.compose=function(b){return B(b.prototype.pointClass,"afterSetState",F),b}}(P||(P={})),P}),K(u,"Series/Treemap/TreemapAlgorithmGroup.js",[],function(){return class{constructor(g,f,C,P){this.height=g,this.width=f,this.plot=P,this.direction=C,this.startDirection=C,this.total=0,this.nW=0,this.lW=0,this.nH=0,this.lH=0,this.elArr=[],this.lP={total:0,lH:0,nH:0,lW:0,nW:0,nR:0,lR:0,aspectRatio:function(O,B){return Math.max(O/B,B/O)}}}addElement(g){this.lP.total=this.elArr[this.elArr.length-1],this.total=this.total+g,this.direction===0?(this.lW=this.nW,this.lP.lH=this.lP.total/this.lW,this.lP.lR=this.lP.aspectRatio(this.lW,this.lP.lH),this.nW=this.total/this.height,this.lP.nH=this.lP.total/this.nW,this.lP.nR=this.lP.aspectRatio(this.nW,this.lP.nH)):(this.lH=this.nH,this.lP.lW=this.lP.total/this.lH,this.lP.lR=this.lP.aspectRatio(this.lP.lW,this.lH),this.nH=this.total/this.width,this.lP.nW=this.lP.total/this.nH,this.lP.nR=this.lP.aspectRatio(this.lP.nW,this.nH)),this.elArr.push(g)}reset(){this.nW=0,this.lW=0,this.elArr=[],this.total=0}}}),K(u,"Series/Treemap/TreemapNode.js",[],function(){return class{constructor(){this.childrenTotal=0,this.visible=!1}init(g,f,C,P,O,B,G){return this.id=g,this.i=f,this.children=C,this.height=P,this.level=O,this.series=B,this.parent=G,this}}}),K(u,"Series/DrawPointUtilities.js",[],function(){return{draw:function(g,f){let{animatableAttribs:C,onComplete:P,css:O,renderer:B}=f,G=g.series&&g.series.chart.hasRendered?void 0:g.series&&g.series.options.animation,S=g.graphic;if(f.attribs={...f.attribs,class:g.getClassName()},g.shouldDraw())S||(S=f.shapeType==="text"?B.text():f.shapeType==="image"?B.image(f.imageUrl||"").attr(f.shapeArgs||{}):B[f.shapeType](f.shapeArgs||{}),g.graphic=S,S.add(f.group)),O&&S.css(O),S.attr(f.attribs).animate(C,!f.isNew&&G,P);else if(S){let F=()=>{g.graphic=S=S&&S.destroy(),typeof P=="function"&&P()};Object.keys(C).length?S.animate(C,void 0,()=>F()):F()}}}}),K(u,"Series/Treemap/TreemapPoint.js",[u["Series/DrawPointUtilities.js"],u["Core/Series/SeriesRegistry.js"],u["Core/Utilities.js"]],function(g,f,C){let{pie:{prototype:{pointClass:P}},scatter:{prototype:{pointClass:O}}}=f.seriesTypes,{extend:B,isNumber:G,pick:S}=C;class F extends O{constructor(){super(...arguments),this.shapeType="rect"}draw(r){g.draw(this,r)}getClassName(){let r=this.series,m=r.options,L=super.getClassName();return this.node.level<=r.nodeMap[r.rootNode].level?L+=" highcharts-above-level":this.node.isLeaf||S(m.interactByLeaf,!m.allowTraversingTree)?this.node.isLeaf||(L+=" highcharts-internal-node"):L+=" highcharts-internal-node-interactive",L}isValid(){return!!(this.id||G(this.value))}setState(r){super.setState.apply(this,arguments),this.graphic&&this.graphic.attr({zIndex:r==="hover"?1:0})}shouldDraw(){return G(this.plotY)&&this.y!==null}}return B(F.prototype,{setVisible:P.prototype.setVisible}),F}),K(u,"Series/Treemap/TreemapSeriesDefaults.js",[u["Core/Series/SeriesRegistry.js"],u["Core/Utilities.js"]],function(g,f){let{isString:C}=f;return{allowTraversingTree:!1,animationLimit:250,borderRadius:0,showInLegend:!1,marker:void 0,colorByPoint:!1,dataLabels:{defer:!1,enabled:!0,formatter:function(){let P=this&&this.point?this.point:{};return C(P.name)?P.name:""},inside:!0,verticalAlign:"middle"},tooltip:{headerFormat:"",pointFormat:"<b>{point.name}</b>: {point.value}<br/>"},ignoreHiddenPoint:!0,layoutAlgorithm:"sliceAndDice",layoutStartingDirection:"vertical",alternateStartingDirection:!1,levelIsConstant:!0,traverseUpButton:{position:{align:"right",x:-10,y:10}},borderColor:"#e6e6e6",borderWidth:1,colorKey:"colorValue",opacity:.15,states:{hover:{borderColor:"#999999",brightness:g.seriesTypes.heatmap?0:.1,halo:!1,opacity:.75,shadow:!1}},legendSymbol:"rectangle"}}),K(u,"Series/Treemap/TreemapUtilities.js",[],function(){var g;return(g||(g={})).recursive=function f(C,P,O){let B=P.call(O||this,C);B!==!1&&f(B,P,O)},g}),K(u,"Series/TreeUtilities.js",[u["Core/Color/Color.js"],u["Core/Utilities.js"]],function(g,f){let{extend:C,isArray:P,isNumber:O,isObject:B,merge:G,pick:S,relativeLength:F}=f;return{getColor:function(b,r){let m,L,A,U,z,I,k=r.index,X=r.mapOptionsToLevel,q=r.parentColor,Y=r.parentColorIndex,j=r.series,d=r.colors,c=r.siblings,w=j.points,y=j.chart.options.chart;return b&&(m=w[b.i],L=X[b.level]||{},m&&L.colorByPoint&&(U=m.index%(d?d.length:y.colorCount),A=d&&d[U]),j.chart.styledMode||(z=S(m&&m.options.color,L&&L.color,A,q&&(Z=>{let V=L&&L.colorVariation;return V&&V.key==="brightness"&&k&&c?g.parse(Z).brighten(V.to*(k/c)).get():Z})(q),j.color)),I=S(m&&m.options.colorIndex,L&&L.colorIndex,U,Y,r.colorIndex)),{color:z,colorIndex:I}},getLevelOptions:function(b){let r,m,L,A,U,z,I={};if(B(b))for(A=O(b.from)?b.from:1,z=b.levels,m={},r=B(b.defaults)?b.defaults:{},P(z)&&(m=z.reduce((k,X)=>{let q,Y,j;return B(X)&&O(X.level)&&(Y=S((j=G({},X)).levelIsConstant,r.levelIsConstant),delete j.levelIsConstant,delete j.level,B(k[q=X.level+(Y?0:A-1)])?G(!0,k[q],j):k[q]=j),k},{})),U=O(b.to)?b.to:1,L=0;L<=U;L++)I[L]=G({},r,B(m[L])?m[L]:{});return I},getNodeWidth:function(b,r){let{chart:m,options:L}=b,{nodeDistance:A=0,nodeWidth:U=0}=L,{plotSizeX:z=1}=m;if(U==="auto"){if(typeof A=="string"&&/%$/.test(A))return z/(r+parseFloat(A)/100*(r-1));let I=Number(A);return(z+I)/(r||1)-I}return F(U,z)},setTreeValues:function b(r,m){let L=m.before,A=m.idRoot,U=m.mapIdToNode[A],z=m.levelIsConstant!==!1,I=m.points[r.i],k=I&&I.options||{},X=[],q=0;r.levelDynamic=r.level-(z?0:U.level),r.name=S(I&&I.name,""),r.visible=A===r.id||m.visible===!0,typeof L=="function"&&(r=L(r,m)),r.children.forEach((j,d)=>{let c=C({},m);C(c,{index:d,siblings:r.children.length,visible:r.visible}),j=b(j,c),X.push(j),j.visible&&(q+=j.val)});let Y=S(k.value,q);return r.visible=Y>=0&&(q>0||r.visible),r.children=X,r.childrenTotal=q,r.isLeaf=r.visible&&!q,r.val=Y,r},updateRootId:function(b){let r,m;return B(b)&&(m=B(b.options)?b.options:{},r=S(b.rootNode,m.rootId,""),B(b.userOptions)&&(b.userOptions.rootId=r),b.rootNode=r),r}}}),K(u,"Series/Treemap/TreemapSeries.js",[u["Extensions/Breadcrumbs/Breadcrumbs.js"],u["Core/Color/Color.js"],u["Series/ColorMapComposition.js"],u["Core/Globals.js"],u["Core/Series/SeriesRegistry.js"],u["Series/Treemap/TreemapAlgorithmGroup.js"],u["Series/Treemap/TreemapNode.js"],u["Series/Treemap/TreemapPoint.js"],u["Series/Treemap/TreemapSeriesDefaults.js"],u["Series/Treemap/TreemapUtilities.js"],u["Series/TreeUtilities.js"],u["Core/Utilities.js"]],function(g,f,C,P,O,B,G,S,F,b,r,m){let{parse:L}=f,{composed:A,noop:U}=P,{column:z,scatter:I}=O.seriesTypes,{getColor:k,getLevelOptions:X,updateRootId:q}=r,{addEvent:Y,correctFloat:j,crisp:d,defined:c,error:w,extend:y,fireEvent:Z,isArray:V,isObject:Q,isString:_,merge:H,pick:N,pushUnique:l,stableSort:D}=m,x=!1;function E(){let $,e=this.xAxis,t=this.yAxis;e&&t&&(this.is("treemap")?($={endOnTick:!1,gridLineWidth:0,lineWidth:0,min:0,minPadding:0,max:100,maxPadding:0,startOnTick:!1,title:void 0,tickPositions:[]},y(t.options,$),y(e.options,$),x=!0):x&&(t.setOptions(t.userOptions),e.setOptions(e.userOptions),x=!1))}class W extends I{static compose(e){l(A,"TreemapSeries")&&Y(e,"afterBindAxes",E)}algorithmCalcPoints(e,t,i,o){let h=i.plot,a=i.elArr.length-1,s,p,v,n,T=i.lW,ae=i.lH,re,te=0;for(let ie of(t?(T=i.nW,ae=i.nH):re=i.elArr[a],i.elArr))(t||te<a)&&(i.direction===0?(s=h.x,p=h.y,n=ie/(v=T)):(s=h.x,p=h.y,v=ie/(n=ae)),o.push({x:s,y:p,width:v,height:j(n)}),i.direction===0?h.y=h.y+n:h.x=h.x+v),te+=1;i.reset(),i.direction===0?i.width=i.width-T:i.height=i.height-ae,h.y=h.parent.y+(h.parent.height-i.height),h.x=h.parent.x+(h.parent.width-i.width),e&&(i.direction=1-i.direction),t||i.addElement(re)}algorithmFill(e,t,i){let o=[],h,a=t.direction,s=t.x,p=t.y,v=t.width,n=t.height,T,ae,re,te;for(let ie of i)h=t.width*t.height*(ie.val/t.val),T=s,ae=p,a===0?(v-=re=h/(te=n),s+=re):(n-=te=h/(re=v),p+=te),o.push({x:T,y:ae,width:re,height:te}),e&&(a=1-a);return o}algorithmLowAspectRatio(e,t,i){let o=[],h={x:t.x,y:t.y,parent:t},a=t.direction,s=i.length-1,p=new B(t.height,t.width,a,h),v,n=0;for(let T of i)v=t.width*t.height*(T.val/t.val),p.addElement(v),p.lP.nR>p.lP.lR&&this.algorithmCalcPoints(e,!1,p,o,h),n===s&&this.algorithmCalcPoints(e,!0,p,o,h),++n;return o}alignDataLabel(e,t,i){let o=i.style;o&&!c(o.textOverflow)&&t.text&&t.getBBox().width>(t.text.textWidth||0)&&t.css({textOverflow:"ellipsis",width:o.width+="px"}),z.prototype.alignDataLabel.apply(this,arguments),e.dataLabel&&e.dataLabel.attr({zIndex:(e.node.zIndex||0)+1})}calculateChildrenAreas(e,t){let i=this.options,o=this.mapOptionsToLevel[e.level+1],h=N(this[o&&o.layoutAlgorithm]&&o.layoutAlgorithm,i.layoutAlgorithm),a=i.alternateStartingDirection,s=e.children.filter(n=>!n.ignore),p=[];o&&o.layoutStartingDirection&&(t.direction=o.layoutStartingDirection==="vertical"?0:1),p=this[h](t,s);let v=-1;for(let n of s){let T=p[++v];n.values=H(T,{val:n.childrenTotal,direction:a?1-t.direction:t.direction}),n.pointValues=H(T,{x:T.x/this.axisRatio,y:100-T.y-T.height,width:T.width/this.axisRatio}),n.children.length&&this.calculateChildrenAreas(n,n.values)}}createList(e){let t=this.chart,i=t.breadcrumbs,o=[];if(i){let h=0;o.push({level:h,levelOptions:t.series[0]});let a=e.target.nodeMap[e.newRootId],s=[];for(;a.parent||a.parent==="";)s.push(a),a=e.target.nodeMap[a.parent];for(let p of s.reverse())o.push({level:++h,levelOptions:p});o.length<=1&&(o.length=0)}return o}drawDataLabels(){let e,t,i=this.mapOptionsToLevel;for(let o of this.points.filter(function(h){return h.node.visible}))t=i[o.node.level],e={style:{}},o.node.isLeaf||(e.enabled=!1),t&&t.dataLabels&&(e=H(e,t.dataLabels),this.hasDataLabels=()=>!0),o.shapeArgs&&(e.style.width=o.shapeArgs.width,o.dataLabel&&o.dataLabel.css({width:o.shapeArgs.width+"px"})),o.dlOptions=H(e,o.options.dataLabels);super.drawDataLabels()}drawPoints(e=this.points){let t=this.chart,i=t.renderer,o=t.styledMode,h=this.options,a=o?{}:h.shadow,s=h.borderRadius,p=t.pointCount<h.animationLimit,v=h.allowTraversingTree;for(let n of e){let T=n.node.levelDynamic,ae={},re={},te={},ie="level-group-"+n.node.level,ue=!!n.graphic,ce=p&&ue,J=n.shapeArgs;n.shouldDraw()&&(n.isInside=!0,s&&(re.r=s),H(!0,ce?ae:re,ue?J:{},o?{}:this.pointAttribs(n,n.selected?"select":void 0)),this.colorAttribs&&o&&y(te,this.colorAttribs(n)),this[ie]||(this[ie]=i.g(ie).attr({zIndex:1e3-(T||0)}).add(this.group),this[ie].survive=!0)),n.draw({animatableAttribs:ae,attribs:re,css:te,group:this[ie],imageUrl:n.imageUrl,renderer:i,shadow:a,shapeArgs:J,shapeType:n.shapeType}),v&&n.graphic&&(n.drillId=h.interactByLeaf?this.drillToByLeaf(n):this.drillToByGroup(n))}}drillToByGroup(e){let t=!1;return e.node.isLeaf||e.node.level-this.nodeMap[this.rootNode].level!=1||(t=e.id),t}drillToByLeaf(e){let t=!1,i;if(e.node.parent!==this.rootNode&&e.node.isLeaf)for(i=e.node;!t;)(i=this.nodeMap[i.parent]).parent===this.rootNode&&(t=i.id);return t}drillToNode(e,t){w(32,!1,void 0,{"treemap.drillToNode":"use treemap.setRootNode"}),this.setRootNode(e,t)}drillUp(){let e=this.nodeMap[this.rootNode];e&&_(e.parent)&&this.setRootNode(e.parent,!0,{trigger:"traverseUpButton"})}getExtremes(){let{dataMin:e,dataMax:t}=super.getExtremes(this.colorValueData);return this.valueMin=e,this.valueMax=t,super.getExtremes()}getListOfParents(e,t){let i=V(e)?e:[],o=V(t)?t:[],h=i.reduce(function(a,s,p){let v=N(s.parent,"");return a[v]===void 0&&(a[v]=[]),a[v].push(p),a},{"":[]});for(let a of Object.keys(h)){let s=h[a];if(a!==""&&o.indexOf(a)===-1){for(let p of s)h[""].push(p);delete h[a]}}return h}getTree(){let e=this.data.map(function(i){return i.id}),t=this.getListOfParents(this.data,e);return this.nodeMap={},this.nodeList=[],this.buildTree("",-1,0,t)}buildTree(e,t,i,o,h){let a=[],s=this.points[t],p=0,v;for(let T of o[e]||[])p=Math.max((v=this.buildTree(this.points[T].id,T,i+1,o,e)).height+1,p),a.push(v);let n=new this.NodeClass().init(e,t,a,p,i,this,h);for(let T of a)T.parentNode=n;return this.nodeMap[n.id]=n,this.nodeList.push(n),s&&(s.node=n,n.point=s),n}hasData(){return!!this.processedXData.length}init(e,t){let i=this,o=H(t.drillUpButton,t.breadcrumbs),h=Y(i,"setOptions",a=>{let s=a.userOptions;c(s.allowDrillToNode)&&!c(s.allowTraversingTree)&&(s.allowTraversingTree=s.allowDrillToNode,delete s.allowDrillToNode),c(s.drillUpButton)&&!c(s.traverseUpButton)&&(s.traverseUpButton=s.drillUpButton,delete s.drillUpButton)});super.init(e,t),delete i.opacity,i.eventsToUnbind.push(h),i.options.allowTraversingTree&&(i.eventsToUnbind.push(Y(i,"click",i.onClickDrillToNode)),i.eventsToUnbind.push(Y(i,"setRootNode",function(a){let s=i.chart;s.breadcrumbs&&s.breadcrumbs.updateProperties(i.createList(a))})),i.eventsToUnbind.push(Y(i,"update",function(a,s){let p=this.chart.breadcrumbs;p&&a.options.breadcrumbs&&p.update(a.options.breadcrumbs)})),i.eventsToUnbind.push(Y(i,"destroy",function(a){let s=this.chart;s.breadcrumbs&&!a.keepEventsForUpdate&&(s.breadcrumbs.destroy(),s.breadcrumbs=void 0)}))),e.breadcrumbs||(e.breadcrumbs=new g(e,o)),i.eventsToUnbind.push(Y(e.breadcrumbs,"up",function(a){let s=this.level-a.newLevel;for(let p=0;p<s;p++)i.drillUp()}))}onClickDrillToNode(e){let t=e.point,i=t&&t.drillId;_(i)&&(t.setState(""),this.setRootNode(i,!0,{trigger:"click"}))}pointAttribs(e,t){let i,o=Q(this.mapOptionsToLevel)?this.mapOptionsToLevel:{},h=e&&o[e.node.level]||{},a=this.options,s=t&&a.states&&a.states[t]||{},p=e&&e.getClassName()||"",v={stroke:e&&e.borderColor||h.borderColor||s.borderColor||a.borderColor,"stroke-width":N(e&&e.borderWidth,h.borderWidth,s.borderWidth,a.borderWidth),dashstyle:e&&e.borderDashStyle||h.borderDashStyle||s.borderDashStyle||a.borderDashStyle,fill:e&&e.color||this.color};return p.indexOf("highcharts-above-level")!==-1?(v.fill="none",v["stroke-width"]=0):p.indexOf("highcharts-internal-node-interactive")!==-1?(i=N(s.opacity,a.opacity),v.fill=L(v.fill).setOpacity(i).get(),v.cursor="pointer"):p.indexOf("highcharts-internal-node")!==-1?v.fill="none":t&&(v.fill=L(v.fill).brighten(s.brightness).get()),v}setColorRecursive(e,t,i,o,h){let a=this&&this.chart,s=a&&a.options&&a.options.colors;if(e){let p=k(e,{colors:s,index:o,mapOptionsToLevel:this.mapOptionsToLevel,parentColor:t,parentColorIndex:i,series:this,siblings:h}),v=this.points[e.i];v&&(v.color=p.color,v.colorIndex=p.colorIndex);let n=-1;for(let T of e.children||[])this.setColorRecursive(T,p.color,p.colorIndex,++n,e.children.length)}}setPointValues(){let e=this,{points:t,xAxis:i,yAxis:o}=e,h=e.chart.styledMode,a=s=>h?0:e.pointAttribs(s)["stroke-width"]||0;for(let s of t){let{pointValues:p,visible:v}=s.node;if(p&&v){let{height:n,width:T,x:ae,y:re}=p,te=a(s),ie=d(i.toPixels(ae,!0),te,!0),ue=d(i.toPixels(ae+T,!0),te,!0),ce=d(o.toPixels(re,!0),te,!0),J=d(o.toPixels(re+n,!0),te,!0),he={x:Math.min(ie,ue),y:Math.min(ce,J),width:Math.abs(ue-ie),height:Math.abs(J-ce)};s.plotX=he.x+he.width/2,s.plotY=he.y+he.height/2,s.shapeArgs=he}else delete s.plotX,delete s.plotY}}setRootNode(e,t,i){Z(this,"setRootNode",y({newRootId:e,previousRootId:this.rootNode,redraw:N(t,!0),series:this},i),function(o){let h=o.series;h.idPreviousRoot=o.previousRootId,h.rootNode=o.newRootId,h.isDirty=!0,o.redraw&&h.chart.redraw()})}setState(e){this.options.inactiveOtherPoints=!0,super.setState(e,!1),this.options.inactiveOtherPoints=!1}setTreeValues(e){let t=this.options,i=this.rootNode,o=this.nodeMap[i],h=typeof t.levelIsConstant!="boolean"||t.levelIsConstant,a=[],s=this.points[e.i],p=0;for(let n of e.children)n=this.setTreeValues(n),a.push(n),n.ignore||(p+=n.val);D(a,(n,T)=>(n.sortIndex||0)-(T.sortIndex||0));let v=N(s&&s.options.value,p);return s&&(s.value=v),y(e,{children:a,childrenTotal:p,ignore:!(N(s&&s.visible,!0)&&v>0),isLeaf:e.visible&&!p,levelDynamic:e.level-(h?0:o.level),name:N(s&&s.name,""),sortIndex:N(s&&s.sortIndex,-v),val:v}),e}sliceAndDice(e,t){return this.algorithmFill(!0,e,t)}squarified(e,t){return this.algorithmLowAspectRatio(!0,e,t)}strip(e,t){return this.algorithmLowAspectRatio(!1,e,t)}stripes(e,t){return this.algorithmFill(!1,e,t)}translate(){let e=this,t=e.options,i=q(e),o,h,a,s;super.translate();let p=e.tree=e.getTree();o=e.nodeMap[i],i===""||o&&o.children.length||(e.setRootNode("",!1),i=e.rootNode,o=e.nodeMap[i]),e.mapOptionsToLevel=X({from:o.level+1,levels:t.levels,to:p.height,defaults:{levelIsConstant:e.options.levelIsConstant,colorByPoint:t.colorByPoint}}),b.recursive(e.nodeMap[e.rootNode],v=>{let n=v.parent,T=!1;return v.visible=!0,(n||n==="")&&(T=e.nodeMap[n]),T}),b.recursive(e.nodeMap[e.rootNode].children,v=>{let n=!1;for(let T of v)T.visible=!0,T.children.length&&(n=(n||[]).concat(T.children));return n}),e.setTreeValues(p),e.axisRatio=e.xAxis.len/e.yAxis.len,e.nodeMap[""].pointValues=h={x:0,y:0,width:100,height:100},e.nodeMap[""].values=a=H(h,{width:h.width*e.axisRatio,direction:t.layoutStartingDirection==="vertical"?0:1,val:p.val}),e.calculateChildrenAreas(p,a),e.colorAxis||t.colorByPoint||e.setColorRecursive(e.tree),t.allowTraversingTree&&(s=o.pointValues,e.xAxis.setExtremes(s.x,s.x+s.width,!1),e.yAxis.setExtremes(s.y,s.y+s.height,!1),e.xAxis.setScale(),e.yAxis.setScale()),e.setPointValues()}}return W.defaultOptions=H(I.defaultOptions,F),y(W.prototype,{buildKDTree:U,colorAttribs:C.seriesMembers.colorAttribs,colorKey:"colorValue",directTouch:!0,getExtremesFromAll:!0,getSymbol:U,optionalAxis:"colorAxis",parallelArrays:["x","y","value","colorValue"],pointArrayMap:["value"],pointClass:S,NodeClass:G,trackerGroups:["group","dataLabelsGroup"],utils:b}),C.compose(W),O.registerSeriesType("treemap",W),W}),K(u,"Series/Sunburst/SunburstPoint.js",[u["Core/Series/SeriesRegistry.js"],u["Core/Utilities.js"]],function(g,f){let{series:{prototype:{pointClass:C}},seriesTypes:{treemap:{prototype:{pointClass:P}}}}=g,{correctFloat:O,extend:B,pInt:G}=f;class S extends P{getDataLabelPath(b){var X;let r=this.series.chart.renderer,m=this.shapeExisting,L=m.r+G(((X=b.options)==null?void 0:X.distance)||0),A=m.start,U=m.end,z=A+(U-A)/2,I=z<0&&z>-Math.PI||z>Math.PI,k;return A===-Math.PI/2&&O(U)===O(1.5*Math.PI)&&(A=-Math.PI+Math.PI/360,U=-Math.PI/360,I=!0),U-A>Math.PI&&(I=!1,k=!0,U-A>2*Math.PI-.01&&(A+=.01,U-=.01)),this.dataLabelPath&&(this.dataLabelPath=this.dataLabelPath.destroy()),this.dataLabelPath=r.arc({open:!0,longArc:k?1:0}).attr({start:I?A:U,end:I?U:A,clockwise:+I,x:m.x,y:m.y,r:(L+m.innerR)/2}).add(r.defs),this.dataLabelPath}isValid(){return!0}}return B(S.prototype,{getClassName:C.prototype.getClassName,haloPath:C.prototype.haloPath,setState:C.prototype.setState}),S}),K(u,"Series/Sunburst/SunburstUtilities.js",[u["Core/Series/SeriesRegistry.js"],u["Core/Utilities.js"]],function(g,f){let{seriesTypes:{treemap:C}}=g,{isNumber:P,isObject:O,merge:B}=f;function G(S,F){let b=[];if(P(S)&&P(F)&&S<=F)for(let r=S;r<=F;r++)b.push(r);return b}return{calculateLevelSizes:function(S,F){let b=O(F)?F:{},r,m=0,L,A,U,z;if(O(S)){for(let I of(r=B({},S),A=G(P(b.from)?b.from:0,P(b.to)?b.to:0),U=Object.keys(r).filter(k=>A.indexOf(+k)===-1),L=z=P(b.diffRadius)?b.diffRadius:0,A)){let k=r[I],X=k.levelSize.unit,q=k.levelSize.value;X==="weight"?m+=q:X==="percentage"?(k.levelSize={unit:"pixels",value:q/100*L},z-=k.levelSize.value):X==="pixels"&&(z-=q)}for(let I of A){let k=r[I];if(k.levelSize.unit==="weight"){let X=k.levelSize.value;r[I].levelSize={unit:"pixels",value:X/m*z}}}for(let I of U)r[I].levelSize={value:0,unit:"pixels"}}return r},getLevelFromAndTo:function({level:S,height:F}){return{from:S>0?S:1,to:S+F}},range:G,recursive:C.prototype.utils.recursive}}),K(u,"Series/Sunburst/SunburstNode.js",[u["Series/Treemap/TreemapNode.js"]],function(g){return class extends g{}}),K(u,"Series/Sunburst/SunburstSeriesDefaults.js",[],function(){return{center:["50%","50%"],clip:!1,colorByPoint:!1,opacity:1,dataLabels:{allowOverlap:!0,defer:!0,rotationMode:"circular",style:{textOverflow:"ellipsis"}},rootId:void 0,levelIsConstant:!0,levelSize:{value:1,unit:"weight"},slicedOffset:10}}),K(u,"Series/Sunburst/SunburstSeries.js",[u["Series/CenteredUtilities.js"],u["Core/Globals.js"],u["Core/Series/SeriesRegistry.js"],u["Series/Sunburst/SunburstPoint.js"],u["Series/Sunburst/SunburstUtilities.js"],u["Series/TreeUtilities.js"],u["Core/Utilities.js"],u["Series/Sunburst/SunburstNode.js"],u["Series/Sunburst/SunburstSeriesDefaults.js"]],function(g,f,C,P,O,B,G,S,F){let{getCenter:b,getStartAndEndRadians:r}=g,{noop:m}=f,{column:L,treemap:A}=C.seriesTypes,{getColor:U,getLevelOptions:z,setTreeValues:I,updateRootId:k}=B,{defined:X,error:q,extend:Y,fireEvent:j,isNumber:d,isObject:c,isString:w,merge:y,splat:Z}=G,V=180/Math.PI,Q=function(N,l,D,x){return{x:N+Math.cos(D)*x,y:l+Math.sin(D)*x}};function _(N,l){let D=l.mapIdToNode,x=N.parent,E=x?D[x]:void 0,W=l.series,$=W.chart,e=W.points[N.i],t=U(N,{colors:W.options.colors||$&&$.options.colors,colorIndex:W.colorIndex,index:l.index,mapOptionsToLevel:l.mapOptionsToLevel,parentColor:E&&E.color,parentColorIndex:E&&E.colorIndex,series:l.series,siblings:l.siblings});return N.color=t.color,N.colorIndex=t.colorIndex,e&&(e.color=N.color,e.colorIndex=N.colorIndex,N.sliced=N.id!==l.idRoot&&e.sliced),N}class H extends A{alignDataLabel(l,D,x){if(!x.textPath||!x.textPath.enabled)return super.alignDataLabel.apply(this,arguments)}animate(l){let D,x=this.chart,E=[x.plotWidth/2,x.plotHeight/2],W=x.plotLeft,$=x.plotTop,e=this.group;l?(D={translateX:E[0]+W,translateY:E[1]+$,scaleX:.001,scaleY:.001,rotation:10,opacity:.01},e.attr(D)):(D={translateX:W,translateY:$,scaleX:1,scaleY:1,rotation:0,opacity:1},e.animate(D,this.options.animation))}drawPoints(){let l=this,D=l.mapOptionsToLevel,x=l.shapeRoot,E=l.group,W=l.hasRendered,$=l.rootNode,e=l.idPreviousRoot,t=l.nodeMap,i=t[e],o=i&&i.shapeArgs,h=l.points,a=l.startAndEndRadians,s=l.chart,p=s&&s.options&&s.options.chart||{},v=typeof p.animation!="boolean"||p.animation,n=l.center,T={x:n[0],y:n[1]},ae=n[3]/2,re=l.chart.renderer,te=!!(v&&W&&$!==e&&l.dataLabelsGroup),ie,ue=!1,ce=!1;for(let J of(te&&(l.dataLabelsGroup.attr({opacity:0}),ie=function(){ue=!0,l.dataLabelsGroup&&l.dataLabelsGroup.animate({opacity:1,visibility:"inherit"})}),h)){let he,xe,be=J.node,Pe=D[be.level],Ae=J.shapeExisting||{},de=be.shapeArgs||{},me=!!(be.visible&&be.shapeArgs);de.borderRadius=l.options.borderRadius,he=W&&v?function(ee,M){let oe=M.point,le=M.radians,R=M.innerR,ve=M.idRoot,pe=M.idPreviousRoot,se=M.shapeExisting,Se=M.shapeRoot,Te=M.shapePreviousRoot,Ce=M.visible,fe={},ye={end:ee.end,start:ee.start,innerR:ee.innerR,r:ee.r,x:ee.x,y:ee.y};return Ce?!oe.graphic&&Te&&((fe=ve===oe.id?{start:le.start,end:le.end}:Te.end<=ee.start?{start:le.end,end:le.end}:{start:le.start,end:le.start}).innerR=fe.r=R):oe.graphic&&(pe===oe.id?ye={innerR:R,r:R}:Se&&(ye=Se.end<=se.start?{innerR:R,r:R,start:le.end,end:le.end}:{innerR:R,r:R,start:le.start,end:le.start})),{from:fe,to:ye}}(de,{center:T,point:J,radians:a,innerR:ae,idRoot:$,idPreviousRoot:e,shapeExisting:Ae,shapeRoot:x,shapePreviousRoot:o,visible:me}):{to:de,from:{}},Y(J,{shapeExisting:de,tooltipPos:[de.plotX,de.plotY],drillId:function(ee,M,oe){let le;return ee.node.isLeaf||(le=M===ee.id?oe[M].parent:ee.id),le}(J,$,t),name:""+(J.name||J.id||J.index),plotX:de.plotX,plotY:de.plotY,value:be.val,isInside:me,isNull:!me}),J.dlOptions=function(ee){let M=ee.point,oe=c(ee.shapeArgs)?ee.shapeArgs:{},le=c(ee.optionsPoint)?ee.optionsPoint.dataLabels:{},R=y({style:{}},Z(c(ee.level)?ee.level.dataLabels:{})[0],le),ve,pe,se=R.rotationMode;return d(R.rotation)||((se==="auto"||se==="circular")&&(R.useHTML&&se==="circular"&&(se="auto"),M.innerArcLength<1&&M.outerArcLength>oe.radius?(ve=0,M.dataLabelPath&&se==="circular"&&(R.textPath={enabled:!0})):M.innerArcLength>1&&M.outerArcLength>1.5*oe.radius?se==="circular"?R.textPath={enabled:!0,attributes:{dy:5}}:se="parallel":(M.dataLabel&&M.dataLabel.textPath&&se==="circular"&&(R.textPath={enabled:!1}),se="perpendicular")),se!=="auto"&&se!=="circular"&&(M.dataLabel&&M.dataLabel.textPath&&(R.textPath={enabled:!1}),ve=oe.end-(oe.end-oe.start)/2),se==="parallel"?R.style.width=Math.min(2.5*oe.radius,(M.outerArcLength+M.innerArcLength)/2):!X(R.style.width)&&oe.radius&&(R.style.width=M.node.level===1?2*oe.radius:oe.radius),se==="perpendicular"&&M.outerArcLength<16&&(R.style.width=1),R.style.width=Math.max(R.style.width-2*(R.padding||0),1),pe=ve*V%180,se==="parallel"&&(pe-=90),pe>90?pe-=180:pe<-90&&(pe+=180),R.rotation=pe),R.textPath&&(M.shapeExisting.innerR===0&&R.textPath.enabled?(R.rotation=0,R.textPath.enabled=!1,R.style.width=Math.max(2*M.shapeExisting.r-2*(R.padding||0),1)):M.dlOptions&&M.dlOptions.textPath&&!M.dlOptions.textPath.enabled&&se==="circular"&&(R.textPath.enabled=!0),R.textPath.enabled&&(R.rotation=0,R.style.width=Math.max((M.outerArcLength+M.innerArcLength)/2-2*(R.padding||0),1))),R}({point:J,level:Pe,optionsPoint:J.options,shapeArgs:de}),!ce&&me&&(ce=!0,xe=ie),J.draw({animatableAttribs:he.to,attribs:Y(he.from,!s.styledMode&&l.pointAttribs(J,J.selected&&"select")),onComplete:xe,group:E,renderer:re,shapeType:"arc",shapeArgs:de})}te&&ce?(l.hasRendered=!1,l.options.dataLabels.defer=!0,L.prototype.drawDataLabels.call(l),l.hasRendered=!0,ue&&ie()):L.prototype.drawDataLabels.call(l),l.idPreviousRoot=$}layoutAlgorithm(l,D,x){let E=l.start,W=l.end-E,$=l.val,e=l.x,t=l.y,i=x&&c(x.levelSize)&&d(x.levelSize.value)?x.levelSize.value:0,o=l.r,h=o+i,a=x&&d(x.slicedOffset)?x.slicedOffset:0;return(D||[]).reduce((s,p)=>{let v=1/$*p.val*W,n=Q(e,t,E+v/2,a),T={x:p.sliced?n.x:e,y:p.sliced?n.y:t,innerR:o,r:h,radius:i,start:E,end:E+v};return s.push(T),E=T.end,s},[])}setRootNode(l,D,x){if(this.nodeMap[l].level===1&&this.nodeList.filter(E=>E.level===1).length===1){if(this.idPreviousRoot==="")return;l=""}super.setRootNode(l,D,x)}setShapeArgs(l,D,x){let E=x[l.level+1],W=l.children.filter(function(t){return t.visible}),$=[];$=this.layoutAlgorithm(D,W,E);let e=-1;for(let t of W){let i=$[++e],o=i.start+(i.end-i.start)/2,h=i.innerR+(i.r-i.innerR)/2,a=i.end-i.start,s=i.innerR===0&&a>6.28?{x:i.x,y:i.y}:Q(i.x,i.y,o,h),p=t.val?t.childrenTotal>t.val?t.childrenTotal:t.val:t.childrenTotal;this.points[t.i]&&(this.points[t.i].innerArcLength=a*i.innerR,this.points[t.i].outerArcLength=a*i.r),t.shapeArgs=y(i,{plotX:s.x,plotY:s.y}),t.values=y(i,{val:p}),t.children.length&&this.setShapeArgs(t,t.values,x)}}translate(){let l=this.options,D=this.center=this.getCenter(),x=this.startAndEndRadians=r(l.startAngle,l.endAngle),E=D[3]/2,W=D[2]/2,$=k(this),e=this.nodeMap,t,i=e&&e[$],o={};this.shapeRoot=i&&i.shapeArgs,this.processedXData||this.processData(),this.generatePoints(),j(this,"afterTranslate");let h=this.tree=this.getTree(),a=w((i=(e=this.nodeMap)[$]).parent)?i.parent:"",s=e[a],{from:p,to:v}=O.getLevelFromAndTo(i);t=z({from:p,levels:this.options.levels,to:v,defaults:{colorByPoint:l.colorByPoint,dataLabels:l.dataLabels,levelIsConstant:l.levelIsConstant,levelSize:l.levelSize,slicedOffset:l.slicedOffset}}),t=O.calculateLevelSizes(t,{diffRadius:W-E,from:p,to:v}),I(h,{before:_,idRoot:$,levelIsConstant:l.levelIsConstant,mapOptionsToLevel:t,mapIdToNode:e,points:this.points,series:this});let n=e[""].shapeArgs={end:x.end,r:E,start:x.start,val:i.val,x:D[0],y:D[1]};for(let T of(this.setShapeArgs(s,n,t),this.mapOptionsToLevel=t,this.points))o[T.id]&&q(31,!1,this.chart),o[T.id]=!0}}return H.defaultOptions=y(A.defaultOptions,F),Y(H.prototype,{axisTypes:[],drawDataLabels:m,getCenter:b,isCartesian:!1,onPointSupported:!0,pointAttribs:L.prototype.pointAttribs,pointClass:P,NodeClass:S,utils:O}),C.registerSeriesType("sunburst",H),H}),K(u,"masters/modules/sunburst.src.js",[u["Core/Globals.js"],u["Extensions/Breadcrumbs/Breadcrumbs.js"]],function(g,f){return g.Breadcrumbs=g.Breadcrumbs||f,g.Breadcrumbs.compose(g.Chart,g.defaultOptions),g})})})(Le);var we=Le.exports;const Oe=Re(we),je=Be({__proto__:null,default:Oe},[we]);export{je as s};
