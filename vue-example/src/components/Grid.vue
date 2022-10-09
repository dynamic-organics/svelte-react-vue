<script lang="ts">
    // This feels unnecessarily verbose of a structure. It's attempting to abstract a class paradigm without 
    // explicitely forcing you to declare a class. Admittedly does make it easier to understand the 
    // intended functionality of the component
    export default {
        data() {
            return {
                squares: [
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                ]
            }            
        },
        props: {
            symbol: String
        },
        emits: ['selectionMade'],
        methods: {
            registerSelection(i : number) {
                this.squares[i] = {
                    checked: true, 
                    symbol: this.symbol
                }
                console.log(this.squares);
                this.$emit('selectionMade', i)
            }
        }
    }
</script>

<!-- All vue component render code (e.g. HTML) needs to be encapsulated in a template root element, it seems -->
<template>
    <div class="grid">
    <!-- 
        Postiive: if using the short-hand variants, can provide a lot of actios in a succinct way
        Negative: Placing everything in quotes, including potentially complex javascript, makes it 
        much more difficult for auto-completion and code-sanity tools. Also reduces readability as it 
        can become difficult to visually distinguish between a true static value vs a stringified function.
    -->
    <div v-for="(square, index) in squares" :key="index" @click="registerSelection(index)">
        <div v-if="square.checked">{{square.symbol}}</div>
    </div>
</div>
</template>

<!-- Supports in-component, scoped styling by default -->
<style scoped lang='scss'>
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