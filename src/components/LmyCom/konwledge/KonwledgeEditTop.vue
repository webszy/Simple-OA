<template>
  <div class="konw_top">
    <div class="konw_img">
      <img class="konwledgimgs" src="../../../../static/img/konwledg.png">
      <h3 class="kone_file">新建文件夹</h3>
    </div>
    <div class="konw_icon">
      <div class="icon_imgs"><i class="iconfont icon-sousuo"></i>
      高级搜索
      </div>
      <i class="iconfont icon-list"></i>
    </div>
    <div class="deit_konw">
      <a>编辑</a><a>删除</a><a>共享</a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "KonwledgeEditTop"
    }
</script>

<style scoped>
  .icon-sousuo{
    margin-top:-4px;
  }
  .konw_top{
    width:100%;
    height:60px;
    position: relative;
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
  .icon_imgs{
    width:100px;
    height:25px;
    line-height:25px;
    margin-top:25px;
    margin-right:10px;
    color:#666666;
    font-size: 12px;
    border:1px solid #dadada;
  }
  .icon-list{
    font-size: 16px;
    margin-left:10px;
    margin-top:30px;
    margin-right:10px;

  }
  .deit_konw{
    width:150px;
    height:30px;
    position: absolute;
    top:60px;
    right:0px;
    display: none;
    background: #c9e9fc;
  }
  .deit_konw a{
    color:#666666;
    font-size: 12px;
    height:30px;
    line-height:30px;
    padding:0 5px;
  }
</style>
