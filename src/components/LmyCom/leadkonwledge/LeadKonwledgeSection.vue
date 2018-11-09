<template>
  <div>
  <table class="konw_table">
    <tr height="35" class="konw_one_tr">
      <th width="35"><input type="checkbox"></th>
      <th width="35">文档</th>
      <th width="70">文件名称</th>
      <th width="70">所有者</th>
      <th width="130">内容</th>
      <th width="70">创建日期</th>
      <th width="80">ID</th>
      <th width="65">状态</th>
    </tr>
    <lead-konwledge-section-tr :key="index" v-for="(pro, index) of datas" :pro="pro" ></lead-konwledge-section-tr>
  </table>
  <div class="leadpage">
    <lead-page @gry="aaa"></lead-page>
  </div>
  </div>
</template>
<script>
    import LeadKonwledgeSectionTr from "./LeadKonwledgeSectionTr";
    import LeadPage from "./LeadPage";
    export default{
      data(){
        return{
          datas:'',
        }
      },
      props:["isdel"],
      methods:{
         aaa:function(items){
          this.datas =items.data;
           //console.log(this.datas)
         },
        getPageData(){
          this.$http('http://140.143.100.57:3008/file/page?pagenum=1&num=10').then((res) => {
            //console.log(res);
            this.datas = res.data;
          })
        },
        clearCheckBox(){
           let cbs=document.querySelectorAll(".konw_table .cbs");
            //console.log(cbs)
            for(let k of cbs){
              k.checked=false
            }
        }
      },
      name: "LeadKonwledgeSection",
      components: {LeadPage, LeadKonwledgeSectionTr},
      created(){
          this.getPageData()
        },
      watch:{
        isdel:function (n,o){
          if(n){
            this.getPageData();
            this.clearCheckBox()
          }
        }
      }
    }
</script>
<style scoped>
  .leadpage{
    width:500px;
    height:50px;
    margin-top:50px;
    margin-left:400px;

  }
  .konw_table{
    width:100%;
    color:#000000;
    font-size: 12px;
    border-top:1px solid #30b5ff;
  }
  .konw_one_tr{
    background:#f8f8f8;

  }
  tr{
    border-top:1px solid #30b5ff;
  }
</style>
