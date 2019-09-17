import Vue from 'vue'
import Vue_router from 'vue-router'
Vue.use(Vue_router)
export default new Vue_router({
  routes: [
    {
      path: '/strategy',
      name: 'strategy',
      component: () => import('@/components/strategy'),
      meta: {
        title: '邀请亲友赚钱···'
      }
    },
     {
      path: '/oneBillion',
      name: 'oneBillion',
      component: () => import('@/components/oneBillion'),
      meta: {
        title: '瓜分红包券活动'
      }
    },
    {
      path: '/inviteFriend',
      name: 'inviteFriend',
      component: () => import('@/components/inviteFriend'),
      meta: {
        title: '邀请亲友'
      }
    },
   
    {
      path: '/ownSuccess',
      name: 'ownSuccess',
      component: () => import('@/components/ownSuccess'),
      meta: {
        title: '我的战绩'
      }
    },
    {
      path: '/',
      name: 'UserAgreement',
      component: () => import('@/components/UserAgreement'),
      meta: {
        title: '用户协议'
      }
    }
  ],

})
