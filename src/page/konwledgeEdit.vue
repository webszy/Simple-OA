<template>
  <div>
    <konwledge-edit-top></konwledge-edit-top>
    <konwledge-edit-nav></konwledge-edit-nav>
    <konwledge-edit-section :list="cyclics" ></konwledge-edit-section>
  </div>
</template>
<script>
    import KonwledgeEditTop from "../components/LmyCom/konwledge/KonwledgeEditTop";
    import KonwledgeEditNav from "../components/LmyCom/konwledge/KonwledgeEditNav";
    import KonwledgeEditSection from "../components/LmyCom/konwledge/KonwledgeEditSection";
    export default {
      data(){
        return{
          cyclics:[],
        }
      },
      created() {
        this._initlist();
      },
      methods:{
        _initlist(){
          fetch("http://localhost:8080/static/konwjson/cyclic.json").then((res)=>{
            res.json().then((data)=>{
             // console.log(data);
              this.cyclics =data
            })
          })
        },
      },
        name: "konwledgeEdit",
      components: {KonwledgeEditSection, KonwledgeEditNav, KonwledgeEditTop}
    }
</script>

<style scoped>

</style>
