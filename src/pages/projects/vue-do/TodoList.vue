<template>
	<div>
        <b-card 
        header="TodoList" 
        header-tag="header"
        >
        <b-list-group>
            <!--Using a for-loop here to loop through each entry in our "list" array-->
            <TodoItem v-for="item in list" :key="item.id" :todo="item" />
        </b-list-group>
            <template v-slot:footer>
                <!--Using v-on:keyup here instead of @click or @etc.. just to show it exists-->
                <input type="text" v-model="newTodoText" v-on:keyup.enter="addNewTodo()">
                <!--@click="addNewTodo()" runs a the function when the button is clicked-->
                <b-button class="float-end" variant="primary" @click="addNewTodo()">Add</b-button>
            </template>
        </b-card>
	</div>
</template>

<script>

import TodoItem from '@/pages/projects/vue-do/TodoItem.vue'

export default {
	name: 'TodoList',
	components: {
		TodoItem
	},
    data() {
        return {
            list: [
                {
                    id: 1,
                    text: "Clean the house",
                    done: true
                },
                {
                    id: 2,
                    text: "Buy milk!",
                    done: false
                },
                {
                    id: 3,
                    text: "Create todo app using Vue",
                    done: false
                }
            ],
            newTodoText: ""
        }
    },
    // methods Object is how we add our own functions
    methods: {
        addNewTodo(){
            // If the input was blank, as a blank input will return as false, alert the user & return nothing.
            if(!this.newTodoText){
                alert("Please enter some text!")
                return;
            }
            // Here we use Math.max to return the length of our list[] array.
            // .apply causes it to run what's in the brackets before Math.max
            // this.list.map(t => t.id) loops through our list and makes a new array, which just has the IDs in it
            // Max is then applied to this new array, it gets the maximum, and returns that number. 
            // We then add one to it, so we can use it as our new ID.
            const newId = Math.max.apply(null, this.list.map(t => t.id)) + 1

            // We now push our new Object to the list[] array, using our newId
            this.list.push({
                id: newId,
                text: this.newTodoText,
                done: false
            })

            this.newTodoText=""
        }
    }
}
</script>

<style>

</style>
