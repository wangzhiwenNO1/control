<template>
    <div>
        <el-dialog title="服务评价"  width="30%" center :visible.sync="dialogFormVisible">
            <div class="rateBox">
                <div>服务及时性：</div>
                <el-rate v-model="formData.timelessScore" :colors="colors"></el-rate>
            </div>
            <div class="rateBox">
                <div>服务准确性：</div>
                <el-rate v-model="formData.accuracyScore" :colors="colors"></el-rate>
            </div>
            <div class="rateBox">
                <div>服务专业性：</div>
                <el-rate v-model="formData.specialScore" :colors="colors"></el-rate>
            </div>
            <div class="label">评语</div>
            <div>
                <el-input v-model="formData.remark" type="textarea" autocomplete="off"></el-input>
            </div>

            <div slot="footer" class="dialog-footer">
                <el-button round size="mini" type="primary" @click="rateprovider">提 交</el-button>
                <el-button round size="mini" class="cancel" @click="centerDialogVisible = false">取 消</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                formData:{
                    orderServiceId:12,
                    accuracyScore:"",
                    timelessScore:'',
                    specialScore:"",
                    remark:"",
                },


                colors:["#2C64FF","#2C64FF","#2C64FF"],
                centerDialogVisible: true,
                dialogFormVisible:true,

                formLabelWidth: '120px'
            };
        },
        created() {
        },
        methods:{
            // 评价服务方
            rateprovider(){
                let that=this;
                let data=that.formData;
                that.Axios.post("/lab2lab/v1/requestor/rateprovider", data).then(function (res) {
                    console.log("评价服务方",res);
                    if (res.code == 200) {
                        this.$message({
                            type: 'success',
                            message: '已评价服务方'
                        });
                        that.centerDialogVisible = false
                    }
                })
            },
        }
    };
</script>

<style lang="less" scoped>

    .label{
        margin:0.5rem 0;
    }

    .rateBox{
        display: flex;

        &>div:first-child{
            margin-right: 0.5rem;
        }
    }
</style>
