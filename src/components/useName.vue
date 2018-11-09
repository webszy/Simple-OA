<template>
  <div>
    <input type="button" value="增加" class="add" @click="add"/>
    <input type="button" value="修改" class="pus" @click="xiu"/>
    <input type="button" value="删除" class="del" @click="del"/>
    <table class="tab" border="1" cellspacing="0" cellpadding="0">
      <tr>
        <th>操作</th>
        <th>ID</th>
        <th>用户名</th>
        <th>权限组</th>
        <th>创建时间</th>
        <th>备注</th>
      </tr>
      <tr class="trs">
        <td>
          <input class="inps" type="radio" name="qo" disabled>
        </td>
        <td>1</td>
        <td>admin</td>
        <td>Admins</td>
        <td>2018年10月28日 11:24:28</td>
        <td>超级管理员个</td>
      </tr>

      <tr v-for="lis in list" class="trs" :sid="lis.sid" :key="lis.sid">
        <td>
          <input class="inps" type="radio" name="qo" @click.stop="getname">
        </td>
        <td>{{lis.sid}}</td>
        <td>{{lis.username}}</td>
        <td>{{lis.usergroup}}</td>
        <td>{{lis.createdate}}</td>
        <td>{{lis.userdesc}}</td>
      </tr>
    </table>

    <!--//修改-->
    <div class="over" v-show="upda">
      <span class="t-spa">ID:</span><input class="t-inpa" type="text" v-model="temp.sid" disabled/>
      <span class="t-spa">用户名:</span><input class="t-inpb" type="text" disabled v-model="temp.user"/>
      <span class="t-spa">新密码 :</span><input class="t-inpc" type="text" v-model="temp.pass"/>
      <span class="t-spa">备注:</span><input class="t-inpe" type="text" v-model="temp.desc"/>
      <span class="t-spa"> 权限组 :</span>
      <select class="t-inpc" type="text" v-model="temp.group">
          <option value="Admins">超级管理员</option>
          <option  value="Manager">管理员</option>
          <option value="Operator">操作员</option>
      </select>
      <button class="btn1" @click="updata">修改</button>
      <button class="btn2" @click="upda=!upda">取消</button>
    </div>

    <!--//保存-->
    <div class="over" v-show="cls">
      <span class="t-spa">用户名 :</span><input class="t-inpb" type="text" v-model="user"/>
      <span class="t-spa">密码 :</span><input class="t-inpe" type="text" v-model="pass"/>
      <span class="t-spa"> 权限组 :</span>
      <select class="t-inpc" type="text" v-model="group">
          <option value="Admins">超级管理员</option>
          <option  value="Manager">管理员</option>
          <option value="Operator">操作员</option>
      </select>
      <span class="t-spa">备注:</span><input class="t-inpe" type="text" v-model="desc"/>
      <button class="btn1" @click="sive">保存</button>
      <button class="btn2" @click="cls=!cls">取消</button>
    </div>

    <div class="t-boxa">
      <Page :total="totalNum" :page-size="pageSize"
            @on-change="changepage"

      />
    </div>

  </div>



</template>

<script>

  import '../../node_modules/iview/dist/styles/iview.css'
  import Operation from 'iview/src/components/transfer/operation'
  import '../../static/css/useTac.css'
  import {getUserByName,updateUser,SaveUser} from '../../static/js/api.js'
  export default {
    name: 'useName',
    components: {Operation},
    data () {
      return {
        list: {},
        cls: false,
        upda: false,
        inde: 0,
        user: "",
        pass: "",
        desc: "",
        group: 'Operator',
        totalNum:0,
        pageSize:4,
        pageList:[],
        temp:{
          user:'',
          pass:'',
          desc:'',
          group:'',
          sid:0,
          createdate:''
        },
        choosed:''
      }
    },
    mounted () {
      this.get();
    },
    methods: {
      //增加
      add () {
        if(this.$root.store.checkAccess(this.$route.name,'write')){
          this.cls = true;
        }else{
          this.$router.push('/denied')
        }
        
      },
      xiu(){
          if(this.$root.store.checkAccess(this.$route.name,'update')){
            this.$http(`${getUserByName}?username=${this.choosed}`).then(res=>{
                console.log(res.data)
                this.temp.user=res.data[0].username
                this.temp.sid=res.data[0].sid
                this.temp.group=res.data[0].usergroup
                this.temp.desc=res.data[0].userdesc
                this.temp.createdate=res.data[0].createdate
                  this.upda = true;
            })
          
        }else{
          this.$router.push('/denied')
        }

      
      },
      //保存
      sive () {
         if(!this.$root.store.checkAccess(this.$route.name,'write')){
           this.$router.push('/denied')
           return
         }
        let user = this.$qs.stringify({
          username: this.user,
          userpass: this.pass,
          userdesc: this.desc,
          usergroup: this.group
        })
        this.$http.post(SaveUser, user).then(res => {
          console.log(res.data);
        });
        this.get()
        this.cls = false
      },

      get () {
        this.$http("http://140.143.100.57:3008/user/all").then((res) => {
          console.log(res.data)
          // this.list = res.data;
          this.totalNum = res.data.length-1;
          this.pageList = res.data.splice(1,res.data.length)
          console.log(this.pageList)
          this.list=this.pageList.slice(0,this.pageSize)
        })
      },

      //修改
      updata(){
        if(!this.$root.store.checkAccess(this.$route.name,'update')){
           this.$router.push('/denied')
           return
         }
         let d={
          username: this.temp.user,
          userpass: this.temp.pass,
          userdesc: this.temp.desc,
          usergroup: this.temp.group,
          sid:this.temp.sid,
          createdate:this.temp.createdate
         }
         let data=this.$qs.stringify({
           data:JSON.stringify(d)
         })
         console.log(d)
         this.$http.post(updateUser,data).then(res=>{
            console.log(res.data)
            this.upda = false;
            this.get()
            this.temp.user=''
            this.temp.pass=''
            this.temp.desc=''
            this.temp.group=''
            this.temp.sid='' 
            this.temp.createdate='' 
          })
      },

      //删除
      del(i){
        if(!this.$root.store.checkAccess(this.$route.name,'delete')){
           this.$router.push('/denied')
           return
         }
        let trs = document.querySelectorAll(".trs")
        let sid = 0
        trs.forEach((v) => {
          if (v.children[0].children[0].checked) {
            sid = v.getAttribute("sid");
          }
        });
        this.$http(`http://140.143.100.57:3008/user/del?sid=${sid}`).then((res) => {
          if(res.data.code=='000'){
              this.get()
          }
        })
      },

      //分页
      changepage(i){
          // console.log(res.data)
        let s=(i-1)*this.pageSize;
        let  e=i*this.pageSize;
        this.list=this.pageList.slice(s,e)
      },
      getname(e){
        this.choosed=e.path[2].children[2].innerHTML
      }
    },
    watch:{
      group:function(newVal,oldVal){
        console.log('group',newVal)
      }
    }
  }
</script>

<style scoped>
  .t-boxa{
    text-align: center;
    width:100%;
    height:80px;
    margin-top: 10px;
  }

</style>
