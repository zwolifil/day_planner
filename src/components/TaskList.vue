<template>
    <div>
      <vue-good-table
        :columns="columns"
        :rows="rows"/>
    </div>
</template>

<script>
import { VueGoodTable } from 'vue-good-table'
import { store } from '../store'
export default {
  name: 'TaskList',
  components: {
    VueGoodTable
  },
  data: function () {
    return {
      columns: [
        {
          label: 'About',
          field: 'about',
          type: 'string'
        },
        {
          label: 'Created on',
          field: 'created',
          type: 'string'
        },
        {
          label: 'From To',
          field: 'time',
          type: 'string'
        },
        {
          label: 'Message',
          field: 'message'
        }
      ],
      rows: store.state.taskList
    }
  }
}
</script>

<style scoped>

</style>
