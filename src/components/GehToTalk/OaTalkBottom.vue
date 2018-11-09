<template>
    <div class="ToTalkBottom">
      <el-input placeholder="请输入内容" id="ElInput" v-model="input10" clearable>
      </el-input>
      <el-button id="ElButton" type="success">&nbsp;&nbsp;&nbsp;&nbsp;发送&nbsp;&nbsp;&nbsp;&nbsp;</el-button>
    </div>
</template>

<script>
  import '../../../static/css/OaTalk.css'
  export default {
    name: "OaTalkBottom",
    data() {
      return {
        input10: ''
      }
    },
    methods: {

    },
    watch: {
      input10(n,o) {
        console.log('n,o',n+o)
      }
    },
    mounted() {

    }
  }
</script>

<style scoped>

</style>
