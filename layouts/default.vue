<template>
  <div id="app">
    <div id="topNav">
      <nuxt-link to="/">Home</nuxt-link> |
      <nuxt-link to="/post">Post</nuxt-link> |
      <nuxt-link to="/elements">Elements</nuxt-link>
    </div>
    <nuxt/>
  </div>
</template>

<style>
html {
  font-family: 'Ubuntu', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

#app {
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#topNav {
  padding: 10px;
  text-align: center;
}
</style>
