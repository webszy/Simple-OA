<template>
  <div class="lead" v-show="idx" >
    <div class="lead_list">
      <h3 class="lead_into">导入到我的目录</h3>
      <i class="iconfont icon-tuichu"></i>
    </div>
    <div class="konw_top">
      <div class="konw_img">
        <img class="konwledgimgs" src="../../../../static/img/konwledg.png">
        <h3 class="kone_file">我的目录</h3>
      </div>
      <div class="konw_icon">
        <span class="opation" >导入到我的目录</span>
        <i class="iconfont icon-list"></i>
      </div>
    </div>
    <div class="lead_section">
      <div class="lead_display">
        <i class="iconfont icon-blocks"></i>
        <h3 class="lead_doc">导入文档</h3>
      </div>
      <i class="iconfont icon-cc-arrow-circle-up"></i>
    </div>
    <div class="submit_lead">
      <h3 class="submit_leads">我的目录：</h3><input class="import" type="text" >
    </div>
    <div class="konw_close" @click="close_lead">关闭</div>
  </div>
</template>
<script>
    export default {
      name: "LeadKonwledgeClick",
      props:["idx"],
      methods:{
        close_lead:function(){
          this.idx=false;
        },
      },
      updated(){
          console.log(this.idx)
      }
    }
</script>

<style scoped>
  .lead{
    width:620px;
    height:330px;
    position: absolute;
    top:200px;
    left:350px;
    background: #d7d7d7;
    border:1px solid #f8f8f8;
  }
  .lead_list{
    width:100%;
    height:30px;
    display: flex;
    background:#4f81bd;
    justify-content: space-between;
    align-items: center;
  }
  .lead_into{
    color: white;
    font-size: 12px;
    padding-left:10px;
  }
  .icon-tuichu{
    padding-right:10px;
    color:white;
    font-size: 14px;
    font-weight: bold;
  }
  .konw_top{
    width:100%;
    height:60px;
    display: flex;
    justify-content: space-between;
    border:1px solid #dadada;
  }
  .konw_img{
    display: flex;
  }
  .konwledgimgs{
    width:39px;
    height:39px;
    margin-left:10px;
    margin-right:10px;
    margin-top:10px;
  }
  .kone_file{
    color:#000000;
    font-size: 14px;
    padding-top:10px;
  }
  .konw_icon{
    display: flex;
  }
  .opation{
    width:100px;
    height:24px;
    background:#30b5ff;
    text-align: center;
    line-height:24px;
    color:white;
    font-size: 12px;
    margin-top:25px;

    border:1px solid #b7e0fe;
  }
  .icon-list {
    font-size: 16px;
    margin-left: 10px;
    margin-top: 30px;
    margin-right: 10px;
  }
  .lead_section{
    width:100%;
    height:35px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom:1px solid #e6e6e6;
  }
  .lead_display{
    padding-left:15px;
    display: flex;
    align-items: center;
  }
  .lead_doc{
    color:#5b5b5b;
    font-size: 12px;
  }
  .icon-cc-arrow-circle-up{
    padding-right:15px;
  }
  .submit_lead{
    width:100%;
    height:35px;
    display: flex;

    align-items: center;
    border-bottom:1px solid #dadada;
  }
  .submit_leads{
    color:#666666;
    font-size: 12px;
    padding-left:15px;
  }
  .icon-blocks{
    color:#666666;
    font-size: 14px;
    margin-right:10px;
    margin-top:3px;
  }
  .import{
    width:350px;
    margin-left:20px;
    height:24px;border:1px solid #bababa;

  }
  .konw_close{
    color:#30b5ff;
    font-size: 12px;
    padding-bottom:10px;
    text-align: center;
    padding-top:20px;
  }
</style>
