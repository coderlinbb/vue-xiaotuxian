// import { } from '@/api'

const actions = {}

const mutations = {
  // 修改用户信息，payload就是用户信息对象
  setUser (state, payload) {
    state.profile = payload
  }
}

const state = {
  profile: {
    id: '1',
    avatar: '',
    nickname: '',
    account: '',
    mobile: '',
    token: ''
  }
}

const getters = {}

export default {
  namespaced: true,
  actions,
  mutations,
  state,
  getters
}
