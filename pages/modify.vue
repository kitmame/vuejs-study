<template>
  <div>modify.vue</div>
  <table>
    <tr>
      <td>タイトル</td>
      <td><input type="text" /></td>
    </tr>
    <tr>
      <td>URL</td>
      <td><input type="text" /></td>
    </tr>
    <tr>
      <td>コメント</td>
      <td><input type="text" /></td>
    </tr>
  </table>
  <button>MODIFY</button>
  <a v-link="{ path: '/' }">index</a>
</template>

<script>
export default {
  data () {
    return {
    }
  },
}
</script>
