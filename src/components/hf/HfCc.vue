<template>
  <div class="hfD">
    <hf-cc-header></hf-cc-header>
    <hf-cc-nav @gosey="goto2" @gosay="goto1" @goes="goto3" @goess="goto4"></hf-cc-nav>
    <hf-cc-section :sq="se" @sids="sids1"></hf-cc-section>
    <hf-cc-hj :sb="sa"></hf-cc-hj>
    <hf-cc-footer @flsh="flsh1" :shows="shows"></hf-cc-footer>
  </div>
</template>

<script>
import '../../../static/css/good.css'
import HfCcFooter from './HfCcFooter'
import HfCcHeader from './HfCcHeader'
import HfCcNav from './HfCcNav'
import HfCcSection from './HfCcSection'
import HfCcHj from './HfCcHj'
export default {
  props: ['shows'],
  data () {
    return {
      sa: false,
      se: true
    }
  },
  components: {HfCcHeader, HfCcNav, HfCcSection, HfCcFooter, HfCcHj},
  methods: {
    flsh1: function (dssa) {
      this.$emit('shas', dssa)
    },
    sids1: function (susu) {
      this.$emit('suning5', susu)
    },
    goto1: function (sy) {
      this.sa = sy
      console.log(this.sa)
    },
    goto2: function (sz) {
      this.se = sz
      console.log(this.se)
    },
    goto3: function (szz) {
      this.sa = szz
    },
    goto4: function (szzz) {
      this.se = szzz
    }
  }
}
</script>

<style scoped>
  .hfD{
    background-color: white;
  }
</style>
