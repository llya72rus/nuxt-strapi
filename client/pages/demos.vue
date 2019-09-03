<template>
  <div>
    <div class="container">
      Demo
      <ul>
        <li v-for="user of users" :key="user.id">
          <a href="#" @click.prevent="openUser(user)">{{user.name}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const users = await $axios.$get(
      'https://jsonplaceholder.typicode.com/users'
    )
    return { users }
  },
  data() {
    return {
      users: []
    }
  },
  head() {
    return {
      title: 'Демо',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description'
        }
      ]
    }
  }
}
</script>


