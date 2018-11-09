<template>
  <div class="GehCenterLeft" >
    <div class="GehCenterLeftNav">
      <ul>
        <li><input type="checkbox"/><span id="GehCenterLeftNavSpan" class="GehCenterLeftNavSpan"></span></li>
        <li>全部主题<b>|</b></li>
        <li>主题排序<b>|</b></li>
        <li>标记为...<b></b></li>
      </ul>
    </div>
    <div class="GehCenterLeftBody">
      <h6>直接参与的工作</h6>
      <ul>
        <li v-for="(g,i) of this.getM" @click="id(i)" :key="i">
          <input type="checkbox"/>
          <span class="GehCenterLeftNavSpan GehCenterLeftNavSpanTemp"></span>
          <p>{{g.title}}</p>
          <b class="GehStar"></b>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OaCoopCenterLeft',
  data () {
    return {
      isCheck: true,
      getM: [],
      idx:0
    }
  },
  methods: {
    getMess: function () {
        this.$http.get('http://140.143.100.57:3008/team/all').then(res => {
          console.log('res.data', res.data)
          this.getM = res.data
          this.$emit('getMs', this.getM)
          console.log('this.getMleft', this.getM)
        })
    
      let btn = document.querySelectorAll('.el-button--primary')
      btn[0].onclick =()=> {
        this.$http.get('http://140.143.100.57:3008/team/all').then(res => {
          console.log('res.data', res.data)
          this.getM = res.data
          this.$emit('getMs', this.getM)
          console.log('this.getMleft', this.getM)
        })}

    },
    id: function (index) {
      for (let i = 0;i < this.getM.length;i++) {
        if(i == index) {
          this.idx = index
          this.$emit('idxC',this.idx)
          // console.log('this.idx',this.idx)
        }
      }
    },
    check: function () {
      let checkDom = document.querySelectorAll('.GehCenterLeftNavSpan')
      let flag = 1
      for (let i = 0; i < checkDom.length; i++) {
        checkDom[i].onclick = function () {
          if (flag === 1) {
            checkDom[i].style.backgroundPosition = 'center bottom'
            flag = 0
            this.isCheck = true
          } else if (flag === 0) {
            checkDom[i].style.backgroundPosition = 'center top'
            flag = 1
            this.isCheck = false
          }
        }
      }
    },
    star: function () {
      let starDom = document.querySelectorAll('.GehStar')
      let flag = 1
      for (let i = 0; i < starDom.length; i++) {
        starDom[i].onclick = function () {
          if (flag === 1) {
            starDom[i].style.backgroundPosition = '-48px -160px'
            flag = 0
          } else if (flag === 0) {
            starDom[i].style.backgroundPosition = '-32px -160px'
            flag = 1
          }
        }
      }
    },
    clickLi: function () {
      //获取dom元素
      let liDom = document.querySelectorAll('.GehCenterLeftBody>ul li')
      //单击行
      let clickTr = null
      //遍历
      for (let i = 0; i < liDom.length; i++) {
        //绑定单击事件
        liDom[i].onclick = function () {
          //this.isClick是自己指定的，为了标识此行没有被单击过，true为单击过，false为未单击
          if (this.isClick != true) {
            //如果此行为单击，则设置为已单击
            this.isClick = true
            //clickTr是之前单击行的对象，判断是否为空（即该列表未被单击过），是否是当前对象（单击的是否是以单击过的）
            if (clickTr != null && clickTr != this) {
              //如果都不是，则设置clickTr颜色为背景色（鼠标离开行的颜色），并且是指此行为未单击
              clickTr.isClick = false
              clickTr.style.backgroundColor = "#fff"
            }
            //设置this（当前单击行对象）的背景色为指定的单击颜色
            this.style.backgroundColor = "#e8f5f6"
            //保存当前单击对象
            clickTr = this
          }
          // else {
            //如果单击的是已经单击的对象，则视为取消单击
            // this.isClick = false
          // }
        }
        //绑定鼠标悬浮事件
        liDom[i].onmouseover = function () {
          //如果是未单击则设置背景色为鼠标悬浮颜色
          if (this.isClick != true) {
            this.style.backgroundColor = "#f5fafb"
          }
        }
        //绑定鼠标离开事件
        liDom[i].onmouseout = function () {
          //如果是未单击则设置背景色为鼠标离开颜色
          if (this.isClick != true) {
            this.style.backgroundColor = "#fff"
          }
        }
      }
    },
  },
  watch:{
    idx (curVal,oldVal) {
      // console.log(curVal,oldVal)
    }
  },
  created () {

  },
  mounted () {
    this.getMess()
  },
  updated () {
    this.check()
    this.star()
    this.clickLi()
  }
}
</script>

<style scoped>
  @import '../../../static/css/gehoacoop.css';
</style>
