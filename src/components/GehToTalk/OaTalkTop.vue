<template>
    <div class="ToTalkTop">

    </div>
</template>

<script>
  import '../../../static/css/OaTalk.css'
  export default {
    name: "OaTalkTop",
    data() {
      return {
        msgs: ''
      }
    },
    methods: {
      toTalk() {
        let ws = new WebSocket('ws://140.143.100.57:3008')
        //服务器端接收
        ws.onmessage = function(e) {
          console.log('server:'+JSON.stringify(e.data))
          this.msgs = JSON.parse(e.data)
          if( this.msgs.username !== localStorage.getItem('username')) {
            document.querySelectorAll('.ToTalkTop')[0].innerHTML += "<ul class='GehUlsA'>" +
              "<li>\n" +
                "        <b>\n" +
                "          <img src=\"../../../static/img/icon_m_wev8.jpg\">\n" +
                "        </b>\n" +
                "        <p>"+this.msgs.username+"说:  "+this.msgs.content+"</p>\n" +
                "      </li>" +
              "</ul>"
            let ulDom = document.querySelectorAll('.GehUlsA')
            let pDom = document.querySelectorAll('.ToTalkTop>.GehUlsA>li>p')
            for(let i = 0; i < ulDom.length; i++) {
              ulDom[i].style.textAlign = 'left'
              ulDom[i].style.marginLeft = '20px'
              pDom[i].style.background = '#aaa'
              pDom[i].style.border = '1px solid #ccc'
            }
            document.getElementById('ElInput').value=''
            this.msgs=null
          }
        }
        ws.onerror = function(err) {
          console.log('_error')
          console.log(err)
        }
        //客户端发送
        ws.onopen = function() {
          let u=localStorage.getItem('username')
          console.log('_connect')
          document.querySelectorAll('#ElButton')[0].onclick = function() {
            let msgsB = {
              username:u,
              content:document.getElementById('ElInput').value
            }
            console.log('user:',msgsB)
            if(ws.readyState == 1) {
              ws.send(JSON.stringify(msgsB))
            }
            document.querySelectorAll('.ToTalkTop')[0].innerHTML += "<ul class='GehUlsB'>" +
              "<li>\n" +
                "          <p>"+msgsB.username+"说:   "+msgsB.content+"</p>\n" +
                "          <b>\n" +
                "            <img src=\"../../../static/img/icon_m_wev8.jpg\">\n" +
                "          </b>\n" +
                "        </li>" +
              "</ul>"
              let ulDom = document.querySelectorAll('.GehUlsB')
              let pDom = document.querySelectorAll('.ToTalkTop>.GehUlsB>li>p')
              for(let i = 0; i < ulDom.length; i++) {
                ulDom[i].style.textAlign = 'right'
                ulDom[i].style.marginRight = '20px'
                pDom[i].style.background = '#63a35c'
                pDom[i].style.border = '1px solid #ccc'
              }
              document.querySelectorAll('#ElInput')[0].value=''
              msgsB=null
            }

            // this.arrMsg = arrsMsg
          }
        ws.onclose = function() {
          console.log('_close')
        }

      }
    },
    mounted() {
      this.toTalk()
    }
  }
</script>

<style scoped>

</style>
