<template>
<div>
<div ref="printed">
  <h1>这是一个标题</h1>
  <p>这是一段内容</p>
</div>
<input type="button" value="打印上述内容" @click="printIt">
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      datas: ''
    }
  },
  methods: {
    printIt: function () {
      this.$print(this.$refs.printed)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
