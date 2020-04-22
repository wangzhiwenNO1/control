<template>
    <div>
        <el-table
                :data="tableData"
                border
                size="mini"
                style="width: 100%">
            <el-table-column label="操作权限">
                <template slot-scope="scope">
                    <div>{{scope.row.name}}</div>
                </template>
            </el-table-column>
            <el-table-column
                    label="超级管理员"
                    width="120">
                <template slot-scope="scope">
                    <div><el-checkbox v-model="scope.row.SuperAdmin"></el-checkbox></div>
                </template>
            </el-table-column>
            <el-table-column label="管理员"  width="80">
                <template slot-scope="scope">
                    <div><el-checkbox v-model="scope.row.Admin"></el-checkbox></div>
                </template>
            </el-table-column>
            <el-table-column label="用户"  width="80">
                <template slot-scope="scope" >
                    <div><el-checkbox v-model="scope.row.User"></el-checkbox></div>
                </template>
            </el-table-column>
        </el-table>
        <div class="btnRows">
            <el-button round size="mini" class="greenBtn" @click="submit">更新</el-button>
            <el-button round size="mini" class="cancelBtn">取消</el-button>
        </div>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                powerData:{
                    id:"",
                    authorityName:"",
                    authority:""
                },

                tableData: [{
                    SuperAdmin:true,
                    Admin:true,
                    User:true,
                    name: '添加和编辑机构的基本信息',
                }, {
                    SuperAdmin:true,
                    Admin:true,
                    User:true,
                    name: '添加新链接',
                }, {
                    SuperAdmin:true,
                    Admin:true,
                    User:true,
                    name: '接受或拒绝链接申请',
                }, {
                    SuperAdmin:true,
                    Admin:true,
                    User:true,
                    name: '添加和编辑设备和服务项目',
                }, {
                    SuperAdmin:true,
                    Admin:true,
                    User:true,
                    name: '添加、编辑、删除人员信息和权限设置',
                }, {
                    SuperAdmin:true,
                    Admin:true,
                    User:true,
                    name: '查看全部订单',
                }, {
                    SuperAdmin:true,
                    Admin:true,
                    User:true,
                    name: '查看自己参与的订单',
                }, {
                    SuperAdmin:true,
                    Admin:true,
                    User:true,
                    name: '创建报价单',
                }]
            }
        },
        methods: {
            submit(){
                console.log(this.tableData);
                let that = this;
                let data=this.tableData;

                data.pic= this.imageUrl;

                this.Axios.post("/lab2lab/v1/provider/setauthority", data).then(function (res) {
                    console.log("更新权限",res);
                    if(res.code==200){
                        this.$message({
                            message: '更新成功',
                            type: 'success'
                        });
                    }

                })
            },
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index, row);
            }
        }
    }
</script>
<style lang="less">
    .btnRows{
        padding:1rem;
        background: #FFFFFF;

    }
</style>
