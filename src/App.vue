<template>
  <div id="app">
    <time-view/>
    <router-view/>
  </div>
</template>

<script>
import timeView from './components/TimeView'

export default {
  name: 'App',
  components: {
    'time-view': timeView
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
</style>
