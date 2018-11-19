<template id="time-view">
  <div class="time-wrapper">
    {{time | timeFormat}}
  </div>
</template>

<script>
export default {
  data: () => ({
    time: 0
  }),
  created () {
    this.setTime()
  },
  methods: {
    setTime: function () {
      setInterval(() => {
        this.time = new Date().getTime()
      }, 1000)
    }
  },
  template: 'time-view'
}
</script>
<style scoped>
.time-wrapper {
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 60px;
}
</style>
