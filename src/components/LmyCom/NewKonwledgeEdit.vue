<template>
  <div>
    <new-konwledge-top></new-konwledge-top>
    <new-konwledge-section></new-konwledge-section>
  </div>
</template>

<script>
    import NewKonwledgeTop from "./newkonwledge/NewKonwledgeTop";
    import NewKonwledgeSection from "./newkonwledge/NewKonwledgeSection";
    export default {
      name: "NewKonwledgeEdit",
      components: {NewKonwledgeSection, NewKonwledgeTop}
    }
</script>

<style scoped>

</style>
