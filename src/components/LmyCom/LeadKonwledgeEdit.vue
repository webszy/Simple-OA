<template>
  <div>
    <lead-konwledge-top @texts="go1" @del="del"></lead-konwledge-top>
    <lead-konwledge-section  :isdel="isDeleted" ></lead-konwledge-section>
    <lead-konwledge-click :idx="idm"></lead-konwledge-click>
  </div>
</template>
<script>
    import LeadKonwledgeTop from "../../components/LmyCom/leadkonwledge/LeadKonwledgeTop";
    import LeadKonwledgeSection from "../../components/LmyCom/leadkonwledge/LeadKonwledgeSection";
    import LeadKonwledgeSectionTr from "../../components/LmyCom/leadkonwledge/LeadKonwledgeSectionTr";
    import LeadKonwledgeClick from "../../components/LmyCom/leadkonwledge/LeadKonwledgeClick";
    export default {
      name: "LeadKonwledgeEdit",
      components: {
        LeadKonwledgeClick,
        LeadKonwledgeSectionTr,
        LeadKonwledgeSection,
        LeadKonwledgeTop
      },
      data(){
       return{
         idm:false,
         isDeleted:false
       }
     },
        methods:{
          go1(dat){
            this.idm = dat;
            console.log(dat)
          },
          del(s){
            this.isDeleted=s
          }
       }
    }
</script>

<style scoped>

</style>
