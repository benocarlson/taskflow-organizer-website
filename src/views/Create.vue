<template>
  <div class="wrapper">
    <h1>Create a New Taskflow</h1>
    <form id="name-form">
      <label>Name of New Taskflow:</label>
      <input type="text" id="name-input" v-model="taskflowName">
    </form>
    <form id="task-form">
      <label>Name of new task:</label>
      <input type='text' id="task-name-input" v-model="newTaskName">
      <h4 v-if="newTaskParents.length > 0">Dependencies:</h4>
      <div class="new-dependency"  v-for='parent in newTaskParents' :key="parent.id">
        <p>{{parent.name}}</p>
        <button class='remove-dependency' @click.prevent="removeParent(parent)">Remove</button>
      </div>
      <label>Add as dependency:</label>
      <select id="select-dependency" v-model="selectedParent">
        <option v-for="task in eligibleParents" :value="task" :key='task.id'>{{task.name}}</option>
      </select>
      <button id="add-dependency" :disabled="!parentEligible" @click.prevent="addParent">Add</button>
    </form>
    <button id="add-new-task" :disabled="!taskPublishable" @click.prevent="addTask">Add Task</button>
    <div class="new-task-list">
      <div class="added-task" v-for="task in tasks" :key="task.id">
        <h4>{{task.name}}</h4>
        <div class="added-dependencies" v-if="task.parents.length > 0">
          <p>Dependencies:</p>
          <p v-for="parent in task.parents" :key="parent.id">{{parent.name}}</p>
        </div>
      </div>
    </div>
    <button id="create-taskflow" :disabled="!taskflowPublishable" @click.prevent="addTaskflow">Done</button>
  </div>
</template>

<script>
export default {
  name: 'Create',
  data() {
    return {
      taskflowName: '',
      newTaskName: '',
      selectedParent: {},
      newTaskParents: [],
      tasks: [],
    }
  },
  computed: {
    eligibleParents() {
      return this.tasks.filter(task => !this.newTaskParents.includes(task));
    },
    taskflowPublishable() {
      return this.taskflowName.trim() !== '' && this.tasks.length > 0;
    },
    taskPublishable() {
      return this.newTaskName.trim() !== '';
    },
    parentEligible() {
      return this.eligibleParents.includes(this.selectedParent);
    }
  },
  methods: {
    addParent() {
      this.newTaskParents.push(this.selectedParent);
      this.selectedParent = {};
    },
    removeParent(parent) {
      let index = this.newTaskParents.indexOf(task => task.id === parent.id);
      this.newTaskParents.splice(index, 1);
    },
    addTask() {
      this.tasks.push({
        id: Math.random().toString(36).substring(2, 15),
        name: this.newTaskName,
        dependencies: this.newTaskParents.map(parent => parent.id),
        parents: this.newTaskParents,
        complete: false
      });
      this.newTaskName = '';
      this.newTaskParents = [];
      this.selectedParent = {};
    },
    addTaskflow() {
      this.$root.$data.taskflows.push({
        id: Math.random().toString(36).substring(2, 15),
        name: this.taskflowName,
        tasks: this.tasks
      });
      this.newTaskName = '';
      this.newTaskParents = [];
      this.selectedParent = {};
      this.taskflowName = '';
      this.tasks = [];
    }
  }
}
</script>