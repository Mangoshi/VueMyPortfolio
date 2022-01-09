<template>
    <b-list-group-item>
        <span v-if='todo.done' class='done'>{{ todo.text }}</span>
        <span v-else>{{ todo.text }}</span>
        <span v-if='todo.done'>&#128077;</span>
        <b-button 
            v-else 
            class='align-self-end'
            pill variant='outline-success' 
            @click='completeTodo'>&#10003;
        </b-button>
        <b-button 
            class='align-self-end'
            pill variant='outline-danger' 
            @click='deleteTodo'>&#10060;
        </b-button>
    </b-list-group-item>
</template>

<script>
    export default {
        name: "TodoItem",
        // using props here instead of data() to add attributes to each of our TodoItems
        props: {
            todo: {
                type: Object,
                required: true
            }
        },
        methods: {
            completeTodo() {
                this.$emit("todo-completed", this.todo);
            },
            deleteTodo() {
                this.$emit("todo-deleted", this.todo);
            }
        }
        
    }
</script>

<style>
    .done{
        text-decoration: line-through;
    }
</style>