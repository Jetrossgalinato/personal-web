<template>
  <v-card
    class="d-flex flex-column background-image"
    style="height: 100vh; width: 100vw; position: relative"
  >
    <!-- Navbar -->
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

    <!-- Hero/Main Section -->
    <div class="main-content">
      <h1>Hi I'm Jetross Galinato</h1>
      <h2 class="hover-underline">Backend Developer</h2>
      <h3>Based in the Philippines</h3>
    </div>
  </v-card>

  <!-- ✨ About Section -->
  <section class="about-section">
    <div class="about-content">
      <h2>About Me</h2>
      <p>
        I'm a passionate backend developer with a focus on creating scalable,
        efficient, and secure web applications. I love working with modern
        technologies and continuously learning to improve my craft. When I'm not
        coding, you can find me exploring new coffee shops, traveling, or diving
        into the latest tech trends!
      </p>
    </div>
  </section>
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
  display: inline-block;
  padding: 10px 20px;
  border: 2px solid transparent;
  border-radius: 50px;
  transition: border 0.4s ease, color 0.4s ease;
  cursor: pointer;
}

.main-content h2:hover {
  border: 2px solid #51e688;
}

.hover-underline {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  border: 2px solid transparent;
  border-radius: 50px;
  transition: border 0.4s ease, color 0.4s ease;
  cursor: pointer;
}

.hover-underline:hover {
  border: 2px solid #51e688;
  box-shadow: 0 0 10px #51e68888;
}

.main-content h3 {
  font-size: 18px;
  font-weight: lighter;
  margin-top: 10px;
  color: #ffffffcc;
}

.about-section {
  background-color: #101010; /* Dark background for About */
  color: white;
  padding: 100px 20px;
  text-align: center;
  font-family: "Gugi", cursive;
}

.about-section h2 {
  font-size: 32px;
  color: #51e688;
  margin-bottom: 20px;
}

.about-section p {
  font-size: 18px;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
  color: #cccccc;
}
</style>
