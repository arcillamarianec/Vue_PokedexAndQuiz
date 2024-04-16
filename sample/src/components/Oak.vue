<script setup>
import { onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import { useRouter } from "vue-router";

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
  const router = useRouter();

  gsap.to(".oakP", {
    duration: 2.5,
    text: "Welcome, young Trainer, to the Pokémon realm! Our custom world, by Mariane and Sigfred, unfolds with Vue.js.",
    ease: "power3.out",
    onComplete: () => {
      gsap.to(".oakP", {
        duration: 0,
        text: "",
        ease: "none",
        delay: 0,
        onComplete: () => {
          gsap.to(".oakP", {
            duration: 2,
            text: "Behold, a trusty backpack for your Pokémon adventures! Carry your dreams across vast landscapes.",
            onComplete: () => {
              gsap.to(".oakSec", { opacity: 0, duration: 3, onComplete: () => {
                router.push({ name: "Backpack" }); 
              } });
            },
          });
        },
      });
    },
  });

  // const lenis = new Lenis();

  // lenis.on("scroll", (e) => {
  //   console.log(e);
  // });

  // function raf(time) {
  //   lenis.raf(time);
  //   requestAnimationFrame(raf);
  // }

  // requestAnimationFrame(raf);

// Function to play background music
const playBackgroundMusic = () => {
  const audio = new Audio('../assets/music1.mp3');
  audio.setAttribute('muted', 'true');
  audio.setAttribute('autoplay', 'true');
  audio.setAttribute('loop', 'true');
  document.body.appendChild(audio);
};

  // Play background music when component is mounted
  playBackgroundMusic();
});
</script>
<template>
  <section class="oakSec animate__animated animate__fadeOut animate__delay-5s">
    <audio src="../assets/music1.mp3" autoplay loop></audio>
    <div class="container">
      <div class="col">
        <div class="row">
          <img src="../assets/oak.png" alt="" class="oakPic" />
        </div>
        <div class="row oakQuote">
          <p class="oakP"></p>
        </div>
      </div>
    </div>
  </section>
  <!-- <img src="../assets/backpack.png" alt="" class="" /> -->
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");
* {
  font-family: "Press Start 2P", sans-serif;
  padding: 0;
  margin: 0;
}
.backpackSec {
  background-color: black;
}
.animate__animated.animate__fadeOut {
  --animate-duration: 3s;
}
:root {
  --animate-delay: 5s;
}
.oakSec {
  background-image: url(../assets/oakBack.png);
  background-size: cover;
  background-position: center;
}
.oakPic {
  width: 75vh;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5vh;
  margin-top: 2vh;
}
.oakQuote {
  border: 5px solid lightblue;
  border-radius: 10px;
  background-color: white;

  height: 100%;
  margin-left: auto;
  margin-right: auto;
}
.oakP {
  padding: 2vh;
  -webkit-text-fill-color: black;
  -webkit-text-stroke-color: black;
  -webkit-text-stroke-width: 1px;
  text-shadow: 2px 2px 2px white;
  font-size: 20px;
}
.anotherSection {
  color: aliceblue;
  background-color: black;
}
section {
  height: 100vh;
}
.backpack {
  height: 100vh;
  opacity: 0;
  z-index: 0;
  overflow: hidden;
}
</style>
