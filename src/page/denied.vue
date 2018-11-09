<template>
<div style="position:relative;">
  <img src="../../static/img/accessDenied.jpg" alt="访问拒绝">
  <h2>权限不足，请联系管理员</h2>
  <h4>Access Denied,Please Contact Administrator</h4>
</div>
</template>

<script>
export default {
  name: 'denied',
  components:{},
  data(){
    return {

    }
  },
  created() {
  },
  updated() {
  },
  methods: {
  
  }
}
</script>

<style  scoped>
div{
  height: 100%;
}
img{
  float: left;
  position: absolute;
  left: 23%;
  top: 38%;
  transform: translate(-50%,-50%);
}
h2,h4{
  position: absolute;
  left: 50%;
  top: 28%;
  transform: translate(-50%,-50%);
  font-size: 30px;
}
h4{
    left: 60%;
    top: 37%;
    font-size: 26px;
    width: 574px;
}
</style>
