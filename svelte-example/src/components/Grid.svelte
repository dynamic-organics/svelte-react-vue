<script>
// We'll be emitting an event on square selection; need to import the function to create our dispatch method
import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();

const squares = [
    {}, 
    {}, 
    {}, 
    {}, 
    {}, 
    {}, 
    {}, 
    {}, 
    {}, 
];

export let symbol = "X";

const registerSelection = ((i) => {
    squares[i] = { 
        checked: true,
        symbol: symbol
    }

    // Dispatch the function to the parent components, parent component can choose if they want to listen or not
    dispatch("selectionMade", { 
        squares: squares,
        selectedSquare: i
    });
})
</script>

<!-- This is the HTML template, complelete with dynamic data population using #each-->
<div class="grid">
    {#each squares as square, i}
        <div on:click={() => registerSelection(i)} data-index={i}>
            <div>{square.checked ? square.symbol : ''}</div>
        </div>
    {/each}
</div>

<style lang='scss'>
    /*
        - Stylig in this area is component-scoped, so componenet-scoped naming (e.g. BEM) is unnecessary
        - Svelte will automatically provide a namespaced scoped to this component
        - Styles in this area will not bleed into other areas except in certain cases for children or if using the :global() function
    */
    .grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
        border: 2px solid black;
        height: 500px;
        width: 500px;
        margin-left: auto; 
        margin-right: auto;

        > div {

            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            &:not(:nth-child(1n+7)) {
                border-bottom: 1px solid grey;
            }

            &:nth-child(3n+2) {
                // background-color: red;
                border-left: 1px solid grey;
                border-right: 1px solid grey;
            }

            &:hover {
                background-color: #7777ddaa;
            }
        }
    }
</style>