webpackJsonp([10],{H3ey:function(t,e){},a52u:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={name:"dashboard",data:function(){return{name:localStorage.getItem("ms_username"),todoList:[{title:"今天要修复100个bug",status:!1},{title:"今天要修复100个bug",status:!1},{title:"今天要写100行代码加几个bug吧",status:!1},{title:"今天要修复100个bug",status:!1},{title:"今天要修复100个bug",status:!0},{title:"今天要写100行代码加几个bug吧",status:!0}]}},computed:{role:function(){return"admin"===this.name?"超级管理员":"普通用户"}}},r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:8}},[s("el-row",[s("el-col",[s("el-card",{staticClass:"mgb20",attrs:{shadow:"hover"}},[s("h1",[t._v("欢迎进入购票端!")]),t._v(" "),s("div",{staticClass:"user-info"},[s("img",{staticClass:"user-avator",attrs:{src:"static/img/img.jpg",alt:""}}),t._v(" "),s("div",{staticClass:"user-info-cont"},[s("div",{staticClass:"user-info-name"},[t._v(t._s(t.name))]),t._v(" "),s("div",[t._v(t._s(t.role))])])])])],1)],1)],1)],1)],1)},staticRenderFns:[]};var i=s("VU/8")(a,r,!1,function(t){s("H3ey")},"data-v-17543b74",null);e.default=i.exports}});