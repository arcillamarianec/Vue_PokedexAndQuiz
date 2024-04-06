<script setup>
import ScrollList from '../pokedex/ScrollList.vue'
import LeftView from '../pokedex/LeftView.vue'
import Navbar from '../pokedex/Navbar.vue'

</script>

<template>
    <div class="back container-fluid back">
      <Navbar/>
      <div class="row">
        <div class="col-md-6 left">
              <LeftView/>
        </div>
        <div class="col-md-6 right">
            <ScrollList/>
        </div>
      </div>
    </div>
  </template>
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
