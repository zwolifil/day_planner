<template>
    <div>
      <vue-good-table
        :columns="columns"
        :rows="rows"
        @on-row-click="onRowClick"
        ref="table"/>
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
          field: 'taskTime',
          type: 'string'
        },
        {
          label: 'Message',
          field: 'message'
        }
      ],
      rows: store.state.taskList
    }
  },
  methods: {
    onRowClick: function (params) {
      store.commit('updateMessageInTask', {id: params.row.originalIndex, message: 'Message to happen : 18:00', timeOfMessage: 1542897400000})
    }
  }
}
</script>

<style scoped>

</style>
