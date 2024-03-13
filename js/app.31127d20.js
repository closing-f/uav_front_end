(function(){"use strict";var t={47444:function(t,e,s){var a=s(66848),i=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("HelloWorld")],1)},r=[],o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"uav_ui"}},[e("br"),e("div",{staticClass:"row"},[t._m(0),e("div",{staticClass:"col-sm-6"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-4"},[e("div",{staticClass:"card border-primary mb-3",staticStyle:{"max-width":"540px"}},[e("div",{staticClass:"row no-gutters"},[t._m(1),e("div",{staticClass:"col-md-9"},[e("div",{staticClass:"card-body"},[e("ul",{staticClass:"list-group list-group-flush left"},[e("li",{staticClass:"list-group-item text-left"},[e("h3",[t._v("电量:"+t._s(t.uav_state[0].battery))])]),e("li",{staticClass:"list-group-item text-left"},[e("h3",[t._v("传输成功率:"+t._s(t.uav_state[0].success_rate))])]),e("li",{staticClass:"list-group-item text-left"},[e("h3",[t._v("接受包大小:"+t._s(t.uav_state[0].pacakge_len))])])])])])])])]),e("div",{staticClass:"col-sm-4"},[e("div",{staticClass:"card border-primary mb-3",staticStyle:{"max-width":"540px"}},[e("div",{staticClass:"row no-gutters"},[t._m(2),e("div",{staticClass:"col-md-9"},[e("div",{staticClass:"card-body"},[e("ul",{staticClass:"list-group list-group-flush"},[e("li",{staticClass:"list-group-item"},[e("h3",[t._v("电量："+t._s(t.uav_state[1].battery))])]),e("li",{staticClass:"list-group-item text-left"},[e("h3",[t._v("传输成功率:"+t._s(t.uav_state[1].success_rate))])]),e("li",{staticClass:"list-group-item text-left"},[e("h3",[t._v("接受包大小:"+t._s(t.uav_state[1].pacakge_len))])])])])])])])]),e("div",{staticClass:"col-sm-4"},[e("div",{staticClass:"card border-primary mb-3",staticStyle:{"max-width":"540px"}},[e("div",{staticClass:"row no-gutters"},[t._m(3),e("div",{staticClass:"col-md-9"},[e("div",{staticClass:"card-body"},[e("ul",{staticClass:"list-group list-group-flush left"},[e("li",{staticClass:"list-group-item text-left"},[e("h3",[t._v("电量："+t._s(t.uav_state[2].battery))])]),e("li",{staticClass:"list-group-item text-left"},[e("h3",[t._v("传输成功率:"+t._s(t.uav_state[2].success_rate))])]),e("li",{staticClass:"list-group-item text-left"},[e("h3",[t._v("接受包大小:"+t._s(t.uav_state[2].pacakge_len))])])])])])])])])]),e("b-row",[e("div",{staticClass:"card col-sm-12"},[e("div",{staticClass:"card-body"},[e("video",{staticClass:"col-sm-12",attrs:{id:"video1"}},[e("source",{attrs:{src:s(10265),type:"video/mp4"}}),e("source",{attrs:{src:"/RealUAV.ogg",type:"video/ogg"}})]),e("br"),e("br"),e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-6"},[e("button",{staticClass:"btn btn-primary btn-lg btn-block",attrs:{type:"button"},on:{click:t.playVid}},[t._v(t._s(t.video_state))])]),e("div",{staticClass:"col-sm-6"},[e("button",{staticClass:"btn btn-secondary btn-lg btn-block",attrs:{type:"button"},on:{click:t.resetVid}},[t._v("重置")])])])])])])],1),t._m(4)])])},n=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-sm-3"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("h2",{staticClass:"card-title"},[t._v("各传感器AoI 时间序列图")]),e("div",{staticStyle:{width:"100%",height:"300px"},attrs:{id:"myChart"}})])]),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("h2",{staticClass:"card-title"},[t._v("传感器平均AoI 时间序列图")]),e("br"),e("div",{staticStyle:{width:"100%",height:"300px"},attrs:{id:"averageChart"}})])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-md-3"},[e("br"),e("br"),e("br"),e("img",{staticClass:"rounded mx-auto d-block",staticStyle:{width:"150%",height:"40%"},attrs:{src:"https://s2.loli.net/2024/03/09/VM8Wu1nlJyS94XR.png",alt:"..."}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-md-3"},[e("br"),e("br"),e("br"),e("img",{staticClass:"rounded mx-auto d-block",staticStyle:{width:"150%",height:"40%"},attrs:{src:"https://s2.loli.net/2024/03/09/VM8Wu1nlJyS94XR.png",alt:"..."}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-md-3"},[e("br"),e("br"),e("br"),e("img",{staticClass:"rounded mx-auto d-block",staticStyle:{width:"150%",height:"40%"},attrs:{src:"https://s2.loli.net/2024/03/09/VM8Wu1nlJyS94XR.png",alt:"..."}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-sm-3"},[e("div",{staticClass:"row-sm-6"},[e("div",{staticClass:"card",staticStyle:{width:"100%",height:"100%"}},[e("div",{staticClass:"card-body"},[e("h2",{staticClass:"card-title"},[t._v("传感器数据新鲜度饼图")]),e("br"),e("div",{staticStyle:{width:"100%",height:"300px"},attrs:{id:"piechart"}})])])]),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{staticClass:"row-sm-6"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("h2",{staticClass:"card-title"},[t._v("算法效果对比图")]),e("br"),e("img",{staticClass:"img-fluid border-primary",staticStyle:{width:"100%",height:"300px"},attrs:{src:"https://s2.loli.net/2022/12/04/49HRFO5CLDeT8f6.png",alt:"..."}})])])])])}],l=(s(44114),s(76236)),c=s.n(l),d={name:"HelloWorld",data(){return{start_pause:!0,video_state:"开始",time_step:1,average_time_step:1,average_date:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],date:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],sensor1:[],sensor2:[],sensor3:[],sensor4:[],sensor5:[],uav_state:[{battery:82.5,pacakge_len:12.2,success_rate:98.3},{battery:84.5,pacakge_len:10.2,success_rate:96.4},{battery:75.5,pacakge_len:13.2,success_rate:98.2},{battery:95.5,pacakge_len:15.3,success_rate:90.1}],average_sensor:[],sensor_excel:[[1,2,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,2,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5],[1,2,3,4,5,6,7,8,9,10,10,10,10,10,10,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,2,3,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,10,0,0,0,0,0],[1,2,3,4,5,0,1,2,3,4,5,6,7,0,0,0,0,0,0,1,2,3,4,5,6,7,0,0,0,0],[1,2,3,2,1.25,1.5,1.75,2,2.25,2.5,2.5,2.5,2.5,2.5,2.75,3,.75,1,1.25,1.5,1.75,2,2.25,2.5,2.75,.25,.5,.75,1,1.25]],pie_excel:[[0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,4,4,3,3,3,3,3,3,4,4,4,4,3,3,3],[4,4,4,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1],[0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0]],echartsOption:{title:{nameTextStyle:{fontStyle:"oblique"}},backgroundColor:"#FFFAF0",legend:{data:["Sensor1","Sensor2","Sensor3","Sensor4","Sensor5"]},xAxis:{name:"Time",nameTextStyle:{fontWeight:600,fontSize:25},type:"category",boundaryGap:!1,data:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]},yAxis:{name:"AoI ",nameTextStyle:{fontWeight:600,fontSize:25},type:"value",min:0,max:12,interval:2,scale:!0},tooltip:{trigger:"axis"},grid:{right:140},series:[{name:"Sensor1",type:"line",symbol:"emptyCircle",smooth:!0,labelLayout:{moveOverlap:"shiftY"},emphasis:{focus:"series"},data:this.sensor1},{name:"Sensor2",type:"line",symbol:"rect",smooth:!0,labelLayout:{moveOverlap:"shiftY"},emphasis:{focus:"series"},data:this.sensor2},{name:"Sensor3",type:"line",symbol:"triangle",smooth:!0,labelLayout:{moveOverlap:"shiftY"},emphasis:{focus:"series"},data:this.sensor3},{name:"Sensor4",type:"line",symbol:"pin",smooth:!0,labelLayout:{moveOverlap:"shiftY"},emphasis:{focus:"series"},data:this.sensor4},{name:"Sensor5",type:"line",symbol:"pin",smooth:!0,labelLayout:{moveOverlap:"shiftY"},emphasis:{focus:"series"},data:this.sensor4}]},average_option:{title:{nameTextStyle:{fontStyle:"oblique"}},axisPointer:{animation:!1},backgroundColor:"#FFFAF0",legend:{data:["SensorAverage"]},xAxis:{name:"Time",nameTextStyle:{fontWeight:600,fontSize:25},type:"category",boundaryGap:!1,data:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]},yAxis:{name:"AoI ",nameTextStyle:{fontWeight:600,fontSize:25},type:"value",min:0,max:6,interval:2,scale:!0},tooltip:{trigger:"axis"},grid:{right:140},series:[{name:"SensorAverage",type:"line",symbol:"emptyCircle",animation:!0,animationEasing:"linear",smooth:!0,labelLayout:{moveOverlap:"shiftY"},emphasis:{focus:"series"},data:this.average_sensor}]},pie_option:{tooltip:{trigger:"item"},legend:{top:"5%",left:"center"},backgroundColor:"#FFFAF0",series:[{name:"Access From",type:"pie",radius:["40%","70%"],avoidLabelOverlap:!1,itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:3},label:{show:!1,position:"center"},emphasis:{label:{show:!0,fontSize:30,fontWeight:"bold"}},labelLine:{show:!1},data:[{value:1048,name:"Medium freshness"},{value:735,name:"low freshness"},{value:580,name:"high freshness"}]}]}}},mounted(){this.myChart=c().init(document.getElementById("myChart"),"vintage"),this.myChart.setOption(this.echartsOption),setInterval(this.addData,1e3),this.averageChart=c().init(document.getElementById("averageChart"),"vintage"),this.averageChart.setOption(this.average_option),setInterval(this.addAverageData,1e3),this.pieChart=c().init(document.getElementById("piechart"),"vintage"),this.pieChart.setOption(this.pie_option),setInterval(this.add_piedata,3e3),setInterval(this.changeUAV,1e3),window.onresize=()=>{this.resize_windows()}},methods:{resize_windows:function(){this.myChart.resize(),this.averageChart.resize(),this.pieChart.resize()},playVid:function(){var t=document.getElementById("video1");1==this.start_pause?(t.play(),this.video_state="暂停",this.start_pause=!1):(t.pause(),this.video_state="开始",this.start_pause=!0)},resetVid:function(){document.getElementById("video1").load();var t=document.getElementById("video1");t.pause()},addData:function(){var t=document.getElementById("video1"),e=t.currentTime,s=parseInt(e),a=.3;s<30&&s>.5&&(this.sensor1.push((this.sensor_excel[0][s]+Math.random()*a).toFixed(3)),this.sensor2.push((this.sensor_excel[1][s]+.5+Math.random()*a).toFixed(3)),this.sensor3.push((this.sensor_excel[2][s]+1+Math.random()*a).toFixed(3)),this.sensor4.push((this.sensor_excel[3][s]+1.5+Math.random()*a).toFixed(3)),this.sensor5.push((this.sensor_excel[4][s]+1.5+Math.random()*a).toFixed(3))),this.echartsOption.xAxis.data=this.date,this.echartsOption.series[0].data=this.sensor1,this.echartsOption.series[1].data=this.sensor2,this.echartsOption.series[2].data=this.sensor3,this.echartsOption.series[3].data=this.sensor4,this.echartsOption.series[4].data=this.sensor5,this.myChart.setOption(this.echartsOption)},addAverageData:function(){var t=document.getElementById("video1"),e=t.currentTime,s=parseInt(e),a=0;s<30&&s>.5&&this.average_sensor.push((this.sensor_excel[5][s]+Math.random()*a).toFixed(3)),this.average_option.xAxis.data=this.average_date,this.average_option.series[0].data=this.average_sensor,this.averageChart.setOption(this.average_option)},add_piedata:function(){var t=document.getElementById("video1"),e=t.currentTime,s=parseInt(e),a=0;s<30&&s>.5&&(this.pie_option.series[0].data[0].value=(this.pie_excel[0][s]+Math.random()*a).toFixed(3),this.pie_option.series[0].data[1].value=(this.pie_excel[1][s]+Math.random()*a).toFixed(3),this.pie_option.series[0].data[2].value=(this.pie_excel[2][s]+Math.random()*a).toFixed(3)),this.pieChart.setOption(this.pie_option)},changeUAV:function(){var t=document.getElementById("video1"),e=t.currentTime,s=parseInt(e);if(s<30&&s>.5)for(var a=0;a<4;a++)this.uav_state[a].battery-=.7*Math.random(),this.uav_state[a].success_rate=.2*Math.random()+.8,this.uav_state[a].pacakge_len+=Math.round(2*Math.random()),this.uav_state[a].battery=this.uav_state[a].battery.toFixed(2),this.uav_state[a].success_rate=this.uav_state[a].success_rate.toFixed(2)}}},h=d,u=s(81656),p=(0,u.A)(h,o,n,!1,null,"7f581211",null),v=p.exports,m={name:"App",components:{HelloWorld:v}},f=m,_=(0,u.A)(f,i,r,!1,null,null,null),g=_.exports,b=s(37110),y=s.n(b),C=s(71641),x=s(24486);s(59313);a["default"].config.productionTip=!1,a["default"].use(y()),a["default"].use(C.vGs),a["default"].use(x.YS),a["default"].config.productionTip=!1,new a["default"]({render:t=>t(g)}).$mount("#app")},10265:function(t,e,s){t.exports=s.p+"media/RealUAV.3fcafb8a.mp4"}},e={};function s(a){var i=e[a];if(void 0!==i)return i.exports;var r=e[a]={exports:{}};return t[a].call(r.exports,r,r.exports,s),r.exports}s.m=t,function(){var t=[];s.O=function(e,a,i,r){if(!a){var o=1/0;for(d=0;d<t.length;d++){a=t[d][0],i=t[d][1],r=t[d][2];for(var n=!0,l=0;l<a.length;l++)(!1&r||o>=r)&&Object.keys(s.O).every((function(t){return s.O[t](a[l])}))?a.splice(l--,1):(n=!1,r<o&&(o=r));if(n){t.splice(d--,1);var c=i();void 0!==c&&(e=c)}}return e}r=r||0;for(var d=t.length;d>0&&t[d-1][2]>r;d--)t[d]=t[d-1];t[d]=[a,i,r]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var a in e)s.o(e,a)&&!s.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){s.p="/"}(),function(){var t={524:0};s.O.j=function(e){return 0===t[e]};var e=function(e,a){var i,r,o=a[0],n=a[1],l=a[2],c=0;if(o.some((function(e){return 0!==t[e]}))){for(i in n)s.o(n,i)&&(s.m[i]=n[i]);if(l)var d=l(s)}for(e&&e(a);c<o.length;c++)r=o[c],s.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return s.O(d)},a=self["webpackChunkuavue2"]=self["webpackChunkuavue2"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=s.O(void 0,[504],(function(){return s(47444)}));a=s.O(a)})();
//# sourceMappingURL=app.31127d20.js.map