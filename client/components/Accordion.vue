<template>
  <div>
    {{lang}}
    {{accordions}}
    <VueFaqAccordion :items="items" />
  </div>
</template>

<script>
import VueFaqAccordion from 'vue-faq-accordion'
import { mapMutations, mapState } from 'vuex'
import { GET_ACCORDION_EN, GET_ACCORDION_RU } from '~/graphql/queries'
export default {
  components: {
    VueFaqAccordion
  },
  apollo: {
    accordions: {
      query() {
        if (this.lang === 'ru') {
          return GET_ACCORDION_RU
        } else if (this.lang === 'en') {
          return GET_ACCORDION_EN
        }
      }
    }
  },
  computed: {
    ...mapState(['lang'])
    // bla() {
    //   this.accordions.forEach((item, index) => {
    //     this.items[i].title = this.accordions[i].title_r
    //   })
    // }
  },
  data() {
    return {
      items: []
    }
  }
}
</script>