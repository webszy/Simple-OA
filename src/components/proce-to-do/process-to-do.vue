<template xmlns="" xmlns="">
  <div class="prcess-boxs">
      <!--header-->
      <div class="process-to-do-header">
        <img src="../../../static/images/f-h-1.jpg" alt="">
        <div>
          <p>待办事项</p>
          <ul id="process-to-do-header-ul">
            <h6 class="process-to-do-header-class" style="color: #0d93f6">全部(46)</h6>
            <span class="GehMagicLine"></span>
            <img src="../../../static/images/f-h-3.jpg" alt="">
            <h6>未读</h6>
            <img src="../../../static/images/f-h-3.jpg" alt="">
            <h6>反馈</h6>
            <img src="../../../static/images/f-h-3.jpg" alt="">
            <h6>超时</h6>
            <img src="../../../static/images/f-h-3.jpg" alt="">
            <h6>被督办</h6>
          </ul>
        </div>
        <img src="../../../static/images/f-h-2.jpg" alt="" @click="ycbox" class="process-to-do-header-last" style="float: right">
        <img src="../../../static/images/f-h-s.jpg" alt="" class="process-to-do-header-s" style="margin-top: 70px;margin-right: 20px;">
        <h5>高级搜索</h5>
        <input type="text" />
        <div class="yincangbox" >
          <li>
            <img src="../../../static/images/yincanbox1.jpg" alt="">
            <p>搜索</p>
          </li>
          <li>
            <img src="../../../static/images/yincanbox2.jpg" alt="">
            <p>显示列定制</p>
          </li>
          <li>
            <img src="../../../static/images/yincanbox3.jpg" alt="">
            <p>收藏</p>
          </li>
          <li>
            <img src="../../../static/images/yincanbox4.jpg" alt="">
            <p>帮助</p>
          </li>
        </div>
      </div>
      <!--table-->
    <table id="tab" cellspacing="0" cellpadding="2" width="100%" style="position: relative">
      <thead class="process-to-do-thead">
        <tr align="left" bgcolor="#f8f8f8" class="process-to-do-thead-tr">
          <td style="width:280px;">请求标题</td>
          <td>创建人</td>
          <td>创建日期</td>
          <td>未操作者</td>
          <td colspan="2">紧急程度</td>
          <!--<td></td>-->
        </tr>
      </thead>
      <tbody class="process-to-do-tbody-tr">
        <tr bgcolor="#fff" class="rightgo"  v-for="(item,idx) of datas" :key="idx">
          <td class="process-to-do-tbody-tr-first" @click="go(item)">{{item.type}}-{{item.title}}</td>
          <td class="process-to-do-tbody-tr-next">{{item.title}}</td>
          <td>{{item.content.value1}}</td>
          <td><a href="javascript:;">显示</a></td>
          <td>正常</td>
          <td align="right" class="process-to-do-tbody-tr-right">
            <img src="../../../static/images/f-h-right.jpg" alt="" style="margin:5px 20px 0 0;">
            <h3>
              <h6 @click="goes(item.sid)" style="color: #888686;">删除</h6>
              <!--<p style="color: #888686;">转发</p>-->
            </h3>
          </td>
        </tr>
      <tr></tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props:["datas","tiec"],
  data(){
    return{
      dame:false
    }
  },
  mounted(){
    this.tab();
    this.triangleMove()
  },
  methods:{
    was(){
      // console.log(this.tiec);
    },
      goes(itms){
       // console.log(itms)
        this.$http(`http://140.143.100.57:3008/flow/del?sid=${itms}`).then((res)=> {
          //console.log(res.data);
          if(res.data.code=='000'){
            this.$emit("c")
          }
        })
      },
    ycbox() {
      this.dame = !this.dame
      if (this.dame === true) {
        console.log(document.querySelector('.yincangbox'))
        document.querySelector('.yincangbox').style.display = 'block'
      }
      else{
        document.querySelector('.yincangbox').style.display = 'none'
      }
    },
    dayin(){
      window.print()
    },
    go(oid) {
      if (oid.type == "请假单") {
        this.$router.push({"path": "/qingjiadan","query": {"ord": oid.sid}})
      }else{
        this.$router.push({"path": "/baoxiaodan","query": {"ord": oid.sid}})
      }

    },
    tab(){
      var tTD; //用来存储当前更改宽度的Table Cell,避免快速移动鼠标的问题
      var table = document.getElementById("tab");
      //console.log(table.rows);
      for ( var j = 0; j < table.rows[0].cells.length; j++) {

        table.rows[0].cells[j].onmousedown = function () {
          //记录单元格
          tTD = this;
          if (event.offsetX > tTD.offsetWidth - 10) {
            tTD.mouseDown = true;
            tTD.oldX = event.x;
            tTD.oldWidth = tTD.offsetWidth;
          }
        };
        table.rows[0].cells[j].onmouseup = function () {
          //结束宽度调整
          if (tTD == undefined) tTD = this;
          tTD.mouseDown = false;
          tTD.style.cursor = 'default';
        };
        table.rows[0].cells[j].onmousemove = function () {
          //更改鼠标样式
          if (event.offsetX > this.offsetWidth - 10)
            this.style.cursor = 'col-resize';
          else
            this.style.cursor = 'default';
          //取出暂存的Table Cell
          if (tTD == undefined) tTD = this;
          //调整宽度
          if (tTD.mouseDown != null && tTD.mouseDown == true) {
            tTD.style.cursor = 'default';
            if (tTD.oldWidth + (event.x - tTD.oldX) > 0)
              tTD.width = tTD.oldWidth + (event.x - tTD.oldX);
            //调整列宽
            tTD.style.width = tTD.width;
            tTD.style.cursor = 'col-resize';
            //调整该列中的每个Cell
            table = tTD;
            while (table.tagName != 'TABLE') table = table.parentElement;
            for (j = 0; j < table.rows.length; j++) {
              table.rows[j].cells[tTD.cellIndex].width = tTD.width;
            }
          }
        };
      }
    },
    triangleMove: function () {
      //获取dom元素
      let bDom = document.querySelectorAll('#process-to-do-header-ul h6')
      let triangleDom = document.querySelectorAll('.GehMagicLine')
      let arrLeft = [10,65,112,160,210]
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
    }
    },
  created(){
    // console.log("todo",this.datas)
  }

  }
</script>
<style scoped>
  .yincangbox{
    position: absolute;
    right: 20px;
    top: 115px;
    z-index: 999999;
    border: 1px solid #a4a4a4;
    background: #f9f9f9;
    width: 146px;
    display: none;
  }
  .yincangbox li{
    display: flex;
  }
  .yincangbox li p{
    color: #333333;
    font-size: 11px;
  }
.prcess-boxs{
  width: 100%;
}
  .splitPageTwo{
    width: 100%;
    height: 50px;
    float: left;
  }
#process-to-do-header-ul{
  margin-top: 0px;
}
.process-to-do-header div ul img{
  margin: 5px 10px;
  height: 20px;
  width: 2px;
}
</style>
