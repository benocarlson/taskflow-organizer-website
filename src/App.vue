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
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 3px solid #111;
  background: #CCC;
}

#logo img {
  width: 200px;
  height: 200px;
  object-fit: scale-down;
  margin-left: 50px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin-left: 10px;
  margin-right: 50px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#footer {
  display: flex;
  justify-content: center;
  padding: 20px;
  border-top: 3px solid #111;
  background: #CCC;
  margin-top: 40px;
}

#footer a {
  padding: 30px;
  border-radius: 10px;
}

#footer a:link, #footer a:visited {
  background: #AAA;
  color: #000;
  text-decoration: none;
}

#footer a:hover, #footer a:visited:hover {
  background: #888;
  color: #000;
}
</style>
