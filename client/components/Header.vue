<template>
  <header class="main-header">
    <nav class="main-nav">
      <!-- {{ $store.state.localStorage.lang }} -->
      <Logo :lang="lang" />
      <ul class="main-nav__menu">
        <li class="main-nav__menu-item" v-for="item in navigations" :key="item.id">
          <nuxt-link
            class="main-nav__menu-link"
            exact
            no-prefetch
            v-if="item.title_en"
            active-class="current"
            :to="`${item.url}`"
          >{{ item.title_en }}</nuxt-link>

          <nuxt-link
            class="main-nav__menu-link"
            exact
            no-prefetch
            v-else-if="item.title_ru"
            active-class="current"
            :to="`${item.url}`"
          >{{ item.title_ru }}</nuxt-link>
        </li>
      </ul>
      <select @change="onChange($event)">
        <option value="ru" :selected="lang == 'ru'">Русский</option>
        <option value="en" :selected="lang == 'en'">English</option>
      </select>
      <button class="green-btn" v-if="lang === 'ru'">Оставить заявку</button>
      <button class="green-btn" v-else-if="lang === 'en'">Contact us</button>
    </nav>
  </header>
</template>

<script>
import { GET_NAV_RU, GET_NAV_EN } from '~/graphql/queries'
import { mapMutations, mapState } from 'vuex'
import Logo from './Logo'
export default {
  components: {
    Logo
  },

  apollo: {
    navigations: {
      query() {
        if (this.lang === 'ru') {
          return GET_NAV_RU
        } else if (this.lang === 'en') {
          return GET_NAV_EN
        }
      }
    }
  },
  computed: {
    ...mapState(['lang'])
  },
  methods: {
    onChange(event) {
      this.setLang(event.target.value)
    },
    ...mapMutations({
      setLang: 'setLang'
    })
  }
}
</script>

<style lang="postcss" scoped>
.main-header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  font-size: 20px;
  padding: 0 20px;
  background: rgba(22, 25, 59, 0.9);
}
.main-nav {
  @apply flex items-center justify-between mx-auto;
  width: 85%;
  min-height: 80px;
  padding-right: 180px;
}

.main-nav__menu {
  @apply flex items-center;
}
.main-nav__menu-link {
  @apply flex items-center;
  min-height: 80px;
  padding: 20px;
  color: #fff;
  font-size: 20px;
}
.main-nav__menu-link.current {
  border-bottom: 5px solid #bb1aac;
  padding-bottom: 15px;
}
</style>
