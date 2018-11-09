<template>
  <div class="qiangjia" v-show="clo">
    <div class="but">
      <button @click="init()">提交</button>
      <button @click="printin()">打印</button>
    </div>
    <div ref="printed" id="printed">
      <div class="qingjiadan-header">
        <h4>请假单</h4>
      </div>
      <table border="1" cellspacing="0" cellpadding="0" class="tabs">
        <thead class="qingjiadan-thead">
          <tr>
            <td>姓名:<input type="text" v-model="title"></td>
            <td>部门:<input type="text" v-model="username"></td>
            <td>类型:<input type="text" v-model="typee" placeholder="请假"></td>
          </tr>
          <tr class="qingjiadan-thead-two" >
            <td colspan="3">
              <span style="margin-left: -350px;">请假内容：</span>
              <input type="text" style="float: left;" v-model="neirou">
            </td>
          </tr>
          <tr class="qingjiadan-thead-three">
            <td colspan="3" >
              请假时间：<br/>
              <div class="block" style="margin-left: 120px;float: left;">
                <el-date-picker
                  v-model="sta"
                  type="date"
                  placeholder="选择日期">
                </el-date-picker>
              </div>
              <span style="margin-left: -250px;">至</span>
              <div class="block" style="margin-left: 98px;margin-top: -6px;float: left;">
                <el-date-picker
                  v-model="eng"
                  type="date"
                  placeholder="选择日期">
                </el-date-picker>
              </div>
            </td>
          </tr>
          <tr class="qingjiadan-thead-last">
        <td colspan="3">
          <li>
            <span >日期：</span>
            <div class="block">
              <el-date-picker
                v-model="values1"
                type="date"
                placeholder="选择日期" >
              </el-date-picker>
            </div>
          </li>
        </td>
      </tr>
      </thead>
    </table>
    </div>
  </div>
</template>

<script>
import '../../static/css/qingjiadan.css'
    export default {
        name: "qingjiadan",
        data(){
            return{
              pickerOptions1: {
                disabledDate(time) {
                  return time.getTime() > Date.now();
                },
                shortcuts: [{
                  text: '今天',
                  onClick(picker) {
                    picker.$emit('pick', new Date());
                  }
                }, {
                  text: '昨天',
                  onClick(picker) {
                    const date = new Date();
                    date.setTime(date.getTime() - 3600 * 1000 * 24);
                    picker.$emit('pick', date);
                  }
                }, {
                  text: '一周前',
                  onClick(picker) {
                    const date = new Date();
                    date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                    picker.$emit('pick', date);
                  }
                }]
              },
              title:'',
              username:'',
               day:'',
               day1:'',
              typee:'',
              values1:'',
              sta:'',
              eng:'',
              neirou:'',
              datas:[],
              clo:true,
            }
        },
      created(){
        this.qjdate()
      },
      methods:{
        handleChange(daterange) {
          this.dataValue = daterange;
        },
          //请求数据显示到页面
          qjdate() {
            let p = this.$route.query.ord;
            if(p==undefined){return}
            // console.log(p)
            this.$http(`http://140.143.100.57:3008/flow?sid=${this.$route.query.ord}`).then((res)=>{
              console.log(res.data);
              this.title=res.data[0].title;
              this.riqi=res.data[0].riqi;
              this.username=res.data[0].username;
              this.typee=res.data[0].type;
              this.values1=res.data[0].content.value1;
              this.eng=res.data[0].content.ends;
              this.sta=res.data[0].content.states;
              this.neirou=res.data[0].content.neirou;
              console.log('143',this.values1);
            })
          },
        //post上传数据到数据库
          init(){
            var abs=0
            for(let i=0; i<document.querySelectorAll("input").length; i++) {
              // console.log(document.querySelectorAll("input").length)
              if (document.querySelectorAll("input")[i].value!="") {
                  abs=1
              }
            }if(abs === 0){
              alert("请假内容不能为空")
              return
            }
            let d = this.$qs.stringify({
              title: this.title,
              username: this.username,
              type: '请假单',
              content:JSON.stringify({
                states:this.sta,
                ends:this.eng,
                value1:this.values1,
                neirou:this.neirou,
              })
            })
            console.log('d',d);
            this.$http.post("http://140.143.100.57:3008/flow/save",d).then((res)=>{
              this.datas = res.data
            });
            this.clo=!this.clo;
           this. $router.push("/process")
          },
        //连接打印
          print(){
            // console.log(this.$refs.printed)
            this.$print(this.$refs.printed)
          },
        printin(){
          let printData = document.getElementById("printed").innerHTML;
          window.document.body.innerHTML = printData;
          window.print()
        }
      },
      watch:{
        values1(n,o){
            let d=new Date(n)
          this.values1=`${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`
          }
      }
    }
</script>

<style scoped>
  .qiangjia{
    width: 100%;
  }
  .tabs{
    margin: 0 auto;
  }
  #printed{
    width: 100%;
  }
  .but{
    margin-left: 900px;
    margin-bottom: -50px;
    margin-top: 50px;

  }
  .but button{
    margin-right: 18px;
    border: none;
    line-height: 30px;
    width: 40px;
    color: #fff;
    background: #0d93f6;
  }
</style>
