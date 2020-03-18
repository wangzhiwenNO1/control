<template>
  <div class="equipmentDate">
    <div>
      <div class="tableBoxs">
        <div class="title">
          <div class="tagsBox">
            <div>按天</div>
            <div class="active">按周</div>
            <div>按月</div>
          </div>
          <div>
            Nov 11–Nov 17-2019
            <i class></i>
          </div>
        </div>
        <div v-if="false">
          <el-table border size="small" :data="tableData" style="width: 100%">
            <el-table-column label>
              <template slot-scope="scope">
                <div>{{ scope.row.date }}</div>
              </template>
            </el-table-column>
            <el-table-column label="Mon 11">
              <template slot-scope="scope">
                <div class="blueBg" v-if="scope.row.mon==0"></div>
                <div class="greenBgs" v-else-if="scope.row.mon==1"></div>
                <div class="greyBg" v-else></div>
              </template>
            </el-table-column>
            <el-table-column label="Tue 12">
              <template slot-scope="scope">
                <div class="blueBg" v-if="scope.row.tue==0"></div>
                <div class="greenBgs" v-else-if="scope.row.tue==1"></div>
                <div class="greyBg" v-else></div>
              </template>
            </el-table-column>
            <el-table-column label="Wed 13">
              <template slot-scope="scope">
                <div class="blueBg" v-if="scope.row.wed==0"></div>
                <div class="greenBgs" v-else-if="scope.row.wed==1"></div>
                <div class="greyBg" v-else></div>
              </template>
            </el-table-column>
            <el-table-column label="Thu 14">
              <template slot-scope="scope">
                <div class="blueBg" v-if="scope.row.thu==0"></div>
                <div class="greenBgs" v-else-if="scope.row.thu==1"></div>
                <div class="greyBg" v-else></div>
              </template>
            </el-table-column>
            <el-table-column label="Fri 15">
              <template slot-scope="scope">
                <div class="blueBg" v-if="scope.row.fri==0"></div>
                <div class="greenBgs" v-else-if="scope.row.fri==1"></div>
                <div class="greyBg" v-else></div>
              </template>
            </el-table-column>
            <el-table-column label="Sat 16">
              <template slot-scope="scope">
                <div class="blueBg" v-if="scope.row.set==0"></div>
                <div class="greenBgs" v-else-if="scope.row.set==1"></div>
                <div class="greyBg" v-else></div>
              </template>
            </el-table-column>
            <el-table-column label="Sun 17">
              <template slot-scope="scope">
                <div class="blueBg" v-if="scope.row.sun==0"></div>
                <div class="greenBgs" v-else-if="scope.row.sun==1"></div>
                <div class="greyBg" v-else></div>
              </template>
            </el-table-column>
          </el-table>
        </div>

        <div v-else>
          <el-calendar>
            <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
            <template slot="dateCell" slot-scope="{date, data}">
              <div>
             <div class="calendar-day">{{ data.day.split('-').slice(2).join('-') }}</div>
                <div v-for="(item,index) in calendarData" :key="index">
                   <div v-if="(item.months).indexOf(data.day.split('-').slice(1)[0])!=-1">
                     <div v-if="(item.days).indexOf(data.day.split('-').slice(2).join('-'))!=-1">
                          <el-tooltip class="item" effect="dark" :content="item.things" placement="right">
                               <div class="is-selected">{{item.things}}</div>
                          </el-tooltip>
                       </div>
                    <div v-else></div>
                   </div>
               <div v-else></div>
             </div>
          </div>
            </template>
          </el-calendar>
        </div>
        <div class="introduce">
          <div>
            <i class="icon blueIcon"></i>未使用
          </div>
          <div>
            <i class="icon greenIcon"></i>已使用
          </div>
          <div>
            <i class="icon greyIcon"></i>不可用
          </div>
        </div>
      </div>

      <div class="tableBoxes">
        <div class="title">设备使用史</div>
        <el-table border size="small" :data="tableDataTwo" style="width: 100%">
          <el-table-column label="开始时间">
            <template slot-scope="scope">
              <div>{{ scope.row.startTime }}</div>
            </template>
          </el-table-column>
          <el-table-column label="结束时间">
            <template slot-scope="scope">
              <div>{{ scope.row.endTime }}</div>
            </template>
          </el-table-column>
          <el-table-column label="任务编号">
            <template slot-scope="scope">
              <div>{{ scope.row.num }}</div>
            </template>
          </el-table-column>
          <el-table-column label="使用项目/事件">
            <template slot-scope="scope">
              <div>{{ scope.row.things }}</div>
            </template>
          </el-table-column>
          <el-table-column label="使用时长">
            <template slot-scope="scope">
              <div>{{ scope.row.times }}</div>
            </template>
          </el-table-column>
          <el-table-column label="收入">
            <template slot-scope="scope">
              <div>{{ scope.row.price }}</div>
            </template>
          </el-table-column>
          <el-table-column label="成本">
            <template slot-scope="scope">
              <div>{{ scope.row.cost }}</div>
            </template>
          </el-table-column>
          <el-table-column label="收益">
            <template slot-scope="scope">
              <div>{{scope.row.profit}}</div>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "eripment_info",
  data() {
    return {
      tableData: [
        {
          date: "00:00 02:00",
          mon: 0,
          tue: 0,
          wed: 0,
          thu: 1,
          fri: 2,
          set: 0,
          sun: 0
        }
      ],
      tableDataTwo: [
        {
          startTime: "2019年12月2日",
          endTime: "2019年12月6日",
          num: "T20191201001",
          things: "高温试验",
          times: "120",
          price: "3600",
          cost: "2400",
          profit: "1200"
        }
      ],
       calendarData: [
                    { months: ['03', '11'],days: ['15'],things: '看电影' },
                    { months: ['03', '11'], days: ['02'],things: '去公园野炊' },
                    { months: ['11'], days: ['02'],things: '看星星' },
                    { months: ['11'], days: ['02'],things: '看月亮' }   
                ],
                value: new Date()

    };
  }
};
</script>

<style lang="less">

.calendar-day{
        text-align: center;
        color: #202535;
        line-height: 30px;
        font-size: 12px;
    }
    .is-selected{
        color: #F8A535;
        font-size: 10px;
        margin-top: 5px;
    }
    #calendar .el-button-group>.el-button:not(:first-child):not(:last-child):after{
        content: '当月';
    }


.equipmentDate {
  .greenBgs {
    background: rgba(176, 226, 128, 1);
  }
  .topBox {
    background: #ffffff;
    margin-bottom: 1rem;
    padding: 1rem;

    .title {
      padding: 0.5rem;
      border-bottom: 1px solid #f2f4ff;
      margin-bottom: 1rem;
    }
  }

  .introduce {
    display: flex;
    align-items: center;
    padding: 1.5rem 0 0;
    & > div {
      font-size: 0.75rem;
      color: #999999;
    }

    & > div {
      margin-right: 0.5rem;
    }

    .icon {
      width: 0.8rem;
      height: 0.8rem;
      margin-right: 0.3rem;
      border-radius: 50%;
      display: inline-block;
    }
    .blueIcon {
      background: #b2c4f6;
    }
    .greenIcon {
      background: #b0e280;
    }
    .greyIcon {
      background: #dfe0e5;
    }
  }
  .rows {
    .el-col {
      display: flex;
      align-items: center;

      & > div {
        width: 50%;
        text-align: center;
        height: 2rem;
        line-height: 2rem;
        border: 1px solid #eeeeee;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .label {
        background: #e7e9ef;
      }
    }
  }

  .rowTwo {
    .el-col {
      display: flex;

      & > div {
        text-align: left;
        height: 2rem;
        line-height: 2rem;
        border: 1px solid #eeeeee;
        width: 100%;
      }

      .label {
        text-align: center;
        background: #e7e9ef;
      }
    }
  }
  .tableBox {
    .el-table .cell {
      font-size: 0.75rem;
      & > div {
        font-size: 0.75rem;
      }
    }
  }

  .tableBoxes {
    margin: 0.5rem 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    background: #ffffff;
    padding: 1rem;

    .title {
      display: flex;
      justify-content: space-between;
      padding-bottom: 0.5rem;
      border-bottom: 1px solid #eeeeee;
      margin-bottom: 0.5rem;
    }
  }

  .tableBoxs {
    margin: 0.5rem 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    background: #ffffff;
    padding: 1rem;

    .title {
      display: flex;
      justify-content: space-between;
    }

    .tagsBox {
      display: flex;
      & > div {
        margin-right: 1rem;
      }
      .active {
        color: #2c64ff;
      }
    }

    .el-table--small td {
      padding: 0;
    }

    .blueBg {
      background: #b2c4f6;
      width: 100%;
      height: 1.8rem;
    }
    .greenBgs {
      background: #b0e280;
      width: 100%;
      height: 1.8rem;
    }
    .greyBg {
      background: #dfe0e5;
      width: 100%;
      height: 1.8rem;
    }

    .cell {
      padding: 0;
    }

    .title {
      padding: 0.5rem;
      border-bottom: 1px solid #f2f4ff;
      margin-bottom: 1rem;
    }
  }

  .el-table th {
    background: #eeeeee;
  }

  .taskStatusOne {
    width: 5rem;
    background: linear-gradient(
      90deg,
      rgba(44, 168, 255, 1),
      rgba(255, 255, 255, 1)
    );
    border-radius: 1rem;
    text-align: center;
  }

  .taskStatusTwo {
    background: linear-gradient(
      90deg,
      rgba(131, 230, 34, 1),
      rgba(255, 255, 255, 1)
    );
    border-radius: 1rem;
    text-align: center;
    width: 5rem;
  }

  .payStatusOne {
    color: #999999;
    display: flex;
    align-items: center;

    i {
      width: 1rem;
      height: 1rem;
      background: #999999;
      display: inline-block;
      margin-right: 0.3rem;
      border-radius: 50%;
    }
  }

  .payStatusTwo {
    color: #2c64ff;
    display: flex;
    align-items: center;

    i {
      width: 1rem;
      height: 1rem;
      background: #2c64ff;
      display: inline-block;
      margin-right: 0.3rem;
      border-radius: 50%;
    }
  }

  .paymentTwo {
    color: #2c64ff;
  }

  .paymentThr {
    color: #f12c0b;
  }
}
</style>