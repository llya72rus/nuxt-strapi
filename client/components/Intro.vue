
<template>
  <div class="intro" v-if="intro">
    <div class="intro__container flex container">
      <div class="intro__text-wrapper">
        <div class="px-10" v-if="intro.title_ru">
          <h1 class="intro__title">{{intro.title_ru}}</h1>
          <div class="intro__desc" v-html="$md.render(intro.markdown_content_ru)"></div>
        </div>
        <div class="px-10" v-else-if="intro.title_en">
          <h1 class="intro__title">{{intro.title_en}}</h1>
          <div class="intro__desc" v-html="$md.render(intro.markdown_content_en)"></div>
        </div>
      </div>

      <div class="intro__img-wrapper">
        <div class="px-10">
          <img v-if="intro.image_ru" :src="`${url}${intro.image_ru.url}`" alt="Logo" />
          <img v-else-if="intro.image_en" :src="`${url}${intro.image_en.url}`" alt="Logo" />
        </div>
      </div>
    </div>
    <div class="intro-bottom-shape">
      <svg
        class="intro-bottom-shape-svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
      >
        <path
          class="intro-bottom-shape-path"
          opacity="0.33"
          d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"
        />
        <path
          class="intro-bottom-shape-path"
          opacity="0.66"
          d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"
        />
        <path
          class="intro-bottom-shape-path"
          d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"
        />
      </svg>
    </div>
  </div>
</template>



<script>
import { GET_INTRO_RU, GET_INTRO_EN } from '~/graphql/queries'
import { mapState } from 'vuex'
export default {
  props: {
    id: Number
  },
  data() {
    return {
      url: ''
    }
  },

  computed: {
    ...mapState(['lang'])
  },

  mounted() {
    this.url = process.env.STRAPI_URL
  },

  apollo: {
    intro: {
      query() {
        if (this.lang === 'ru') {
          return GET_INTRO_RU
        } else if (this.lang === 'en') {
          return GET_INTRO_EN
        }
      },
      variables() {
        return {
          id: this.id
        }
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
.intro {
  @apply pt-20;
  color: #fff;
  background-image: linear-gradient(220deg, #41aab9 0%, #7f069e 100%);
  &__title {
    font-size: 83px;
    font-weight: 300;
    letter-spacing: -1.2px;
  }
  &__container {
    max-width: 1040px;
  }

  &__text-wrapper {
    @apply pt-40;
    width: 55%;
  }

  &__img-wrapper {
    width: 45%;
  }
  &__desc {
    font-size: 19px;
    line-height: 1.7;
  }
}
.intro-bottom-shape {
  overflow: hidden;
  transform: rotate(180deg);
  &-svg {
    width: calc(200% + 1.3px);
    height: 200px;
    display: block;
    position: relative;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
  }
  &-path {
    fill: #16193b;
    -webkit-transform-origin: center;
    -ms-transform-origin: center;
    transform-origin: center;
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
}
</style>