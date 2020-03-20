<template>
  <div class="wrapper">
    <h1>{{taskflow.name}}</h1>
    <div class="ready" v-if='ready.length > 0'>
      <h2>Tasks ready to be completed</h2>
      <TaskList :tasks="ready" @complete-task="completeTask"/>
    </div>
    <div class="locked" v-if='locked.length > 0'>
      <h2>Locked tasks</h2>
      <TaskList :tasks="locked"/>
    </div>
    <div class="completed" v-if='completed.length > 0'>
      <h2>Completed tasks</h2>
      <TaskList :tasks="completed"/>
    </div>
  </div>
</template>

<script>
import TaskList from '../components/TaskList.vue'
export default {
  name: 'Taskflow',
  components: {
    TaskList
  },
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