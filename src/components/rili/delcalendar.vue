<template>
<div class="del">
    <DatePicker type="date" placeholder="选择删除的日期" style="width: 200px" v-model="choosed"></DatePicker>
    <Button type="primary" @click="deleteIt">确定删除</Button>
</div>
</template>

<script>
export default {
  name: 'delcalendar',
  data () {
    return {
      choosed:''
    }
  },
  methods:{
    deleteIt(){
      let a=new Date(this.choosed)
      let chooseddate=`${a.getFullYear()}-${a.getUTCMonth()+1}-${a.getDate()}`
      this.$emit("del",chooseddate)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.del{
  width: 290px;
  height: 50px;
  position: absolute;
  left: 302px;
    top: 150px;
  transition: 1s;
}
</style>
