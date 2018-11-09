<template>
<div style="  position:relative;">
    <log-header></log-header>
    <Table stripe border no-data-text  :columns="columns1" :data="dataSource"></Table>
    <p style="height:10px;width:100%;"></p>
    <Page :total="totalnum" :page-size="pagesize"  @on-change="changeNum"/>
</div>
</template>

<script>
import logHeader from '../components/log/logHeader'
import {getlogPageURL,getlogNumURL} from '../../static/js/api.js'
export default {
  name: 'log',
  components:{logHeader},
  data(){
    return {
      dataSource:[],
      columns1:[
        {
          title:'日志ID',
          key:'sid'
        },
        {
          title:'操作员',
          key:'username'
        },
        {
          title:'操作时间',
          key:'time'
        },
        {
          title:'操作内容',
          key:'content'
        }
      ],
      pagesize:6,
      totalnum:0,
      pagenum: 1
    }
  },
  created() {
    this.getdata(this.pagenum,this.pagesize)
    this.getlogNum()
  },
  updated() {
    this.getlogNum()
  },
  methods: {
    getdata(pagenum,pagesize){
      this.$http(`${getlogPageURL}?pagenum=${pagenum}&num=${pagesize}`).then(res=>{
        // console.log(res.data)
        this.dataSource=[]
        for(let k of res.data){
          this.dataSource.push({
            sid:k.sid,
            username:k.username,
            time:k.time,
            content:k.content
          })
        }
        // this.data1=this.dataSource.slice(0,this.pagesize)
      })
    },
    getlogNum(){
       this.$http(getlogNumURL).then(res=>{
         this.totalnum=parseInt(res.data)
      })
    },
    changeNum(i){
      // let star=(i-1)*this.pagesize,
      // end=i*this.pagesize
      // this.data1=this.dataSource.slice(star,end)
      // console.log(this.data1)
      this.pagenum=i
      this.getdata(this.pagenum,this.pagesize)

    }
  }
}
</script>

<style scoped>
.ivu-page{
  text-align: center;
}
</style>
