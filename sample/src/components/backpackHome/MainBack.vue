<script setup>
import { ref } from 'vue';
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import Backpack from "/src/components/backpackHome/Backpack.vue";

const showDesc = ref(null);
const itemPreviewImage = ref("/src/assets/backpack.png");
</script>

<template>
  <div class="back container-fluid back pokemonDiv animate__animated animate__fadeIn main">
    <Backpack/>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");
* {
  font-family: "Press Start 2P", sans-serif;
  padding: 0;
  margin: 0;
}
body {
  margin: 0;
  height: 100vh;
  background-color: black;
  color: white;
}
section {
  height: 100vh;
  width: 100%;
}
.back {
  background-image: url(/src/assets/cover3.png); 
  background-size: cover; 
  height: 100%;
  width: 100%;
  padding: 5vh;
}
:root {
  --animate-delay: 5s;
}
a {
  text-decoration: none;
}
.pokemonDiv{
  height: 100%;
}
</style>
