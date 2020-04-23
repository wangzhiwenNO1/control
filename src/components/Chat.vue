<template>
    <div class="Chat">
        <div class="chatTop">
            <div class="schedule">
                <el-steps :active="active" finish-status="success" align-center>
                    <el-step title="创建"></el-step>
                    <el-step title="询价"></el-step>
                    <el-step title="执行"></el-step>
                    <el-step title="结束"></el-step>
                </el-steps>
                <div class="btnRow">
                    <div class="btn" @click="cancelorder">取消订单</div>
                    <div class="btn" @click="acceptorderfinish">确认完成</div>
                    <div class="btn">录入变更</div>
                    <div class="btn" @click="rejectorderfinish">驳回完成</div>
                    <div class="btn">再次下单</div>
                </div>
            </div>

            <div class="chatBox">
                <div class="title">
                    <div>消息记录</div>
                    <div class="icon"></div>
                </div>
                <ul class="chatHistory">
                    <li>
                        <div class="time">2019年9月16日 15:37</div>
                        <div class="chatItem">
                            <div class="avatar"></div>
                            <div class="chatText">王经理，贵司的付款已收到，谢谢！</div>
                        </div>
                    </li>
                    <li>
                        <div class="time">2019年9月16日 15:37</div>
                        <div class="chatItem">
                            <div class="avatar"></div>
                            <div class="chatText">王经理，贵司的付款已收到，谢谢！</div>
                        </div>
                    </li>
                </ul>
                <div class="subTitle">
                    <div>发送消息</div>
                    <i class="iconEnclosure"></i>
                </div>
                <div>
                    <el-input type="textarea" v-model="desc" placeholder="请输入您要发送的消息"></el-input>
                </div>
                <div class="btnRow">
                    <div class="btn sendBtn">发送</div>
                    <div class="btn">放弃</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src

    export default {
        name: "Chat",
        components: {},
        data() {
            return {
                active: 4,
                desc: "",
                orderId: "001",
                rejectReason:"",//拒绝原因
            };
        },
        created() {
        },
        methods: {
            // 需求方确认订单完成
            acceptorderfinish(){
                let that=this;
                that.Axios.get("/lab2lab/v1/requestor/acceptorderfinish", {
                    id: that.orderId,
                }).then(function (res) {

                    if (res.code == 200) {
                        that.$message({
                            type: 'success',
                            message: '订单完成'
                        });

                    }
                })
            },
            //  需求方拒绝订单完成
            rejectorderfinish(){
                let that = this;
                this.$prompt('拒绝原因', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                }).then(({value}) => {

                    that.Axios.get("/lab2lab/v1/requestor/rejectorderfinish", {
                        id: that.orderId,
                        rejectReason: value,
                    }).then(function (res) {

                        if (res.code == 200) {
                            that.$message({
                                type: 'success',
                                message: '取消成功'
                            });

                        }
                    })
                })
            },
            //  取消订单
            cancelorder() {

                let that = this;
                this.$prompt('请输入取消原因', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                }).then(({value}) => {

                    that.Axios.get("/lab2lab/v1/requestor/cancelorder", {
                        id: that.orderId,
                        reason: value,//订单编号
                    }).then(function (res) {

                        if (res.code == 200) {
                            that.$message({
                                type: 'success',
                                message: '取消成功'
                            });

                        }
                    })
                })
            },
        }
    };
</script>
<style lang="less">
    .chatTop {

        border-radius: 0.3rem;

        .el-step__title {
            font-size: 0.75rem;
            line-height: 20px;
        }

        .el-step__head.is-success {
            color: #2c64ff;
            border-color: #2c64ff;
        }

        .el-step__title.is-success {
            color: black;
        }

        .schedule {
            background: #ffffff;
            padding: 1rem;
            margin-bottom: 1rem;
            border-radius: 0.3rem;
        }

        .chatBox {
            background: #ffffff;
            padding: 1rem;
            margin-bottom: 1rem;
            border-radius: 0.3rem;
        }
    }

    .btnRow {
        display: flex;
        justify-content: center;
        margin-top: 1rem;

        .btn {
            width: 6.88rem;
            height: 1.88rem;
            background: linear-gradient(90deg,
            rgba(255, 105, 52, 1),
            rgba(255, 52, 105, 1));
            border-radius: 1rem;
            color: #ffffff;
            text-align: center;
            line-height: 1.88rem;
        }

        .sendBtn {
            background: linear-gradient(90deg,
            rgba(44, 100, 255, 1),
            rgba(52, 171, 255, 1));
            margin-right: 1rem;
        }
    }

    .chatHistory {
        margin-bottom: 0.5rem;
        height: 22rem;
        border-bottom: 1px solid #eeeeee;

        .chatItem {
            display: flex;
            align-items: center;
        }

        .time {
            text-align: center;
            font-size: 0.75rem;
            font-weight: 400;
            color: rgba(153, 153, 153, 1);
            line-height: 1.88rem;
        }

        .chatText {
            width: 100%;
            height: 2.5rem;
            background: rgba(242, 244, 250, 1);
            border-radius: 0.3rem;
            line-height: 2.5rem;
            padding: 0 1rem;
            box-sizing: border-box;
        }

        .avatar {
            width: 2rem;
            height: 2rem;
            background: pink;
            border-radius: 50%;
            margin-right: 1rem;
            flex-shrink: 0;
        }
    }

    .subTitle {
        padding-bottom: 0.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .iconEnclosure {
            display: inline-block;
            width: 1rem;
            height: 1rem;
            background: url("../assets/imgs/Btn-tjfj.png") no-repeat;
            background-size: contain;
        }
    }

    .el-textarea {
        height: 4.88rem;
        background: rgba(242, 244, 250, 1);

        textarea {
            height: 100%;
            background: rgba(242, 244, 250, 1);
        }
    }
</style>
