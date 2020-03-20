<template>
  <div class="wrapper">
    <TaskList class="ready" :tasks="ready"/>
    <TaskList class="locked" :tasks="locked"/>
    <TaskList class="completed" :tasks="completed"/>
  </div>
</template>

<script>
export default {
  name: 'Taskflow',
  data() {
    return {
      taskflow: {}
    }
  },
  created() {
    this.taskflow = this.$root.$data.taskflows.find(flow => flow.id === this.$route.params.id);
  },
  computed: {
    completed() {
      return taskflow.tasks.filter(task => {return task.complete});
    },
    ready() {
      return taskflow.tasks.filter(task => {
        for (let parent of task.parents) {
          if (!parent.complete) return false;
        }
        return !task.complete;
      });
    },
    locked() {
      return taskflow.tasks.filter(task => {
        for (let parent of task.parents) {
          if (!parent.complete) return true;
        }
        return false;
      })
    }
  }
}
</script>