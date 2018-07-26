<template>
    <div>
        <h1>This is Dummy.vue.</h1>
        <p>{{msg}} {{myname}}.</p>
    </div>
</template>
<script>
    export default {
        name: 'dummy',
        props: {
            myname: {
                type: String,
                default: 'default name'
            }
        },
        data: function() {
            return {
                msg: 'My name is'
            }
        }
    }
</script>