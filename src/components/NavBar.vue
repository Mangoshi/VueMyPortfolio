<template>
	<div class="navLinks">
		<router-link :to="{name: 'home'}">Home</router-link>
		<router-link :to="{name: 'projects'}">Projects</router-link>
		<router-link :to="{name: 'contact'}">Contact</router-link>
	</div>
</template>

<script>

export default {
	name: 'NavBar',
	components: {}
}
</script>

<style>
	.navLinks{
		text-align: center;
		padding-top: 2em;
	}
	.navLinks *{
		margin: 0em 1em;
		color: black;
		text-shadow: 1px 2px 2px #333;
		font-size: 2em;
		transition: 0.5s;
	}
	.navLinks *:hover{
		color: aquamarine;
		font-size: 2.5em;
		text-decoration: none;
		padding: 10px;
	}
	.router-link-exact-active{
		color: aqua;
		font-size: 2.5em;
	}
</style>
