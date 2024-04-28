<template>
<header>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <router-link to="/backpack" class="navbar-brand">{{ "My Pokédex" }}</router-link>
      <!-- Use router-link for navigation -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <router-link to="/backpack" class="nav-link" v-if="$route.path !== '/backpack'"><img src="/src/assets/mono1.png" alt="backpack icon" class="icon"></router-link>
      </div>
    </div>
  </nav>
</header>

</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    search() {
      this.$emit("search-pokemon", this.searchQuery);
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");

nav {
  background-color: #901020;
  border: 5px solid black;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  font-family: "Press Start 2P", system-ui;
}
a,
a:hover {
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  -webkit-text-stroke: 1px black;
  text-stroke: 1px black;
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
.icon {
  height: 50px;
  padding-left: 5px;
  padding-right: 5px;
  transition: transform 0.3s ease; /* Add transition for smooth effect */
}

.icon:hover {
  transform: translateY(-10px); /* Move up by 10px when hovered */
}
</style>
