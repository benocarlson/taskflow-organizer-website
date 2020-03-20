<template>
  <div id="app">
    <div id="header">
    <div id="logo">
      <img alt="Taskflow logo" src="/images/Logo.png">
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/create">Create a Taskflow</router-link>
    </div>
    </div>
    <router-view/>
    <div id="footer">
      <a href='https://github.com/benocarlson/taskflow-organizer-website'>
        Visit the GitHub repository for this website
      </a>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

#logo img {
  width: 200px;
  height: 200px;
  object-fit: scale-down;
  margin: 50px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin-left: 10px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
