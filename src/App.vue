<template>
  <div id="app">
    <div class="navbar">
      <button class="btn" v-on:click="openModal()" title="Add Task">
        <font-awesome-icon icon="plus" />
      </button>
      <time-view/>
    </div>
    <task-list/>
  </div>
</template>

<script>
import timeView from './components/TimeView'
import TaskList from './components/TaskList'
import AddTask from './components/AddTask'

export default {
  name: 'App',
  components: {
    'time-view': timeView,
    'task-list': TaskList
  },
  methods: {
    openModal: function () {
      this.$modal.show(AddTask)
    }
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 20px;
  }
  .navbar {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 10px;
  }
  .btn {
    position: absolute;
    top: 60px;
    left: 10px;
    font-size: 18px;
    border: none;
    background-color: transparent;
    color: green;
    cursor: pointer;
  }
  .btn:focus {
    outline: none;
  }
</style>
