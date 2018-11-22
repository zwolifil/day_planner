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
      console.log('asdas')
    },
    removeTask (state, id) {
      state.taskList.splice(id, 1)
    },
    updateMessageInTask (state, id, message) {
      state.taskList[id].message = message
    }
  }
})
