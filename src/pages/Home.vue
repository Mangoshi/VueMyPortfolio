<template>
	<div class="centered homeTitle">
		<h3>Seán Óg Durack Monks</h3>
		<h4>Year 3 Frontend Development Portfolio</h4>
	</div>
</template>

<script>

export default {
	title: 'Home | VueMyPortfolio',
	name: 'Home',
		components: {
			
		}
	}
</script>

<style>
	.homeTitle{
		margin-top: 6vw;
	}
	.homeTitle *{
		user-select: none;
		transition: 0.3s;
	}
	.homeTitle:hover *{
		font-size: 200%;
	}
</style>
