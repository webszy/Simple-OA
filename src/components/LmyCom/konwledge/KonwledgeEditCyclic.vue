<template>
  <div class="konw_list" @click="cycliclist">
    <i class="iconfont icon-wenjianjiazhankai1"></i>
    <h3 class="konw_font">{{cyclic.title}}</h3>
  </div>
</template>

<script>
    export default {
      methods:{
          cycliclist(){
            this.$router.push('/news')
          }
      },
      props:["cyclic"],
        name: "KonwledgeEditCyclic"
    }
</script>

<style scoped>
  .konw_list{
    width:180px;
    height:144px;
    margin-top:10px;
    margin-left:10px;
    border:1px solid #dadada;
  }
  .konw_list:hover{
    border:1px solid #1e88e5;
  }
  .konw_list:hover  .icon-wenjianjiazhankai1{
    color:#1e88e5;
  }
  .konw_list .icon-wenjianjiazhankai1{
    color:#7cb7ea;
    font-size: 50px;
    text-align: center;
    height:90px;
    line-height:90px;
    margin-left: 70px;
  }
  .konw_font{
    color:#000000;
    font-size: 14px;
    text-align: center;
  }
</style>
