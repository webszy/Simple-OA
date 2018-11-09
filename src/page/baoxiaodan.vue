<template>
    <div class="baoxiao">
      <div class="buts" >
        <button @click="sinit()">提交</button>
        <button @click="prints()">打印</button>
      </div>
      <div id="baoxiaodanbox">
        <div class="biaoxiaodan-header">
          <h4>费用报销单</h4>
        </div>
        <div class="biaoxiaodan-time">
          <li>

            <div class="block" style="margin-left: 80px;margin-top: -10px;">
              <el-date-picker
                v-model="values1"
                type="date"
                placeholder="选择日期" >
              </el-date-picker>
              <span style="margin-left: -400px">报销日期：</span>
          </div>

          </li>
        </div>
        <table border="1" cellspacing="0" cellpadding="0" style="margin: 0 auto" class="biaoxiaodan-table">
          <thead>
          <tr>
            <td>费用项目</td>
            <td>类别</td>
            <td>金额</td>
            <td style="width: 180px;">负责人（盖章）</td>
            <td><input type="text" style="border: none"></td>
          </tr>
          <tr>
            <td><input type="text" style="border: none;text-align: center" v-model="feiyongone"></td>
            <td><input type="text" style="border: none;text-align: center" v-model="leibieone"></td>
            <td><input type="text" style="border: none;text-align: center" v-model="jineone"></td>
            <td rowspan="2" >审查意见</td>
            <td rowspan="2"><input type="text" style="border: none"></td>
          </tr>
          <tr>
            <td><input type="text" style="border: none;text-align: center" v-model="feiyongtwo"></td>
            <td><input type="text" style="border: none;text-align: center" v-model="leibietwo"></td>
            <td><input type="text" style="border: none;text-align: center" v-model="jinetwo"></td>
          </tr>
          <tr>
            <td><input type="text" style="border: none;text-align: center" ></td>
            <td><input type="text" style="border: none;text-align: center" ></td>
            <td><input type="text" style="border: none;text-align: center" ></td>
            <td rowspan="2">报销人（盖章）</td>
            <td rowspan="2"><input type="text" style="border: none"></td>
          </tr>
          <tr>
            <td><input type="text" style="border: none;text-align: center" ></td>
            <td><input type="text" style="border: none;text-align: center" ></td>
            <td><input type="text" style="border: none;text-align: center" ></td>
          </tr>
          <tr>
            <td>报销金额合计</td>
            <td colspan="5">￥<input type="text" style="border: none;margin-right: 400px;text-align: center" v-model="hejijine"></td>
          </tr>
          <tr class="biaoxiaodan-table-tr">
            <td colspan="6">核实金额(大写)<input type="text" style="margin-left: 126px;">仟<input type="text">佰<input type="text">拾<input type="text">元<input type="text">角<input type="text">分</td>
          </tr>
          <tr class="biaoxiaodan-table-last">
            <td colspan="6">借款数<input type="text">应退金额<input type="text">应补金额<input type="text"></td>
          </tr>
          </thead>
        </table>
        <div class="biaoxiaodan-footer">
        <li style="margin-left: 446px;display: flex;">
          <h2>申请人：</h2><input type="text" v-model="title">
          <h2>复核：</h2><input type="text" >
          <h2>出纳：</h2><input type="text">
        </li>
      </div>
      </div>
    </div>
</template>

<script>
import '../../static/css/baoxaiodan.css'
  export default {
    name: "baoxiao",
    data(){
      return{
        title:'',
        username:'',
        day:'',
        day1:'',
        typee:'',
        values1:'',
        sta:'',
        eng:'',
        feiyongone:'',
        feiyongtwo:'',
        leibieone:'',
        leibietwo:'',
        jineone:'',
        jinetwo:'',
        hejijine:'',
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
          // console.log(res.data);
          this.title=res.data[0].title;
          this.riqi=res.data[0].riqi;
          this.username=res.data[0].username;
          this.typee=res.data[0].type;
          this.values1=res.data[0].content.value1;
          this.feiyongone=res.data[0].content.feiyongone;
          this.feiyongtwo=res.data[0].content.feiyongtwo;
          this.leibieone=res.data[0].content.leibieone;
          this.leibietwo=res.data[0].content.leibietwo;
          this.jineone=res.data[0].content.jineone;
          this.jinetwo=res.data[0].content.jinetwo;
          this.hejijine=res.data[0].content.hejijine;
        })
      },
      //post上传数据到数据库
      sinit(){
        var abs=0
        for(let i=0; i<document.querySelectorAll("input").length; i++) {
          // console.log(document.querySelectorAll("input").length)
          if (document.querySelectorAll("input")[i].value!="") {
            abs=1
          }
        }if(abs === 0){
          alert("报销内容不能为空")
          return
        }
        let p = this.$qs.stringify({
          title: this.title,
          username: this.username,
          type: '报销单',
          content:JSON.stringify({
            states:this.sta,
            ends:this.eng,
            value1:this.values1,
            feiyongone:this.feiyongone,
            feiyongtwo:this.feiyongtwo,
            leibieone:this.leibieone,
            leibietwo:this.leibietwo,
            jineone:this.jineone,
            jinetwo:this.jinetwo,
            hejijine:this.hejijine
          })
        })
        console.log(p)
        this.$http.post("http://140.143.100.57:3008/flow/save",p).then((res)=>{
          this.datas = res.data
        });
        this.$http("http://140.143.100.57:3008/flow/all").then((res)=>{
          console.log(res)
        })
        this. $router.push("/process")
      },
      //连接打印
      prints(){
        let printDatas = document.getElementById("baoxiaodanbox").innerHTML;
        window.document.body.innerHTML = printDatas;
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
.baoxiao{
  width: 100%;
}
  .el-input__icon el-icon-date{
    margin-top: -5px;
    margin-left: 2px;
  }
  .el-date-editor el-input el-input--prefix el-input--suffix el-date-editor--date{
    margin-top: -6px;
  }
  .block{
    margin-left: 460px;
    margin-top: -6px;
  }
  .el-input__prefix{
    margin-left: -80px;
    margin-top: -5px;
  }
.buts{
  margin-left: 850px;
  margin-top: 30px;

}
.buts button{
  margin-right: 18px;
  border: none;
  line-height: 30px;
  width: 40px;
  color: #fff;
  background: #0d93f6;
}
.el-date-editor el-input el-input--prefix el-input--suffix el-date-editor--date{
    margin-left: -300px;
  }
</style>
