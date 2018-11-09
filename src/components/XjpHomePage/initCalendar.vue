<style scoped>
  @media screen and (min-width: 460px) {
    .wh_item_date:hover {
      cursor: pointer;
    }
  }

  .wh_container {
    max-width: 500px;
  }
  li {
    list-style-type: none;
  }

  .wh_top_changge {
    display: flex;
    width: 40%;
    float: right;
    margin-right: 35px;
  }
  .wh_top_changge li{
    color: #333333;
  }
  .wh_top_changge li {
    cursor: pointer;
    display: flex;
    color: #fff;
    font-size: 18px;
    flex: 1;
    justify-content: center;
    align-items: center;
    height: 73px;
  }

  .wh_top_changge .wh_content_li {
    cursor: auto;
    flex: 2.5;
    color:red;
  }
  .wh_content_all {
    font-family: -apple-system, BlinkMacSystemFont, "PingFang SC",
    "Helvetica Neue", STHeiti, "Microsoft Yahei", Tahoma, Simsun, sans-serif;
    background-color: white;
    width: 100%;
    overflow: hidden;
    padding-bottom: 8px;
  }

  .wh_content {
    display: flex;
    flex-wrap: wrap;
    padding: 0 3% 0 3%;
    width: 100%;
  }

  .wh_content:first-child .wh_content_item_tag,
  .wh_content:first-child .wh_content_item {
    color: #ddd;
    font-size: 16px;
  }

  .wh_content_item,
  wh_content_item_tag {
    font-size: 15px;
    width: 13.4%;
    text-align: center;
    color: #333333;
    position: relative;
  }
  .wh_content_item {
    height: 40px;
  }

  .wh_top_tag {
    width: 40px;
    height: 40px;
    line-height: 40px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .wh_item_date {
    width: 40px;
    height: 40px;
    line-height: 40px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .wh_top_changge li .wh_jiantou1{
    color: red;
  }
  .wh_jiantou1 {
    width: 12px;
    height: 12px;
    border-top: 2px solid #333333;
    border-left: 2px solid #333333;
    transform: rotate(-45deg);
  }

  .wh_jiantou1:active,
  .wh_jiantou2:active {
    border-color: #ddd;
  }

  .wh_jiantou2 {
    width: 12px;
    height: 12px;
    border-top: 2px solid #333333;
    border-right: 2px solid #333333;
    transform: rotate(45deg);
  }
  .wh_content_item > .wh_isMark {
    margin: auto;
    border-radius: 100px;
    background: blue;
    z-index: 2;
  }
  .wh_content_item .wh_other_dayhide {
    color: #bfbfbf;
  }
  .wh_content_item .wh_want_dayhide {
    color: #bfbfbf;
  }
  .wh_content_item .wh_isToday {
    background: yellow;
    border-radius: 100px;
  }
  .wh_content_item .wh_chose_day {
    background: green;
    border-radius: 100px;
  }
  #wh_content .wh_content_item{
    color: #4f81bd;
  }
  .wh_content_all .getDay{
    width: auto;
    padding-top: 10px;
    height: 82px;
    overflow: hidden;
    float: left;
    margin-left: 80px;
    /*text-align: center;*/
  }
  .wh_content_all .getDay h2{
    font-weight: 100;
    font-size:30px;
    color: red;
    /*line-height: 30px;*/
  }
  .wh_content_all .getDay h3{
    font-weight: 100;
    font-size: 14px;
  }
</style>
<template>
  <section class="wh_container">
    <div class="wh_content_all">
      <div class="getDay">
        <h2 class="dayTime">{{dayTime}}</h2>
        <h3 class="weekTime">{{weeks}}</h3>
      </div>
      <div class="wh_top_changge">
        <li @click="PreMonth(myDate,false)">
          <div class="wh_jiantou1"></div>
        </li>
        <li class="wh_content_li">{{dateTop}}</li>
        <li @click="NextMonth(myDate,false)">
          <div class="wh_jiantou2"></div>
        </li>
      </div>
      <div id="wh_content" class="wh_content">
        <div class="wh_content_item week" v-for="tag in textTop" :key="tag">
          <div class="wh_top_tag">
            {{tag}}
          </div>
        </div>
      </div>
      <div class="wh_content">
        <div class="wh_content_item" v-for="(item,index) in list" @click="clickDay(item,index)" :key="item.id">
          <div class="wh_item_date" v-bind:class="[{ wh_isMark: item.isMark},{wh_other_dayhide:item.otherMonth!=='nowMonth'},{wh_want_dayhide:item.dayHide},{wh_isToday:item.isToday},{wh_chose_day:item.chooseDay},setClass(item)]">
            {{item.id}}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  import timeUtil from '../../../static/js/calendar';
  export default {
    name: "homeCalendar",
    data() {
      return {
        myDate: [],
        list: [],
        historyChose: [],
        dateTop: '',
        dayTime:'',
        weeks:'',
        arr:[2018-10-20,2018-11-30]
      };
    },
    props: {
      markDate: {
        type: Array,
        default: () => []
      },
      markDateMore: {
        type: Array,
        default: () => []
      },
      textTop: {
        type: Array,
        default: () => ['日', '一', '二', '三', '四', '五', '六']
      },
      sundayStart: {
        type: Boolean,
        default: () => false
      },
      agoDayHide: { type: String, default: `0` },
      futureDayHide: { type: String, default: `2554387200` },

    },
    created() {
      this.intStart();
      this.myDate = new Date();
      this.getday()
    },
    methods: {
      getday(){
        var day=new Date();
        console.log(day);
        this.dayTime=day.getDate()
        console.log(this.dayTime);

        switch (day.getDay()) {
          case 0 :this.weeks="星期日";break;
          case 1:this.weeks="星期一";break;
          case 2:this.weeks="星期二";break;
          case 3:this.weeks="星期三";break;
          case 4:this.weeks="星期四";break;
          case 5:this.weeks="星期五";break;
          default:this.weeks="星期六";break;
        }
      },


      intStart() {
        timeUtil.sundayStart = this.sundayStart;
      },
      setClass(data) {
        let obj = {};
        obj[data.markClassName] = data.markClassName;
        return obj;
      },
      clickDay: function (item, index) {
        if (item.otherMonth === 'nowMonth' && !item.dayHide) {
          this.getList(this.myDate, item.date);
        }
        if (item.otherMonth !== 'nowMonth') {
          item.otherMonth === 'preMonth'
            ? this.PreMonth(item.date)
            : this.NextMonth(item.date);
        }
      },
      ChoseMonth: function (date, isChosedDay = true) {
        date = timeUtil.dateFormat(date);
        this.myDate = new Date(date);
        this.$emit('changeMonth', timeUtil.dateFormat(this.myDate));
        if (isChosedDay) {
          this.getList(this.myDate, date, isChosedDay);
        } else {
          this.getList(this.myDate);
        }
      },
      PreMonth: function (date, isChosedDay = true) {
        date = timeUtil.dateFormat(date);
        this.myDate = timeUtil.getOtherMonth(this.myDate, 'preMonth');
        this.$emit('changeMonth', timeUtil.dateFormat(this.myDate));
        if (isChosedDay) {
          this.getList(this.myDate, date, isChosedDay);
        } else {
          this.getList(this.myDate);
        }
      },
      NextMonth: function (date, isChosedDay = true) {
        date = timeUtil.dateFormat(date);
        this.myDate = timeUtil.getOtherMonth(this.myDate, 'nextMonth');
        this.$emit('changeMonth', timeUtil.dateFormat(this.myDate));
        if (isChosedDay) {
          this.getList(this.myDate, date, isChosedDay);
        } else {
          this.getList(this.myDate);
        }
      },
      forMatArgs: function () {
        let markDate = this.markDate;
        let markDateMore = this.markDateMore;
        markDate = markDate.map((k) => {
          return timeUtil.dateFormat(k);
        })
        markDateMore = markDateMore.map((k) => {
          k.date = timeUtil.dateFormat(k.date)
          return k;
        })
        return [markDate, markDateMore];
      },
      getList: function (date, chooseDay, isChosedDay = true) {
        const [markDate, markDateMore] = this.forMatArgs();
        this.dateTop = `${date.getFullYear()}年${date.getMonth() + 1}月`;
        let arr = timeUtil.getMonthList(this.myDate);
        for (let i = 0; i < arr.length; i++) {
          let markClassName = '';
          let k = arr[i];
          k.chooseDay = false;
          const nowTime = k.date;
          const t = new Date(nowTime).getTime() / 1000;
          //看每一天的class
          for (const c of markDateMore) {
            if (c.date === nowTime) {
              markClassName = c.className || '';
            }
          }
          //标记选中某些天 设置class
          k.markClassName = markClassName;
          k.isMark = markDate.indexOf(nowTime) > -1;
          //无法选中某天
          k.dayHide = t < this.agoDayHide || t > this.futureDayHide;
          if (k.isToday) {
            this.$emit('isToday', nowTime);
          }
          let flag = !k.dayHide && k.otherMonth === 'nowMonth';
          if (chooseDay && chooseDay === nowTime && flag) {
            this.$emit('choseDay', nowTime);
            this.historyChose.push(nowTime);
            k.chooseDay = true;
          } else if (
            this.historyChose[this.historyChose.length - 1] === nowTime && !chooseDay && flag
          ) {
            k.chooseDay = true;
          }
        }
        this.list = arr;
      }
    },
    mounted() {
      this.getList(this.myDate);
    },
    watch: {
      markDate: {
        handler(val, oldVal) {
          this.getList(this.myDate);
        },
        deep: true
      },
      markDateMore: {
        handler(val, oldVal) {
          this.getList(this.myDate);
        },
        deep: true
      },
      agoDayHide: {
        handler(val, oldVal) {
          this.agoDayHide = parseInt(val);
          this.getList(this.myDate);
        },
        deep: true
      },
      futureDayHide: {
        handler(val, oldVal) {
          this.futureDayHide = parseInt(val);
          this.getList(this.myDate);
        },
        deep: true
      },
      sundayStart: {
        handler(val, oldVal) {
          this.intStart();
          this.getList(this.myDate);
        }, deep: true
      }
    }
  };
</script>
