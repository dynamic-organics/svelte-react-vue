<script lang="ts">
    export default {
        props: {
            currentCount: Number, 
            user: String
        }
    }
</script>

<template>
    <h3>Current Count for {{user}}</h3>
    <div>{{currentCount}}</div>
</template>