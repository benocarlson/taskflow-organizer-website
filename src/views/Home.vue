<template>
  <div class="home">
    <div :class="'taskflow-thumb ' + completionStatus(taskflow)" v-for="taskflow in taskflows" :key="taskflow.id">
      <router-link class="taskflow-link" :to="'/taskflow/' + taskflow.id">
        <h2>{{taskflow.name}}</h2>
        <p v-if='taskCount(taskflow) > 0'>Uncompleted: {{taskCount(taskflow)}}</p>
        <p v-else>Complete!</p>
        <button class="delete-taskflow" @click.prevent="deleteFlow(taskflow)">Remove</button>
      </router-link>
    </div>
    <h1 class='empty-message' v-if='taskflows.length === 0'>You have no taskflows. <br> Click <em>'Create a taskflow'</em> to get started!</h1>
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
    },
    completionStatus(taskflow) {
      if (this.taskCount(taskflow) > 0) return "incomplete";
      else return "complete";
    },
    deleteFlow(taskflow) {
      this.taskflows.splice(this.taskflows.indexOf(taskflow), 1);
    }
  }
}
</script>

<style scoped>

.home {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
}

.taskflow-thumb {
  padding: 20px;
  border: 2px solid #000;
  border-radius: 10px;
  margin: 20px;
  background: #9d6;
}

.taskflow-thumb a {
  color: #000;
  text-decoration: none;
}

.taskflow-thumb button {
  font-weight: bold;
  padding: 4px;
  border-radius: 4px;
  background: #a44;
  border-color: #c66 #822 #c66 #822;
}

.taskflow-thumb:hover {
  background: #7b4;
}

.complete {
  background: #0a0;
}

.complete:hover {
  background: #070;
}

.empty-message {
  width: 50%;
  margin: 30px auto;
}

</style>