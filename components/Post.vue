<template>
  <div class="spotlight">
    <div class="content">
      <header class="major">
        <h2>{{ post.title.rendered }}</h2>
      </header>
      <div v-html="post.content.rendered" />
      <ul class="actions">
        <li><a
          href="generic.html"
          class="button">Learn More</a></li>
      </ul>
    </div>
    <span class="image"><img
      src="images/pic01.jpg"
      alt="" ></span>
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
