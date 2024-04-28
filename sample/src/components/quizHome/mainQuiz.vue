<template>
  <div id="appQuiz">
    <div class="quiz-container">
      <h1 class="titleQuiz">Who's that Pokémon?</h1>
      <div v-if="gameStarted">
        <div v-if="showPokemon">
          <div>
            <p>Time left: {{ timeLeft }}</p>
            <!-- <p>Score: {{ score }}</p> -->
          </div>
          <template v-if="pokemonImage !== null">
            <!-- Display Pokémon image or silhouette -->
            <img
              :src="pokemonImage"
              alt="Who's that Pokémon?"
              class="pokemon-image"
            />
            <!-- Display multiple-choice options -->
            <div class="choices-container">
              <div v-for="(option, index) in options" :key="index">
                <button @click="checkGuess(option)" class="choices">
                  {{ option }}
                </button>
              </div>
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
      </div>
      <div v-else>
        <button @click="startGame">Start Game</button>
      </div>
    </div>
    <!-- Audio element for background music -->
    <audio id="background-music" autoplay loop>
      <source src="/src/assets/background_music.mp3" type="audio/mp3" />
    </audio>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

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
      timeLeft: 30,
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
      axios
        .get("https://pokeapi.co/api/v2/pokemon-species/?limit=100")
        .then((response) => {
          this.pokemonList = response.data.results;
          this.fetchPokemon();
        })
        .catch((error) => {
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
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then((response) => {
          this.pokemonImage = response.data.sprites.front_default;
          this.generateOptions();
        })
        .catch((error) => {
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
        // this.feedback = "Incorrect. The correct answer is " + this.correctAnswer;
        this.feedback = "Incorrect.";
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
        title: (this.resultMessage = `Your final score: ${this.score}`),
        width: 500,
        padding: "3em",
        color: "#000000",
        background: "#fff",
        confirmButtonText: "OK",
        showDenyButton: true,
        denyButtonText: "Backpack",
        customClass: {
          confirmButton: "green-btn",
          denyButton: "red-btn",
          title: "mounted_title",
        },
      }).then((result) => {
        if (result.isConfirmed) {
        } else if (result.isDenied) {
          this.$router.push("/backpack");
        }
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
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");

#appQuiz {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-image: url("/src/assets/pokeball3.gif");
  background-size: cover;
  animation: slowBackgroundMove 1s linear infinite;
}

@keyframes slowBackgroundMove {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 100% 0;
  }
}

.titleQuiz {
  margin-top: 30px;
  text-align: center;
  margin-bottom: 20px;
}

.quiz-container {
  text-align: center;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  border: 10px solid black;
  padding: 2vh;
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
.choices-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Three columns */
  grid-template-rows: auto; /* One row, rows will adjust automatically */
  gap: 10px; /* Gap between buttons */
}

.choices {
  width: 100%;
  padding: 10px;
  text-align: center;
  text-transform: capitalize;
}
.choices:hover {
  background-color: black;
  color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  text-transform: capitalize;
}
.green-btn:hover {
  background-color: #74ee16 !important;
  color: black !important;
}
.swal-title {
  color: black;
  font-family: "Press Start 2P", sans-serif;
  font-size: 2vh;
}
.swal2-title,
.mounted_title {
  font-size: 5vh;
  color: black;
  font-family: "Press Start 2P", sans-serif;
}
.green-btn {
  background-color: #74ee16 !important;
  color: black !important;
  border: 2px solid #74ee16 !important;
  width: 20vw;
  font-family: "Press Start 2P", sans-serif;
}
.red-btn {
  background-color: red !important;
  color: black !important;
  border: 2px solid red !important;
  width: 20vw;
  font-family: "Press Start 2P", sans-serif;
}

.red-btn:hover {
  background-color: red !important;
  color: black !important;
}
.pokemon-image {
  filter: brightness(0%) drop-shadow(0 0 10px red);
}
</style>
