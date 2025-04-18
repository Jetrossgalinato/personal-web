<template>
  <v-card
    class="d-flex flex-column background-image"
    style="height: 100vh; width: 100vw; position: relative"
  >
    <v-app-bar rounded class="navbar">
      <div
        class="d-flex position-absolute left-0 right-0 justify-center pt-4"
        style="gap: 50px"
      >
        <span>Home</span>
        <span>About</span>
        <span>Projects</span>
        <span>Contact</span>
      </div>
    </v-app-bar>

    <!-- 🌟 Main Content Centered -->
    <div class="main-content">
      <h1>Hi I'm Jetross Galinato</h1>
      <h2 class="hover-underline">Backend Developer</h2>
      <h3>Based in the Philippines</h3>
    </div>
  </v-card>
</template>

<script setup></script>

<style scoped>
.background-image {
  background-image: url("../assets/main-bg.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
}

.navbar {
  background-image: url("../assets/main-bg.png");
  color: white;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 13%;
}

.navbar span {
  color: white;
  cursor: pointer;
  position: relative;
  transition: color 0.3s ease;
  padding-bottom: 4px;
  font-size: 13px;
}

/* Underline animation for navbar */
.navbar span::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0%;
  height: 2px;
  background-color: #51e688;
  transition: width 0.3s ease;
}

.navbar span:hover {
  color: #51e688;
}

.navbar span:hover::after {
  width: 100%;
}

/* 🌟 Main Content Centered Styling */
.main-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  font-family: "Gugi", cursive;
}

.main-content h1 {
  font-size: 30px;
  margin-bottom: 10px;
}

.main-content h2 {
  font-size: 26px;
  font-weight: normal;
  color: #51e688;
  position: relative;
  cursor: pointer;
  padding-bottom: 4px;
}

/* Underline animation for Backend Developer */
.hover-underline::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0%;
  height: 2px;
  background-color: #51e688;
  transition: width 0.3s ease;
}

.hover-underline:hover::after {
  width: 100%;
}

.main-content h3 {
  font-size: 18px;
  font-weight: lighter;
  margin-top: 10px;
  color: #ffffffcc; /* Slightly transparent white */
}
</style>
