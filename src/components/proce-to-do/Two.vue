<template>
  <Page :total="t" :page-size="size" @on-change="onchange" />
</template>

<script>
    export default {
        name: "splitPage",
      props:["t","size"],
      methods:{
        onchange:function (i) {
          this.$emit("re",i)
        }
      }
    }
</script>

<style scoped>

</style>
