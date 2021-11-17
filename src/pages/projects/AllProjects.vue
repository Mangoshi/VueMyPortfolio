<template>
	<div>
		This is the AllProjects component.
		<hr>
		<input type="text" v-model="searchTerm">
		<div
		v-for="project in filteredProjects"
		:key="project.id"
		>
		Title: {{ project.title }} <br>
		Description: {{ project.description }} <br>
		Date: {{ project.date }} <br>
		Demo: <router-link :to="{name: project.demo}">Demo</router-link>
		<hr>
		</div>
	</div>
</template>

<script>

export default {
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
				return project.title.toLowerCase().includes(this.searchTerm.toLowerCase())
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

</style>
