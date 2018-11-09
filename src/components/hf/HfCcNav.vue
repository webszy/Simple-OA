<template>
  <nav  class="hfNav">
    <img class="hfNavI" src="../../../static/img/hf1.png">
    <div class="hfNavD">
      <p class="hfNavP">主题中心</p>
      <span class="hfNavS" @click="go1" @mouseover="to1" @mouseleave="op1" style="color:black">主题</span>丨<span class="hfNavA" @click="go2" @mouseleave="op2" @mouseover="to2">颜色</span>
    </div>
    <img class="hfNavI1" src="../../../static/img/hf2.png">
  </nav>
</template>

<script>
export default {
  name: 'sdsds',
  data () {
    return {
      say: false,
      sey: true
    }
  },
  methods: {
    go1: function () {
      if (this.say === false) {
        this.say = !this.say
        this.sey = !this.sey
        this.$emit('gosay', this.say)
        this.$emit('gosey', this.sey)
      }
      document.querySelector('.hfNavS').style.color = '#5bc1fb'
      document.querySelector('.hfNavA').style.color = 'black'
      document.querySelector('.hfNavI1').style.left = 81 + 'px'
    },
    go2: function () {
      if (this.sey === false) {
        this.say = !this.say
        this.sey = !this.sey
        this.$emit('goes', this.say)
        this.$emit('goess', this.sey)
      }
      document.querySelector('.hfNavA').style.color = '#5bc1fb'
      document.querySelector('.hfNavS').style.color = 'black'
      document.querySelector('.hfNavI1').style.left = 120 + 'px'
    },
    to1: function () {
      document.querySelector('.hfNavS').style.color = '#5bc1fb'
    },
    to2: function () {
      document.querySelector('.hfNavA').style.color = '#5bc1fb'
    },
    op1: function () {
      console.log(document.querySelector('.hfNavA').style.color)
      if (document.querySelector('.hfNavA').style.color !== 'black') {
        console.log(document.querySelector('.hfNavA').style.color)
        document.querySelector('.hfNavS').style.color = 'black'
      }
    },
    op2: function () {
      console.log(document.querySelector('.hfNavS').style.color)
      if (document.querySelector('.hfNavS').style.color !== 'black') {
        document.querySelector('.hfNavA').style.color = 'black'
      }
    }
  }
}

</script>

<style scoped>

</style>
