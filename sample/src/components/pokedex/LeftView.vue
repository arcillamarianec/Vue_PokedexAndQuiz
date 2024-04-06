<script>
import 'animate.css';
</script>
<template>
    <main>
        <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
      <div class="title animate__animated animate__zoomIn">{{"Bulbasaur"}}</div>
      <div class="image-container">
        <img src="/src/assets/1.png" class="pokemonPic animate__animated animate__zoomIn">
        <img src="/src/assets/pokeballshadow.png" class="pokeballShadow animate__animated animate__zoomIn">
      </div>
      <div class="desc animate__animated animate__zoomIn">{{"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "}}</div>
    </main>
  </template>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
  
  .pokemonPic {
    height: 90%;
    position: absolute;
    top: 0%; /* Adjust to center vertically */
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
  }
  
  .pokeballShadow {
    height: 50%;
    width: 90%;
    position: absolute;
    top: 18%; /* Adjust to center vertically */
    left: 50%;
    transform: translateX(-50%);
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
    font-size: 12px;
    padding: 10px;
    bottom: 0; /* Position at the bottom */
    transform: translateY(-20%);

  }
  </style>
  