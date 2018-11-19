<template id="time-view">
  <div class="time-wrapper">
    {{time}}
  </div>
</template>

<script>
import {observable} from '../time'

export default {
  data: () => ({
    time: 0
  }),
  methods: {
    setTime: () => {
      observable.subscribe(time => this.time = time)
    }
  }
}.methods.setTime()
</script>
<style scoped>

</style>
