<!--suppress ALL -->
<template>
  <div class="GehCoopNew" v-show="isClick2">
    <span></span>
    <div class="GehCoopNewSon">
      <h4>新建协作<span @click="clickBox">×</span></h4>
      <el-form label-width="100px" class="demo-ruleForm">
        <el-form-item label="主题">
          <el-input v-model="title"></el-input>
        </el-form-item>
        <el-form-item label="负责人">
          <el-input v-model="username"></el-input>
        </el-form-item>
        <el-form-item label="详细说明">
          <el-input type="textarea" v-model="content"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="postMess">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isClick2: false,
        title: '',
        username: '',
        content: ''
      };
    },
    methods: {
      postMess() {
        if(this.title != '' && this.username != '' && this.content != '') {
          let p = this.$qs.stringify({
            title: this.title,
            username: this.username,
            content: this.content
          })
          console.log(p)
          this.$http.post('http://140.143.100.57:3008/team/save',p).then(res=>{
            console.log(res.data)
            this.$root.store.addLog('用户刚发了个帖子')
            this.title = ''
            this.username = ''
            this.content = ''
            this.isClick2 = this.isClick2
            this.$emit('checked', this.isClick2)
          })
        } else{
          alert('内容不能为空')
        }
      },
      clickBox() {
        this.isClick2 = this.isClick2
        this.$emit('checked', this.isClick2)
      }
    },
    watch:{
      isClick2(n,o){
        console.log(n+o)
      }
    }

  }
</script>

<style scoped>
  @import '../../../static/css/gehoacoop.css';
</style>
