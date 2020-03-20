<template>
  <div class="home">
    <router-link class="taskflow-link" v-for="taskflow in taskflows" :to="'/taskflow/' + taskflow.id" :key="taskflow.id">
      <h2>{{taskflow.name}}</h2>
      <p>Uncompleted: {{taskCount(taskflow)}}</p>
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      taskflows: this.$root.$data.taskflows
    }
  },
  methods: {
    taskCount(taskflow) {
      return taskflow.tasks.reduce((total, next) => {
        if (!next.complete) total++;
        return total;
      }, 0)
    }
  }
}
</script>

<style scoped>

.home {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.taskflow-link {
  padding: 20px;
  border: 2px solid #000;
  border-radius: 4px;
  margin: 20px;
}

</style>