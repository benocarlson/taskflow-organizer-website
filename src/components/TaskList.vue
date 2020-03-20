<template>
  <div class="wrapper">
    <div class="tasks">
      <div :class="'task ' + getTaskType(task)" v-for="task in tasks" :key="task.id">
        <h1>{{task.name}}</h1>
        <div class="task-controls">
          <button class="complete" :disabled='isNotReady(task)' @click.prevent="$emit('complete-task', task)">Mark as Complete</button>
          <button class="edit">Edit</button>
          <button class="delete">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TaskList',
  props: {
    tasks: Array
  },
  methods: {
    getTaskType(task) {
      if (task.complete) return "completed";
      else {
        for (let parent of task.parents) {
          if (!parent.complete) return "locked";
        }
        return "ready";
      }
    },
    isNotReady(task) {
      return (getTaskType(task) !== "ready");
    }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.tasks {
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.task {
  width: 27%;
}

.task h1 {
  font-size: 15px;
}

.task-controls {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
}

.task-controls button {
  margin: 5px;
  padding: 5px;
  font-size: 10px;
}

.task-controls .complete {
  width: 90%;
}