<template>
<div class="content">
    <div class="search">
        <el-form ref="form" :inline="true" :model="form" label-width="100px">
            <el-form-item label="任务类型：">
                <el-select v-model="value" placeholder="请选择" clearable style="width:230px" @change="selectType" >
                    <el-option v-for="(item,index) in options" :key="index" :label="item.text" :value="item.id">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="任务名称：">
                <el-input v-model="input" placeholder="请输入内容" style="width:230px"></el-input>
            </el-form-item>
            <el-form-item label="任务状态：">
                <el-select v-model="value1" clearable placeholder="请选择" style="width:230px"  @change="selectStatus" >
                    <el-option v-for="(item,index) in status" :key="index" :label="item.text" :value="item.id">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button class="btn" type="primary" @click="handleBtn()">搜索</el-button>
                <span class="clear-content" @click="clearFun">清空筛选条件</span>
            </el-form-item>
        </el-form>
    </div>
    <div class="tables" v-loading.body="fullscreenLoading">
        <div class="title">
            <p class="tz-title">全部定时任务</p>
        </div>
        <div class="table-box">
            <el-table :data="tableData" :header-cell-style="rowClass">
                <el-table-column prop="quartz_name" label="任务名称"></el-table-column>
                <el-table-column prop="quartz_job" label="任务类型"></el-table-column>
                <el-table-column prop="quartz_time" label="调度规则"></el-table-column>
                <el-table-column prop="update_time" label="最后执行时间"></el-table-column>
                <el-table-column prop="quartz_state" label="任务状态"></el-table-column>
            </el-table>
        </div>
        <div class="pagination">
            <el-pagination  @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
                :page-sizes="[10, 20, 30, 40]" :page-size="cols" layout="total, sizes, prev, pager, next, jumper"
                :total="total">
            </el-pagination>
        </div>
    </div>
</div>
</template>

<script>
import {QueryQuartzJob,QueryQuartzState,QuartzManagerNew} from '../../js/collect/collect.js'
export default {
    name:"timeTask",
    data() {
        return {
            form:{},
            fullscreenLoading:true,
            input:'',
            value:'',
            value1:'',
            total:0,
            cols:10,
            tableData:[],
            currentPage:1,
            options: [],
            status:[],
            taskType:'', //任务类型
            taskStatus:''//任务状态
        }
    },
    mounted() {
        this.getqueryQuartzJob();
        this.getqueryQuartzState();
        this.getquartzManagerNew();
    },
    methods: {
        clearFun(){
            this.value = '' ;
            this.taskType = '';
            this.taskStatus = '';
            this.input = '';
            this.value1 = '';
            this.currentPage = 1 ;
            this.getquartzManagerNew()
        },
        selectType(ele){  //选择任务类型
            if(ele){
                this.options.forEach(e => {
                    if(ele == e.id){
                        this.taskType = e.id
                    }
                })
            }else{
                this.taskType = ''
            }
        },
        selectStatus(val){  //选择任务类型
            if(val){
                this.status.forEach(ele => {
                    if(val == ele.id){
                        this.taskStatus = ele.id
                    }
                })
            }else{
                this.taskStatus = ''
            }
        },
        rowClass({ row, rowIndex}) {  //表头背景颜色
            return {
                background: '#f2f2f2',
                color: '#000'
            }
        },
        handleSizeChange(val) {   //每页
            this.cols = val;
            this.getquartzManagerNew()
        },
        handleCurrentChange(val) { //当前页
            this.currentPage = val;
            this.getquartzManagerNew()
        },
        getqueryQuartzJob(){  //任务类型
            QueryQuartzJob()
                .then(res => {
                    this.options = res.data.dataList;
                })
                .catch(res => {
                    console.log(res)
                })
        },
        handleBtn(){
            this.fullscreenLoading = true;
            this.currentPage = 1;
            this.getquartzManagerNew()
        },
        getqueryQuartzState(){
            QueryQuartzState()
                .then(res => {    
                    this.status = res.data.dataList;      
                })
                .catch(res => {
                    console.log(res)
                })
        },
        getquartzManagerNew(){
            let params = {
                page:this.currentPage,
                cols:this.cols,
                quartz_job:this.taskType,
                quartz_name:this.input,
                quartz_state:this.taskStatus
            }
            QuartzManagerNew(params)
                .then(res => {    
                    this.fullscreenLoading = false;
                    this.tableData = res.data.dataList;
                    this.total = res.data.condition.total;
                })
                .catch(res => {
                    console.log(res)
                })
        }
    },
    components:{
    }
}
</script>

<style scoped lang='less'>
.content{
    width: 100%;
    height: 100%;
    .search{
        width: 100%;
        background: #fff;
        padding: 10px 0 ;
        span{
            font-size: 14px;
        }
        .task_name{
            margin-left: 30px;
        }
        .task_status{
            margin-left: 30px;
        }
        .btn{
            margin-left: 30px;
        }
        .clear-content{
            margin-left: 10px;
            cursor: pointer;
            color: #999999;
            font-size: 14px;
        }
        .el-form-item{
            margin-bottom: 0;
        }
    }
    .tables{
        margin-top: 10px;
        width: 100%;
        background: #fff;
        .title{
            padding-top: 8px;
            padding-bottom: 5px;
            padding-left: 10px;
            .tz-title{
                flex: 1;
                height: 20px;
                font-size: 14px;
                padding-left: 4px;
                line-height: 20px;
                box-sizing: border-box;
                border-left: 2px solid #409EFF;
            }
        }
        .table-box{
            padding: 10px;
        }
        .pagination{
            padding-top: 10px;
            text-align: center;
        }
    }
}   
</style>
<style lang="less">
.el-table__row{
    height:50px;
    line-height: 50px;
}
</style>