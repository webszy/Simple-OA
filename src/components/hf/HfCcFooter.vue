<template>
  <div class="HfFooter">
    <p class="HfFooterP" @click="zhen">关闭</p>
  </div>
</template>

<script>
export default {
  name: 'sdsds',
  props: ['shows'],
  methods: {
    zhen () {
      this.shows = !this.shows
      this.$emit('flsh', this.shows)
    }
  }
}
</script>

<style scoped>

</style>
