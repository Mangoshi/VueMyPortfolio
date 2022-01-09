<template>
	<div class="navLinks">
		<b-nav>
			<router-link :to="{name: 'home'}">Home</router-link>
			<router-link :to="{name: 'projects'}">Projects</router-link>
			<router-link :to="{name: 'contact'}">Contact</router-link>
		</b-nav>
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
		margin-left: 3.2em;
		display: flex;
		justify-content: center;
	}
	.navLinks *{
		margin: 0 1em;
		color: black;
		text-shadow: 1px 2px 2px #333;
		font-size: 2rem;
		transition: 0.5s;
	}
	.navLinks *:hover{
		color: aquamarine;
		text-decoration: none;
	}
	.router-link-exact-active{
		color: aqua;
		text-decoration: underline;
	}
</style>
