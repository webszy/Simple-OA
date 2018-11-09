<template>
  <div class="konw_section">
    <konwledge-edit-cyclic :cyclic="product" :key=index v-for="(product,index) in list"></konwledge-edit-cyclic>
  </div>
</template>
<script>
    import KonwledgeEditCyclic from "./KonwledgeEditCyclic";
    export default {
      props:["list"],
      name: "KonwledgeEditSection",
      components: {KonwledgeEditCyclic}
    }
</script>
<style scoped>
  .konw_section{
    width:100%;
    display: flex;
    flex-wrap: wrap;
  }
</style>
