<template>
  <div class="serviceBoxs">


    <ul class="serviceUl">
      <li>
        <el-avatar class="avatar" :size="30" src="#"></el-avatar>
        <div>
          <div>令狐冲|上海达摩科技有限公司</div>
          <div class="fen">综合评分：4.9/5.0</div>
          <div>服务很及时，很专业，会继续合作。</div>
          <div class="time">2019年8月6日 13:15</div>
        </div>
      </li>
      <li>
        <el-avatar class="avatar" :size="30" src="#"></el-avatar>
        <div>
          <div>令狐冲|上海达摩科技有限公司</div>
          <div class="fen">综合评分：4.9/5.0</div>
          <div>服务很及时，很专业，会继续合作。</div>
          <div class="time">2019年8月6日 13:15</div>
        </div>
      </li>
    </ul>

    <el-pagination
      class
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage3"
      :page-size="100"
      layout="prev, pager, next, jumper"
      :total="1000"
    ></el-pagination>

  </div>
</template>
<script>
import AddLink from "../dialog/AddLink";

export default {
  name: "Service",
  components:{
    AddLink
  }
};
</script>
<style lang="less" scoped>
.serviceBoxs {
  min-height: calc(100vh - 18rem);
  background: white;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
}
.serviceUl {
  padding: 1rem;
  width: 100%;
  box-sizing: border-box;
  li {
    display: flex;
    padding: 1rem;
    background: rgba(242, 244, 250, 1);
    box-sizing: border-box;
    line-height: 1.5rem;
    margin-bottom: 1rem;

    & > div {
      width: 100%;
    }

    .avatar {
      margin-right: 0.5rem;
      flex-shrink: 0;
    }

    .fen {
      font-size: 0.75rem;
      font-weight: 400;
      color: rgba(153, 153, 153, 1);
      margin-bottom: 0.3rem;
    }
    .time {
      text-align: right;
      font-size: 0.75rem;
      font-weight: 400;
      color: rgba(153, 153, 153, 1);
    }
  }
}
</style>