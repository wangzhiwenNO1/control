<template>
  <div class="teamBox">
    <div class="el-row">
      <div v-for="(item,index) in serviceteams" :key="index" style="width: 100%">
        <div class="el-col el-col-leader" v-if="item.isLeader" >
          <div class="avatarBox">
            <el-avatar :size="70" :src="item.pic"></el-avatar>
            <div>{{item.realName}}</div>
            <div class="label">{{item.position}}</div>
          </div>
          <div>
            <div>
              <span class="label">联系电话：</span>{{item.tel}}
            </div>
            <div>
              <span class="label">联系邮箱：</span>{{item.email}}
            </div>
            <div>
              <span class="label">微信号：</span>{{item.wx}}
            </div>
            <div class="btnRow">
              <i class="el-icon-message"></i>
              <i class="el-icon-chat-dot-square"></i>
            </div>
          </div>
        </div>

        <div class="el-col" v-else >
          <div class="avatarBox">
            <el-avatar :size="70" :src="item.pic"></el-avatar>
            <div>{{item.realName}}</div>
            <div class="label">{{item.position}}</div>
          </div>
          <div>
            <div>
              <span class="label">联系电话：</span>{{item.tel}}
            </div>
            <div>
              <span class="label">联系邮箱：</span>{{item.email}}
            </div>
            <div>
              <span class="label">微信号：</span>{{item.wx}}
            </div>
            <div class="btnRow">
              <i class="el-icon-message"></i>
              <i class="el-icon-chat-dot-square"></i>
            </div>
          </div>
        </div>
      </div>



    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {

        serviceteams: []
      };
    },
    mounted() {
      this.getServiceteams();
    },
    methods: {
      //供应商服务团队列表
      getServiceteams(){
        let that=this;

        this.Axios.get("/lab2lab/v1/requestor/getserviceteams", {
          id:10
        }).then(function (res) {
          console.log("供应商服务团队列表",res);
          that.serviceteams=res.data;

        })
      },


    }
  };
</script>
<style lang="less" scoped>
.teamBox {
  width: 100%;
  box-sizing: border-box;

  .el-row {
    display: flex;
    flex-wrap: wrap;
  }

  .el-col {
    background: #ffffff;
    display: flex;
    padding: 1rem;
    line-height: 1.88rem;
    position: relative;
    box-sizing: border-box;
    width: 45%;
    margin: 1rem;

  }
  .el-col-leader{
    margin-right: 5rem;
  }

  .avatarBox {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 10rem;
    height: 9rem;
    background: rgba(242, 244, 250, 1);
    margin-right: 1rem;
    line-height: 1.3rem;
  }

  .el-avatar {
    margin-bottom: 0.5rem;
  }
  .label {
    font-size: 0.88rem;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
  }

  .btnRow {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: absolute;
    bottom: 1rem;
    right: 1rem;

    i::before {
      font-size: 1.5rem;
      color: #2c64ff;
      margin-left: 2rem;
    }
  }


}
</style>
