<template>
  <div class="np-box">
    <!--header-->
    <div class="process-to-do-header">
      <img src="../../../static/images/f-h-1.jpg" alt="">
      <div>
        <p>新建流程</p>
        <ul id="process-to-do-header-ul">
          <h6 class="process-to-do-header-class">全部流程</h6>
          <span class="GehMagicLineS"></span>
          <img src="../../../static/images/f-h-3.jpg" alt="">
          <h6>我的收藏</h6>
          <img src="../../../static/images/f-h-3.jpg" alt="">
        </ul>
      </div>
      <img src="../../../static/images/f-h-2.jpg" alt="" class="process-to-do-header-last" style="float: right">
      <img src="../../../static/images/f-h-s.jpg" alt="" class="process-to-do-header-s">
      <!--<h5>高级搜索</h5>-->
      <input type="text" />
    </div>
    <!--box-->
    <div class="new-press-box">
      <ul class="new-press-box-one">
        <h3> 人事管理<span>(1)</span></h3>
        <img src="../../../static/images/f-h-np-bg1.jpg" alt="">
        <li>
          <img src="../../../static/images/f-h-np.jpg" alt="">
          <router-link to="/qingjiadan">
           <a href=""><h4>请假申请</h4></a>
          </router-link>
        </li>
      </ul>
      <ul class="new-press-box-two">
        <h3> 费用相关<span>(1)</span> </h3>
        <img src="../../../static/images/f-h-np-bg2.jpg" alt="">
        <li>
          <img src="../../../static/images/f-h-np.jpg" alt="">
          <router-link to="/baoxiaodan">
          <a href=""><h4>报销申请</h4></a>
            </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
.np-box{
  width: 100%;
}
.new-press-box{
  margin-top: 10px;
}
.new-press-box-one{
  float: left;
  margin-right: 40px;
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

