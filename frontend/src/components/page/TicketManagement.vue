<template>
    <div class="table">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-tickets"></i> 机票查询</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="handle-box">
                <!--<el-button type="primary" icon="delete" class="handle-del mr10" @click="delAll">批量删除</el-button>-->
                <!--<el-select v-model="select_cate" placeholder="筛选省份" class="handle-select mr10">-->
                    <!--<el-option key="1" label="广东省" value="广东省"></el-option>-->
                    <!--<el-option key="2" label="湖南省" value="湖南省"></el-option>-->
                <!--</el-select>-->
                <!--<el-input v-model="select_word" placeholder="筛选关键词" class="handle-input mr10"></el-input>-->
                <!--<el-button type="primary" icon="search" @click="search">搜索</el-button>-->
                <!--<el-button type="primary" icon="addTicket" @click="addTicket">添加机票</el-button>-->
                <el-button type="primary" icon="addTicket" @click="buySelectedTicket">批量购买</el-button>
            </div>
            <el-table :data="data" border style="width: 100%" ref="multipleTable" @selection-change="handleSelectionChange">
                <!--<el-table-column type="selection" width="55"></el-table-column>-->
                <el-table-column prop="date" label="日期" sortable width="120">
                </el-table-column>
                <el-table-column prop="id" label="机票ID" width="120">
                </el-table-column>
                <el-table-column prop="date" label="日期" width="120">
                </el-table-column>
                <el-table-column prop="start" label="出发地" width="120">
                </el-table-column>
                <el-table-column prop="end" label="目的地" width="120">
                </el-table-column>
                <el-table-column prop="start_time" label="出发时间" width="120">
                </el-table-column>
                <el-table-column prop="time_hour" label="小时" width="60">
                </el-table-column>
                <el-table-column prop="time_minute" label="分钟" width="60">
                </el-table-column>
                <el-table-column prop="price" label="价钱" width="120">
                </el-table-column>
                <el-table-column prop="amount" label="余量" width="120">
                </el-table-column>
                <el-table-column label="操作" width="180">
                    <template slot-scope="scope">
                        <el-button size="small" @click="handleBuyTicket(scope.$index, scope.row)">购票</el-button>
                        <!--<el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>-->
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination">
                <el-pagination @current-change="handleCurrentChange" layout="prev, pager, next" :total=tableData.length>
                </el-pagination>
            </div>
        </div>
        <!--&lt;!&ndash; 添加票弹出框 &ndash;&gt;-->
        <!--<el-dialog title="编辑" :visible.sync="resigterEditVisible" width="30%">-->
            <!--<el-form ref="form" :model="form" label-width="50px">-->
                <!--<el-form-item label="日期">-->
                    <!--<el-date-picker type="date" placeholder="选择日期" v-model="form.date" value-format="yyyy-MM-dd" style="width: 100%;"></el-date-picker>-->
                <!--</el-form-item>-->
                <!--<el-form-item label="出发地">-->
                    <!--<el-input v-model="form.start"></el-input>-->
                <!--</el-form-item>-->
                <!--<el-form-item label="目的地">-->
                    <!--<el-input v-model="form.end"></el-input>-->
                <!--</el-form-item>-->
                <!--<el-form-item label="出发时间">-->
                    <!--<el-input v-model="form.start_time"></el-input>-->
                <!--</el-form-item>-->
                <!--<el-form-item label="小时">-->
                    <!--<el-input v-model="form.time_hour"></el-input>-->
                <!--</el-form-item>-->
                <!--<el-form-item label="分钟">-->
                    <!--<el-input v-model="form.time_minute"></el-input>-->
                <!--</el-form-item>-->
                <!--<el-form-item label="价钱">-->
                    <!--<el-input v-model="form.price"></el-input>-->
                <!--</el-form-item>-->
                <!--<el-form-item label="余量">-->
                    <!--<el-input v-model="form.amount"></el-input>-->
                <!--</el-form-item>-->
            <!--</el-form>-->
            <!--&lt;!&ndash;<span slot="footer" class="dialog-footer">&ndash;&gt;-->
                <!--&lt;!&ndash;<el-button @click="resigterEditVisible = false">取 消</el-button>&ndash;&gt;-->
                <!--&lt;!&ndash;<el-button type="primary" @click="saveAddEdit">确 定</el-button>&ndash;&gt;-->
            <!--&lt;!&ndash;</span>&ndash;&gt;-->
        <!--</el-dialog>-->

        <!--&lt;!&ndash; 编辑弹出框 &ndash;&gt;-->
        <!--<el-dialog title="编辑" :visible.sync="editVisible" width="30%">-->
            <!--<el-form ref="form" :model="form" label-width="50px">-->
                <!--<el-form-item label="日期">-->
                    <!--<el-date-picker type="date" placeholder="选择日期" v-model="form.date" value-format="yyyy-MM-dd" style="width: 100%;"></el-date-picker>-->
                <!--</el-form-item>-->
                <!--<el-form-item label="机票ID   ">-->
                    <!--<el-input v-model="form.id"></el-input>-->
                <!--</el-form-item>-->
                <!--<el-form-item label="出发地">-->
                    <!--<el-input v-model="form.start"></el-input>-->
                <!--</el-form-item>-->
                <!--<el-form-item label="目的地">-->
                    <!--<el-input v-model="form.end"></el-input>-->
                <!--</el-form-item>-->
                <!--<el-form-item label="出发时间">-->
                    <!--<el-input v-model="form.start_time"></el-input>-->
                <!--</el-form-item>-->
                <!--<el-form-item label="小时">-->
                    <!--<el-input v-model="form.time_hour"></el-input>-->
                <!--</el-form-item>-->
                <!--<el-form-item label="分钟">-->
                    <!--<el-input v-model="form.time_minute"></el-input>-->
                <!--</el-form-item>-->
                <!--<el-form-item label="价钱">-->
                    <!--<el-input v-model="form.price"></el-input>-->
                <!--</el-form-item>-->
                <!--<el-form-item label="余量">-->
                    <!--<el-input v-model="form.amount"></el-input>-->
                <!--</el-form-item>-->
            <!--</el-form>-->
            <!--&lt;!&ndash;<span slot="footer" class="dialog-footer">&ndash;&gt;-->
                <!--&lt;!&ndash;<el-button @click="editVisible = false">取 消</el-button>&ndash;&gt;-->
                <!--&lt;!&ndash;<el-button type="primary" @click="saveEdit">确 定</el-button>&ndash;&gt;-->
            <!--&lt;!&ndash;</span>&ndash;&gt;-->
        <!--</el-dialog>-->

        <!-- 删除提示框 -->
        <el-dialog title="提示" :visible.sync="buyTicketVisible" width="300px" center>
            <div class="del-dialog-cnt">是否确定购买？</div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="buyTicketVisible = false">取 消</el-button>
                <el-button type="primary" @click="butTicket">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>


<script>
    export default {
        name: 'basetable',
        data () {
            return {
                baseurl:'http://localhost:10002',
                url: './static/vuetable.json',
                tableData: [],
                cur_page: 1,
                multipleSelection: [],
                select_cate: '',
                select_word: '',
                del_list: [],
                is_search: false,
                editVisible: false,
                buyTicketVisible: false,
                resigterEditVisible: false,
                delVisible: false,
                form: {
                    date: '',
                    id:'',
                    start:'',
                    end:'',
                    start_time:'',
                    time_hour:'',
                    time_minute:'',
                    price:'',
                    amount:''
                },
                idx: -1
            }
        },
        created() {
            this.getData();
        },
        computed: {
            data() {
                return this.tableData.filter((d) => {

                    return d;  //不过滤
                    let is_del = false;
                    for (let i = 0; i < this.del_list.length; i++) {
                        if (d.name === this.del_list[i].name) {
                            is_del = true;
                            break;
                        }
                    }
                    if (!is_del) {
                        if (d.address.indexOf(this.select_cate) > -1 &&
                            (d.name.indexOf(this.select_word) > -1 ||
                                d.address.indexOf(this.select_word) > -1)
                        ) {
                            return d;
                        }
                    }
                })
            }
        },
        methods: {
            // 分页导航
            handleCurrentChange(val) {
                this.cur_page = val;
                this.getData();
            },
            getData() {
                this.url = this.baseurl+ '/ticket/query';
                this.$axios.post(this.url, {
                    page: this.cur_page
                }).then((res) => {
                    this.tableData = res.data;
                });
            },
            search() {
                this.is_search = true;
            },
            formatter(row, column) {
                return row.address;
            },
            filterTag(value, row) {
                return row.tag === value;
            },
            handleBuyTicket(index, row) {
                this.buyTicketVisible = true,
                this.idx = index;
                const item = this.tableData[index];
                this.form = {
                    date: item.date,
                    address: item.address,
                    start_time: item.start_time,
                    start: item.start,
                    time_hour: item.time_hour,
                    end: item.end,
                    id: item.id,
                    time_minute: item.time_minute,
                    price: item.price,
                    amount: item.amount,
                };
                this.editVisible = true;
            },
            // handleDelete(index, row) {
            //     this.idx = index;
            //     this.delVisible = true;
            // },
            // delAll() {
            //     const length = this.multipleSelection.length;
            //     let str = '';
            //     this.del_list = this.del_list.concat(this.multipleSelection);
            //     for (let i = 0; i < length; i++) {
            //         str += this.multipleSelection[i].name + ' ';
            //     }
            //     this.$message.error('删除了' + str);
            //     this.multipleSelection = [];
            // },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            // 确定删除
            deleteRow(){
                //
                this.delVisible = false;
                console.log('this.idx:'+this.idx);
                console.log('this.tableData[this.idx]:');
                console.log();
                this.$axios({
                    method: 'post',
                    url: this.baseurl+ '/ticket/delete',
                    headers: { 'Content-type': 'application/json' },
                    params: {
                        id:this.tableData[this.idx].id,
                    }
                }).then((response) => {
                        console.log(response);
                        this.getData();
                        this.$message.success("删除成功!");
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
            //批量买票
            buySelectedTicket() {



            },
            //单张买票
            butTicket() {
                this.buyTicketVisible = false;
                console.log('this.idx:'+this.idx);
                console.log('this.tableData[this.idx]:');
                console.log();
                this.$axios({
                    method: 'post',
                    url: this.baseurl+ '/ticket/buy',
                    headers: { 'Content-type': 'application/json' },
                    params: {
                        id:this.tableData[this.idx].id,
                    }
                }).then((response) => {
                    console.log(response);
                    this.getData();
                    this.$message.success("买票成功!");
                }).catch(function (error) {
                        console.log(error);
                    });
            }
        }
    }

</script>

<style scoped>
    .handle-box {
        margin-bottom: 20px;
    }

    .handle-select {
        width: 120px;
    }

    .handle-input {
        width: 300px;
        display: inline-block;
    }
    .del-dialog-cnt{
        font-size: 16px;
        text-align: center
    }
</style>
