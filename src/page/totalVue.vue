<template>
  <div class="bigBox" >
    <div class="blackbox"></div>
    <div class="totalHeader">
      <div class="ecology" >
        <h1 class="echo gonggongH1" style="width:40%;">e-cology</h1>
        <h1 class="prep gonggongH1">丨前端用户中心</h1>
      </div>
      <div class="titleList">
        <ul class="doorList" @click="changelist">
          <router-link to="/homePage">
            <li style="color: white" title="门户">门户</li>
          </router-link>
          <router-link to="/process">
           <li class="gonggongl" title="流程" >流程</li>
          </router-link>
          <router-link to="/konwledge">
          <li class="gonggongl" title="知识">知识</li>
          </router-link>
          <router-link to="/OaCoop">
            <li class="gonggongl" title="协作">协作</li>
          </router-link>
          <router-link to="/calenDar">
            <li class="gonggongl" title="日程">日程</li>
          </router-link>
        </ul>
        <div class="normalList">
          <h2 class="fenlei" @click="hide()"><i class="iconfont icon-icon- gonggongl"></i></h2>
          <h2 class="normal gonggongl" @click="append">常用</h2>
        </div>
        <div class="search">
          <h2 class="gonggongl goh1" @click="showsou">微搜</h2>
          <input type="text" class="searchInput" placeholder="请输入关键词搜索"/>
          <i class="iconfont icon-sousuo"></i>
        </div>
      </div>
      <div class="poor" @click="close()">
        <i class="iconfont icon-tuichu"></i>
      </div>
    </div>
    <!--点击分类-->
    <ul class="hideBox" v-show="hidebox">
      <li style="color: white">门户</li>
      <li class="gonggongl">流程</li>
      <li class="gonggongl">知识</li>
      <li class="gonggongl">协作</li>
      <li class="gonggongl">日程</li>
      <li class="gonggongl">人事</li>
      <li class="gonggongl">微博</li>
      <li class="gonggongl">微搜</li>
      <li class="gonggongl">证件</li>
      <li class="gonggongl">邮件</li>
      <li class="gonggongl">客户</li>
      <li class="gonggongl">项目</li>
      <li class="gonggongl">资产</li>
      <li class="gonggongl">会议</li>
      <li class="gonggongl">公文</li>
      <li class="gonggongl">执行</li>
      <li class="gonggongl">通信</li>
      <li class="gonggongl">调查</li>
      <li class="gonggongl">车辆</li>
      <li class="gonggongl">报表</li>
      <li class="gonggongl"></li>
    </ul>
    <!--关闭-->
    <div class="closehide" v-show="closehide">
      <div class="closeHeader">
        <h1>消息确认</h1>
        <i @click="closebut()" class="iconfont icon-tuichu"></i>
      </div>
      <div class="headerNav">
        <i class="iconfont icon-tuichu"></i>
        <h3>确认要退出系统吗</h3>
      </div>
      <div class="bottombox">
        <h2  @click="yes" class="confirm">确认</h2>
        <span>|</span>
        <h2 @click="closebut()" class="delete">取消</h2>
      </div>
    </div>
    <div class="totalLeft" :style="'height:'+curheight+';'">
      <div class="name">
        <h1 class="gonggongH1" style="cursor: pointer" title="这是一个小傻春">欢迎：{{username}}</h1>
      </div>
      <ul class="funList">
        <li class="doorUser gonggongH1">{{topMenu}}</li>
        <router-link class="gogos" v-if="leftmenu" :to="k.path" v-for="k of leftmenu" :key="k.name" tag="li">
          <i class="iconfont icon-buju_biaoti gonggongH2"></i>
          <h2 class="gonggongH2" > {{k.title}}</h2>
        </router-link>

      </ul>
      <transition name="xxxclo">
      <div  class="mesBoxD" v-if="xclo">
        <p class="mesBoxP"><span >新到达消息提示</span> <span @click="xclo=!xclo" style="font-size: 18px">×</span></p>
        <p class="mesBoxP1"><span >新到达流程</span><span  style="color:red">1</span></p>
        <p class="mesBoxP1"><span >密码变更提示</span><span style="color:red">1</span></p>
        <div class="mesBoxDiv"></div>
      </div>
      </transition>
      <div class="mesBox">
        <i class="iconfont icon-laba" @click="xclo=!xclo"></i>
        <i class="iconfont icon-pifuguanli" @click="showst"></i>
      </div>
    </div>
    <div class="totalRight">
      <router-view></router-view>
    </div>
    <hf-cc v-show="shows" @shas="shazi" @suning5="suning3" :shows="shows"></hf-cc>
  </div>
</template>

<script>
import OaCoop from "./OaCoop"
import HfCc from '../components/hf/HfCc'
import homePage from './homepage'
export default {
  name: 'totalIndex',
  components: {OaCoop, HfCc,homePage},
  data () {
    return {
      hidebox: false,
      closehide: false,
      shows: false,
      cs: false,
      ul: null,
      username:this.$root.store.username,
      many: ['我的日程', '所有日程', '工作交流', '周期日程', '日程共享', '查询日程'],
      color: null,
      fnc: false,
      any: ['微搜', '热搜', '人民', '流程', '文档', '客户', '协作', '邮件', '项目', '资产'],
      color1:null,
      fnc1: false,
      color2:null,
      curheight:window.innerHeight-50+"px",
      xclo:false,
      leftmenu: [
      {
        title: '门户首页',
        path: '/homePage'
      },
      {
        title: '系统日志',
        path: '/log'
      },
      {
        title: '权限管理',
        path: '/manage'
      }
    ],
      topMenu:'门户'
    }
  },
  mounted(){
     // window.onresize=function windowResize(){
     //   this.curheight=(window.innerHeight-100)+"px";
     // }
  //  let leftHeight=document.getElementsByClassName("totalLeft").style.height
    this.curheight=window.innerWeight || document.documentElement.clientHeight || document.body.clientHeight
    addEventListener('resize',function(){
      this.curheight=window.innerWeight || document.documentElement.clientHeight || document.body.clientHeight
    })
  },
  methods: {
    // clo(){
    //   this.xclo=!this.xclo
    // },
    // showleft(){
    //   this.xclo=!this.xclo
    // },
    showsou: function () {
      this.fnc1 = !this.fnc1
      if (this.fnc1 == false ) {
        // console.log(1)
        // console.log (document.querySelector('.cssd'))
        document.querySelector('.cssd').remove()
        document.querySelector('.goh1').style.backgroundColor = this.color1
        document.querySelector('.goh1').style.color = this.color2
        return
      }
      this.color1 = document.querySelector('.goh1').style.backgroundColor
      this.color2 = document.querySelector('.goh1').style.color
      document.querySelector('.goh1').style.backgroundColor = 'white'
      document.querySelector('.goh1').style.color = 'black'
      let ulDom = document.createElement('ul')
      ulDom.className = 'cssd'
      ulDom.style.cssText = 'font-size:12px; padding-left:0; position : absolute; left:0; top:34px; width:60px; list-style:none;background-color:white; color:black'
      for (let i = 0; i<this.any.length; i++) {
        let liDom = document.createElement('li')
        liDom.className = 'dongli2'
        liDom.innerHTML = this.any[i]
        ulDom.appendChild(liDom)
      }
      document.querySelector('.goh1').appendChild(ulDom)
    },
    append: function () {
      this.cs = !this.cs
      if (this.cs == false) {
        document.querySelector('.css').remove()
        document.querySelector('.normal').style.backgroundColor = this.color
        return
      }
      this.color = document.querySelector('.normal').style.backgroundColor
      document.querySelector('.normal').style.backgroundColor = 'black'
      let ulDom = document.createElement('ul')
      ulDom.className = 'css'
      ulDom.style.cssText = 'font-size:12px; padding-left:0; position : absolute; left:0; top:34px; width:120px; list-style:none;background-color:black; color:white'
      for (let i=0; i<this.many.length; i++) {
        let liDom = document.createElement('li')
        liDom.className = 'dongli'
        liDom.innerHTML = this.many[i]
        ulDom.appendChild(liDom)
      }
      document.querySelector('.normal').appendChild(ulDom)
    },
    shazi: function (gozi) {
      this.shows = gozi
    },
    s: function (str) {
      return document.querySelector(str)
    },
    y: function (stb) {
      return document.querySelectorAll(stb)
    },
    suning3: function (susu1) {
      // console.log(susu1)
      if (susu1 == 0) {
        // console.log(9)
        this.s('.totalHeader').style.backgroundColor = '#0070c1'
        this.s('.ecology').style.backgroundColor = '#008df6'
        this.s('.name').style.backgroundColor = '#003667'
        this.s('.hideBox').style.backgroundColor = '#2a2e34'
        this.s('.funList').style.backgroundColor = '#2a2e34'
        this.s('.mesBox').style.backgroundColor = '#383f48'
        this.s('.fenlei').style.backgroundColor = '#0683e5'
        this.s('.normal').style.backgroundColor = '#0683e5'
        this.s('.search').style.backgroundColor = '#0782e4'
        for (let i = 0; i < this.y('.gonggongH2').length; i++) {
          this.y('.gonggongH2')[i].style.color = '#c4c4bb'
        }
        for (let i = 0; i < this.y('.gonggongH1').length; i++) {
          this.y('.gonggongH1')[i].style.color = 'white'
        }
        for (let i = 0; i < this.y('.gonggongl').length; i++) {
          this.y('.gonggongl')[i].style.color = '#a4cceb'
        }
      }
      if (susu1 == 1) {
        // console.log(9)
        this.s('.totalHeader').style.backgroundColor = '#d25151'
        this.s('.ecology').style.backgroundColor = '#ac2b2a'
        this.s('.name').style.backgroundColor = '#542f53'
        this.s('.hideBox').style.backgroundColor = '#482a49'
        this.s('.funList').style.backgroundColor = '#482a49'
        this.s('.mesBox').style.backgroundColor = '#6d556d'
        this.s('.fenlei').style.backgroundColor = '#d76363'
        this.s('.normal').style.backgroundColor = '#d76363'
        this.s('.search').style.backgroundColor = '#d76363'
        for (let i = 0; i < this.y('.gonggongH2').length; i++) {
          this.y('.gonggongH2')[i].style.color = '#c4c4bb'
        }
        for (let i = 0; i < this.y('.gonggongH1').length; i++) {
          this.y('.gonggongH1')[i].style.color = 'white'
        }
        for (let i = 0; i < this.y('.gonggongl').length; i++) {
          this.y('.gonggongl')[i].style.color = '#a4cceb'
        }
      }
      if (susu1 == 2) {
        // console.log(9)
        this.s('.totalHeader').style.backgroundColor = '#5c66d4'
        this.s('.ecology').style.backgroundColor = '#8790e8'
        this.s('.name').style.backgroundColor = '#5c64c2'
        this.s('.hideBox').style.backgroundColor = '#061c46'
        this.s('.funList').style.backgroundColor = '#061c46'
        this.s('.mesBox').style.backgroundColor = '#38496b'
        this.s('.fenlei').style.backgroundColor = '#4a52aa'
        this.s('.normal').style.backgroundColor = '#4a52aa'
        this.s('.search').style.backgroundColor = '#4a52aa'
        for (let i = 0; i < this.y('.gonggongH2').length; i++) {
          this.y('.gonggongH2')[i].style.color = '#c4c4bb'
        }
        for (let i = 0; i < this.y('.gonggongH1').length; i++) {
          this.y('.gonggongH1')[i].style.color = 'white'
        }
        for (let i = 0; i < this.y('.gonggongl').length; i++) {
          this.y('.gonggongl')[i].style.color = '#a4cceb'
        }
      }
      if (susu1 == 3) {
        // console.log(9)
        this.s('.totalHeader').style.backgroundColor = '#50833b'
        this.s('.ecology').style.backgroundColor = '#82b444'
        this.s('.name').style.backgroundColor = '#649044'
        this.s('.hideBox').style.backgroundColor = '#2c4230'
        this.s('.funList').style.backgroundColor = '#2c4230'
        this.s('.mesBox').style.backgroundColor = '#566859'
        this.s('.fenlei').style.backgroundColor = '#40692f'
        this.s('.normal').style.backgroundColor = '#40692f'
        this.s('.search').style.backgroundColor = '#40692f'
        for (let i = 0; i < this.y('.gonggongH2').length; i++) {
          this.y('.gonggongH2')[i].style.color = '#c4c4bb'
        }
        for (let i = 0; i < this.y('.gonggongH1').length; i++) {
          this.y('.gonggongH1')[i].style.color = 'white'
        }
        for (let i = 0; i < this.y('.gonggongl').length; i++) {
          this.y('.gonggongl')[i].style.color = '#a4cceb'
        }
      }
      if (susu1 == 4) {
        // console.log(9)
        this.s('.totalHeader').style.backgroundColor = '#874d19'
        this.s('.ecology').style.backgroundColor = '#d6c1a1'
        this.s('.name').style.backgroundColor = '#a57447'
        this.s('.hideBox').style.backgroundColor = '#3f1f0e'
        this.s('.funList').style.backgroundColor = '#3f1f0e'
        this.s('.mesBox').style.backgroundColor = '#654c3e'
        this.s('.fenlei').style.backgroundColor = '#6c3e14'
        this.s('.normal').style.backgroundColor = '#6c3e14'
        this.s('.search').style.backgroundColor = '#6c3e14'
        for (let i = 0; i < this.y('.gonggongH2').length; i++) {
          this.y('.gonggongH2')[i].style.color = '#c4c4bb'
        }
        for (let i = 0; i < this.y('.gonggongH1').length; i++) {
          this.y('.gonggongH1')[i].style.color = 'white'
        }
        for (let i = 0; i < this.y('.gonggongl').length; i++) {
          this.y('.gonggongl')[i].style.color = '#a4cceb'
        }

      }
      if (susu1 == 5) {
        // console.log(9)
        this.s('.totalHeader').style.backgroundColor = '#f46f43'
        this.s('.ecology').style.backgroundColor = '#fde189'
        this.s('.name').style.backgroundColor = '#fdaf60'
        this.s('.hideBox').style.backgroundColor = '#d65863'
        this.s('.funList').style.backgroundColor = '#d65863'
        this.s('.mesBox').style.backgroundColor = '#de7982'
        this.s('.fenlei').style.backgroundColor = '#c35936'
        this.s('.normal').style.backgroundColor = '#c35936'
        this.s('.search').style.backgroundColor = '#c35936'
        for (let i = 0; i < this.y('.gonggongH2').length; i++) {
          this.y('.gonggongH2')[i].style.color = '#ecedd9'
        }
        for (let i = 0; i < this.y('.gonggongH1').length; i++) {
          this.y('.gonggongH1')[i].style.color = '#677a79'
        }
        for (let i = 0; i < this.y('.gonggongl').length; i++) {
          this.y('.gonggongl')[i].style.color = '#a4cceb'
        }
      }
      if (susu1 == 6) {
        // console.log(9)
        this.s('.totalHeader').style.backgroundColor = '#94edf0'
        this.s('.ecology').style.backgroundColor = '#bbf8d2'
        this.s('.name').style.backgroundColor = '#9aeae4'
        this.s('.hideBox').style.backgroundColor = '#22c9b2'
        this.s('.funList').style.backgroundColor = '#22c9b2'
        this.s('.mesBox').style.backgroundColor = '#4ed4c1'
        this.s('.fenlei').style.backgroundColor = '#85d5d8'
        this.s('.normal').style.backgroundColor = '#85d5d8'
        this.s('.search').style.backgroundColor = '#85d5d8'
        for (let i = 0; i < this.y('.gonggongH2').length; i++) {
          this.y('.gonggongH2')[i].style.color = '#463f65'
        }
        for (let i = 0; i < this.y('.gonggongH1').length; i++) {
          this.y('.gonggongH1')[i].style.color = '#463f65'
        }
        for (let i = 0; i < this.y('.gonggongl').length; i++) {
          this.y('.gonggongl')[i].style.color = '#463f65'
        }
      }
      if (susu1 == 7) {
        // console.log(9)
        this.s('.totalHeader').style.backgroundColor = '#b24079'
        this.s('.ecology').style.backgroundColor = '#b59fc1'
        this.s('.name').style.backgroundColor = '#c15f8d'
        this.s('.hideBox').style.backgroundColor = '#635aa4'
        this.s('.funList').style.backgroundColor = '#635aa4'
        this.s('.mesBox').style.backgroundColor = '#827bb6'
        this.s('.fenlei').style.backgroundColor = '#ba5387'
        this.s('.normal').style.backgroundColor = '#ba5387'
        this.s('.search').style.backgroundColor = '#ba5387'
        for (let i = 0; i < this.y('.gonggongH2').length; i++) {
          this.y('.gonggongH2')[i].style.color = '#abbdcc'
        }
        for (let i = 0; i < this.y('.gonggongH1').length; i++) {
          this.y('.gonggongH1')[i].style.color = 'white'
        }
        for (let i = 0; i < this.y('.gonggongl').length; i++) {
          this.y('.gonggongl')[i].style.color = '#c0b0ca'
        }
      }
      if (susu1 == 8) {
        // console.log(9)
        this.s('.totalHeader').style.backgroundColor = '#83686c'
        this.s('.ecology').style.backgroundColor = '#83686c'
        this.s('.name').style.backgroundColor = '#696882'
        this.s('.hideBox').style.backgroundColor = '#615363'
        this.s('.funList').style.backgroundColor = '#615363'
        this.s('.mesBox').style.backgroundColor = '#817582'
        this.s('.fenlei').style.backgroundColor = '#90777b'
        this.s('.normal').style.backgroundColor = '#90777b'
        this.s('.search').style.backgroundColor = '#90777b'
        for (let i = 0; i < this.y('.gonggongH2').length; i++) {
          this.y('.gonggongH2')[i].style.color = '#abbdcc'
        }
        for (let i = 0; i < this.y('.gonggongH1').length; i++) {
          this.y('.gonggongH1')[i].style.color = 'white'
        }
        for (let i = 0; i < this.y('.gonggongl').length; i++) {
          this.y('.gonggongl')[i].style.color = '#c0b0ca'
        }
      }
      if (susu1 == 9) {
        // console.log(9)
        this.s('.totalHeader').style.backgroundColor = '#657081'
        this.s('.ecology').style.backgroundColor = '#85bfd6'
        this.s('.name').style.backgroundColor = '#627998'
        this.s('.hideBox').style.backgroundColor = '#3f526d'
        this.s('.funList').style.backgroundColor = '#3f526d'
        this.s('.mesBox').style.backgroundColor = '#65758a'
        this.s('.fenlei').style.backgroundColor = '#757f8e'
        this.s('.normal').style.backgroundColor = '#757f8e'
        this.s('.search').style.backgroundColor = '#757f8e'
        for (let i = 0; i < this.y('.gonggongH2').length; i++) {
          this.y('.gonggongH2')[i].style.color = '#abbdcc'
        }
        for (let i = 0; i < this.y('.gonggongH1').length; i++) {
          this.y('.gonggongH1')[i].style.color = 'white'
        }
        for (let i = 0; i < this.y('.gonggongl').length; i++) {
          this.y('.gonggongl')[i].style.color = '#c0b0ca'
        }
      }
      if (susu1 == 10) {
        // console.log(9)
        this.s('.totalHeader').style.backgroundColor = '#40555b'
        this.s('.ecology').style.backgroundColor = '#fd9273'
        this.s('.name').style.backgroundColor = '#2ac5c0'
        this.s('.hideBox').style.backgroundColor = '#627f7e'
        this.s('.funList').style.backgroundColor = '#627f7e'
        this.s('.mesBox').style.backgroundColor = '#819998'
        this.s('.fenlei').style.backgroundColor = '#53666c'
        this.s('.normal').style.backgroundColor = '#53666c'
        this.s('.search').style.backgroundColor = '#53666c'
        for (let i = 0; i < this.y('.gonggongH2').length; i++) {
          this.y('.gonggongH2')[i].style.color = '#abbdcc'
        }
        for (let i = 0; i < this.y('.gonggongH1').length; i++) {
          this.y('.gonggongH1')[i].style.color = 'white'
        }
        for (let i = 0; i < this.y('.gonggongl').length; i++) {
          this.y('.gonggongl')[i].style.color = '#c0b0ca'
        }
      }
    },
    showst () {
      this.shows = !this.shows
    },
    hide () {
      this.hidebox = !this.hidebox
    },
    close () {
      this.closehide = !this.closehide
    },
    closebut () {
      this.closehide = !this.closehide
    },
    yes(){
      this.$root.store.clearStatus()
      this.$router.push('/');
    },
    changelist(event){
      let e=event
      let clicked=e.target.title,
      data=this.$root.store.MenuList
      // this.$root.store.addLog(`用户访问：${clicked}`)
      for(let k of data){
        if(k.name==clicked){
          this.topMenu=clicked
          this.leftmenu=k.list
        }
      }
    }
  }
}
</script>
<style scoped>
@import "../../static/css/totalIndex.css";
@import "../../static/font/iconfont.css";
  .xxxclo-enter-active, .xxxclo-leave-active{
    transition:top .5s;
  }
.xxxclo-enter, .xxxclo-leave-to{
  top: 100%;
}
</style>
