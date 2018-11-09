<template>
  <div class="doorBox">
    <!--左边盒子-->
    <div class="doorLefts">
      <!--轮播图-->
      <div class="usebox">
        <div class="ols">
          <img class="on" src="../../static/img/bg1.png">
          <img src="../../static/img/bg2.png">
          <img src="../../static/img/bg3.png">
        </div>
        <ul class="uls">
          <li class="on">没有条件,创造条件</li>
          <li>为客户创造价值</li>
          <li>相信世界是公平的</li>
        </ul>
      </div>
      <!--流程中心-->
      <div class="news">
        <div class="newsCen">
          <img @click="isshow" src="../../static/img/workflow.png"/>
        </div>
        <div v-if="isnews" class="newsCon">
          <ul class="thing">
              <li  @click="aaa=1">待办</li>
              <li  @click="aaa=2">已办</li>
                <li>跟踪</li>
               <li>抄送</li>
                <li>督办</li>
                <li>已完成</li>
              <li>超时</li>
          </ul>
          <ul v-for="(ss,i) in tame" :key="i" class="process" v-show="aaa===1">
            <li>
              <h3>{{ss.title}}{{ss.username}}-2018-10-30</h3>
              <p>2018-10-30</p>
              <h2>{{ss.username}}</h2>
            </li>
          </ul>
          <ul class="process" v-show="aaa===2">
            <li>
              <h3>待办业务-杨文元-2018-10-30</h3>
              <p>2018-10-31</p>
              <h2>杨元</h2>
            </li>
            <li>
              <h3>待办业务-杨文元-2018-10-31</h3>
              <p>2018-10-31</p>
              <h2>杨元</h2>
            </li>
          </ul>
        </div>
      </div>
      <!--通知公告-->
      <div class="says">
      </div>
      <!--综合新闻-->
      <div class="instution">
          <img @click="isstile"  src="../../static/img/co_news.png"/>
         <div v-show="iscooper" class="newsBox">
            <ul class="congList">
              <li @click="num=0">公司新闻</li>
              <li @click="num=1">客户签约</li>
              <li >项目新闻</li>
              <li >人事新闻</li>
            </ul>
            <ul v-show="num===0" class="congrantlion">
              <li>
                <h2>热烈祝贺：维森集团签约秋与风文化传播公司</h2>
                <h3>2015-9-04</h3>
              </li>
              <li>
                <h2>热烈祝贺：维森集团签约秋与风文化传播公司</h2>
                <h3>2015-9-04</h3>
              </li>
            </ul>
            <ul v-show="num===1" class="congrantlion">
            <li>
              <h2>深圳千一网络发来感谢信</h2>
              <h3>2018-10-04</h3>
            </li>
            <li>
              <h2>热烈祝贺：维森集团签约秋与风文化传播公司</h2>
              <h3>2017-9-06</h3>
            </li>
        </ul>
        </div>
      </div>
      <!--未读协作-->
      <div class="unread">
        <img @click="israde" src="../../static/img/Cooperation.png"/>
        <ul v-show="iswrite" class="cooperation">
          <li v-for="(s,i) in dataList" :key="i">{{s.title}}2018-10-30</li>
        </ul>
        <div class="splitPage">
          <split-page @re="splitPage" :size="page.pagesize" :t="page.total"></split-page>
        </div>
      </div>
    </div>
    <!--右边盒子-->
    <div class="doorRight">
      <!--日历-->
      <div class="cale">
        <homeCalendar ></homeCalendar>
      </div>
      <h1 @click="addcalendar" class="add"><i class="iconfont icon-jiahao"></i></h1>
      <!--绩效考核-->
      <div class="system">
        <img src="../../static/img/Achievements.png"/>
        <div class="systemList">

        </div>
    </div>
  </div>
    <addCalendar v-if="addshow" @close="addhide"></addCalendar>
  </div>
</template>

<script>
  import addCalendar from "../components/XjpHomePage/addcalendar"
  import splitPage from "../components/XjpHomePage/splitPage"
    import homeCalendar from '../components/XjpHomePage/initCalendar.vue'
    export default {
      name:'homepage',
      components: {splitPage, homeCalendar,addCalendar},
        data(){
            return{
              isnews:false,
              iscooper:false,
              num:0,
              iswrite:false,
              aaa:1,
              dataList:[],
              datalistOrgain:[],
              page:{
                total:0,
                pagesize:3,
              },
              tame:[],
              addshow:false
            }
        },
        mounted(){
          homePage();
          this.isshow();
          this.isstile();
          this.israde();
          // this.splitPage()
          this.unteme();
         },
      created(){
        this.unread()
      },
         methods:{
           addcalendar(){
             if(!this.$root.store.checkAccess('calenDar','write')){
                this.$router.push('/denied')
                return
            }
             this.addshow=true;
           },
           addhide(){
             this.addshow=false;
           },
           isshow(){
             this.isnews=!this.isnews;
           },
           isstile(){
             this.iscooper=!this.iscooper;
           },
           israde(){
             this.iswrite=!this.iswrite;
           },
           unread(){
             this.$http('http://140.143.100.57:3008/team/all').then(res => {
               this.datalistOrgain= res.data.reverse();
                this.dataList=this.datalistOrgain.slice(0,this.page.pagesize)
               this.page.total=this.datalistOrgain.length
             })
           },
           splitPage(i){
               let star=(i-1)*this.page.pagesize,
                end=i*this.page.pagesize
               this.dataList=this.datalistOrgain.slice(star,end)
           },
           unteme(){
             this.$http('http://140.143.100.57:3008/flow/all').then(res => {
               var tameList=res.data.reverse();
               for(var i=0;i<5;i++){
                 this.tame.push(tameList[i])
               }
              //  console.log(this.tame);
             })
           }
         },
    }

    function homePage(){
       var Imgs=document.querySelectorAll(".ols img"),
          lis=document.querySelectorAll(".uls li"),
          banner=document.querySelector(".usebox"),
          //定时器设置
          timer=null,
          //控制图片下标
          index=0,
          //控制上一次图片下标
          lastindex=0;
        // console.log(Imgs,lis,banner);
        //鼠标进入图片停止
        banner.onmouseover=function(){
          window.clearInterval(timer);
        };
        //鼠标离开，图片继续切换
        banner.onmouseout=function(){
          auto();
        };
        auto();
        function auto(){

          timer=setInterval(function(){
            change(function(){
              index++;
              if(index>=Imgs.length){
                index=0;
              }
            })
          },3000);
        };

        //小圆点点击事件
        for(var i=0;i<lis.length;i++){
          //保存i的值,自定义对象
          lis[i].index=i;
          lis[i].onclick=function(){
            var This=this.index;
            change(function(){
              //只作用于一个函数，因为没有对象调用，所以指向window对象
              index=This;
            })
          }
        }
        //执行改变函数
        function change(callback) {
          //清除上一次的类名（样式）
          Imgs[lastindex].className = "";
          lis[lastindex].className = "";
          callback();
          Imgs[index].className = "on";
          lis[index].className = "on";
          //重新赋值，当前样式设置完变成上一个
          lastindex = index;
        }
    }
</script>

<style scoped>
@import "../../static/css/doorUser.css";
*{
  margin:0;
  padding:0;
}
ol,ul{
  list-style: none;
}
.usebox{
  width: 100%;
  height: 226px;
  position:relative;
  cursor: pointer;
}

.ols img{
  width: 100%;
  height: 226px;
  position: absolute;
  transition:3s;
  opacity: 0;
}
.ols img.on{
  opacity: 1;
}

.uls{
  width: 100%;
  height:50px;
  position: absolute;
  top:176px;
  left:0;
}
.uls li{
  width:33.3%;
  height:50px;
  float: left;
  color:white;
  background:#c3bbc7;;
  text-align: center;
  line-height:50px;
  font-size:24px;
  opacity:0.9;
}
.uls li.on{
  background-color:rgb(33, 61, 125);
}
  .newsBox{
    width: auto;
    height: auto;
    overflow: hidden;
  }
  .add{
    margin-left: 200px;
  }
  .splitPage{
    width: 100%;
    float: left;
    height: 50px;
    /*background-color: #4f81bd;*/
    margin-top: 20px;
  }
</style>
