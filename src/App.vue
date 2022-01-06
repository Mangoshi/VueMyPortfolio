<template>
	<div>
		<nav-bar />
		<b-container>
			<router-view />
		</b-container>
	</div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
export default {
	name: 'App',
	components: {
		NavBar
	}
}
</script>

<style>
	*{
		font-family: 'Courier New', Courier, monospace;
	}
	body{
		background-color: #dadada;
	}
	.centered{
		text-align: center !important;
	}
</style>
