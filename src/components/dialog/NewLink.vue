<template>
    <div>
        <el-dialog title="新的链接" width="40%" center :visible.sync="dialogFormVisible">
            <div class="infoBox">
                <el-avatar size="50"></el-avatar>
                <div>
                    <div>上海必维检测技术服务有限公司</div>
                    <div class="subTitle">上海市徐汇区</div>
                </div>
            </div>
            <div class="rateBox">
                <div>链接方式类别</div>
                <el-select v-model="formData.linkTypeCode"  placeholder="请选择">
                    <el-option
                            v-for="item in linkType"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div class="rateBox">
                <div>分类</div>
                <el-select v-model="formData.subTypeCode" placeholder="请选择">
                    <el-option
                            v-for="item in subType"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div class="rateBox">
                <div>指定联系人</div>
                <el-select v-model="formData.contactUserId"  placeholder="请选择">
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </div>

            <div slot="footer" class="dialog-footer">
                <el-button round size="mini" type="primary" @click="handlenewlink(1)">允许链接</el-button>
                <el-button round size="mini" class="cancel" @click="handlenewlink(2)">忽略链接</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                dialogFormVisible:true,
                orderId:"112",
                formData:{
                    linkedLabId:"",
                    linkTypeCode:"",
                    subTypeCode:"",
                    contactUserId:"",
                    contactName:"",
                },
                linkType:[{
                    value: 1,
                    label: '供应商'
                }, {
                    value: 2,
                    label: '供方合作方'
                }, {
                    value: 3,
                    label: '客户'
                }],

                subType:[{
                    value: 1,
                    label: '常用供应商'
                }, {
                    value: 2,
                    label: '合格供应商'
                }, {
                    value: 3,
                    label: '内部合作方'
                },{
                    value: 4,
                    label: '重要合作方'
                },{
                    value: 5,
                    label: '普通合作方'
                }, {
                    value: 6,
                    label: '内部客户'
                },{
                    value: 6,
                    label: '重要客户'
                }, {
                    value: 7,
                    label: '普通客户'
                }],


                options: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                value: ''
            }
        },
        created() {
        },
        methods:{
            //需求方管理新链接
            handlenewlink(type){
                let that=this;
                let data=that.formData;
                that.Axios.get("/lab2lab/v1/requestor/handlenewlink", {
                    id:that.orderId,
                    status:type
                }).then(function (res) {

                    if (res.code == 200) {
                        that.$message({
                            type: 'success',
                            message: '完成'
                        });
                        that.centerDialogVisible = false
                    }
                })
            },
        }
    }
</script>

<style lang="less" scoped>

    .label {
        margin: 0.5rem 0;
    }

    .rateBox {
        display: flex;
        align-items: center;
        margin-bottom:1rem;

        & > div:first-child {
            margin-right: 0.5rem;
            flex:1;
        }

        & > div:last-child {
            flex:3;
        }
    }
    .infoBox{
        display: flex;
        justify-content: center;
        align-items: center;
        border:1px solid #EEEEEE;
        margin-bottom:1rem;
        padding:1rem;
        line-height: 1.5rem;

        .el-avatar{
            margin-right: 1rem;
        }

        .subTitle{
            color: #999999;
        }
    }
</style>