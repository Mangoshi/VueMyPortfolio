<template>
	<div>
		This is the AllProjects component.
		<hr>
		<div
		v-for="project in projects"
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
			projects: []
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
