<script>
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

    dispatch("selectionMade", { 
        squares: squares,
        selectedSquare: i
    });
})
</script>

<div class="grid">
    {#each squares as square, i}
        <div on:click={() => registerSelection(i)} data-index={i}>
            <div>{square.checked ? square.symbol : ''}</div>
        </div>
    {/each}
</div>

<style lang='scss'>
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
                border-left: 1px solid grey;
                border-right: 1px solid grey;
            }

            &:hover {
                background-color: #7777ddaa;
            }
        }
    }
</style>