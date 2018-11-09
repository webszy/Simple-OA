<template>
  <div class="page-bar" >

    <ul style="overflow: hidden;margin-left: 600px;">
      <li v-if="showFirst">
        <a v-on:click="cur--" style="color: #5b5b5b"><</a>
      </li>
      <li v-for="index in indexs"  v-bind:class="{ 'active': cur == index}" :key="index">
        <a v-on:click="btnClick(index)">{{ index }}</a>
      </li>
      <li v-if="showLast"><a v-on:click="cur++" style="color: #5b5b5b">></a></li>
      <li style="color:#fff;background: #3ac0ff"><a style="color:#fff;">共<i style="color:#fff;">{{all}}</i>页</a></li>
    </ul>

  </div>
</template>

<script>
  import { PaginationControl, PaginationPage } from 'vue-smart-pagination'
  export default {
    name: 'App',
    props:["t"],
    data(){
        return{
          all:0, //总页数
          cur: 1,
          page:''
        }
    },
    created(){
      this.all=Math.ceil(this.t/2);
      // console.log('all',this.all,this.t);
    },
    computed: {
      indexs: function(){
        var left = 1;
        var right = this.all;
        var ar = [];
        if(this.all>= 5){
          if(this.cur > 3 && this.cur < this.all-2){
            left = this.cur - 2
            right = this.cur + 2
          }else{
            if(this.cur<=3){
              left = 1
              right = 5
            }else{
              right = this.all
              left = this.all -4
            }
          }
        }
        while (left <= right){
          ar.push(left)
          left ++
        }
        return ar
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
        this.$http(`http://140.143.100.57:3008/flow/page?pagenum=${items}&num=10`).then((res) => {
          // console.log(res);
          this.page=res;
          if(items!=this.cur){
            this.cur = items
          }
          this.$emit("groyf",this.page);
        });

      }
    }
  };
</script>
<style scoped>
  .page-bar{
    margin-top:20px;
    margin-right: 200px;
  }
  ul,li{
    margin: 0px;
    padding: 0px;
  }
  li{
    list-style: none;
    float:left;
  }
  .page-bar li:first-child>a {
    margin-left: 0px
  }
  .page-bar a{
    border: 1px solid #ddd;
    text-decoration: none;
    position: relative;
    float: left;
    padding: 6px 12px;
    margin-left: -1px;
    line-height: 1.42857143;
    color: #337ab7;
    cursor: pointer
  }
  .page-bar a:hover{
    background-color: #eee;
  }
  .page-bar a.banclick{
    cursor:not-allowed;
  }
  .page-bar .active a{
    color: #fff;
    cursor: default;
    background-color: #5b5b5b;
    border-color: #337ab7;
    border: none;
  }
  .page-bar i{
    font-style:normal;
    color: #d44950;
    margin: 0px 4px;
    font-size: 12px;
  }
</style>
