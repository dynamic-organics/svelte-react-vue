<script lang="ts">
    export default {
        props: {
            playerName: String
        },
        emits: ['nameUpdated'],
        methods: {
            // Very much dislike that this entire framework still relies on the utterly confusing "this" context
            updateName(e) {
                console.log("Updating name");
                this.$emit('nameUpdated', e.target.value);
            }
        }
    }
</script>

<template>
    <input :value="playerName" placeholder="Input Name" type="text" @input="(e) => updateName(e)" />
</template>