<template>
  <v-card
    class="d-flex flex-column background-image"
    style="height: 100vh; width: 100vw"
  >
    <v-app-bar rounded class="navbar">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <div
        class="d-flex position-absolute left-0 right-0 justify-center pt-4"
        style="gap: 40px"
      >
        <span>About</span>
        <span>Projects</span>
        <span>Contact</span>
      </div>
    </v-app-bar>
  </v-card>
</template>

<script setup></script>
<style scoped>
.h1main {
  font-family: "Gugi", cursive;
  color: white;
  text-align: left;
}
.background-image {
  background-image: url("../assets/main-bg.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.navbar {
  background-image: url("../assets/main-bg.png");
  color: white;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 15%;
}

.navbar span {
  color: white;
  cursor: pointer;
  transition: color 0.3s ease;
}

.navbar span:hover {
  color: #51e688;
}
</style>
