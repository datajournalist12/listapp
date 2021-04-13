import { createStore } from 'vuex'
import axios from "axios"
import { ApiResult } from "../interfaces/interface"

export default createStore({
  state: {
      groceryList: ['Hello', 'World'],
      urls: {
        front: "https://api.openbrewerydb.org/breweries?by_state=",
        back: "&sort=type,-name"
      }
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
    async getData(context, usState) {
      axios.get(context.state.urls.front + usState + context.state.urls.back)
      .then(resp => {resp.data.forEach((element: ApiResult) => context.commit('addToArray', element.name))});
   }
  },
  getters: {
    returnList(state) {
      return state.groceryList
    }
  },
})
