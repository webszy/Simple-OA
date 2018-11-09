import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/login'
import homePage from '../page/homepage'
import totalVue from '../page/totalVue'
import OaCoop from '../page/OaCoop'
import calenDar from '../page/calendar'
import konwledge from '../page/konwledgeEdit.vue'
import NewKonwledgeEdit from '../components/LmyCom/NewKonwledgeEdit.vue'
import editor from '../components/LmyCom/plugins/editor.vue'
import log from '../page/log.vue'
import process from '../page/process.vue'
import newProcess from '../components/new-process/new-process-indx.vue'
import doProcess from '../components/proce-to-do/process-to-do.vue'
import qingjiadan from '../page/qingjiadan.vue'
import baoxiaodan from '../page/baoxiaodan.vue'
import manage from '../components/useName.vue'
import denied from '../page/denied.vue'
import lead from '../components/LmyCom/LeadKonwledgeEdit.vue'
import chatroom from '../page/OaTalk.vue'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/index',
      name: 'totalVue',
      component: totalVue,
      redirect: '/homePage',
      children: [{
        path: '/OaCoop',
        name: 'OaCoop',
        component: OaCoop
      },
      {
        path: '/homePage',
        name: 'homePage',
        component: homePage
      },
      {
        path: '/calenDar',
        name: 'calenDar',
        component: calenDar
      },
      {
        path: '/konwledge',
        name: 'konwledge',
        component: konwledge
      },
      {
        path: '/news',
        name: 'NewKonwledgeEdit',
        component: NewKonwledgeEdit
      },
      {
        path: '/editor',
        name: 'editor',
        component: editor
      },
      {
        path: '/log',
        name: 'log',
        component: log
      },
      {
        path: '/process',
        name: 'process',
        component: process
      },
      {
        path: '/newProcess',
        name: 'newProcess',
        component: newProcess
      },
      {
        path: '/doProcess',
        name: 'doProcess',
        component: doProcess
      },
      {
        path: '/qingjiadan',
        name: 'qingjiadan',
        component: qingjiadan
      },
      {
        path: '/baoxiaodan',
        name: 'baoxiaodan',
        component: baoxiaodan
      },
      {
        path: '/manage',
        name: 'manage',
        component: manage
      },
      {
        path: '/denied',
        name: 'denied',
        component: denied
      },
      {
        path: '/lead',
        name: 'lead',
        component: lead
      },
      {
        path: '/chatroom',
        name: 'chatroom',
        component: chatroom

      }
      ]
    }

  ]
})
