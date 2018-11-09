<template>
<div id="editor" ref="editor"></div>
</template>

<script>
import E from 'wangeditor'
export default {
  name: 'editor',
  data () {
    return {
      editorContent: ''
    }
  },
  mounted () {
    var editor = new E(this.$refs.editor)
    editor.customConfig.onchange = (html) => {
      this.editorContent = html
    }
    editor.customConfig.uploadImgShowBase64 = true// 使用 base64 保存图片
    editor.create()
  },
  watch: {
    editorContent: function (newVal, oldVal) {
      console.log(newVal)
      this.$emit("text",newVal)
    }
  }
}
</script>

<style scoped>
</style>
