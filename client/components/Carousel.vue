

 <template>
  <div class="container">
    <Carousel :perPage="perPage">
      <Slide>Slide 1</Slide>
      <Slide>Slide 2</Slide>
    </Carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
export default {
  props: {
    perPage: Number
  },
  components: {
    Carousel,
    Slide
  }
}
</script>

<style>
</style>