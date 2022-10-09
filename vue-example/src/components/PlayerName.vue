<script lang="ts">
    export default {
        props: {
            playerName: String
        },
        emits: ['nameUpdated'],
        methods: {
            updateName(e) {
                this.$emit('nameUpdated', e.target.value);
            }
        }
    }
</script>

<template>
    <input :value="playerName" placeholder="Input Name" type="text" @input="(e) => updateName(e)" />
</template>