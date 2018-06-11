webpackJsonp([3],{J5OE:function(t,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={name:"basetable",data:function(){return{url:"./static/vuetable.json",tableData:[],cur_page:1,multipleSelection:[],select_cate:"",select_word:"",del_list:[],is_search:!1,editVisible:!1,delVisible:!1,form:{name:"",date:"",address:"",ticket_id:"",ticket_start:"",ticket_end:"",ticket_date:"",ticket_time_hour:"",ticket_time_minute:"",ticket_amount:"1"},idx:-1}},created:function(){this.getData()},computed:{data:function(){return this.tableData.filter(function(t){return t})}},methods:{handleCurrentChange:function(t){this.cur_page=t,this.getData()},getData:function(){var t=this;this.url="http://localhost:8080/ticket/query",this.$axios.post(this.url,{page:this.cur_page}).then(function(e){console.log("ori request: tableData"),console.log(t.tableData),t.tableData=e.data,t.tableData.ticket_start=e.data.ticket_start,console.log("res.data.list:"),console.log(e.data)})},search:function(){this.is_search=!0},formatter:function(t,e){return t.address},filterTag:function(t,e){return e.tag===t},handleBuyTicket:function(t,e){this.idx=t;var l=this.tableData[t];this.form={name:l.name,date:l.date,address:l.address,ticket_amount:l.amount},this.editVisible=!0},handleDelete:function(t,e){this.idx=t,this.delVisible=!0},delAll:function(){var t=this.multipleSelection.length,e="";this.del_list=this.del_list.concat(this.multipleSelection);for(var l=0;l<t;l++)e+=this.multipleSelection[l].name+" ";this.$message.error("删除了"+e),this.multipleSelection=[]},handleSelectionChange:function(t){this.multipleSelection=t},saveEdit:function(){this.$set(this.tableData,this.idx,this.form),this.editVisible=!1,this.$message.success("修改第 "+(this.idx+1)+" 行成功")},deleteRow:function(){this.tableData.splice(this.idx,1),this.$message.success("删除成功"),this.delVisible=!1}}},i={render:function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"table"},[l("div",{staticClass:"crumbs"},[l("el-breadcrumb",{attrs:{separator:"/"}},[l("el-breadcrumb-item",[l("i",{staticClass:"el-icon-tickets"}),t._v(" 订单管理")])],1)],1),t._v(" "),l("div",{staticClass:"container"},[l("div",{staticClass:"handle-box"},[l("el-button",{staticClass:"handle-del mr10",attrs:{type:"primary",icon:"delete"},on:{click:t.delAll}},[t._v("批量删除")]),t._v(" "),l("el-select",{staticClass:"handle-select mr10",attrs:{placeholder:"筛选省份"},model:{value:t.select_cate,callback:function(e){t.select_cate=e},expression:"select_cate"}},[l("el-option",{key:"1",attrs:{label:"广东省",value:"广东省"}}),t._v(" "),l("el-option",{key:"2",attrs:{label:"湖南省",value:"湖南省"}})],1),t._v(" "),l("el-input",{staticClass:"handle-input mr10",attrs:{placeholder:"筛选关键词"},model:{value:t.select_word,callback:function(e){t.select_word=e},expression:"select_word"}}),t._v(" "),l("el-button",{attrs:{type:"primary",icon:"search"},on:{click:t.search}},[t._v("搜索")])],1),t._v(" "),l("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.data,border:""},on:{"selection-change":t.handleSelectionChange}},[l("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),l("el-table-column",{attrs:{prop:"date",label:"日期",sortable:"",width:"150"}}),t._v(" "),l("el-table-column",{attrs:{prop:"id",label:"机票ID",width:"120"}}),t._v(" "),l("el-table-column",{attrs:{prop:"date",label:"日期",width:"120"}}),t._v(" "),l("el-table-column",{attrs:{prop:"start",label:"出发点",width:"120"}}),t._v(" "),l("el-table-column",{attrs:{prop:"end",label:"目的地",width:"120"}}),t._v(" "),l("el-table-column",{attrs:{prop:"start_time",label:"出发时间",width:"120"}}),t._v(" "),l("el-table-column",{attrs:{prop:"time_hour",label:"小时",width:"60"}}),t._v(" "),l("el-table-column",{attrs:{prop:"time_minute",label:"分钟",width:"60"}}),t._v(" "),l("el-table-column",{attrs:{prop:"amount",label:"余量",width:"120"}}),t._v(" "),l("el-table-column",{attrs:{label:"操作",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-button",{attrs:{size:"small"},on:{click:function(l){t.handleEdit(e.$index,e.row)}}},[t._v("编辑")]),t._v(" "),l("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(l){t.handleDelete(e.$index,e.row)}}},[t._v("删除")])]}}])})],1),t._v(" "),l("div",{staticClass:"pagination"},[l("el-pagination",{attrs:{layout:"prev, pager, next",total:1e3},on:{"current-change":t.handleCurrentChange}})],1)],1),t._v(" "),l("el-dialog",{attrs:{title:"编辑",visible:t.editVisible,width:"30%"},on:{"update:visible":function(e){t.editVisible=e}}},[l("el-form",{ref:"form",attrs:{model:t.form,"label-width":"50px"}},[l("el-form-item",{attrs:{label:"日期"}},[l("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"},model:{value:t.form.date,callback:function(e){t.$set(t.form,"date",e)},expression:"form.date"}})],1),t._v(" "),l("el-form-item",{attrs:{label:"姓名"}},[l("el-input",{model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),l("el-form-item",{attrs:{label:"地址"}},[l("el-input",{model:{value:t.form.address,callback:function(e){t.$set(t.form,"address",e)},expression:"form.address"}})],1)],1),t._v(" "),l("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{on:{click:function(e){t.editVisible=!1}}},[t._v("取 消")]),t._v(" "),l("el-button",{attrs:{type:"primary"},on:{click:t.saveEdit}},[t._v("确 定")])],1)],1),t._v(" "),l("el-dialog",{attrs:{title:"提示",visible:t.delVisible,width:"300px",center:""},on:{"update:visible":function(e){t.delVisible=e}}},[l("div",{staticClass:"del-dialog-cnt"},[t._v("删除不可恢复，是否确定删除？")]),t._v(" "),l("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{on:{click:function(e){t.delVisible=!1}}},[t._v("取 消")]),t._v(" "),l("el-button",{attrs:{type:"primary"},on:{click:t.deleteRow}},[t._v("确 定")])],1)])],1)},staticRenderFns:[]};var s=l("VU/8")(a,i,!1,function(t){l("pAqv")},"data-v-cf8e51be",null);e.default=s.exports},pAqv:function(t,e){}});