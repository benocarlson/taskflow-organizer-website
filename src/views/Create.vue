<template>
  <div class="wrapper">
    <h1>Create a New Taskflow</h1>
    <form id="name-form">
      <label>Name of New Taskflow:</label>
      <input type="text" id="name-input" v-model="taskflowName">
    </form>
    <div class="new-task-entry">
      <h3>Add a Task</h3>
      <form id="task-form">
        <div class='form-item'>
          <label>Name of new task:</label>
          <input type='text' id="task-name-input" v-model="newTaskName">
        </div>
        <h4 v-if="newTaskParents.length > 0">Dependencies:</h4>
        <div class='new-dependencies'>
          <div class="new-dependency"  v-for='parent in newTaskParents' :key="parent.id">
            <p class="parent-name">{{parent.name}}</p>
            <button class='remove-dependency' @click.prevent="removeParent(parent)">Remove</button>
          </div>
        </div>
        <div class='form-item'>
          <label>Add as dependency:</label>
          <select id="select-dependency" v-model="selectedParent">
            <option v-for="task in eligibleParents" :value="task" :key='task.id'>{{task.name}}</option>
          </select>
          <button id="add-dependency" :disabled="!parentEligible" @click.prevent="addParent">Add</button>
        </div>
      </form>
      <button id="add-new-task" :disabled="!taskPublishable" @click.prevent="addTask">Add Task</button>
    </div>
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
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#name-form {
  margin-bottom: 20px;
  font-size: 1.5em;
  display: flex;
  align-items: center;
}

#name-input {
  height: 100%;
  font-size: 1em;
  background: #9d9;
  border-color: #ada;
}

.new-task-entry {
  margin: 10px;
  display: flex;
  flex-direction: column;
  border: 1px solid #000;
  padding: 5px;
  width: 75%;
  background: #aa7;
}

.new-task-entry input, .new-task-entry select {
  background: #cc9;
  border-color: #bb8;
}

.new-task-entry button {
  background: #ac7;
  border-color: #ac7;
}

.new-dependencies {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}

.new-dependency {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #bb8;
  border-radius: 10px;
  height: 30px;
  margin: 10px;
}

.new-dependency button {
  background: #ca7;
  border-color: #ca7;
}

.new-dependency p {
  margin-right: 5px;
  padding: 0;
}

.form-item {
  margin-bottom: 10px;
}

label {
  margin-right: 10px;
}

select {
  margin-right: 10px;
  width: 100px;
}

.new-task-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
}

.added-task {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding: 20px;
  border: 1px solid #000;
  border-radius: 10px;
  background: #ad7;
  width: 20%;
}

.added-task h4 {
  padding: 1px;
  margin: 5px;
}

.added-dependencies {
  padding: 0;
  margin: 0;
}

.added-dependencies p {
  padding: 0;
  margin: 0;
}

#create-taskflow {
  margin-top: 30px;
  font-size: 2em;
  font-weight: bold;
  border-width: 1px;
}

@media only screen and (max-width: 400px) {
  #name-form {
    font-size: 17px;
    justify-content: center;
  }
  #name-form label {
    margin-right: 0;
    width: 30%;
  }
  #name-input {
    font-size: 17px;
  }

  .added-task {
    width: 35%;
  }
}

@media only screen and (min-width: 961px) {
  .new-task-entry {
    width: 45%;
  }
}
</style>