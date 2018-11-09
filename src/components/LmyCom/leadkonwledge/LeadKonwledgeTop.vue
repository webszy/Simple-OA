<template>
  <div class="konw_top">
    <div class="konw_img">
      <img class="konwledgimgs" src="../../../../static/img/konwledg.png">
      <div class="konw_all">
        <h3 class="kone_file">新建文件夹</h3>
        <a>回复  |</a> <a style="color:#30b5ff">非回复  |</a> <a>紧急 </a>
      </div>
      <div class="sanjiao"></div>
    </div>
    <div class="konw_icon">
      <span class="opation" @click="text">导入选中文...</span>
      <span class="all_opation" >导入所有文..</span>
      <div class="icon_imgs"><i class="iconfont icon-sousuo"></i></div>
      <i class="iconfont icon-list" @click="showCont"></i>
    </div>
    <div class="deit_konw" v-if="show">
      <a>编辑</a><a @click="removelist">删除</a><a>共享</a>
    </div>
    <div class="dele_konw" v-if="showlist">
      <h3 class="h3_dele">你真的要删除吗?</h3>
      <div class="regine_konw">
        <a class="affirm_konw" @click="affirm_konw" href="#" >确认</a>
        <a class="remove_konw" href="#">取消</a>
      </div>
    </div>
  </div>
</template>
<script>
    export default{
        name: "LeadKonwledgeTop",
      data(){
        return{
          show: false,
          idx:false,
          showlist:false,
          datas:''
        }
      },
      methods:{
        text(){
          this.idx = !this.idx;
          this.$emit("texts", this.idx);
        },
        showCont: function(){
          return this.show = !this.show;
        },
        removelist: function (){
          this.show = false;
          return this.showlist = !this.showlist;
        },
        affirm_konw: function (idex){
          this.showlist = false;
          let deletelist=this.$root.store.delfilelist;
          for(let idex of deletelist){
            this.$http(`http://140.143.100.57:3008/file/del?sid=${idex}`).then(res=>{
              //console.log(res.data);
              if(res.data.code==='000'){
                this.$emit('del',true);
                this.$root.store.delfilelist=[]
              }
            })
          }
        },
      }
    }
</script>
<style scoped>
  .deit_konw{
    width:150px;
    height:30px;
    position: absolute;
    top:60px;
    right:0px;
    background: #c9e9fc;
  }
  .dele_konw{
    width:300px;
    height:200px;
    position: absolute;
    top:350px;
    left:450px;
    z-index: 3;
    background: #e3dff7;
    border-radius: 10px;
  }
  .h3_dele{
    color:black;
    font-size: 16px;
    text-align: center;
    line-height:70px;
  }
  .regine_konw{
    display: flex;
    justify-content: space-around;
  }
  .affirm_konw{
    color:black;
    font-size: 12px;
    display: block;
    width:30px;
    height:25px;
    text-align: center;
    line-height: 25px;
    background:#999999;
    border-radius: 5px;
    margin-top:50px;
  }
  .remove_konw{
    color:black;
    font-size: 12px;
    border-radius: 5px;
    width:30px;
    height:25px;
    text-align: center;
    line-height:25px;
    background:#4f81bd;
    margin-top:50px;
  }
  .icon-list {
    font-size: 16px;
    color:#999999;
  }
  .sanjiao{
    width: 0;
    height: 0;
    border:7px solid transparent;
    border-bottom-color:#999999;
    opacity: .8;
    margin-top:45px;
    margin-left:-70px;
  }
  .konw_top{
    width:100%;
    height:60px;
    display: flex;
    position: relative;
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
  .konw_all{
    padding-top:10px;
  }
  .konw_all a{
    color:#666666;
    font-size: 12px;
    padding-right:5px;
  }
  .kone_file{
    color:#000000;
    font-size: 14px;
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
  .all_opation{
    width:100px;
    height:24px;
    text-align: center;
    line-height:24px;
    color:#30b5ff;
    margin-top:25px;
    margin-right:30px;
    font-size: 12px;
    border:1px solid #b7e0fe;
  }
  .icon_imgs{
    width:100px;
    height:25px;
    line-height:25px;
    margin-top:25px;
    margin-right:10px;
    border:1px solid #dadada;
  }
  .icon-list {
    font-size: 16px;
    margin-left: 10px;
    margin-top: 25px;
    margin-right: 10px;
  }

  .deit_konw a{
    color:#666666;
    font-size: 12px;
    height:30px;
    line-height:30px;
    padding:0 5px;
  }


</style>
