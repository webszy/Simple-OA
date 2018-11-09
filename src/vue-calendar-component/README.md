## vue-calendar-component

* 基于 vue 2.0 开发的轻量，高性能日历组件
* 占用内存小，性能好，样式好看，可扩展性强
* 原生 js 开发，没引入第三方库

## Why

* Github 上很多点击弹出日历选择某个时间的组件，却没有找到单纯展示日历并且能点击获取时间的组件
* 少部分日历组件的占用内存过于大，对于日历这样简单的功能来说显然不够合理

## Demo

![效果](https://zwhgithub.github.io/vue-calendar/dist/1510652959.png) [或者请用浏览器的手机模式查看](https://zwhgithub.github.io/vue-calendar/dist/#/)

## 效果

![效果](https://qiniu.epipe.cn/5465939501580804096?imageView2/1/w/290/h/470)

* 🎉 觉得好用给一个 star 哦~ 🎉

## Install

```javascript
npm i vue-calendar-component --save
cnpm i vue-calendar-component --save  //国内镜像
```

## Usage

```javascript
//vue文件中引入
import Calendar from 'vue-calendar-component';

 components: {
    Calendar
  }
    <Calendar
      v-on:choseDay="clickDay"
      v-on:changeMonth="changeDate"
      // v-on:isToday="clickToday"
      // :markDate=arr // arr=['2018/4/1','2018/4/3'] 标记4月1日和4月3日 简单标记
      //:markDateMore=arr // 多种不同的标记
      //第一个标记和第二个标记不能同时使用
      
      // :agoDayHide='1514937600' //某个日期以前的不允许点击  时间戳10位
      // :futureDayHide='1525104000' //某个日期以后的不允许点击  时间戳10位
    ></Calendar>

    clickDay(data) {
      console.log(data); //选中某天
    },
    changeDate(data) {
      console.log(data); //左右点击切换月份
    },
    clickToday(data) {
      console.log(data); //跳到了本月
    }

  // 多个标记示例
  arr=[{date:'2018/4/1',className:"mark1"}, {date:'2018/4/13',className:"mark2"}];
  //4月1 标记的className是mark1 根据class做出一些标记样式
```

### API

| 属性           | 说明                                                         |  默认  | 是否必传 |
| :------------- | :----------------------------------------------------------- | :----: | :------: |
| choseDay       | 选中某天调用的方法，返回选中的日期 YY-MM-DD                  |   无   |    否    |
| changeMonth    | 切换月份调用的方法，返回切换到某月的日期 YY-MM-DD            |   无   |    否    |
| isToday        | 切换月份的时候，如果切到当前月份，调用这个方法，返回当前月今天 |   无   |    否    |
| markDate      | 如果需要某月的几天被标注，传当月的日期数组。如[2,6,8]当月 2 号 6 号 8 号被会标注（相同的标记） | 空数组 |    否    |
| markDateMore   | 需要不同的标记如上Usage 最后一行示例代码                     | 空数组 |    否    |
| agoDayHide     | 某个日期以前的不允许点击 时间戳长度是 10 位                  |   0    |    否    |
| futureDayHide  | 某个日期以后的不允许点击 时间戳长度是 10 位                  |  很大  |    否    |

```javascript
✅ 在 Calendar标签上添加 ref 属性, 暴露出三个方法可以  直接切换月份
例如: <Calendar ref="Calendar"></Calendar>

      ✅ this.$refs.Calendar.PreMonth();  //调用方法实现转到上个月
      ✅ this.$refs.Calendar.NextMonth(); //调用方法实现转到下个月
      ✅ this.$refs.Calendar.ChoseMonth('2018-12-12'); //调用方法实现转到某个月
      ✅ this.$refs.Calendar.ChoseMonth('2018-12-12',false); //跳转到18年12月12日 但是不选中当天
      //第二个参数 false表示不选中日期
```

## Other

* src 下面的 App.vue 有 demo 可以参考.
* 如果有其他问题或者版本上, 功能上不兼容的 邮件沟通 zwhcoder@gmail.com