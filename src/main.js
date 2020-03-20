import Vue from 'vue'
import App from './App.vue'
import router from './router'

import mock from './mock-data.js'

let data = mock;

for (let taskflow of data.taskflows) {
  for (let task of taskflow.tasks) {
    task.parents = [];
    for (let parentId of task.dependencies) {
      task.parents.push(taskflow.tasks.find(candidate => {return parentId === candidate.id}));
    }
  }
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
