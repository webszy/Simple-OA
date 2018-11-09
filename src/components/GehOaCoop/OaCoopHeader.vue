<template>
  <div class="GehHeader" @click="xianshi($event)">
    <ul class="GehHeaderUls">
      <li class="GehHeaderLeft">
        <ul>
          <li>
            <img src="../../../static/img/hand-1.png" alt="点击可收缩/展开左侧菜单">
          </li>
          <li>
            <p>协作交流</p>
            <ul>
              <li><b>全部</b>|</li>
              <li><b>未读</b>|</li>
              <li><b>重要</b>|</li>
              <li><b>隐藏</b></li>
              <li class="GehMagicLine"></li>
            </ul>
          </li>
        </ul>
      </li>
      <li class="GehHeaderRight">
        <div>
          <p @click="clicks">新建协作</p>
          <p>标签设置</p>
        </div>
        <div>
          <input class="GehHeaderRightInp" type="text">
          <button class="GehHeaderRightBtn GehHeaderRightBtnO"><i class="iconfont icon-search"></i></button>
          <button class="GehHeaderRightBtn GehHeaderRightBtnT">高级搜索</button>
        </div>
        <span>
          <i class="iconfont icon-list" @click="isShow=!isShow" ></i>
          <ul v-show="isShow">
            <li title="搜索"><img src="../../../static/img/CM_icon1_wev8.png">搜索</li>
            <li title="新建协作" @click="clicks"><img src="../../../static/img/1_wev8.png">新建协作</li>
            <li title="标签设置"><img src="../../../static/img/2_wev8.png">标签设置</li>
            <li title="收藏"><img src="../../../static/img/4_wev8.png">收藏</li>
            <li title="帮助"><img src="../../../static/img/5_wev8.png">帮助</li>
          </ul>
        </span>
      </li>
    </ul>
    <oa-coop-new v-show="isClick1" @checked="checks"></oa-coop-new>
  </div>
</template>

<script>
  import OaCoopNew from './OaCoopNew'
export default {
  name: 'OaCoop',
  components: {
    OaCoopNew
  },
  data(){
    return {
      isShow: false,
      isClick1: false,
    }
  },
  methods: {
    checks(bool) {
      this.isClick1 = bool
    },
    clicks() {
      this.isClick1 =! this.isClick1
    },
    triangleMove: function () {
      //获取dom元素
      let bDom = document.querySelectorAll('.GehHeaderLeft li>p+ul li b')
      let triangleDom = document.querySelectorAll('.GehMagicLine')
      let arrLeft = [10,56,105,152]
      let triangleDomLeft
      //单击行
      let clickTr = null
      //遍历
      for (let i = 0; i < bDom.length; i++) {
        //绑定单击事件
        bDom[i].onclick = function () {
          //初始化界面
          for (let j = 0; j<bDom.length; j++) {
            bDom[j].style.color = '#000'
          }
          //this.isClick是自己指定的，为了标识此行没有被单击过，true为单击过，false为未单击
          if (this.isClick != true) {
            //如果此行为单击，则设置为已单击
            this.isClick = true
            //clickTr是之前单击行的对象，判断是否为空（即该列表未被单击过），是否是当前对象（单击的是否是以单击过的）
            if (clickTr != null && clickTr != this) {
              //如果都不是，则设置clickTr颜色为背景色（鼠标离开行的颜色），并且是指此行为未单击
              clickTr.isClick = false
              clickTr.style.color = '#000'
            }
            //设置this（当前单击行对象）的背景色为指定的单击颜色
            this.style.color = '#0d93f6'
            //保存当前单击对象
            clickTr = this
            triangleDom[0].style.left = arrLeft[i] + 'px'
            // triangleDomLeft = 0
            // console.log('clickTr',clickTr)
            // console.log('clickTr.parentNode.parentNode',clickTr.parentNode.parentNode)
            // triangleDomLeft = clickTr.offsetLeft  - clickTr.parentNode.parentNode.offsetLeft
            // console.log('clickTr.parentNode.parentNode.offsetLeft',clickTr.parentNode.parentNode.offsetLeft)
            // console.log('clickTr.offsetLeft',
            // lickTr.offsetLeft)
            // console.log('triangleDomLeft',triangleDomLeft)

          }
          // else {
            //如果单击的是已经单击的对象，则视为取消单击
            // this.isClick = false
          // }
        }
        //绑定鼠标悬浮事件
        bDom[i].onmouseover = function () {
          //如果是未单击则设置背景色为鼠标悬浮颜色
          if (this.isClick != true) {
            this.style.color = '#0d93f6'
          }
        }
        //绑定鼠标离开事件
        bDom[i].onmouseout = function () {
          //如果是未单击则设置背景色为鼠标离开颜色
          if (this.isClick != true) {
            this.style.color = '#000'
          }
        }
      }
    },
    // xianshi () {
    //   let ulDom = document.querySelectorAll('.GehHeaderRight span ul')
    //   let iDom = document.querySelectorAll('.GehHeaderRight .icon-list')
    //   let headerDom = document.querySelectorAll('.GehHeader')
    //   let isClickUl = true
    //   iDom[0].onclick = () => {
    //     if (isClickUl == true) {
    //       ulDom[0].style.display = 'block'
    //       isClickUl = false
    //       console.log('1',isClickUl )
    //     } else if (isClickUl == false) {
    //       ulDom[0].style.display = 'none'
    //       isClickUl = true
    //       console.log('2',isClickUl )
    //     }
    //   }
    //   headerDom[0].onclick = () => {
    //     if (isClickUl == false) {
    //       console.log('3',isClickUl)
    //       ulDom[0].style.display = 'none'
    //       isClickUl = true
    //       console.log('４',isClickUl)
    //     }
    //   }
    // },
    xianshi (e) {
      if (e.target.className.indexOf('icon-list') == -1) {
        if (this.isShow) {
          this.isShow=false
        }
      }
        // this.isShow=!this.isShow
    }

  },
  mounted () {
    this.triangleMove()
    // this.xianshi()
  },
  watch:{
    isShow:function (newval,oldval) {
      console.log(newval)
    }
  }
}
</script>

<style scoped>
  @import '../../../static/css/gehoacoop.css';
</style>
