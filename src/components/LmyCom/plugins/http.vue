<template>
<div>
<input type="button" value="get请求" @click="clicktoget">
<input type="button" value="post请求" @click="clicktopost">
<input type="button" value="delete请求" @click="clicktodelete">
<p>{{datas}}</p>
</div>
</template>

<script>
export default {
  name: 'MsgBox',
  data () {
      return {
      datas: ''
    }
  },
  methods: {
    clicktoget: function () {
      this.$http('http://140.143.100.57:3008/').then((res) => {
        console.log(res)
        this.datas = res.data
      })
    },
    clicktopost: function () {
      let d = this.$qs.stringify({
        p: 'test',
        q: 1
      })
      this.$http.post('http://140.143.100.57:3008/', d).then(res => {
        console.log(res)
        this.datas = res.data
      })
    },
    clicktodelete: function () {
      // 删除服务器上一个资源
      let d = this.$qs.stringify({
        p: 'test',
        q: 1
      });
      this.$http.delete('http://140.143.100.57:3008/', d).then(res => {
        console.log(res);
        this.datas = res.data
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
