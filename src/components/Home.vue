<template>
  <v-card
    class="d-flex justify-center align-center background-image"
    style="height: 100vh; width: 100vw"
  >
    <v-app-bar rounded class="navbar">
      <template v-slot:prepend>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title>Application Bar</v-app-bar-title>
    </v-app-bar>
    <h1 class="h1main">Homepage</h1>
  </v-card>
</template>
<script setup></script>
<style scoped>
.h1main {
  font-family: "Gugi", cursive;
  color: white;
}
.background-image {
  background-image: url("../assets/main-bg.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.navbar {
  background-image: url("../assets/main-bg.jpg");
  color: white;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
