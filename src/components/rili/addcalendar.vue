<template>
  <div class="f-tab">
    <p class="f-panel-a1">日程</p>
    <span class="f-panel-a3" @click="close">X</span>
    <p class="f-panel-a2">
      <img class="f-panel-img" src="../../../static/img/1.png"/>
      <span class="f-panel-spa">日程</span>
      <!-- <span class="f-panel-spb">收藏</span> -->
      <span class="f-panel-spb f-panel-spc" @click="save">保存</span>
    </p>
    <div class="f-tab-box">
      <span class="f-panel-spd">基本信息</span>
      <div class="f-panel-spd">
        <span class="f-panel-spe">日程类型</span>
        <select class="f-sel">
          <option value="">工作安排</option>
        </select>
      </div>

      <div class="f-panel-spd">
        <span class="f-panel-spe">标题</span>
        <input type="text" class="f-insa" v-model="title"/>
        <b class="f-bx">!</b>
      </div>

      <div class="f-panel-spd f-panel-sph">
        <span class="f-panel-spe">内容</span>
        <textarea class="f-tear" disabled></textarea>
      </div>

      <div class="f-panel-spd">
        <span class="f-panel-spe">接收人</span>
        <input type="text" class="f-insa1" v-model="cust"/>
        <img class="f-pic" src="../../../static/img/3.png"/>
      </div>
      <div class="f-panel-spd">
        <span class="f-panel-spe">紧急程度</span>
        <input class="f-radio" type="radio" name="aa"/>一般
        <input class="f-radio" type="radio" name="aa"/>重要
        <input class="f-radio" type="radio" name="aa"/>紧急
      </div>
      <div class="f-panel-spd">
        <span class="f-panel-spe">开始日期</span>
        <span class="f-insa">
        <row>
          <i-col span="12">
            <date-picker type="date"  :options="options3" placeholder="请选择开始日期" style="width: 200px" v-model="start"></date-picker>
          </i-col>    
      </row>    
      </span>
      </div>
      <div class="f-panel-spd">
        <span class="f-panel-spe">结束日期</span>
        <span class="f-insa">
          <row>
            <i-col span="12">
              <date-picker type="date" :options="options3" placeholder="请选择结束日期" style="width: 200px" v-model="end"></date-picker>
            </i-col>    
        </row>         
      </span>
      </div>
    </div>
   <Modal
        title="请输入"
        v-model="modal"
        >
        <p>请输入标题</p>
    </Modal>
  </div>

</template>

<script>
  // import dates from './dates'
  import '../../../static/css/dateTime.css'
export default {
    name: 'addcalendar',
    props: [''],
    data(){
      return{
        mg:true,
        cust:this.$root.store.states.username,
        title:'',
        start:'',
        end:'',
        modal:false,
        options3: {
          disabledDate (date) {
            return date && date.valueOf() < Date.now() - 8640000000;
          }
        }
      }
    },
    methods:{
      close(){
        this.$emit("close")
      },
      save(){
       
         let a=new Date(this.start)
         let b=new Date(this.end)
        let datas={
          // cust:this.$root.store.states.username,
          start:`${a.getFullYear()}-${a.getUTCMonth()+1}-${a.getDate()}`,
          end:`${b.getFullYear()}-${b.getUTCMonth()+1}-${b.getDate()}`,
          title:this.title,
        }
         if(this.title==''){
          this.modal=true
        }else{
        this.$emit("save",datas)

        }

      }
    },
    computed: {
    
    },
    created () {
      let a=new Date()
      this.start=`${a.getFullYear()}-${a.getUTCMonth()+1}-${a.getDate()}`
      this.end=`${a.getFullYear()}-${a.getUTCMonth()+1}-${a.getDate()}`
    }
    // watch: {
    //   start:function(newVal,oldVal){
    //     let a=new Date(newVal)
    //     this.start=`${a.getFullYear()}-${a.getUTCMonth()+1}-${a.getDate()}`
    //   },
    //   end:function(newVal,oldVal){
    //     let a=new Date(newVal)
    //     this.end=`${a.getFullYear()}-${a.getUTCMonth()+1}-${a.getDate()}`
    //   }

    // }
  }
</script>

<style scoped>

</style>
