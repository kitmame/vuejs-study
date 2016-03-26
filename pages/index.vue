<template>
	<div>index.vue!!</div>
	<ul>
		<li v-for="fruit in fruits">
			{{ fruit.text }}
		</li>
	</ul>
</template>

<script>
export default {
	data () {
		return {
			fruits: [
				{ text: 'apple', price: '150' },
				{ text: 'banana', price: '100' },
				{ text: 'orange', price: '400' },
				{ text: 'peach', price: '250' },
			],
		}
	},
}
</script>
