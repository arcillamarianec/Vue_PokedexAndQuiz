<script>

</script>
<template>
    <div class="list-item ">
      <div class="red-section">
        <img src="/src/assets/pokeball.png">
      </div>
      <div class="title-section">
        <h1>{{ "Bulbasaur" }}</h1>
      </div>
    </div>
  </template>
  
  <style scoped>
 @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

  img {
    height: 13vh;
  }
  
  .list-item {
    display: flex;
    align-items: center;
    border: 2px solid black;
    overflow:hidden;
    padding: auto;
  }
  .list-item:hover {
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); /* Add elevation effect */
  border: 3px solid red;
  border-radius: 50px; /* Rounded corners */
  transform: scale(1.2);
  z-index: 4;
  background-color: white;
  margin-left: 8vh;
  scroll-margin: 8vh;
}

  .red-section {
    display: flex; /* Added */
    width: auto; /* One-third of the width */
    height: 100%;
    background-color: red;
    overflow: hidden; /* Hide content that exceeds the container */
  }
  
  .title-section {
    flex: 1; /* Remaining two-thirds of the width */
    padding-left: 20px; /* Add padding for better spacing */
  font-family: "Press Start 2P", system-ui;
  font-size: 1.2vw;  
  height: 100%;
  }
  </style>
  