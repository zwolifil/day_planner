import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    taskList: []
  },
  mutations: {
    addTask (state, task) {
      state.taskList.push(task)
    },
    removeTask (state, id) {
      state.taskList.splice(id, 1)
    },
    updateMessageInTask (state, {id, message}) {
      state.taskList[id].message = message
      const tmp = JSON.parse(JSON.stringify(state.taskList[id]))
      state.taskList.splice(id, 1, tmp)
    }
  }
})
