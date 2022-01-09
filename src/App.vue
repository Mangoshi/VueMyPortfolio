<template>
	<b-container fluid>
		<nav-bar />
		<b-container fluid>
			<router-view />
		</b-container>
	</b-container>
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
		background-image: url("../public/img/bg.jpg");
		background-position: center top;
		background-size: 100%;
	}
	.centered{
		text-align: center !important;
	}
</style>
