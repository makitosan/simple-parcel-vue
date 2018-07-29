<template lang="html">
    <div id="app">
        <h1>Hello, app.vue</h1>
        <p>{{msg}}</p>
        <dummy></dummy>
        <dummy myname="Dummy"></dummy>
        <dummy myname="Paul"></dummy>
        <todo-app></todo-app>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data: function() {
            return {
                msg: 'this is a message.'
            }
        }
    }
</script>

<style lang="css">
    html,
    body {
        height: 100%;
    }
</style>