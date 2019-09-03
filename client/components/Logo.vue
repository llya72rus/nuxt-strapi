<template>
  <nuxt-link to="/" class="logo">
    <img :src="`/images/nanosemantics_logo_${lang}.svg`" width="200" alt="Logo" />
  </nuxt-link>
</template>
<script>
export default {
  props: {
    lang: String
  }
}
</script>
<style lang="postcss" scoped>
.logo {
  @apply flex-shrink-0;
  width: 200px;
}
</style>

