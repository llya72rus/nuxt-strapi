<template>
  <section class="feature" v-if="url && feature">
    <div class="container">
      <h2 class="feature__title">{{feature.title_ru}}</h2>
      <!-- <p class="feature__desc">{{feature.desc_ru}}</p> -->
      <!-- <ul class="feature__images" v-if="feature.images">
        <li class="feature__images-item" v-for="image in feature.images" :key="image.id">
          <img :src="`${url}${image.url}`" alt="img" />
        </li>
      </ul>-->
    </div>
  </section>
</template>

<script>
import { GET_FEATURE_RU } from '~/graphql/queries'
export default {
  props: {
    id: Number,
    title: String
  },
  data() {
    return {
      url: ''
    }
  },
  mounted() {
    this.url = process.env.STRAPI_URL
  },
  apollo: {
    feature: {
      query: GET_FEATURE_RU,
      variables() {
        return {
          id: this.id
        }
      }
    }
  }
}
</script>

<style lang="scss" >
.feature {
  padding: 40px 0;
  background: #16193b;
  color: #fff;
  &__title {
    @apply mb-20 text-center;
    color: #6ec1e4;
    font-size: 58px;
  }
  &__desc {
    @apply text-center;
    font-size: 19px;
  }
  &__images {
    @apply flex justify-center flex-wrap;
    margin: 0 -15px;
  }
  &__images-item {
    @apply flex items-center px-15;
  }
}
</style>
