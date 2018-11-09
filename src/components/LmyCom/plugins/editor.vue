<template>
  <div>
  <div class="konw_top">
    <div class="konw_imgs">
      <img class="konwledgimgs" src="../../../../static/img/konwledg.png">
    <div class="konw_input">
      <h3 class="kone_file">新建文件夹</h3>
      <a class="konw_name">文件名:</a><input type="text" v-model="mag" style="border:1px solid #eee; margin-bottom:5px;"/>
    </div>
    </div>
    <div class="konw_edit">
      <input type="button" class="submitlist" @click="editTodo" value="提交"/>
      <input type="button" class="submitlist" value="草案"/>
      <input type="button" class="submitlist" value="与联"/>
    </div>
    <div class="lead_succee" v-if="show">
      <p class="p_succee">导入成功!</p>
     <h3 class="h3_succee" @click="verify">确认</h3>
    </div>
  </div>
  <div id="editor" ref="editor" style="height: 500px;">

  </div>
  </div>
</template>
<script>
import E from 'wangeditor';
export default{
  name: 'editor',
  data (){
    return {
      editorContent: '',
      show:false,
      mag:''
      // title:'',
      // data:''
    }
  },
   created(){

   },
  mounted (){
    if(this.$route.query.sid !==undefined){
      // console.log(this.$route);
      this.$http(`http://140.143.100.57:3008/file?sid=${this.$route.query.sid}`).then((res) => {
        console.log(res.data[0]);
        this.mag = res.data[0].title;
        //editor.txt.html('<p>用 JS 设置的内容</p>');
        //console.log(this.editorContent);
        // console.log(this.mag);
        var editor = new E(this.$refs.editor);
        editor.customConfig.onchange = (html) =>{
          this.editorContent = html;
          editor.customConfig.uploadImgShowBase64 = true;// 使用 base64 保存图片
        };
        editor.create();
        editor.txt.html(res.data[0].content)
      })
    }else{
      var editor = new E(this.$refs.editor);
      editor.customConfig.onchange = (html) =>{
        this.editorContent = html;
        editor.customConfig.uploadImgShowBase64 = true;// 使用 base64 保存图片
      };
      editor.create();
    }


  },
  methods:{
     editTodo(){
      let d = this.$qs.stringify({
        title:this.mag,
       // username: '2018-10-29',
        username: new Date(),
        content:this.editorContent
      });
     // console.log(d);
      this.$http.post('http://140.143.100.57:3008/file/save',d).then((res) =>{
       // console.log(res);
      });
       if(!this.mag){
        alert("文件名不能为空")
        }else{
         return this.show=!this.show;
        }
     },
      verify(){
      this.$router.push('/lead')
       }
  },
  watch:{
    editorContent: function(newVal, oldVal){
      console.log(newVal)
    }
  }
}
</script>
<style scoped>
  .lead_succee{
    width:300px;
    height:150px;
    background: #e7e7e7;
    border-radius: 10px;
    position: absolute;
    left:500px;
    top: 403px;  
}
  .p_succee{
    color:black;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    padding-top:30px;
  }
  .h3_succee{
    color:#4f81bd;
    font-size: 14px;
    text-align: center;
    padding-top: 20px;
    cursor: pointer;
  }
  .konw_name{
    color:#666666;
    font-size: 12px;
    padding-right: 15px;
  }
  .konw_edit{
    display: flex;
  }
  .konw_edit input{
    margin-right:20px;
  }
  .konw_imgs{
    display: flex;
  }
  .konw_input{
    padding-left:10px;
  }
  .kone_file{
    color:#000000;
    font-size: 14px;
    padding-top:10px;
  }
  .konw_top{
    display: flex;
    justify-content: space-between;
  }
  .konwledgimgs{
    width:39px;
    height:39px;
    margin-left:10px;
    margin-right:10px;
    margin-top:10px;

  }
  .submitlist{
    width:40px;
    height:30px;
    line-height:30px;
    text-align: center;
    margin-top:20px;
    border-radius: 8px;
    background: #d4e5f4;
  }
</style>
