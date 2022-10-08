<script>
import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();

let name;

const updateName = (() => {
    dispatch('nameUpdated', { name })
})

</script>
<input bind:value={name} type="text" placeholder="Input Name" on:input={updateName} />