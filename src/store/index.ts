import { createStore } from 'vuex'
import axios from "axios"

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
    },
  },
  actions: {
    async getData() {
      axios.get('https://api.openbrewerydb.org/breweries?by_state=missouri&sort=type,-name')
      .then(resp => {console.log(resp)});
  }
  },
  getters: {
    returnList(state) {
      return state.groceryList
    }
  },
})
