<template>
  <div class="wrapper">
    <TaskList class="ready" :tasks="ready" @mark-complete="completeTask"/>
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
      return this.taskflow.tasks.filter(task => {return task.complete});
    },
    ready() {
      return this.taskflow.tasks.filter(task => {
        for (let parent of task.parents) {
          if (!parent.complete) return false;
        }
        return !task.complete;
      });
    },
    locked() {
      return this.taskflow.tasks.filter(task => {
        for (let parent of task.parents) {
          if (!parent.complete) return true;
        }
        return false;
      })
    }
  },
  methods: {
    completeTask(task) {
      task.complete = true;
    }
  }
}
</script>