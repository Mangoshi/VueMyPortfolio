<template>
	<div>
		<div class="centered heroName">
			<h3>Seán Óg Durack Monks</h3>
			<h4>( m a n g o s h i )</h4>
		</div>
		<div class="centered heroMangoContainer">
			<h1 class="heroMango">🥭</h1>
		</div>
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
	/* ANIMATIONS */
	@keyframes yoyo {
		0%{
			font-size: 10rem;
		}
		50%{
			font-size: 0;
		}
		100%{
			font-size: 10rem;
		}
	}
	@keyframes slow-rotate {
		0%{
			transform: rotate(360deg);
		}
		50%{
			transform: rotate(-380deg);
		}
		100%{
			transform: rotate(360deg);
		}
	}
	.heroName {
		margin: 15vw 0 3em 0;
		color: white;
	}
	.heroMangoContainer {
		overflow: hidden;
	}
	.heroMango{
		font-size: 10rem;
		-webkit-animation: slow-rotate ease-in-out 20s infinite, yoyo ease-in-out 20s infinite;
		animation: slow-rotate ease-in-out 20s infinite, yoyo ease-in-out 20s infinite;
		-webkit-animation-play-state: paused;
		animation-play-state: paused;
	}
	.heroMango:hover{
		-webkit-animation-play-state: running;
		animation-play-state: running;
	}
	.heroName *, .heroMango {
		user-select: none;
	}
</style>
