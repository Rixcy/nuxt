<template>
  <div class="spotlight">
    <div class="content">
      <header class="major">
        <h2>{{ post.title.rendered }}</h2>
      </header>
      <div>{{ post.date | moment('dddd, MMMM Do YYYY') }}</div>
    </div>
    <span class="image">
      <img
        v-if="post._embedded['wp:featuredmedia']"
        :src="post._embedded['wp:featuredmedia'][0].source_url"
        alt="" >
      <img
        v-else
        src="images/pic01.jpg"
        alt="" >
    </span>
  </div>
</template>

<script>
export default {
  name: 'Post',
  props: {
    post: { type: Object, default() { return {} } }
  }
}
</script>
