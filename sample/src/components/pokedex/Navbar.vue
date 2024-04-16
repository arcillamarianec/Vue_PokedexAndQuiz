<template>
  <header>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <router-link to="/backpack" class="navbar-brand">{{"Yan's Pokédex"}}</router-link> <!-- Use router-link for navigation -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="d-flex ms-auto" @submit.prevent="search">
            <input v-model="searchQuery" class="form-control me-2" type="search" placeholder="Enter a pokemon" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: ''
    };
  },
  methods: {
    search() {
      // Emit a custom event with the search query
      this.$emit('search-pokemon', this.searchQuery);
    }
  }
};
</script>


<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

  nav {
    background-color: #901020;
    border: 5px solid black;
    /* Black border */
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    /* Shadow */
    font-family: "Press Start 2P", system-ui;
  }

  a,
  a:hover {
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    /* Adding a shadow with offset (2px horizontally, 2px vertically), blur radius (4px), and color (rgba(0, 0, 0, 0.5)) */
    -webkit-text-stroke: 1px black;
    /* Adding a black outline with a width of 1px */
    text-stroke: 1px black;
    /* Adding a black outline with a width of 1px */
  }

  .btn-outline-success {
    background-color: white;
    color: black;
    outline: 1px solid black;
  }

  .btn-outline-success:hover {
    background-color: #901020;
    color: white;
    outline: 1px solid white;
  }
</style>
