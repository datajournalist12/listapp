import { createStore } from 'vuex'

export default createStore({
  state: {
      groceryList: ['Hello', 'World']
  },
  mutations: {
    addToArray(state, payload) {
      state.groceryList.push(payload)
    },
    deleteFromArray(state, payload) {
      state.groceryList.splice(payload, 1)
    }
  },
  actions: {
  },
  getters: {
    returnList(state) {
      return state.groceryList
    }
  },
})
