<template>
    <div>
        <div>
            <h4>TODO LIST</h4>
        </div>
        <div id="controller">
            <input v-model="todoItem" v-on:keypress.enter="addItem" type="text">
            <button @click="addItem">ADD</button>
        </div>
        <div id="todos">
            <div v-for="item in todoList">
                <span>{{item}}</span>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'TodoApp',
        data: function() {
            return {
                todoList: [],
                todoItem: ''
            }
        },
        methods: {
            addItem: function() {
                this.todoList.push(this.todoItem);
                this.todoItem = '';
            }
        }
    }
</script>