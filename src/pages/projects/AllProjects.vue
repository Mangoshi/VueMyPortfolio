<template>
	<div class="columns">
		<div class="column">
			<b-field label="Search Projects">
				<b-input v-model="searchTerm"/>
			</b-field>

			<div class="card" v-for="project in filteredProjects" :key="project.id">
				<div class="card-image">
					<figure class="image is-4by3">
						<img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
					</figure>
				</div>
				<div class="card-content">
					<div class="media">
						<!-- <div class="media-left">
							<figure class="image is-48x48">
								<img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
							</figure>
						</div> -->
						<div class="media-content">
							<p class="title is-4">{{project.title}}</p>
							<b-taglist>
								<b-tag v-for="tag in project.tags" :key="tag" type="is-info">{{ tag }}</b-tag>
							</b-taglist>
							<p class="subtitle is-6">{{project.description}}</p>
							Date: {{ project.date }} <br>
							<p v-if="project.demo"> Demo: <router-link :to="{name: project.demo}">Demo</router-link></p>
						</div>
					</div>
				<div class="content">
					<!-- Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Phasellus nec iaculis mauris. <a>@bulmaio</a>.
					<a href="#">#css</a> <a href="#">#responsive</a>
					<br>
					<time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time> -->
				</div>
			</div>
		</div>
	</div>

<!-- 
		Title: {{ project.title }} <br>
		Description: {{ project.description }} <br>
		Date: {{ project.date }} <br>
		<p v-if="project.demo"> Demo: <router-link :to="{name: project.demo}">Demo</router-link></p>
		<hr>
		</div> -->
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

</style>
