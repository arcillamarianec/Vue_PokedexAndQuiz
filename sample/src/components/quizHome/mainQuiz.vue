<template>
  <div id="app">
    <div class="quiz-container">
      <h1 class="title">Who's that Pokémon?</h1>
      <div v-if="gameStarted">
        <div v-if="showPokemon">
          <template v-if="pokemonImage !== null">
            <!-- Display Pokémon image or silhouette -->
            <img :src="pokemonImage" alt="Who's that Pokémon?" class="pokemon-image" />
            <!-- Display multiple-choice options -->
            <div v-for="(option, index) in options" :key="index">
              <button @click="checkGuess(option)">{{ option }}</button>
            </div>
          </template>
          <template v-else>
            <!-- Display loading spinner or message -->
            <div class="loading">
              <p>Loading Pokémon...</p>
            </div>
          </template>
        </div>
        <div v-else>
          <h2>{{ feedback }}</h2>
          <button @click="nextPokemon">Next Pokémon</button>
        </div>
        <div v-if="gameOver">
          <p class="game-over">Game Over! Your final score: {{ score }}</p>
        </div>
        <div>
          <p>Time left: {{ timeLeft }}</p>
          <p>Score: {{ score }}</p>
        </div>
      </div>
      <div v-else>
        <button @click="startGame">Start Game</button>
      </div>
    </div>
    <!-- Audio element for background music -->
    <audio id="background-music" autoplay loop>
      <source src="/src/assets/background_music.mp3" type="audio/mp3">
    </audio>
  </div>
</template>

<script>
import axios from "axios";
import Swal from 'sweetalert2';

export default {
  name: "App",
  data() {
    return {
      gameStarted: false,
      gameOver: false,
      pokemonList: [],
      pokemonImage: null,
      correctAnswer: "",
      score: 0,
      showPokemon: true,
      options: [],
      feedback: "",
      timeLeft: 30
    };
  },
  methods: {
    startGame() {
      this.gameStarted = true;
      this.gameOver = false;
      this.score = 0;
      this.timeLeft = 30;
      this.fetchPokemonList();
      this.startTimer();
    },
    fetchPokemonList() {
      axios.get("https://pokeapi.co/api/v2/pokemon-species/?limit=100")
        .then(response => {
          this.pokemonList = response.data.results;
          this.fetchPokemon();
        })
        .catch(error => {
          console.error("Error fetching Pokemon list:", error);
        });
    },
    fetchPokemon() {
      const randomIndex = Math.floor(Math.random() * this.pokemonList.length);
      const randomPokemon = this.pokemonList.splice(randomIndex, 1)[0];
      this.correctAnswer = randomPokemon.name;
      this.fetchPokemonDetails(this.correctAnswer);
    },
    fetchPokemonDetails(pokemonName) {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(response => {
          this.pokemonImage = response.data.sprites.front_default;
          this.generateOptions();
        })
        .catch(error => {
          console.error("Error fetching Pokemon details:", error);
        });
    },
    generateOptions() {
      const options = [this.correctAnswer];
      while (options.length < 3) {
        const randomIndex = Math.floor(Math.random() * this.pokemonList.length);
        const randomOption = this.pokemonList[randomIndex].name;
        if (!options.includes(randomOption)) {
          options.push(randomOption);
        }
      }
      this.options = this.shuffleArray(options);
    },
    checkGuess(option) {
      if (option === this.correctAnswer) {
        this.score++;
        this.feedback = "Correct!";
      } else {
        this.feedback = "Incorrect. The correct answer is " + this.correctAnswer;
      }
      this.showPokemon = false;
    },
    nextPokemon() {
  this.feedback = "";
  this.showPokemon = true;
  this.pokemonImage = null; // Reset the pokemonImage to null
  if (this.pokemonList.length > 0) {
    this.fetchPokemon();
  } else {
    this.endGame();
  }
},
    startTimer() {
      this.timer = setInterval(() => {
        if (this.timeLeft > 0) {
          this.timeLeft--;
        } else {
          this.endGame();
        }
      }, 1000);
    },
    endGame() {
  clearInterval(this.timer);
  this.gameStarted = false;
  this.gameOver = true;
  
  // Display SweetAlert2 alert with the final score
  Swal.fire({
    icon: 'info',
    title: 'Game Over!',
    text: `Your final score: ${this.score}`,
    confirmButtonText: 'OK'
  });
},
    displayFinalScore() {
      alert("Game Over! Your final score: " + this.score);
    },
    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }
  }
};
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-image: url('/src/assets/pokeball3.gif');
  background-size: cover;
  animation: slowBackgroundMove 1s linear infinite;
}

@keyframes slowBackgroundMove {
  from { background-position: 0 0; }
  to { background-position: 100% 0; }
}

.title {
  margin-top: 30px;
  text-align: center;
  margin-bottom: 20px;
}

.quiz-container {
  text-align: center;
  background-color: #ff9b9b;
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
}

.pokemon-image {
  width: 400px;
  height: 400px;
}

.loading {
  text-align: center;
}

.game-over {
  font-size: 1.5em;
}
</style>
