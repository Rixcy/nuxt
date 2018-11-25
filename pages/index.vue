<template>
  <div>
    <header
      id="header"
      class="alt">
      <span class="logo"><img
        src="images/logo.svg"
        alt="" ></span>
      <h1>Stellar</h1>
      <p>Just another free, fully responsive site template<br >
        built by <a href="https://twitter.com/ajlkn">@ajlkn</a> for <a href="https://html5up.net">HTML5 UP</a>.</p>
    </header>

    <nav id="nav">
      <ul>
        <li><a
          href="#intro"
          class="active">Introduction</a></li>
        <li><a href="#first">First Section</a></li>
        <li><a href="#second">Second Section</a></li>
        <li><a href="#cta">Get Started</a></li>
      </ul>
    </nav>

    <div id="main">
      <section
        v-for="post in posts"
        :key="post.id"
        class="main">
        <Post :post="post" />
      </section>

      <section
        id="first"
        class="main special">
        <header class="major">
          <h2>Magna veroeros</h2>
        </header>
        <ul class="features">
          <li>
            <span class="icon major style1 fa-code"/>
            <h3>Ipsum consequat</h3>
            <p>Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.</p>
          </li>
          <li>
            <span class="icon major style3 fa-copy"/>
            <h3>Amed sed feugiat</h3>
            <p>Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.</p>
          </li>
          <li>
            <span class="icon major style5 fa-diamond"/>
            <h3>Dolor nullam</h3>
            <p>Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.</p>
          </li>
        </ul>
        <footer class="major">
          <ul class="actions special">
            <li><a
              href="generic.html"
              class="button">Learn More</a></li>
          </ul>
        </footer>
      </section>

      <section
        id="second"
        class="main special">
        <header class="major">
          <h2>Ipsum consequat</h2>
          <p>Donec imperdiet consequat consequat. Suspendisse feugiat congue<br >
            posuere. Nulla massa urna, fermentum eget quam aliquet.</p>
        </header>
        <ul class="statistics">
          <li class="style1">
            <span class="icon fa-code-fork"/>
            <strong>5,120</strong> Etiam
          </li>
          <li class="style2">
            <span class="icon fa-folder-open-o"/>
            <strong>8,192</strong> Magna
          </li>
          <li class="style3">
            <span class="icon fa-signal"/>
            <strong>2,048</strong> Tempus
          </li>
          <li class="style4">
            <span class="icon fa-laptop"/>
            <strong>4,096</strong> Aliquam
          </li>
          <li class="style5">
            <span class="icon fa-diamond"/>
            <strong>1,024</strong> Nullam
          </li>
        </ul>
        <p class="content">Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum ac arcu sit amet, fermentum pellentesque et purus. Integer maximus varius lorem, sed convallis diam accumsan sed. Etiam porttitor placerat sapien, sed eleifend a enim pulvinar faucibus semper quis ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer eget purus nec nulla mattis et accumsan ut magna libero. Morbi auctor iaculis porttitor. Sed ut magna ac risus et hendrerit scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras eu ornare dui curabitur lacinia.</p>
        <footer class="major">
          <ul class="actions special">
            <li><a
              href="generic.html"
              class="button">Learn More</a></li>
          </ul>
        </footer>
      </section>

      <section
        id="cta"
        class="main special">
        <header class="major">
          <h2>Congue imperdiet</h2>
          <p>Donec imperdiet consequat consequat. Suspendisse feugiat congue<br >
            posuere. Nulla massa urna, fermentum eget quam aliquet.</p>
        </header>
        <footer class="major">
          <ul class="actions special">
            <li><a
              href="generic.html"
              class="button primary">Get Started</a></li>
            <li><a
              href="generic.html"
              class="button">Learn More</a></li>
          </ul>
        </footer>
      </section>
    </div>
  </div>
</template>

<script>
import Post from '@/components/Post'
import wp from '@/middleware/wp'

export default {
  async asyncData ({ params }) {
    return wp.posts()
  },
  components: {
    Post
  },
  data: function () {
    return {
      posts: {}
    }
  }
}
</script>
