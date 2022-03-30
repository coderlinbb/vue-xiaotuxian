import { topCategory } from '@/api/constants'
import { findAllCategory } from '@/api/category'

const actions = {
  async getList ({ commit }) {
    const { result } = await findAllCategory()

    result.forEach(item => {
      item.open = false
    })
    // 获取数据成功，提交mutations进行数据修改
    commit('setCategory', result)
  }
}

const mutations = {
  setCategory (state, headCategory) {
    state.list = headCategory
  },
  show (state, item) {
    const category = state.list.find(category => category.id === item.id)
    category.open = true
  },
  // 修改当前一级分类下的open数据为false
  hide (state, item) {
    const category = state.list.find(category => category.id === item.id)
    category.open = false
  }
}

const state = {
  list: topCategory.map(item => ({ name: item }))
}

const getters = {}

export default {
  namespaced: true,
  actions,
  mutations,
  state,
  getters
}
