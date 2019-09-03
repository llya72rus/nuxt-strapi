<template>
  <main class="main-home">
    <Intro :id="1" />
    <Feature :id="1" title="Multichanel" />
    <Carousel :perPage="1" />
    <Accordion />
  </main>
</template>

<script>
import Intro from '~/components/Intro'
import Feature from '~/components/Feature'
import Accordion from '~/components/Accordion'
import Carousel from '~/components/Carousel'

export default {
  components: {
    Intro,
    Feature,
    Accordion,
    Carousel
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

.main-home {
  background: #16193b;
  color: #fff;
}

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
.green-btn {
  flex-shrink: 0;
  padding: 0 20px;
  line-height: 32px;
  text-align: center;
  letter-spacing: 0.03em;
  color: #fff;
  white-space: nowrap;
  background: #61ce70;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  outline: none;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}
</style>
