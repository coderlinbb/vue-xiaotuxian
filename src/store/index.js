import { createStore } from 'vuex'

// 状态持久化
import createPersistedstate from 'vuex-persistedstate'

import category from './modules/category'
import user from './modules/user'
import cart from './modules/cart'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    category,
    user,
    cart
  },
  plugins: [
    createPersistedstate({
      key: 'erabbit-client-pc-store',
      paths: ['user', 'cart']
    })
  ]
})
