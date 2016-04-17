<template>
  <div>index.vue!!</div>
  <ul>
    <li v-for="fruit in fruits">
      {{ fruit.text }}
    </li>
  </ul>
  <table border>
    <tr v-for="bookmark in bookmarks">
      <td>{{ $index + 1 }}</td>
      <td><a href="{{ bookmark.url }}">{{ bookmark.name }}</a></td>
      <td>{{ bookmark.comment }}</td>
      <td>{{ bookmark.createdAt }}</td>
      <td><button v-on:click="modify($index+1)">MODIFY</button></td>
      <td><button v-on:click="remove($index+1)">REMOVE</button></td>
    </tr>
  </table>
  <a v-link="{ path: '/add' }">ADD</a>
</template>

<script>
export default {
  data () {
    return {
      bookmarks: [
        { name: 'Google', url: 'http://www.google.com/' , comment: 'teacher!', createdAt: '2016-03-27' },
        { name: 'YouTube', url: 'https://www.youtube.com/' , comment: 'movie supplier', createdAt: '2016-03-20' },
        { name: '日テレ', url: 'http://www.ntv.co.jp/' , comment: 'broadcast', createdAt: '2016-03-24' },
      ],
      fruits: [
        { text: 'apple', price: '150' },
        { text: 'banana', price: '100' },
        { text: 'orange', price: '400' },
        { text: 'peach', price: '250' },
      ],
    }
  },
  methods: {
    modify: function(index) {
      this.$route.router.go({ name: 'modify', params: { id: index} });
    },
    remove: function(index) {
      alert('remove!! ' + index);
    },
  },
}
</script>
