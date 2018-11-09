<template>
  <div class="GehCenter">
    <oa-coop-center-left @getMs="myGet" @idxC="myId"></oa-coop-center-left>
    <oa-coop-center-right :getC="getS" :idx="idc"></oa-coop-center-right>
  </div>
</template>

<script>
import OaCoopCenterLeft from './OaCoopCenterLeft'
import OaCoopCenterRight from './OaCoopCenterRight'
export default {
  components: {
    OaCoopCenterLeft,
    OaCoopCenterRight
  },
  data() {
    return {
      getS: [],
      idc:0
    }
  },
  name: 'OaCoopCenter',
  methods: {
    myGet(s) {
      this.getS = s
      console.log('this.getMcenter',this.getS)
    },
    myId(c) {
      this.idc = c
    }
  },
  watch: {
    idc (curVal,oldVal) {
      console.log(curVal,oldVal)
    }
  },
  mounted() {
  }
}
</script>

<style scoped>
  @import '../../../static/css/gehoacoop.css';
</style>
