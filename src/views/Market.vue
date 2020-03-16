<template>
  <div>
    <div>
      <el-row class="marketTop">
        <el-col :span="1">
          <div class="marketTopleftBox">
            <el-avatar :size="60" shape="square" src="#"></el-avatar>
            <div class="btn">取消链接</div>
          </div>
        </el-col>
        <el-col :span="23">
          <div class="marketMiddleBox">
            <div>
              <div>上海少林检测技术服务有限公司</div>
              <ul>
                <li>上海</li>
                <li>检测实验室</li>
                <li>ISO/IEC17025认可，CMA资质认定</li>
              </ul>
            </div>
            <div class="rightBox">
              <div class="topIcon">
                <i class="el-icon-message"></i>
                <i class="el-icon-chat-dot-square"></i>
                <el-button type="primary" class="sendQuest" round>发起需求申请</el-button>
              </div>
            </div>
          </div>

          <div class="marketTopRight">
            <div>
              <i class="icon iconOrder"></i>
              <div>总订单：100</div>
            </div>
            <div>
              <i class="icon iconApproval"></i>
              <div>认可指数：8</div>
            </div>
            <div>
              <i class="icon iconEvaluate"></i>
              <div>服务评价：4.8/5</div>
            </div>
          </div>

        </el-col>


      </el-row>
      <!--  -->
      <div class="MarketBox">
        <div class="leftBox">
          <div :class="type==1?'active':''" @click="changeType(1)">
            <i class="icon-ability"></i>
            <div>服务能力</div>
          </div >
          <div :class="type==2?'active':''" @click="changeType(2)">
            <i class="icon-profile"></i>
            <div>机构概况</div>
          </div>
          <div :class="type==3?'active':''" @click="changeType(3)">
            <i class="icon-team"></i>
            <div>服务团队</div>
          </div >
          <div :class="type==4?'active':''" @click="changeType(4)">
            <i class="icon-service"></i>
            <div>客户评价</div>
          </div >
          <div :class="type==5?'active':''" @click="changeType(5)">
            <i class="icon-cooperation"></i>
            <div>合作详情</div>
          </div >
        </div>
        <div class="rightBoxs">
          <Ability v-if="type==1"></Ability>
          <Profile v-else-if="type==2"></Profile>
          <Team v-else-if="type==3"></Team>
          <Cooperation  v-else-if="type==5"></Cooperation>
          <Service v-else ></Service>
          
        </div>

      </div>
    </div>
  </div>
</template>
<script>
import Service from "../components/market/Service";
import Team from "../components/market/Team";
import Profile from "../components/market/Profile";
import Ability from "../components/market/Ability";
import Cooperation from "../components/market/Cooperation";

export default {
  name: "market",
  components: {
    Service,
    Team,
    Profile,
    Ability,
    Cooperation
  },
  data(){
    return{
      type:1,
    }
  },
  methods:{
    changeType(type){
      this.type=type;
    }
  }
};
</script>
<style lang="less" scoped>
  .middleBox{
    line-height: 2rem;
  }
  .elTabs{
    background:#FFFFFF;
    padding:0.5rem 0;
  }
.marketTop {
  padding: 1rem;
  box-sizing: border-box;
  background:rgba(0, 0, 0, 0.5);
  margin-bottom:0.5rem;
  color:#FFFFFF;

  .marketMiddleBox{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:0 1rem;

    div{
      font-size: 1.5rem;
    }

    ul{
      display: flex;
      align-items: center;
      margin-top:0.5rem;

      li{
        margin-right: 0.5rem;
        padding-right: 0.5rem;
        border-right: 1px solid #FFFFFF;
        line-height: 1rem;
      }
      &>li:last-child{
        border:none;
      }
    }
  }


  .marketTopleftBox{
    text-align: center;

  }

  .marketTopRight{
    display: flex;
    justify-content: flex-end;
    padding-right: 1rem;
    color:#FFFFFF;

    &>div{
      margin:0 1rem;
      display: flex;
      align-items: center;

      .icon{
        display: inline-block;
        width:1rem;
        height: 1rem;
        margin-right: 0.3rem;
      }

      .iconOrder{
        background: url("../assets/imgs/icon-ddsl1.png") no-repeat;
        background-size: contain;
      }
      .iconApproval{
        background: url("../assets/imgs/icon-rkzs1.png") no-repeat;
        background-size: contain;
      }
      .iconEvaluate{
        background: url("../assets/imgs/icon-fwpj1.png") no-repeat;
        background-size: contain;
      }

    }
  }
}
.rightBox {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  padding:1rem 0;
  box-sizing: border-box;

  .topIcon{
    display:flex;
    align-items: center;
    i{
      margin-right: 1rem;
      font-size:1.2rem;
      color:#FFF;

      &::before{
        font-size:1.5rem;
      }
    }

    .el-button{
      width:10rem;
      height:2.25rem;
      background:linear-gradient(90deg,rgba(44,100,255,1),rgba(52,171,255,1));
    }
  }

  .sendQuest {
    padding: 0.5rem;
  }

  i::before {
    font-size: 1.3rem;
    margin-right: 0.3rem;
  }
}

.topRight {
  margin-top: 1rem;
  color:#FFF;
  .el-col {
    & > div {
      display: flex;
      align-items: center;
      margin:0 1rem;
    }
  }
}
  .MarketBox {
    display: flex;

    .leftBox {
      min-height: calc(100vh - 19rem);
      background: rgba(255, 255, 255, 1);
      padding: 0.5rem 0 0.5rem 0.5rem;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;

      & > div {
        display: flex;
        align-items: center;
        width: 8rem;
        padding: 0.8rem 0 0.8rem 0.8rem;
        box-sizing: border-box;
        border-bottom:1px solid #eeeeee;

        i {
          margin-right: 0.3rem;
          font-size: 1.2rem;
        }
      }

      i{
        display:inline-block;
        width: 1.2rem;
        height: 1.2rem;
      }

      .icon-ability{
        background: url("../assets/imgs/btn-fuwu1.png") no-repeat;
        background-size: contain;
      }

      .icon-profile{
        background: url("../assets/imgs/btn-jigou1.png") no-repeat;
        background-size: contain;
      }

      .icon-team{
        background: url("../assets/imgs/btn-tuandui1.png") no-repeat;
        background-size: contain;
      }

      .icon-service{
        background: url("../assets/imgs/btn-khpj1.png") no-repeat;
        background-size: contain;
      }

      .icon-cooperation{
        background: url("../assets/imgs/btn-hzxq1.png") no-repeat;
        background-size: contain;
      }

      .active {
        background: rgba(242, 244, 250, 1);
        color: #2C64FF;
        border-left: 2px solid #2C64FF;

        i::before {
          color: #2C64FF;

        }

        .icon-ability{
          background: url("../assets/imgs/btn-fuwu2.png") no-repeat;
          background-size: contain;
        }

        .icon-profile{
          background: url("../assets/imgs/btn-jigou2.png") no-repeat;
          background-size: contain;
        }

        .icon-team{
          background: url("../assets/imgs/btn-tuandui2.png") no-repeat;
          background-size: contain;
        }

        .icon-service{
          background: url("../assets/imgs/btn-khpj2.png") no-repeat;
          background-size: contain;
        }

        .icon-cooperation{
          background: url("../assets/imgs/btn-hzxq2.png") no-repeat;
          background-size: contain;
        }
      }

      .addBox {
        flex-direction: column;
        padding: 0 0.8rem;

        i::before {
          color: #2C64FF;
          font-size: 1.2rem;
        }

        & > div {
          margin-top: 0.3rem;
        }
      }
    }

    .rightBoxs {
      box-sizing: border-box;
      margin: 0 1rem;
      flex:1;
    }
  }
</style>