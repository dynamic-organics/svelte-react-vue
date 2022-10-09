<script>
    export let currentCount = 0;
    export let user = "Mr. Roboto";
</script>

<!-- Arguablly good or bad: svelte does not require a "root" DOM element for components -->
<h3>Current Count for {user}:</h3>
<div>{currentCount}</div>

<style>

</style>