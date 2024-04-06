<script setup>
import { ref } from 'vue';
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
const showDesc = ref(null);
const itemPreviewImage = ref("/src/assets/backpack.png");

function showDescription(item) {
  showDesc.value = item;
}

function hideDescription() {
  showDesc.value = null;
}
</script>

<template>
  <div class="pokemonDiv animate__animated animate__fadeIn">
    <div class="main">
        <div class="container">
          <!-- First row -->
          <div class="row">
            <!-- First column -->
            <div class="col">
              <div class="row">
                <div class="col">
                  <!-- Item title with black outline and shadow -->
                  <div class="p-3 shadow itemBar">
                    <center><h2 class="itemText">ITEMS</h2></center>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <!-- Picture -->
                  <center>
                    <img
                      src="/src/assets/backpack.png"
                      alt="Backpack"
                      class="img-backpack animate__animated animate__fadeIn"
                    />
                  </center>
                </div>
              </div>
            </div>
            <!-- Second column -->
            <div class="col">
              <div class="itemBack">
                <div class="itemListBack">
                  <div class="row itemListCol">
                    <router-link to="/backpack/pokedex"> 
                      <div class="col itemList" @mouseover="showDescription('pokedex')" @mouseleave="hideDescription()">
                      <!-- Pokedex -->
                      <div class="p-3 itemListFlex">
                        <div>
                          <h2><img src="/src/assets/play-solid.svg" class="iconSelector"/>Pokedex</h2>
                        </div>
                        <h2>x1</h2>
                      </div>
                    </div>
                    </router-link>
                    
                  </div>
                  <div class="row">
                    <div class="col itemList" @mouseover="showDescription('quiz')" @mouseleave="hideDescription()">
                      <!-- Quiz -->
                      <div class="p-3 itemListFlex">
                        <div>
                          <h2><img src="/src/assets/play-solid.svg" class="iconSelector"/>Quiz</h2>
                        </div>
                        <h2>x1</h2>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col itemList" @mouseover="showDescription('home')" @mouseleave="hideDescription()">
                      <!-- Home -->
                      <div class="p-3 itemListFlex">
                        <div>
                          <h2><img src="/src/assets/play-solid.svg" class="iconSelector"/>Home</h2>
                        </div>
                        <h2>x1</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Second row -->
          <div class="row itemDesc shadow">
            <div class="col border rounded p-3 shadow">
              <div class="row">
                <div class="col-3">
                  <center>
                    <img
                      v-if="showDesc !== 'pokedex' && showDesc !== 'quiz' && showDesc !== 'home'"
                      src="/src/assets/backpack.png"
                      alt="Picture"
                      class="item-preview"
                    />
                    <img
                      v-else-if="showDesc === 'pokedex'"
                      src="/src/assets/pokedex.png"
                      alt="Picture"
                      class="item-preview"
                    />
                    <img
                      v-else-if="showDesc === 'quiz'"
                      src="/src/assets/sash.png"
                      alt="Picture"
                      class="item-preview"
                    />
                    <img
                      v-else-if="showDesc === 'home'"
                      src="/src/assets/lab.png"
                      alt="Picture"
                      class="item-preview"
                    />
                  </center>
                </div>
                <div class="col">
                  <p class="itemPreviewDesc" v-if="showDesc === 'pokedex'">
                    The Pokédex is a comprehensive electronic encyclopedia in
                    the Pokémon universe that catalogues various species of
                    Pokémon, providing detailed information on their
                    characteristics, habitats, and abilities.
                  </p>
                  <p class="itemPreviewDesc" v-else-if="showDesc === 'quiz'">
                    The Quiz immerses you in the exciting realm of Pokémon, 
                    where you can test your knowledge, tackle challenging questions, 
                    and uncover fascinating trivia, all while sharpening your skills, 
                    challenging friends, and striving to become a Pokémon master.
                  </p>
                  <p class="itemPreviewDesc" v-else-if="showDesc === 'home'">
                    The Home is where Professor Oak awaits. It is a section to impart his wisdom 
                    and guidance as you embark on your Pokémon journey.                
                  </p>
                  <p class="itemPreviewDesc" v-else>
                    This is your Pokemon Bag, where you can access your Pokedex 
                    to explore detailed information about various Pokémon species, 
                    dive into the Pokémon Quiz to test your knowledge and skills, and easily 
                    navigate back to the home page for more adventures in the Pokémon universe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
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
h1 {
  text-transform: uppercase;
}
#firstText {
  font-size: 10vh;
}
.firstSec,
.sec1st {
  padding: 5vh;
}
.itemBar,
.itemBack {
  background-color: #f0c870;
}
.itemBar {
  width: 100%;
  border-top: 5px solid gray; 
  border-left: 5px solid gray;
  border-bottom: 5px solid gray;
  border-right: 0; 
}
.itemBack {
  padding: 2vh;
  padding-bottom: 0vh;
  width: 100%;
  border: 5px solid gray;
  padding-bottom: 20vh;
}
.itemListBack {
  border: 5px solid #d0b050;
}
.itemList {
  background-color: #f8f8c8;
  text-transform: uppercase;
  border-bottom: #e8e0a8 dashed 4px;
  padding: 5px;
}
.itemDesc {
  background-color: #0078c0;
  height: auto;
  border-radius: 10px;
  border: 5px solid white;
}
.img-backpack {
  margin-top: 2vh;
  padding: 1vh;
  height: 50vh;
}
.item-preview {
  height: 15vh;
  background-color: white;
  padding: 2vh;
}
.itemPreviewDesc {
  -webkit-text-fill-color: white; 
  -webkit-text-stroke-color: white;
  text-shadow: 4px 4px 4px black; 
}
.itemText,
.itemList {
  -webkit-text-fill-color: black; 
  -webkit-text-stroke-color: black;
  text-shadow: 4px 4px 4px white; 
}
.itemDesc {
  margin-top: 4vh;
  margin-bottom: 3vh;
}
.iconSelector {
  height: 5vh;
  margin-right: 10px;
  opacity: 0; 
}

.itemList:hover .iconSelector {
  opacity: 1; 
}

.itemListFlex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
:root {
  --animate-delay: 5s;
}
a {
  text-decoration: none;
}
</style>
