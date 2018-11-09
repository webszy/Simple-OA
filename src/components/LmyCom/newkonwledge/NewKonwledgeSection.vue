<template>
  <div>
  <div class="nav_top">
    <i class="iconfont icon-buju_biaoti"></i>
    <h3 class="nwe_font">销售人员岗位门户</h3>
  </div>
  <div class="konw_section">
    <router-link to="editor" tag="div">
    <div class="konw_list" >
      <i class="iconfont icon-jiahao" ></i>
      <h3 class="konw_listedit" >新建文件夹</h3>
    </div>
    </router-link>
    <router-link to="lead" tag="div">
        <div class="konw_list">
          <i class="iconfont icon-wenjianjiazhankai1"></i>
          <h3 class="konw_font">学习</h3>
        </div>
    </router-link>
    <div class="konw_list">
      <i class="iconfont icon-wenjianjiazhankai1"></i>
      <h3 class="konw_font">资源</h3>
    </div>
    <div class="konw_list">
      <i class="iconfont icon-wenjianjiazhankai1"></i>
      <h3 class="konw_font">我的</h3>
    </div>
    <div class="konw_list">
      <i class="iconfont icon-wenjianjiazhankai1"></i>
      <h3 class="konw_font">项目</h3>
    </div>
    <div class="konw_list">
      <i class="iconfont icon-wenjianjiazhankai1"></i>
      <h3 class="konw_font">管理</h3>
    </div>
    <div class="konw_list">
      <i class="iconfont icon-wenjianjiazhankai1"></i>
      <h3 class="konw_font">人事</h3>
    </div>

  </div>
  </div>
</template>

<script>
    export default {
      methods:{
      },
        name: "NewKonwledgeSection",
            mounted(){
            },
    }
</script>

<style scoped>

  .konw_listedit{
    color:#7cb7ea;
    font-size: 25px;
    text-align: center;
    position: absolute;
    top:220px;
    left:255px;
    display: none;
  }
.konw_list:hover .konw_listedit{
  display: block;
}
.konw_list:hover .icon-jiahao{
  display: none;
}
  .nav_top{
    width:100%;
    height:30px;
    border:1px solid #dadada;
    line-height:30px;
    background:#f5f5f5;
    display: flex;
  }
  .icon-jiahao{
    color:#7cb7ea;
    font-size: 50px;
    text-align: center;
    margin-left:65px;
    height:120px;
    line-height:120px;
  }
  .icon-buju_biaoti{
    margin-left:10px;
    margin-right:10px;
    font-size: 12px;
  }
  .nwe_font{
    color:#333333;
    font-size: 12px;
  }
  .konw_section{
    width:100%;
    display: flex;
    flex-wrap: wrap;
  }
  .konw_list{
    width:180px;
    height:144px;
    margin-top:10px;
    margin-left:10px;
    border:1px solid #dadada;
  }
  .konw_font{
    color:#000000;
    font-size: 14px;
    text-align: center;
  }
  .konw_list .icon-wenjianjiazhankai1{
    color:#7cb7ea;
    font-size: 50px;
    text-align: center;
    height:90px;
    line-height:90px;
    margin-left: 70px;
  }

</style>
