<template>
  <div id="GehAppTalk">
    <oa-talk-top></oa-talk-top>
    <oa-talk-bottom></oa-talk-bottom>
  </div>
</template>

<script>
  import OaTalkTop from '../components/GehToTalk/OaTalkTop'
  import OaTalkBottom from '../components/GehToTalk/OaTalkBottom'
  export default {
    name: "OaTalk",
    components:{
      OaTalkTop,
      OaTalkBottom
    },
    data() {
      return {
        msgsTo:''
      }
    },
    methods: {

    },
    watch: {
      msgsTo(n,o) {
        console.log('msgsTo,n,o',n+o)
      }
    },
    updated() {

    }
  }
</script>

<style scoped>
  @import "../../static/css/OaTalk.css";
</style>
