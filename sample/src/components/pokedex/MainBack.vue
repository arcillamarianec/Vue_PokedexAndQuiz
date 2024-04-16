<template>
  <div class="back container-fluid back">
    <Navbar/>
    <div class="row">
      <div class="col-md-6 left">
        <LeftView :selectedPokemon="selectedPokemon"/> <!-- Pass selectedPokemon as a prop -->
      </div>
      <div class="col-md-6 right">
        <ScrollList @pokemon-clicked="updateSelectedPokemon"/> <!-- Listen for pokemon-clicked event -->
      </div>
    </div>
  </div>
</template>

<script>
import LeftView from '../pokedex/LeftView.vue'
import ScrollList from '../pokedex/ScrollList.vue'
import Navbar from '../pokedex/Navbar.vue'

export default {
  components: {
    LeftView,
    ScrollList,
    Navbar
  },
  data() {
    return {
      selectedPokemon: null // Initialize selectedPokemon
    }
  },
  methods: {
    updateSelectedPokemon(pokemon) {
      this.selectedPokemon = pokemon; // Update selectedPokemon with the clicked Pokemon
    }
  }
};
</script>

<!-- Your existing styles -->

<style scoped>
.back{
    background-image: url(/src/assets/grid.png);
    height: 100%;
    width: 100%;
    background-size: cover; 
    background-repeat: no-repeat;
}
.row{
    padding: 5vh;
}
</style>
