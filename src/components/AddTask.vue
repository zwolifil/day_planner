<template id="AddTask">
    <div class="container">
      <form onsubmit="$emit('close')">
        <label>About</label>
        <input type="text" placeholder="Type something about task" />
        <label>Date</label>
        <input type="date" placeholder="Type date" />
        <label>From</label>
        <input type="time" placeholder="Type time from" />
        <label>To</label>
        <input type="time" placeholder="Type time to" />
        <button type="submit">Add</button>
      </form>
    </div>
</template>

<script>
export default {
  name: 'AddTask',
  template: 'AddTask',
  methods: {
    closeModal: function () {

    }
  }
}
</script>

<style scoped>

</style>
