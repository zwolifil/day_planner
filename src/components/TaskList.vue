<template>
    <div>
      <vue-good-table
        :columns="columns"
        :rows="rows"/>
    </div>
</template>

<script>
import { VueGoodTable } from 'vue-good-table'
export default {
  name: 'TaskList',
  components: {
    VueGoodTable
  },
  data () {
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
        }
      ],
      rows: [
        {
          about: 'Work',
          created: '20.10.2018',
          time: '12:00-16:00'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
