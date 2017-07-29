const state = {
  schemas: []
}

const mutations = {
  DECREMENT_MAIN_COUNTER (state) {
    // state.main--
  },
  INCREMENT_MAIN_COUNTER (state) {
    // state.main++
  },
  setState (state, docs) {
    state.schemas = docs
  }
}

const actions = {
  someAsyncTask ({ commit }) {
    // do something async
    // commit('INCREMENT_MAIN_COUNTER')
  }
}

export default {
  state,
  mutations,
  actions
}
