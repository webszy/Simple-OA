// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fullcalendar from 'vue-fullcalendar'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import qs from 'qs'
import axios from 'axios'
import {addlogURL, addSession, checkSession} from '../static/js/api'
import Print from '../static/plugins/print'
import '../static/css/iconfont.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import MenuList from '../static/js/MenuList'

Vue.prototype.$http = axios
Vue.prototype.$qs = qs

Vue.config.productionTip = false

Vue.use(iView)
Vue.component(fullcalendar)
Vue.use(Print)
Vue.use(ElementUI)

var store = {
  debug: true,
  logs: [],
  username: '',
  guid: '',
  delfilelist: [],
  filedeleted: false,
  MenuList: MenuList,
  accessList: [],
  addLog: function (actions) {
    axios(`${addlogURL}?username=${this.username}&content=${actions}`).then(t => {
      if (t.code === '000') {
        console.log('Logging OK')
      }
    })
  },
  makeGUID: function () {
    return 'xxxxxxxx-4xxx-yxxx-xxxxxxxx'.replace(/[xy]/g, function (c) {
      let r = Math.random() * 16 | 0
      let v = c === 'x' ? r : (r & 0x3 | 0x8)
      return v.toString(16)
    })
  },
  updateUserGUID: function () {
    this.guid = this.makeGUID()
    let d = qs.stringify({
      username: this.username,
      guid: this.guid
    })
    axios.post(addSession, d)
  },
  clearStatus: function () {
    this.username = ''
    localStorage.removeItem('username')
    this.guid = ''
  },
  checkAccess (page, act) {
    let thisPageAccess = {}
    for (let k of this.accessList) {
      if (k.page === page) {
        thisPageAccess = k
        break
      }
    }
    if (!thisPageAccess[act] || thisPageAccess[act] === undefined) {
      return false
    }
    return true
  }

}
new Vue({
el: '#app',
data () {
  return{
    "store":store 
  }
},
  router,
  components: { App },
  render (h) {
    return h(App)
  }
})

// 导航守卫,主要用于权限控制
router.beforeEach((to, from, next) => {
  router.app.$Loading.config({color: '#00cc66'})
  router.app.$Loading.start()
  next()
  let store = router.app.$root.store
  if (store.guid !== '') {
    let d = qs.stringify({guid: store.guid})
    axios.post(checkSession, d).then(res => {
      // console.log(res.data)
      if (res.data.code !== '000') {
        store.clearStatus()
        next({path: '/', query: {showTips: 'timeout'}})
      } else {
        // console.log(store.accessList)
        let thisPageAccess = {}
        for (let k of store.accessList) {
          if (k.page === to.name) {
            thisPageAccess = k
            break
          }
        }
        if (!thisPageAccess.read || thisPageAccess.read === undefined) {
          store.addLog('用户权限不足，拒绝访问：' + from.name)
          next({path: '/denied', query: {showTips: 'accessDenied'}})
        } else {
          next()
        }
      }
    })
  }
  store.username = localStorage.getItem('username')
  if (store.username === '' || store.username === null) {
    next({path: '/', query: {showTips: 'nologin'}})
  }
  store.addLog('用户访问' + to.name)
})

router.afterEach((transition) => {
  router.app.$Loading.finish()
})
