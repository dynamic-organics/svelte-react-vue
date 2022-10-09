<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import Grid from './components/Grid.vue'
import PlayerName from './components/PlayerName.vue'
import UserCount from './components/UserCount.vue'

</script>

<script lang="ts">
  const calculateWinnner = ((user) => {
		let winners = [
			[0,1,2],
			[3,4,5],
			[6,7,8],
			[0,3,6],
			[1,4,7],
			[2,5,8],
			[0,4,8],
			[6,4,2]
		]
		// Horizontal
		let win = false;

		for (let combo of winners) {
			let win = checkCombo(combo, user);
			if (win) { 
				console.log("We got a winner!");
				console.log(user);
				return win;
			}
		}
		
		return false;
	})

	const checkCombo = ((arr, user) => {
		let one = false, two = false, three = false; 

		for (let square of user.squares) {
			console.log(`Checking ${square}`);
			console.log(arr[0]);
			if (square === arr[0]) {
				
				console.log("Matches one");
				one = true;
			}
			if (square === arr[1]) {
				console.log("Matches two");
				two = true;
			}
			if (square === arr[2]) {
				console.log("Matches three");
				three = true;
			}
		}

		return one && two && three;
	})

  export default {
    data() {
      return {
        users: [
          {
            name: "Domo Arigato",
            squares: []
          }, 
          {
            name: "Mr. Roboto",
            squares: []
          }
        ], 
        currentUser: undefined,
        gameOver: false,
        symbol: "X"
      }
    },
    methods: {
      updatePlayerName (i, name) {
        this.users[i].name = name;
      }, 
      selectionMade (i) {
        this.currentUser.squares.push(i);
        if(calculateWinnner(this.currentUser)) {
          this.gameOver = true;
          return;
        }

        this.currentUser = this.currentUser == this.users[0] ? this.users[1] : this.users[0];
        this.symbol = this.symbol == "X" ? "O" : "X";
      }
    },
    components: {
      Grid,
      PlayerName,
      UserCount
    }, 
    mounted() {
      this.currentUser = this.users[0];
    }
  }
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <div class="names">
      <PlayerName v-for="(user, index) in users" :key="`user-${index}`" :playerName="user.name" @nameUpdated="(msg) => updatePlayerName(index, msg)" />
    </div>
    <Grid @selectionMade="(msg) => selectionMade(msg)" :symbol="symbol"/>
    <div class="user-count">
      <UserCount v-for="(user, index) in users" :key="`user-${index}`" :currentCount="user.squares.length" :user="user.name" />
    </div>
  </main>
  <h2 v-if="gameOver" class="game-over">GAME OVER! {{currentUser.name}} WINS!</h2>
</template>

<style scoped lang="scss">
  header {
    line-height: 1.5;
  }

  .logo {
    display: block;
    margin: 0 auto 2rem;
  }

  .names {
    margin: 1em auto;
    display: 1fr 1fr;
    width: 55%;
    column-gap: 2em;
    > input:first-child {
      margin-right: 1em;
    }
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

  @media (min-width: 1024px) {
    header {
      display: flex;
      place-items: center;
      padding-right: calc(var(--section-gap) / 2);
    }

    .logo {
      margin: 0 2rem 0 0;
    }

    header .wrapper {
      display: flex;
      place-items: flex-start;
      flex-wrap: wrap;
    }
  }
</style>
