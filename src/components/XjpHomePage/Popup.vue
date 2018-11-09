<template>
  <el-button type="text"></el-button>
</template>

<script>
    export default {
      name:'Popup',
      mounted(){
          this.open();
      },
      methods: {
        open() {
          this.$confirm('验证失败，请重新输入', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
            center: true
          }).then(() => {
            this.$message({
              type: 'success',
              message: '请重新登录!'
            });
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '取消登录'
            });
          });
        }
      }
  }
</script>

<style >

</style>
