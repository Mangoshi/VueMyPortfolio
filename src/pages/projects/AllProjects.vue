<template>
	<b-container>
		<b-row align-h="center">
			<b-card v-for="project in filteredProjects" :key="project.id" class="projectCard">
				<b-card-img v-if="project.images[0]" :src="`./img/${project.images[0]}`" class="mb-4 cardImage"></b-card-img>
				<b-card-img v-else src="../../../public/img/missing.png" class="mb-4"></b-card-img>
				<b-card-title>{{project.title}}</b-card-title>
				<b-badge pill variant="info" v-for="tag in project.tags" :key="tag" class="mr-1">{{ tag }}</b-badge>
				<b-card-text class="mt-3 d-flex flex-column">
					<p>{{ project.description }}</p>
					<p>Date: {{ project.date }}</p>
					<b-button-group class="d-flex justify-content-center cardButtons">
						<b-badge variant="dark" class="mr-1" v-if="project.demo"><router-link class="badgeLink" :to="{ name: project.demo }">Demo</router-link></b-badge>
						<b-badge variant="dark" class="mr-1" v-if="project.links.github"><a class="badgeLink" :href="project.links.github" target="_blank">GitHub</a></b-badge>
						<b-badge variant="dark" class="mr-1" v-if="project.links.hosted"><a class="badgeLink" :href="project.links.hosted" target="_blank">Hosted</a></b-badge>
					</b-button-group>
				</b-card-text>
			</b-card>
		</b-row>
	</b-container>
</template>

<script>

export default {
	title: 'Projects | VueMyPortfolio',
	name: 'AllProjects',
	components: {
		
	},
	data(){
		return {
			projects: [],
			searchTerm: ""
		}
	},
	// Using computed to monitor the global data we specify to ensure the function is ran whenever the data changes
	computed:{
		filteredProjects(){
			return this.projects.filter(project  => {
				return project.description.toLowerCase().includes(this.searchTerm.toLowerCase())
			})
		}
	},
	mounted(){
		this.getAllProjects()
	},
	methods:{
		getAllProjects(){
			fetch('./data/projects.json')
			.then(res => res.json())
			.then(data => {
				console.log("projects: ", data)
				this.projects = data
			})
		}
	}
}
</script>

<style>
	.badgeLink, .badgeLink:link, .badgeLink:visited{
		color: aquamarine !important;
		font-size: 1.25em;
	}
	.badgeLink:hover{
		color: pink !important;
		text-decoration: none;
	}
	.projectCard{
		width: 300px;
		text-align: center;
		margin: 10px 10px !important;
	}
	.cardImage{
		max-width: 256px !important;
		
	}
	.cardButtons{
		font-size: 1.25em;
	}
	
</style>
