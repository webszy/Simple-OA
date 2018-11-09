<template>
  <div class="GehCenterRight">
    <div class="GehCenterRightContant">
      <h6>{{this.getC[this.idx].title}}<b @click="hide"></b></h6>
    </div>
    <div class="GehCenterRightManage">
      <p>负责人：{{this.getC[this.idx].username}} 版块：项目管理 时间：2018-10-26 至 2018-10-27</p>
    </div>
    <div class="GehCenterRightEdit">
      <div class="GehCenterRightBox">
        <p @click="show" v-show="shows1">请填写留言内容</p>
        <div class="GehCenterRightBoxbianji" v-show="shows">
          <editor></editor>
          <el-button type="primary">提交</el-button>
        </div>
        <div class="GehCenterRightBoxNav">
          <ul>
            <li>相关交流</li>
            <li>与我相关</li>
            <li>参与情况</li>
            <li>相关资源</li>
            <li></li>
          </ul>
          <ul>
            <li>
              <input class="GehCenterRightBoxNavInp" type="text">
              <button class="GehCenterRightBoxNavBtn1"><i class="iconfont icon-search"></i></button>
              <button class="GehCenterRightBoxNavBtn2">高级搜索</button>
            </li>
          </ul>
        </div>
      </div>
      <div class="GehCenterRightFooterTemp">
        <div class="GehCenterRightFooter">
          <p>没有可以显示的数据</p>
          <div class="GehCenterRightFooterMess">
            <ul>
              <li>
                <img src="../../../static/img/icon_m_wev8.jpg">
              </li>
              <li class="GehCenterRightFooterMessLis">
                <input type="checkbox">
                <span class="GehCenterLeftNavSpan"></span>
                <p>{{this.getC[this.idx].username}}</p>
                <b>{{this.getC[this.idx].content}}</b>
              </li>
              <li class="GehCenterRightFooterMessLis1">#1</li>
            </ul>
            <ul class="GehCenterRightFooterMessLishuifu">
              <li v-for="(g,i) of this.replysA[this.idx].replys" :key="i">
                <div class="GehCenterRightFooterMessLishuifuOne">
                  <h5>{{name}}<span>{{g.time}}</span></h5>
                  <ul>
                    <li></li>
                    <li @click="evaluate=true"></li>
                  </ul>
                </div>
                <div class="GehCenterRightFooterMessLishuifuTwo">
                  <p v-html="g.msg"></p>
                </div>
              </li>
            </ul>
            <ul>
              <li>{{this.getC[this.idx].ptime}}</li>
              <li>
                <ul>
                  <li>删除</li>
                  <li>引用</li>
                  <li @click="evaluate=true">评论</li>
                  <li>置顶</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div class="GehCenterRightFooterbianji GehCenterRightBoxbianji" v-show="evaluate">
          <p>请填写评论内容</p>
          <editor @text="txt"></editor>
          <el-button type="primary" @click="replysB">提交</el-button>
          <el-button @click="evaluate=false">取消</el-button>
        </div>
        <div class="GehHeaderRightDisabled">
          <span class="GehHeaderRightDisabled1">&#60;</span>
          <span class="GehCurr">1</span>
          <span class="GehHeaderRightDisabled1">&#62;</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import editor from './editor'
export default{
  name: 'OaCoopCenterRight',
  components: {
    editor,
  },
  data:function () {
    return {
      shows: false,
      shows1: true,
      evaluate: false,
      reply: '',
      sid: '',
      name:'',
      replysA: []
    }
  },
  methods: {
    txt(v){
      this.reply=v
    },
    replysB: function() {
      this.sid = this.getC[this.idx].sid
      let p = this.$qs.stringify({
        sid: this.sid,
        reply: this.reply
      })
      console.log('this.sid',this.sid)
      console.log('this.reply',this.reply)
        if(document.querySelectorAll('.w-e-text>p')[1].innerHTML != '' && this.reply != '' && this.reply !='<p><br></p>') {
          this.$http.post('http://140.143.100.57:3008/team/reply',p).then(res=>{
          console.log(res.data)
          this.$http.get('http://140.143.100.57:3008/team/all').then(res=>{
            console.log('Rres.data',res.data)
            this.replysA = res.data
            this.name = this.replysA[this.idx].username
            this.reply = ''
            document.querySelectorAll('.w-e-text>p')[1].innerHTML = ''
            this.evaluate=false
          })
        })
      }else{
        alert('内容不能为空')
      }
    },
    replysC: function() {
      this.$http.get('http://140.143.100.57:3008/team/all').then(res=>{
        console.log('Rres.data',res.data)
        this.replysA = res.data
        this.name = this.replysA[this.idx].username
        this.evaluate=false
      })
    },
    dd: function() {
      console.log('this.getC',this.getC[this.idx])
      console.log('this.idx',this.idx)
    },
    hide: function() {
      this.shows = false
      this.shows1 = true
    },
    show: function() {
      this.shows =! this.shows
      this.shows1 =! this.shows1
    },
    triangleMove: function() {
      //获取dom元素
      let lisDom = document.querySelectorAll('.GehCenterRightBoxNav ul:nth-child(1) li')
      let triangleDom = document.querySelectorAll('.GehCenterRightBoxNav ul:nth-child(1) li:nth-child(5)')
      let arrLeft = [59,132,210,288]
      let arr1 = ['../../../static/img/cowork_discusses_a_wev8.png','../../../static/img/cowork_related_a_wev8.png','../../../static/img/cowork_join_a_wev8.png','../../../static/img/cowork_relatedme_a_wev8.png']
      let arr2 = ['../../../static/img/cowork_discusses_wev8.png','../../../static/img/cowork_related_wev8.png','../../../static/img/cowork_join_wev8.png','../../../static/img/cowork_relatedme_wev8.png']
      let triangleDomLeft
      //单击行
      let clickTr = null
      //遍历
      for (let i = 0; i < lisDom.length; i++) {
        //绑定单击事件
        lisDom[i].onclick = function () {
          //初始化界面
          for (let j = 0; j < arr2.length; j++) {
            lisDom[j].style.background = 'url('+arr2[j]+') no-repeat left center'
            lisDom[j].style.color = '#000'
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
              //初始化背景图
              for (let j = 0; j < arr2.length; j++) {
                lisDom[j].style.background = 'url('+arr2[j]+') no-repeat left center'
              }
            }
            //设置this（当前单击行对象）的背景色为指定的单击颜色
            this.style.color = '#369eff'
            this.style.background = 'url('+arr1[i]+') no-repeat left center'
            //保存当前单击对象
            clickTr = this
            triangleDom[0].style.left = arrLeft[i] + 'px'
          }
          // else {
          //如果单击的是已经单击的对象，则视为取消单击
          // this.isClick = false
          // }
        }
      }
    },
    donghua() {
      let jt = document.querySelectorAll('.GehCenterRightContant h6 b')
      let Edit = document.querySelectorAll('.GehCenterRightEdit')
      let Manage = document.querySelectorAll('.GehCenterRightManage')
      let Contant = document.querySelectorAll('.GehCenterRightContant')
      let myTimer = null
      let flag = 1
      let move = 31
      let mWidth = Manage[0].offsetHeight + Contant[0].offsetHeight
      let cWidth = Contant[0].offsetHeight
      console.log('mWidth',mWidth)
      jt[0].onclick = () => {
        if (flag === 1) {
          jt[0].style.background = 'url(../../../static/img/icon_up_wev8.png) no-repeat center center'
          flag = 0
          myTimer = setInterval(() => {
            move++
            if (move>=mWidth) {
              move = mWidth
              clearInterval(myTimer)
            }
            Edit[0].style.top = move + 'px'
          },7)
        } else if (flag === 0) {
          jt[0].style.background = 'url(../../../static/img/icon_down_wev8.png) no-repeat center center'
          flag =1
          myTimer = setInterval(() => {
            move--
            if (move<=cWidth) {
              move = cWidth
              clearInterval(myTimer)
            }
            Edit[0].style.top = move + 'px'
          },7)
        }
      }
    },
    Eval() {
      this.evaluate =! this.evaluate
    }
  },
  watch:{
    idx (curVal,oldVal) {
      console.log(curVal,oldVal)
    },
    reply(n,o){
      console.log("replay",n)
    }
  },
  props: ['getC','idx'],
  created () {
    this.replysC()
  },
  mounted () {
  },
  updated () {
    this.dd()
    this.triangleMove()
    this.donghua()
  }
}
</script>

<style scoped>
  @import '../../../static/css/gehoacoop.css';
</style>
