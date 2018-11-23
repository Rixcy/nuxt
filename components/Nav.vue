<template>
  <div id="nav">
    <nuxt-link to="/">Home</nuxt-link> |
    <nuxt-link to="/posts">Posts</nuxt-link>
  </div>
</template>

<style lang="scss">
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.nuxt-link-exact-active {
      color: #526488;
    }
  }
}
</style>
