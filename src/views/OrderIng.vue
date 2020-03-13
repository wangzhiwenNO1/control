<template>
  <div class="order">
    <el-row :gutter="10">
      <el-col :span="6">
        <div class="grid-content bg-purple leftBox">
          <!-- 左上 -->
          <div class="itemBox leftOne">
            <div class="orderNum">#45972</div>
            <div class="orderName">
              <div>T2019083003 Demo 003 检测项目</div>
              <div class="price">￥3000</div>
              <i class="el-icon-more"></i>
            </div>
            <ul class="ulBoxs">
              <li>
                <div>状态</div>
                <div class="state">已完成</div>
              </li>
              <li>
                <div>负责人</div>
                <div class="conscientious">
                  <div class="avatar"></div>
                  <div>斩无极</div>
                </div>
              </li>
              <li>
                <div>优先级</div>
                <div>
                  <i></i>
                  <div>中</div>
                </div>
              </li>
              <li>
                <div>未读消息</div>
                <div>
                  <i class="el-icon-chat-dot-square"></i>
                  <span>5</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </el-col>
      <el-col :span="9">
        <div class="grid-content bg-purple middleBox">
          <div class="itemBox leftOne">
            <div class="orderNum">#45972</div>
            <div class="orderName">
              <div>T2019083003 Demo 003 检测项目</div>
              <i class="el-icon-more moreBtn">
                <div class="triangle" v-if="operating"></div>
                <ul v-if="operating">
                  <li>操作</li>
                  <li>
                    <i class="el-icon-edit-outline"></i>
                    <span>编辑订单</span>
                  </li>
                  <li>
                    <i class="el-icon-delete"></i>
                    <span>删除订单</span>
                  </li>
                  <li>
                    <i class="el-icon-download"></i>
                    <span>下载订单</span>
                  </li>
                  <li>确定</li>
                </ul>
              </i>
            </div>
            <ul class="ulBoxs">
              <li>
                <div>状态</div>
                <div class="state">已完成</div>
              </li>
              <li>
                <div>负责人</div>
                <div class="conscientious">
                  <div class="avatar"></div>
                  <div>斩无极</div>
                  <div class="triangle" v-if="principal"></div>
                  <ul v-if="principal">
                    <li>指定负责人</li>
                    <li>
                      <el-avatar :size="20"></el-avatar>
                      <span>令狐冲</span>
                    </li>
                    <li>
                      <el-avatar :size="20"></el-avatar>
                      <span>令狐冲</span>
                    </li>
                    <li>
                      <el-avatar :size="20"></el-avatar>
                      <span>令狐冲</span>
                    </li>
                    <li>确定</li>
                  </ul>
                </div>
              </li>
              <li>
                <div>优先级</div>
                <div class="priority">
                  <i></i>
                  <div>中</div>
                  <div class="triangle" v-if="priority"></div>
                  <ul v-if="priority">
                    <li>指定优先级</li>
                    <li>
                      <i class="redIcon"></i>
                      <span>高</span>
                    </li>
                    <li>
                      <i class="yellowIcon"></i>中
                    </li>
                    <li>
                      <i class="purpleIcon"></i>低
                    </li>
                    <li>确定</li>
                  </ul>
                  <!-- <el-dropdown @command="handleCommand" trigger="click">
                    <span class="el-dropdown-link">
                      <i class="el-icon-arrow-down"></i>中
                    </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item command="d" class="priorityTitle">指定优先级</el-dropdown-item>
                      <el-dropdown-item command="a">
                        <i class="el-icon-arrow-down"></i>高
                      </el-dropdown-item>
                      <el-dropdown-item command="b">
                        <i class="el-icon-arrow-down"></i>中
                      </el-dropdown-item>
                      <el-dropdown-item command="c">
                        <i class="el-icon-arrow-down"></i>低
                      </el-dropdown-item>
                      <el-dropdown-item command="e" divided>确定</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>-->
                </div>
              </li>
              <li>
                <div>协作人员</div>
                <div class="cooperation">
                  <div class="avatarBox">
                    <div class="avatar"></div>
                    <div class="avatar"></div>
                  </div>
                  <div>3+</div>
                  <div class="icon"></div>

                  <ul v-if="teamwork">
                    <div class="triangle"></div>
                    <li>协作人员</li>
                    <li class="cooperationTwoBox">
                      <ul class="cooperationTwo">
                        <li>
                          <el-avatar :size="20"></el-avatar>
                          <span>令狐冲</span>
                          <i class="el-icon-remove-outline"></i>
                        </li>
                        <li>
                          <el-avatar :size="20"></el-avatar>
                          <span>令狐冲</span>
                          <i class="el-icon-circle-plus-outline"></i>
                        </li>
                        <li>
                          <el-avatar :size="20"></el-avatar>
                          <span>令狐冲</span>
                          <i class="el-icon-remove-outline"></i>
                        </li>
                        <li>
                          <div>保存</div>
                          <div>取消</div>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <el-avatar :size="20"></el-avatar>
                      <span>令狐冲</span>
                    </li>
                    <li>
                      <el-avatar :size="20"></el-avatar>
                      <span>令狐冲</span>
                    </li>
                    <li>
                      <el-avatar :size="20"></el-avatar>
                      <span>令狐冲</span>
                    </li>

                    <li>编辑</li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div class="itemBox middleOne">
            <div class="title">
              <div>选择服务方</div>
              <div>
                <el-button size="mini" type="text" icon="el-icon-circle-plus-outline">添加服务方</el-button>
                <el-button size="mini" type="text" icon="el-icon-circle-plus-outline">价格比较</el-button>
                <span>2/5</span>
              </div>
            </div>
            <ul class="ulBoxs">
              <li>
                <div>
                  <el-avatar :size="30"></el-avatar>
                  <div>上海少林检测技术服务有限公司</div>
                </div>
                <div>￥3200</div>
                <div class="btnBox">
                  <div class="infoBtn">详情</div>
                  <div class="ratifyBtn">批准</div>
                  <div class="refuseBtn">拒绝</div>
                </div>
              </li>
            </ul>
          </div>

          <div class="itemBox">
            <div class="itemBox middleTwo leftTwo">
              <div class="title">需求描述</div>
              <ul class="demandBox">
                <li>
                  <div>需求名称</div>
                  <div>Demo 003 检测项目</div>
                </li>
                <li>
                  <div>需求名称</div>
                  <div>Demo 003 检测项目</div>
                </li>
                <li>
                  <div>需求名称</div>
                  <div>Demo 003 检测项目</div>
                </li>
                <li>
                  <div>需求名称</div>
                  <div>Demo 003 检测项目</div>
                </li>
                <li>
                  <div>需求名称</div>
                  <div>
                    <div>Demo 003 检测项目</div>
                    <div>Demo 003 检测项目</div>
                  </div>
                </li>
                <li>
                  <div>需求名称</div>
                  <div>Demo 003 检测项目</div>
                </li>
              </ul>
            </div>
          </div>
          <div class="middleThree itemBox">
            <div>
              <div class="title">
                <div>技术资料</div>
                <div>
                  <el-button type="text" size="mini" icon="el-icon-circle-plus-outline">添加新文件</el-button>
                  <i class="el-icon-arrow-up"></i>
                </div>
              </div>
              <ul class="fileBox">
                <li>
                  <div></div>
                  <div class="fileName">文件名</div>
                </li>
              </ul>
            </div>
          </div>
          <div class="middleThree itemBox">
            <div>
              <div class="title">
                <div>采购文件（订单或合同）</div>
                <div>
                  <el-button type="text" size="mini" icon="el-icon-circle-plus-outline">添加新文件</el-button>
                  <i class="el-icon-arrow-up"></i>
                </div>
              </div>
              <ul class="fileBox">
                <li>
                  <div></div>
                  <div class="fileName">文件名</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="9">
        <div class="grid-content bg-purple">
          <Chat></Chat>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
import Chat from "../components/Chat";

export default {
  name: "order",
  components: {
    Chat
  },
  data() {
    return {
      activeName: 1,
      principal: false, //负责人
      priority: false, //优先级
      teamwork: false, //协作
      operating: false, //操作
      tableData: [
        {
          id: "1",
          name: "王小虎",
          amount1: "234",
          amount2: "3.2",
          amount3: 10,
          amount4: 10
        },
        {
          id: "2",
          name: "王小虎",
          amount1: "165",
          amount2: "4.43",
          amount3: 12,
          amount4: 10
        },
        {
          id: "合计 Total Price：",
          name: "￥12,600"
        },
        {
          id: "含税价格 Final Price with Tax：",
          name: "￥12,600"
        }
      ],
      tableDatas: [
        {
          id: "1",
          name: "有害物质",
          amount1: "上海必为检测技术服务有限公司"
        }
      ]
    };
  },
  methods: {
    handleCommand(command) {
      this.$message("click on item " + command);
    },
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      // if (rowIndex % 2 === 0) {
      //   if (columnIndex === 0) {
      //     return [1, 2];
      //   } else if (columnIndex === 1) {
      //     return [0, 0];
      //   }
      // }
      console.log(rowIndex);
      if (rowIndex == 2 || rowIndex == 3) {
        return [1, 5];
        // if (columnIndex === 0) {
        //   return [1, 5];
        // } else if (columnIndex === 1) {
        //   return [0, 0];
        // }
      }
    },

    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      // if (columnIndex === 0) {
      //   if (rowIndex % 2 === 0) {
      //     return {
      //       rowspan: 2,
      //       colspan: 1
      //     };
      //   } else {
      //     return {
      //       rowspan: 0,
      //       colspan: 0
      //     };
      //   }
      // }
    }
  }
};
</script>
<style lang="less">
.priority,
.conscientious,
.cooperation,
.moreBtn {
  position: relative;

  .triangle {
    width: 0;
    height: 0;
    border-left: 0.5rem solid transparent;
    border-right: 0.5rem solid transparent;
    border-bottom: 0.8rem solid #f3f4f9;
    position: absolute;
    top: 1.7rem;
    z-index: 9;
  }

  & > ul {
    position: absolute;
    width: 7.81rem;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0rem 0rem 1rem 0rem rgba(0, 0, 0, 0.37);
    border-radius: 0rem;
    top: 2.5rem;
    left: -5rem;
    color: #333333;
    z-index: 8;

    & > li {
      width: 100%;
      height: 2.5rem;
      box-sizing: border-box;
      border-radius: 0rem;
      line-height: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-bottom: 1px solid #f2f4fa;

      i {
        display: block;
        margin-right: 0.3rem;
      }

      .redIcon {
        background: #f12c0b;
        width: 0.6rem;
        border-radius: 50%;
        height: 0.6rem;
      }

      .yellowIcon {
        background: #fda23f;
        width: 0.6rem;
        border-radius: 50%;
        height: 0.6rem;
      }

      .purpleIcon {
        background: #c37cff;
        width: 0.6rem;
        border-radius: 50%;
        height: 0.6rem;
      }
    }
    & > li:hover {
      background: rgba(229, 229, 229, 1);
    }

    & > li:first-child {
      background: #f3f4f9;
    }

    & > li:last-child {
      border-top: 1px solid #2c64ff;
      border-bottom: none;
      color: #2c64ff;
    }
  }
}
.moreBtn {
  ul {
    li:hover {
      color: #2c64ff;
    }
  }
}
.conscientious {
  ul {
    top: 3rem;

    li {
      color: #333333;
    }

    & > li:hover {
      color: #2c64ff;
    }
  }
  .triangle {
    top: 2.3rem;
  }
  .el-avatar {
    margin-right: 0.3rem;
  }
}

.cooperation {
  .triangle {
    left: 0rem;
  }
  .el-avatar {
    margin-right: 0.3rem;
  }
  & > ul {
    & > li:hover {
      color: #2c64ff;
    }
  }

  .cooperationTwoBox {
    height: 0;
    position: relative;

    &:hover {
      background: #ffffff;
      color: #333;
    }
  }

  .cooperationTwo {
    position: absolute;
    width: 10.31rem;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0rem 0rem 1rem 0rem rgba(0, 0, 0, 0.37);
    border-radius: 0rem;
    left: 8rem;
    top: 0;

    & > li {
      display: flex;
      height: 2.5rem;
      align-items: center;
      justify-content: center;
      border-bottom: 1px solid #f2f4fa;

      span {
        margin: 0 0.5rem 0 0.3rem;
      }

      .el-icon-remove-outline,
      .el-icon-circle-plus-outline {
        width: 1.2rem;
        height: 1.2rem;
      }

      & > div {
        margin: 0 0.3rem;
      }
      & > div:first-child {
        color: #2c64ff;
      }
      & > div:last-child {
        color: #f12c0b;
      }

      &:hover {
        background: #e5e5e5;

        i {
          color: #2c64ff;
        }
      }
    }
  }
}
.priorityTitle {
  background: pink;
}
.order {
  padding: 1rem;
  box-sizing: border-box;

  .upOfferBox {
    display: flex;
    justify-content: flex-end;
    margin-top: 0.5rem;
    border-top: 1px solid #eeeeee;
  }

  .upOffer {
    background: linear-gradient(
      90deg,
      rgba(44, 100, 255, 1),
      rgba(52, 171, 255, 1)
    );
    margin-top: 0.5rem;
  }

  .RemarkBox {
    & > div {
      line-height: 1.5rem;
      font-weight: 600;
    }

    .Remarks {
      color: #999999;
      font-size: 0.75rem;
      font-weight: normal;
    }
  }

  .el-collapse-item {
    padding: 0 1rem;
    box-sizing: border-box;
    margin-bottom: 0.3rem;
    background: #ffffff;
    border-radius: 0.3rem;

    .el-collapse-item__header {
      height: 30px;
      line-height: 30px;
    }
  }
  .el-collapse-item__content {
    padding-bottom: 10px;
  }

  .fileBox {
    display: flex;
    align-items: center;
    padding: 1rem 0;

    .fileName {
      color: #999999;
    }

    li {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      margin-right: 0.5rem;

      & > div:first-child {
        width: 3rem;
        height: 3rem;
        background: pink;
        margin-bottom: 0.3rem;
      }

      & > div:last-child {
        color: #333333;
        font-size: 0.75rem;
      }
    }
  }

  .title {
    padding: 0.3rem 0;
    border-bottom: 1px solid #f2f4fa;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .ulBoxs {
    display: flex;
    color: #999999;
    font-size: 0.75rem;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;

    & > li {
      padding: 0.25rem;
      border-right: 1px solid #eeeeee;
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;

      & > div {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.75rem;
      }
      & > div:first-child {
        margin-bottom: 0.5rem;
      }
      &>div:last-child{
        color:#333333;
      }

      .conscientious {
        font-size: 0.75rem;
        // flex-direction: column;
        
        & > div {
          font-size: 0.75rem;
        }
      }

      &:last-child {
        border-right: none;
      }

      .state {
        width: 4rem;
        height: 1.25rem;
        background: linear-gradient(
          90deg,
          rgba(131, 230, 34, 1),
          rgba(255, 255, 255, 1)
        );
        border-radius: 1rem;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
        line-height: 1.25rem;
        align-self: center;
      }

      .avatar {
        width: 1.25rem;
        height: 1.25rem;
        border-radius: 50%;
        background: pink;
        margin-right: 0.2rem;
      }

      .avatarBox {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .icon {
        width: 1rem;
        height: 1rem;
        background: pink;
        display: block;
      }
    }
  }

  .itemBox {
    padding: 0.5rem 1rem;
    background: #ffffff;
    border-radius: 0.3rem;
    margin-bottom: 0.5rem;

    &:last-child {
      margin-bottom: 0;
    }

    .el-icon-arrow-up {
      color: #2c64ff;
      margin-left: 1rem;
    }
    .el-icon-chat-dot-square {
      font-size: 1.1rem;
      margin-right: 0.1rem;
    }
  }

  .leftBox {
    .leftOne {
      border-left: 3px solid #83E622;
      .orderNum {
        font-size: 0.75rem;
        color: #999999;
      }
    }

    .leftThree,
    .leftFour {
    }
  }
}
.orderName {
  display: flex;
  color: #333333;
  font-size: 0.88rem;
  align-items: center;
  justify-content: space-between;

  .icon {
    width: 1rem;
    height: 1rem;
    display: block;
    background: pink;
  }

  .price {
    font-size: 0.75rem;
    color: #999999;
  }
}
.leftTwo {
  .demandBox {
    margin-top: 0.5rem;
    li {
      display: flex;
      align-items: center;

      & > div:first-child {
        flex: 1;
        border-right: 1px solid #f2f4fa;
        height: 100%;
        padding: 0.2rem 0;
        color: #999999;
      }

      & > div:last-child {
        flex: 3;
        padding: 0rem 1rem;
        box-sizing: border-box;
        color: #333333;
      }
    }
  }
}

.middleBox {
  .middleOne {
    background: #ffffff;

    .title{
      span{
        color:#999999;
        font-size: 0.75rem;
        margin-left: 0.3rem;
      }

      .el-button{
        font-size: 1rem;
        color:#2C64FF;
        span{
          color:#2C64FF;
        }
      }
    }

    .btnBox{
      div{
        margin:0 0.3rem;
      }
    }

    .ulBoxs {
      li {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        color: #333333;

        & > div:first-child {
          margin-bottom: 0;
        }
        .infoBtn {
          color: #2c64ff;
        }
        .ratifyBtn{
          color:#3DC600;
        }
        .refuseBtn{
          color: #F12C0B;
        }
      }
    }
  }

  .fileBox {
    padding: 0;
  }
}
</style>