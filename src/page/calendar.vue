<template>
  <div style="postion:relative;">
    <calendar-header></calendar-header>
    <button @click="isShow=!isShow">新增日程</button>
    <button @click="isShow2=!isShow2">删除日程</button>
    <full-calendar :events="fcEvents" lang="zh"></full-calendar>
    <add-calendar v-if="isShow"   @close="isShow=false" @save="saveEvent"></add-calendar>
    <del-calendar v-if="isShow2"  @close="isShow2=true" @del="delEvent"></del-calendar>
  </div>
</template>

<script>
import moment from "moment"
import zhCn from "../../node_modules/moment/locale/zh-cn.js"
import addCalendar from '../components/rili/addcalendar'
import delCalendar from '../components/rili/delcalendar'
import calendarHeader from '../components/rili/calendarHeader'

import {riliSaveURL,allriliURL,delriliURL} from '../../static/js/api.js'
export default {
  name: 'calendar',
  components: {
    'full-calendar': require('vue-fullcalendar'),
    addCalendar	,delCalendar,calendarHeader
  },
  data () {
    return {
      fcEvents:[{
        sid:0,
          title : 'Sunny Out of Office',
          start : '2018-11-25',
          end : '2018-11-27'
      }],
      isShow:false,
      isShow2:false
    }
  },
  created () {
    this._getData()
  },
  mounted () {
    console.log("fcEvents",this.fcEvents)
  },
  methods: {
    saveEvent(d){
      if(!this.$root.store.checkAccess(this.$route.name,'write')){
           this.$router.push('/denied')
           return
         }
      this.isShow=false
      let q=this.$qs.stringify({
        title:d.title,
        startdae:d.start,
        enddae:d.end,
        username:this.$root.store.username
      })
      this.$http.post(riliSaveURL,q).then(res=>{
        if(res.data.code=='000'){
          this.fcEvents.push(d)
        }
      })
      
    },
    delEvent(d){
      // console.log(d)
      if(!this.$root.store.checkAccess(this.$route.name,'delete')){
           this.$router.push('/denied')
           return
         }
      for(let i in this.fcEvents){
        if(this.fcEvents[i].start==d){
          this.$http(delriliURL+'?sid='+this.fcEvents[i].sid).then(res=>{
            if(res.data.code=='000'){
            this.fcEvents.splice(i,1)
            }
          })
        }
      }

      this.isShow2=!this.isShow2
    },
    _getData:function(){
      this.$http(allriliURL).then(res=>{
        for(let v of res.data){
          let d={
            end:v.enddate,
            start:v.startdate,
            title:v.title,
            sid:v.sid
          }
          this.fcEvents.push(d)
        }
      })
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
button{
    position:absolute;
    border:none;
    background-color: white;
    border-radius: 5px;
    cursor: pointer;
    left:220px;
}
button:hover{
      background-color:#2d8cf0;
      color: white;
}
button:first-of-type{
  top:218px;
}
button:last-of-type{
  top:248px;
}
</style>
