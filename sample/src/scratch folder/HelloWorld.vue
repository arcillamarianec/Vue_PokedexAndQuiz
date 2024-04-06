<script setup>
import { onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "bootstrap/dist/css/bootstrap.min.css";

onMounted(() => {
  // gsap.to("#firstText", {
  //   duration: 20,
  //   text: "The Pokémon journey began in 1996 with the first generation, and now there are 9 generations, each packed with new adventures and discoveries.",
  //   ease: "power3.out",
  // });

  const slider = document.querySelector(".slider");
  const sections = gsap.utils.toArray(".slider section");
  const pokemons = gsap.utils.toArray(".pokemon-container img");

  gsap.registerPlugin(ScrollTrigger);

  let tl = gsap.timeline({
    defaults: {
      ease: "none",
    },
    scrollTrigger: {
      trigger: slider,
      pin: true,
      scrub: 2,
      end: () => "+=200%",
    },
  });

  tl.to(slider, {
    xPercent: -66,
  });

  sections.forEach((stop, index) => {
    tl.from(stop.querySelector(".content"), {
      // yPercent: -50,
      opacity: 0,
      scrollTrigger: {
        trigger: stop.querySelector(".content"),
        start: "left center",
        end: "center center",
        containerAnimation: tl,
        scrub: true,
      },
    });
  });
});
</script>
<template>
  <div class="pokemonDiv">
    <div class="main">
      <section class="firstSec">
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
                      src="./assets/backpack.png"
                      alt="Picture"
                      class="img-backpack"
                    />
                  </center>
                </div>
              </div>
            </div>
            <!-- Second column -->
            <div class="col">
              <div class="itemBack">
                <div class="row">
                  <div class="col itemList">
                    <!-- Pokedex -->
                    <div class="p-3">
                      <h2>Pokedex</h2>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col itemList">
                    <!-- Quiz -->
                    <div class="p-3">
                      <h2>Quiz</h2>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col itemList">
                    <!-- Home -->
                    <div class="p-3">
                      <h2>Home</h2>
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
                      src="./assets/backpack.png"
                      alt="Picture"
                      class="item-preview "
                    />
                  </center>
                </div>
                <div class="col">
                  <p class="itemPreviewDesc">
                    The Pokédex is a comprehensive electronic encyclopedia in
                    the Pokémon universe that catalogues various species of
                    Pokémon, providing detailed information on their
                    characteristics, habitats, and abilities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div class="outer">
      <div class="slider">
        <!-- Section1 -->
        <section class="sec1st">
          <h1 class="pokeTitle">9 Generations of Pokemon</h1>
          <p></p>
          <div class="inner">
            <div class="content"></div>
          </div>
        </section>
        <!-- Section2 -->
        <section>
          <div class="inner">
            <h1 class="pokeTitle">1st Generation</h1>
            <div class="content">
              <img src="./assets/1gen/1.1.webp" class="pokemonPic" />
              <img src="./assets/1gen/1.2.webp" class="pokemonPic" />
              <img src="./assets/1gen/1.3.webp" class="pokemonPic" />
              <img src="./assets/1gen/1.5.webp" class="pokemonPic" />
            </div>
          </div>
        </section>
        <!-- Section2 -->
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

.outer {
  overflow: hidden;
  background-color: black;
  color: white;
}

.slider {
  display: flex;
  width: 300%; /* Set a width larger than the viewport for horizontal scrolling */
}

section {
  height: 100vh;
  width: 100%;
}

.inner {
  margin: 7em;
  position: relative;
  display: flex;
  height: calc(100% -14em);
  align-items: end;
}

h1 {
  text-transform: uppercase;
}
.content {
  display: flex; /* Use flexbox layout */
  justify-content: space-between; /* Distribute items evenly with space in between */
}

.pokemonPic {
  display: flex; /* Use flexbox layout */
  justify-content: space-between; /* Distribute items evenly with space in between */
  margin-top: 2em;
  height: 40vh; /* Set height to fill container */
  margin-right: 1em; /* Add margin to the right for spacing */
}
.content {
  line-height: 1.5;
}
.pokeTitle {
  font-size: 10vh;
  text-transform: capitalize;
}
#firstText {
  font-size: 10vh;
}
.firstSec,
.sec1st {
  padding: 5vh;
}
.sec1st {
  p {
    width: 50vw;
  }
  .pokeTitle {
    font-size: 10vh;
    margin-bottom: 2vh;
    line-height: -1.5;
    text-transform: uppercase;
  }
}
.pokeP,
.pokeTitle {
  margin-bottom: 2vh;
  line-height: -1.5;
  -webkit-text-fill-color: yellow; /* For Safari */
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: blue;
  text-shadow: 2px 2px 4px yellow; /* Add a black shadow */
}
#g1rb {
  text-align: center; /* Center the text horizontally */
  white-space: nowrap; /* Prevent line breaks */
}
.description {
  margin-top: 1em; /* Add margin to the top */
}
.firstSec {
  background-image: url(./assets/cover3.png); /* Add the background image */
  background-size: cover; /* Cover the entire section */
  background-position: center; /* Center the background image */
  height: 100vh;
}
.itemBar,
.itemBack {
  background-color: #f0c870;
}
.itemBar {
  width: 100%;
  border-top: 5px solid gray; /* Apply the border to the top only */
  border-left: 5px solid gray;
  border-bottom: 5px solid gray;
  border-right: 0; /* Set left border width to 0 */
}
.itemBack {
  padding: 2vh;
  padding-bottom: 30vh;
  width: 100%;
  border: 5px solid gray;
}
.itemList {
  background-color: #f8f8c8;
  text-transform: uppercase;
}
.itemDesc {
  background-color: #0078c0;
  height: auto;
  border-radius: 10px;
}
.img-backpack {
  padding:1vh ;
  height: 50vh;
}
.item-preview {
  height: 20vh;
}
.itemPreviewDesc{
  -webkit-text-fill-color: white; /* For Safari */
  -webkit-text-stroke-color: white;
  text-shadow: 4px 4px 4px black; /* Add a black shadow */
}
.itemText,.itemList{
  -webkit-text-fill-color: black; /* For Safari */
  -webkit-text-stroke-color: black;
  text-shadow: 4px 4px 4px white; /* Add a black shadow */
}
.itemDesc{
  margin: 4vh;
}
</style>
