<template id="AddTask">
    <div class="container">
      <form>
        <label>About</label>
        <input v-model="task.about"  type="text" placeholder="Type something about task" />
        <label>Date</label>
        <input class="date" v-model="task.created" type="date" placeholder="Type date" />
        <label>From</label>
        <input class="date" v-model="fromTime" type="time" placeholder="Type time from" />
        <label>To</label>
        <input class="date" type="time" v-model="toTime" placeholder="Type time to" />
        <button v-on:click="closeModal()">Add</button>
      </form>
    </div>
</template>

<script>
import { store } from '../store'

export default {
  name: 'AddTask',
  template: 'AddTask',
  data: () => {
    return {
      fromTime: 0,
      toTime: 0,
      task: {
        about: '',
        created: 0,
        taskTime: ''
      }
    }
  },
  methods: {
    closeModal: function () {
      this.task.taskTime = `${this.fromTime.toString()}-${this.toTime.toString()}`
      store.commit('addTask', this.task)
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
.container {
  margin: 20px;
}
form {
  display: flex;
  flex-direction: column;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  font-weight: bold;
}
label {
  margin: 5px;
}
input {
  margin: 0 5px 5px 5px;
}
button {
  max-width: 100px;
  margin: 5px;
}
.date {
  max-width: 150px;
}
</style>
