<template>
  <div class="wrapper">
    <div class="tasks">
      <div :class="'task ' + getTaskType(task)" v-for="task in tasks" :key="task.id">
        <h3>{{task.name}}</h3>
        <div class="todos" v-if='isLocked(task)'>
          <h4>Complete first:</h4>
          <p v-for='parent in getIncompleteParents(task)' :key='parent.id'>{{parent.name}}</p>
        </div>
        <div class="task-controls">
          <button class="complete" v-if='isReady(task)' @click.prevent="$emit('complete-task', task)">Mark as Complete</button>
          <button class="incomplete" v-if='isComplete(task)' @click.prevent="$emit('incomplete-task', task)">Mark as Incomplete</button>
          <button class="delete" @click.prevent="$emit('delete-task', task)">Delete</button>
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
    getIncompleteParents(task) {
      return task.parents.filter(parent => !parent.complete)
    },
    getTaskType(task) {
      if (task.complete) return "completed";
      else {
        for (let parent of task.parents) {
          if (!parent.complete) return "locked";
        }
        return "ready";
      }
    },
    isReady(task) {
      return (this.getTaskType(task) === "ready");
    },
    isLocked(task) {
      return (this.getTaskType(task) === "locked");
    },
    isComplete(task) {
      return (this.getTaskType(task) === 'completed');
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
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
}

.task {
  width: 27%;
  border: 2px solid #000;
  margin-top: 20px;
}

.todos h4 {
  margin: 0;
}

.todos p {
  margin: 0;
}

.task-controls {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.task-controls button {
  margin: 5px;
  padding: 5px;
  font-size: 10px;
  width: 100%;
}

</style>