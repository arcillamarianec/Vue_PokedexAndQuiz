<template>
  <div>
    <div v-if="selectedPokemon" class="title animate__animated animate__zoomIn">{{ selectedPokemon.name }}</div>
    <div v-if="selectedPokemon" class="image-container">
      <img :src="selectedPokemon.image" class="pokemonPic animate__animated animate__zoomIn">
      <img src="/src/assets/pokeballshadow.png" class="pokeballShadow animate__animated animate__zoomIn">
    </div>
    <div v-if="selectedPokemon" class="desc animate__animated animate__zoomIn">{{ selectedPokemon.flavorText }}</div> <!-- Display flavor text -->
  </div>
</template>

<script>
export default {
  props: ['selectedPokemon'], // Receive selectedPokemon as a prop
};
</script>

  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
  
  .image-container {
  position: relative; /* Ensure relative positioning for absolute elements */
  height: 60vh;
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
}

.pokemonPic {
  height: 90%; /* Adjust height as needed */
  position: absolute;
  top: 50%; /* Center vertically */
  left: 42%; /* Center horizontally */
  transform: translate(-50%, -50%); /* Center the image */
  z-index: 1;
}

.pokeballShadow {
  height: 50%; /* Adjust height as needed */
  width: 90%;
  position: absolute;
  top: 50%; /* Center vertically */
  left: 42%; /* Center horizontally */
  transform: translate(-50%, -50%); /* Center the shadow */
}

  
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    flex-direction: column;
    position: relative;
  }
  
  .image-container {
    height: 60vh;
  }
  
  .title,
  .desc {
    width: 100vw;
    max-width: 600px;
    border: 5px solid black;
    border-radius: 20px;
    background-color: white;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    font-family: 'Press Start 2P', sans-serif;
    text-align: center;
    position: relative; /* Ensure proper stacking context */
    z-index: 1;
  }
  
  .title {
    font-size: 2vw;  
    padding: 2vh;
  }
  
  .desc {
    font-size: 16px;
    padding: 10px;
    bottom: 0; /* Position at the bottom */
    transform: translateY(-20%);

  }
  </style>
  