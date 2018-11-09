<template>
  <div class="gehCoop">
    <oa-coop-header @dataP="coop"></oa-coop-header>
    <oa-coop-center></oa-coop-center>
  </div>
</template>

<script>
import OaCoopHeader from '../components/GehOaCoop/OaCoopHeader'
import OaCoopCenter from '../components/GehOaCoop/OaCoopCenter'
export default {
  components: {
    OaCoopHeader,
    OaCoopCenter
  },
  data() {
    return {

    }
  },
  methods:{

  },
  name: 'OaCoop'
}
</script>

<style scoped>
  @import '../../static/css/gehoacoop.css';
.gehCoop{
  height: 100%;
}
</style>
