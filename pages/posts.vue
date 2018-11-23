<template>
  <div class="posts">
    <img
      src="~static/icon.png"
      width="200"
      height="200"
      alt="">
    <h1 class="title">
      nuxt
    </h1>
    <h2 class="subtitle">
      Just a lil' test
    </h2>
    <div class="links">
      <a
        href="https://github.com/Rixcy/nuxt/#readme"
        target="_blank"
        class="button--green">Documentation</a>
      <a
        href="https://github.com/Rixcy"
        target="_blank"
        class="button--grey">GitHub</a>
    </div>
  </div>
</template>

<style lang="scss">
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.nuxt-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
