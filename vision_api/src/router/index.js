import Vue from 'vue'
import Router from 'vue-router'

import Top from '@/components/Top'

Vue.use(Router)

export default new Router({
  routes: [
    // デフォルトの定義（不要なら削除）
    {
      path: '/',
      name: 'Top',
      component: Top
    },
    // URLパスに対応するコンポーネントを定義
    {
      path: '/top',
      name: 'Top',
      component: Top
    }
  ]
})
