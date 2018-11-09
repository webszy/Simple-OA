<template>
  <section class="hfSection" v-show="sq">
    <div class="hfSectionD">
      <img class="hfSectionI" :src="suv" >
    </div>
    <div class="hfSectionD1">
      <div class="hfColors first"  @click="getColor(event)" sid="0" style="background-color: #0070C1;"></div>
      <div class="hfColors" @click="getColor(event)" sid="1" style="background-color: #cc3432;"></div>
      <div class="hfColors"  @click="getColor(event)" sid="2" style="background-color: #5c64c2;"></div>
      <div class="hfColors" @click="getColor(event)" sid="3" style="background-color: #50833b;"></div>
      <div class="hfColors" @click="getColor(event)" sid="4" style="background-color: #874d19;"></div>
      <div class="hfColors" @click="getColor(event)" sid="5" style="background-color: #f46f43;"></div>
      <div class="hfColors"  @click="getColor(event)" sid="6" style="background-color: #22c9b2;"></div>
      <div class="hfColors"  @click="getColor(event)" sid="7" style="background-color: #b24079;"></div>
      <div class="hfColors"  @click="getColor(event)" sid="8" style="background-color: #83686c;"></div>
      <div class="hfColors"  @click="getColor(event)" sid="9" style="background-color: #666f81;"></div>
      <div class="hfColors last"  @click="getColor(event)" sid="10" style="background-color: #627f7e;"></div>
      <div>
        <div class="second"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'hfCcSection',
  props: ['sq'],
  data: function () {
    return {
      ord: 0,
      timers: null,
      i: 0,
      suv: null
    }
  },
  methods: {
    getColor: function () {
      if (this.timers != null) {
        return
      }
      this.i = event.target.getAttribute('sid')
      this.$emit('sids', this.i)
      this.suv = `../../../static/img/color${this.i}.png`
      console.log(this.suv)
      let sq = document.querySelectorAll('.hfColors')[this.i].style.backgroundColor
      console.log(sq)
      document.querySelectorAll('.second')[0].style.backgroundColor = sq
      let d = this.i - this.ord
      let left = this.ord * 50
      this.timers = setInterval(() => {
        let ant = (50 * d) / 50
        left = left + ant
        if (left === 50 * this.i) {
          clearInterval(this.timers)
          this.timers = null
          this.ord = this.i
        }
        if (left >= 550 || left <= 0) {
          clearInterval(this.timers)
        }
        document.querySelector('.second').style.left = 30 + left + 'px'
      }, 5)
    }
  },
  created () {
    this.suv = `../../../static/img/color0.png`
  },
  watch: {
    suv: function (newval, oldval) {
      if (newval === undefined || newval === '' || newval === null) {
        this.suv = oldval
      }
    }
  }
}
</script>
<style scoped>

</style>
