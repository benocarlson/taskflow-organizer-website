<template>
  <div class="wrapper">
    <h1>{{taskflow.name}}</h1>
    <div class="task-set ready" v-if='ready.length > 0'>
      <h2>Current tasks</h2>
      <TaskList class='list' :tasks="ready" @delete-task="deleteTask" @complete-task="completeTask"/>
    </div>
    <div class="task-set locked" v-if='locked.length > 0'>
      <h2>Locked tasks</h2>
      <TaskList class='list' :tasks="locked" @delete-task="deleteTask"/>
    </div>
    <div class="task-set completed" v-if='completed.length > 0'>
      <h2>Completed tasks</h2>
      <TaskList class='list' :tasks="completed" @incomplete-task="removeCompletion" @delete-task="deleteTask"/>
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
    },
    deleteTask(task) {
      this.taskflow.tasks.filter(candidate => candidate.parents.includes(task)).forEach(child => {
        child.parents.splice(child.parents.indexOf(task), 1);
        for (let parent of task.parents) {
          child.parents.push(parent);
        }
      });
      this.taskflow.tasks.splice(this.taskflow.tasks.indexOf(task), 1);
    },
    removeCompletion(task) {
      task.complete = false;
      this.taskflow.tasks.filter(candidate => candidate.parents.includes(task)).forEach(child => {
        this.removeCompletion(child);
      });
    }
  }
}
</script>

<style scoped>

h1 {
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #000;
}

.task-set {
  margin-top: 50px;
  margin-bottom: 0px;
  padding-bottom: 30px;
  border-bottom: 1px solid #000;
}

.task-set .list {
  margin-top: 0;
}

</style>