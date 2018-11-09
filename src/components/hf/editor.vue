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
  components: {
  },
  mounted () {
    var editor = new E(this.$refs.editor)
    editor.customConfig.onchange = (html) => {
      this.editorContent = html
    }
    editor.create()
  },
  watch: {
    editorContent: function (newVal, oldVal) {
      console.log(newVal)
    }
  }
}
</script>

<style scoped>
</style>
