<template>
  <div class="pro-box" v-cloak>
    <process-to-do :datas="dat" @c="refersh" ></process-to-do>
    <fenye @groyf="gotob" :t="len" v-if="len"></fenye>
  </div>
</template>

<script>
import ProcessToDo from '../components/proce-to-do/process-to-do'
import fenye from '../components/proce-to-do/fenye'
import '../../static/css/process-to-do.css'
export default {
  name: 'process',
  components:{
    ProcessToDo,
    fenye
  },
  data(){
    return{
      dat:'',
      dataOragin:[],
      len:0,
      tiec:''
    }
  },
  created(){
  this.getdata()
    },
  methods:{
    getdata(){
      this.$http("http://140.143.100.57:3008/flow/all").then((res)=>{
        // console.log('res',res.data)
        this.dataOragin = res.data.reverse();
        this.len=res.data.length;
         // var ts=res.data
        // ts.forEach((val,idx)=>{
        //    console.log(val);
        //   this.tiec=val.title;
        //  })
        //  console.log("this.tiec",this.tiec);
        // console.log(res.data);
        //  console.log("len",this.len);
        //  console.log('this.dataOragin.slice(0,11)',this.dataOragin.slice(0,11))
        this.dat= this.dataOragin.slice(0,10);
      });

    },
    refersh(){
    this.getdata()
  },
    gotob:function(items){
      // this.gof = items.data;
      //console.log(items.data);
      this.dat=items.data
    }
  }

}
</script>

<style scoped>
.pro-box{
  width: 100%;
}
  [v-cloak]{
    display: none;

  }
</style>
