<template>
    <div id="app">
        <Myheader ></Myheader>
        <div class="viewBox">
            <router-view/>
        </div>

        <div class="footer">
            <div class="footerLeft">
                <div class="logoBox"></div>
                <div>Copyright©2019实验室帮 | 沪ICP备1700294号-3</div>
            </div>
            <div>
                <el-breadcrumb separator="|">
                    <el-breadcrumb-item>服务协议</el-breadcrumb-item>
                    <el-breadcrumb-item>隐私协议</el-breadcrumb-item>
                    <el-breadcrumb-item>数据安全</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from "vuex";
    import Myheader from "./views/Myheader";

    export default {
        name: "app",
        components: {
          Myheader,
        },
        data() {
            return {

            };
        },
        computed: {
            ...mapState(['hasLogin', 'userInfo'])
        },
        created() {

        },
        methods: {


        }
    };
</script>

<style lang="less">
    @import "./assets/css/reset.css";



    .viewBox {
        min-height: calc(100vh - 9.6rem);
        background: #f2f4fa;
    }

    .footer {
        height: 3.65rem;
        background: #e0e4ef;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 1rem;
        box-sizing: border-box;
        color: #999999;
        font-size: 0.75rem;

        .footerLeft {
            display: flex;
            align-items: center;
        }

        .logoBox {
            width: 7.06rem;
            height: 1.75rem;
            background: #eeeeee;
            margin-right: 0.5rem;
        }

        div {
            font-size: 0.75rem;
        }

        .el-breadcrumb {
            font-size: 0.75rem;
        }
    }

    .greenBtn {
        background: linear-gradient(90deg,
        rgba(44, 100, 255, 1),
        rgba(52, 171, 255, 1)) !important;
        color: #ffffff !important;
        width: 6.88rem;
    }

    .greenBg {
        background: linear-gradient(90deg,
        rgba(44, 100, 255, 1),
        rgba(52, 171, 255, 1)) !important;
        color: #ffffff !important;
    }

    .greenBor {
        border: 1px solid rgba(44, 100, 255, 1) !important;
        color: rgba(44, 100, 255, 1) !important;
        width: 6.88rem;
    }

    .cancelBtn {
        width: 6.88rem;
        background: linear-gradient(90deg,
        rgba(255, 105, 52, 1),
        rgba(255, 52, 105, 1)) !important;
        color: #ffffff !important;
    }
</style>
