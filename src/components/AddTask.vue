<template id="AddTask">
    <div class="container">
      <form>
        <label>About</label>
        <input v-model="about"  type="text" placeholder="Type something about task" />
        <label>Date</label>
        <input v-model="created" type="date" placeholder="Type date" />
        <label>From</label>
        <input v-model="taskTime" type="time" placeholder="Type time from" />
        <label>To</label>
        <input type="time" placeholder="Type time to" />
        <button v-on:click="$emit(`close`)">Add</button>
      </form>
    </div>
</template>

<script>
import { store } from '../store'

export default {
  name: 'AddTask',
  template: 'AddTask',
  data: function () {
    return {
      task: {
        about: '',
        created: 0,
        taskTime: 0
      }
    }
  },
  methods: {
    closeModal: function () {
      store.commit('addTask', this.task)
      this.$emit('close')
    }
  }
}
</script>

<style scoped>

</style>
