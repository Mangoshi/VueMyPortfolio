<template>
	<div class="centered contactInfo">
		<h3 class="contactQuestion">Want to get in touch?</h3>
		<h4 class="contactEmail"><a href="mailto:mangoshimonks@gmail.com">Send me an email :)</a></h4>
	</div>
</template>

<script>

export default {
	title: 'Contact | VueMyPortfolio',
	name: 'Contact',
		components: {
			
		}
	}
</script>

<style>
	.contactInfo{
		color: white;
		margin-top: 15vw;
	}
	.contactQuestion{
		user-select: none;
	}
	.contactEmail{
		user-select: all;
	}
	.contactEmail a{
		color: aqua;
	}
	.contactEmail a:hover{
		color: aquamarine;
		text-decoration: none;
	}
</style>
