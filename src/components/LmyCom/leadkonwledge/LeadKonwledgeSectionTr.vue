<template>
  <tr height="35" align="center" :sid="pro.sid">
    <td width="35"><input class="cbs" type='checkbox' @click="removerout($event)" ></td>
    <td width="35" @click="newedit(pro.sid)"><i class="iconfont icon-wenjianjiazhankai"></i></td>
    <td  width="60"  @click="newedit(pro.sid)">{{pro.title}}</td>
    <td width="100"  @click="newedit(pro.sid)">杨永远</td>
    <td width="100"  @click="newedit(pro.sid)">{{pro.content}}</td>
    <td width="100"  @click="newedit(pro.sid)">{{pro.username}}</td>
    <td width="80"  @click="newedit(pro.sid)">{{pro.sid}}</td>
    <td width="65"  @click="newedit(pro.sid)">正常</td>
  </tr>
</template>
<script>
    export default {
      props:["pro"],
      data(){
        return{
          show:false,
          showlist:false,
          datas:''
        }
      },
      name: "LeadKonwledgeSectionTr",
      methods:{
        removerout:function(e){
          let sid=parseInt( e.path[2].getAttribute("sid"))
          delfilelist= this.$root.store.delfilelist
          if(!delfilelist.includes(sid)){
              this.$root.store.delfilelist.push(sid);
          }else{
            let i=delfilelist.indexOf(sid)
            this.$root.store.delfilelist.splice(i,1)
          }
         // console.log(this.$root.store.states.delfilelist)
        },
        newedit:function(indexs){
            this.$router.push({path:'/editor',query:{sid:indexs}})
        },
      },
    }
</script>
<style scoped>
  tr{
    border-top:1px solid #dadada;
  }
  .icon-wenjianjiazhankai {
    font-size: 14px;
    color: #f9ab4c;
  }
</style>
