<script lang="ts">
	import Grid from "./components/Grid.svelte";
    import PlayerName from "./components/PlayerName.svelte";
    import UserCount from "./components/UserCount.svelte";
	import { calculateWinner } from './utils.js';
	
	export let name: string;

	let users = [
		{
			name: "Domo Arigato",
			squares: []
		}, 
		{
			name: "Mr. Roboto",
			squares: []
		}
	]

	let currentUser = users[0];
	let symbol = "X";
	let gameOver = false;

	const updateSelection = ((e) => {
		
		currentUser.squares.push(e.detail.selectedSquare);
		if(calculateWinner(currentUser)) {
			gameOver = true;
			return;
		}

		currentUser = currentUser == users[0] ? users[1] : users[0];
		symbol = currentUser == users[0] ? "X" : "O";
		users = [...users];	
	})

	const updatePlayerName = ((e, i) => {
		users[i].name = e.detail.name;
		users = [...users];
	})
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<div class="names">
		{#each users as user, i}
			<PlayerName on:nameUpdated={(e) => updatePlayerName(e, i)} />
		{/each}
	</div>
	<Grid on:selectionMade={updateSelection} symbol={symbol} />
	<div class="user-count">
		{#each users as user}
			<UserCount user={user.name} currentCount={user.squares.length} />
		{/each}
	</div>

	{#if gameOver}
		<h2 class="game-over">GAME OVER! {currentUser.name} WINS!</h2>
	{/if}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	.user-count {
		display: grid;
		width: 500px;
		margin-left: auto;
		margin-right: auto;
		grid-template-columns: 3fr 1fr;
		align-items: center;
	}

	.game-over {
		position: fixed;
		top: 25vh;
		left: 0;
		width: 100vw;
		height: 25vh;
		background: rgba(0, 0, 0, 0.7);
		color: white;

		display: flex;
		align-items: center;
		justify-content: center;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>