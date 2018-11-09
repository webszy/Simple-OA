<template>
  <div class="page-bar" >
    <ul>
      <li v-if="showFirst">
        <a v-on:click="cur--">
          &lt;&lt;</a>
      </li>
      <li v-for="index in indexs" v-bind:class="{ 'active': cur ===index}" :key=index>
        <a v-on:click="btnClick(index)">{{index}}</a>
      </li>
      <li  v-if="showLast"><a v-on:click="cur++"> &gt;&gt;</a></li>
      <li style="width:60px"><a>共<i>{{all}}</i>页</a></li>
    </ul>
  </div>
</template>
<script>
    export default {
      data(){
        return {
          list: null,
          all:8, //总页数
          cur: 1, //当前页码
          num:10, //每页条数,默认10条
          datas: '',
          sm:''
        }
      },
      computed: {
        indexs: function (index) {
          var left = 1;
          var right = this.all;
          var ar = [];
          if (this.all >= 4) {
            if (this.cur > 5 && this.cur < this.all - 4) {
              left = this.cur - 5;
              right = this.cur + 4;
            } else {
              if (this.cur <= 5) {
                left = 1;
                right = 6;
              } else {
                right = this.all;
                left = this.all - 9;
              }
            }
          }
          while (left <= right) {
            ar.push(left);
            left++;
          }
          return ar;
        },
        showLast: function () {
          if(this.cur === this.all) {
            return false
          }
          return true
        },
        showFirst: function () {
          if(this.cur === 1) {
            return false
          }
          return true
        }
      },
       methods:{
         btnClick: function(items){
          this.$http(`http://140.143.100.57:3008/file/page?pagenum=${items}&num=10`).then((res) => {
             //console.log(res);
            this.datas= res;
            console.log(this.datas);
            this.$emit("gry",this.datas);
          });//页码点击事件
           if(items!==this.cur){
             this.cur = items
           }
         }
       },
    }
</script>
<style scoped>
  .page-bar {
    width:100%;
    margin-top: 40px;
    -webkit-box-sizing: border-box;
  }
  .page-bar ul li {
    list-style: none;
    border: 1px solid #ddd;
    text-decoration: none;
    position: relative;
    padding: 1px 0;
    float: left;
    margin-left: -1px;
    line-height: 20px;
    color: #337ab7;
    cursor: pointer;
    width: 20px;
    height:20px;
    padding-left:8px;
  }
  .page-bar ul li a{
    float: left;
  }
  .page-bar li:first-child>a {
    margin-left: 0px
  }

  .page-bar .active a {
    color: #333;
    cursor: default;
    /* background-color: #337ab7; */
    border-color: #337ab7;
  }

  .page-bar i {
    font-style: normal;
    color: #d44950;
    margin: 0px 4px;
    font-size: 12px;
  }
</style>
