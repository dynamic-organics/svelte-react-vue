<script lang="ts">
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
                this.$emit('selectionMade', i)
            }
        }
    }
</script>

<template>
    <div class="grid">
    <div v-for="(square, index) in squares" :key="index" @click="registerSelection(index)">
        <div v-if="square.checked">{{square.symbol}}</div>
    </div>
</div>
</template>

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
                border-left: 1px solid grey;
                border-right: 1px solid grey;
            }

            &:hover {
                background-color: #7777ddaa;
            }
        }
    }
</style>