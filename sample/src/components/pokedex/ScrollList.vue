<script setup>
import PokemonList from '../pokedex/PokemonList.vue'
</script>

<template>
    <div class="rounded-rectangle">
<div class="list-container">
    <PokemonList/>
        <PokemonList/>
        <PokemonList/>
        <PokemonList/>
        <PokemonList/>
        <PokemonList/>
        <PokemonList/>
        <PokemonList/>
        <PokemonList/>
        <PokemonList/>
</div>
        
       
    </div>
  </template>
  
  <style scoped>
  .rounded-rectangle {
    width: 100%; /* Set width as needed */
    height: 100vh; /* Set height as needed */
    background-color: white; /* White background */
    border: 5px solid black; /* Black border */
    border-radius: 50px; /* Rounded corners */
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Shadow */
    overflow:hidden;
  }
  .list-container {
  overflow-y: auto; /* Make the container scrollable vertically */
  height: calc(100% - 10px); /* Subtract padding and border width from the height */
}
  </style>
  