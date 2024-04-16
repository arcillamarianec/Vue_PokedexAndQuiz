<template>
  <div>
    <div class="list-item" v-for="(pokemon, index) in pokemons" :key="index" @click="selectPokemon(pokemon)">
      <div class="red-section">
        <img :src="pokemon.image" :alt="pokemon.name">
      </div>
      <div class="title-section">
        <h3>{{ pokemon.name }}</h3>
    
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pokemons: []
    };
  },
  mounted() {
    this.fetchAllPokemons();
  },
  methods: {
    async fetchAllPokemons() {
      try {
        let nextUrl = 'https://pokeapi.co/api/v2/pokemon';
        
        while (nextUrl) {
          const response = await fetch(nextUrl);
          const data = await response.json();
          
          for (const pokemon of data.results) {
            const pokemonData = await this.fetchPokemonData(pokemon.url);
            const speciesData = await this.fetchSpeciesData(pokemonData.species.url); // Fetch species data
            if (speciesData) {
              this.pokemons.push({
                name: pokemon.name,
                image: pokemonData.sprites.front_default,
                flavorText: speciesData
              });
            } else {
              console.error('Error fetching species data for', pokemon.name);
            }
          }
          
          nextUrl = data.next;
        }
      } catch (error) {
        console.error('Error fetching Pokémon:', error);
      }
    },
    async fetchPokemonData(url) {
      try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching Pokémon data:', error);
        return null;
      }
    },
    async fetchSpeciesData(url) {
      try {
        const response = await fetch(url);
        const data = await response.json();
        const flavorText = data.flavor_text_entries.find(entry => entry.language.name === 'en').flavor_text;
        return flavorText;
      } catch (error) {
        console.error('Error fetching species data:', error);
        return null;
      }
    },
    selectPokemon(pokemon) {
      this.$emit('pokemon-clicked', pokemon); // Emit pokemon-clicked event with selected pokemon
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

img {
  height: 13vh;
}

.list-item {
  display: flex;
  align-items: center;
  border: 2px solid black;
  overflow: hidden;
  padding: auto;
  margin-bottom: 10px; /* Added margin between list items */
}

.list-item:hover {
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  border: 3px solid red;
  border-radius: 50px;
  transform: scale(1.2);
  z-index: 4;
  background-color: white;
  margin-left: 8vh;
  scroll-margin: 8vh;
}

.red-section {
  display: flex;
  width: auto;
  height: 100%;
  background-color: red;
  overflow: hidden;
}

.title-section {
  flex: 1;
  padding-left: 20px;
  font-family: "Press Start 2P", system-ui;
  font-size: 1.2vw;
  height: 100%;
}
</style>
