<template>
  <div v-if="loading" class="preloader" :class="{ 'fade-out': fadeOut }">
    <div class="loader-text">
      {{ displayedText }}
    </div>
  </div>
  <!-- Deploy -->
  <v-card
    v-else
    class="d-flex flex-column background-image"
    style="height: 100vh; width: 100vw; position: relative"
  >
    <!-- Navbar -->
    <v-app-bar rounded class="navbar">
      <div
        class="d-flex position-absolute left-0 right-0 justify-center pt-4"
        style="gap: 50px"
      >
        <span @click="scrollTo('home')">Home</span>
        <span @click="scrollTo('about')">About</span>
        <span>Projects</span>
        <span>Contact</span>
      </div>
    </v-app-bar>

    <div class="main-content" :class="{ 'fade-in-main': mainVisible }">
      <h1>Hi I'm Jetross Galinato</h1>
      <h2 class="hover-underline">Backend Developer</h2>
      <h3>Based in the Philippines</h3>
    </div>
  </v-card>

  <section class="background-image about-section" ref="aboutSection">
    <div class="about-content" :class="{ 'fade-in': aboutVisible }">
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

<script setup>
import { ref, onMounted, onBeforeMount, onUnmounted } from "vue";

// About section refs
const aboutSection = ref(null);
const aboutVisible = ref(false);

// Loading and typing animation refs
const loading = ref(true);
const fadeOut = ref(false);
const mainVisible = ref(false);

const fullText = "Loading...";
const displayedText = ref("");
let typingIndex = 0;

// Scroll to sections
function scrollTo(section) {
  if (section === "home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else if (section === "about" && aboutSection.value) {
    aboutVisible.value = true; // Set to true when navigating to About
    aboutSection.value.scrollIntoView({ behavior: "smooth" });
  }
}

// Scroll to top before load
onBeforeMount(() => {
  if (typeof window !== "undefined") {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
});

// Typing effect function
function typeText() {
  if (typingIndex < fullText.length) {
    displayedText.value += fullText[typingIndex];
    typingIndex++;
    setTimeout(typeText, 100); // 100ms per letter
  }
}

// Main mounted logic
onMounted(() => {
  // Start typing immediately
  typeText();

  // After typing finishes + delay, start fading
  setTimeout(() => {
    fadeOut.value = true;
  }, fullText.length * 100 + 500);
  setTimeout(() => {
    loading.value = false; // Hide preloader
    mainVisible.value = true; // Show main content
  }, 1300); // Adjust timing as necessary

  // Intersection observer for About section
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        aboutVisible.value = true; // Set to true when in view
      }
    },
    { threshold: 0.3 }
  );

  if (aboutSection.value) {
    observer.observe(aboutSection.value);
  }

  onUnmounted(() => {
    if (aboutSection.value) {
      observer.unobserve(aboutSection.value);
    }
  });
});
</script>

<style scoped>
/* Preloader container */
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #0a0a0a;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  transition: opacity 0.5s ease;
}

/* Fade out when loading finishes */
.fade-out {
  opacity: 0;
  pointer-events: none;
}

/* Loader fancy text */
.loader-text {
  font-size: 30px;
  font-weight: bold;
  color: #51e688;
  font-family: "Gugi", cursive;
  letter-spacing: 3px;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

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

@keyframes fadeInMain {
  from {
    opacity: 0;
    transform: translate(-50%, -50%) translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) translateY(0);
  }
}

.fade-in-main {
  opacity: 1;
  transform: translate(-50%, -50%) translateY(0); /* Back to center */
  animation: fadeInMain 1s ease-out forwards;
}

.main-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) translateY(-20px); /* COMBINE transforms */
  text-align: center;
  color: white;
  font-family: "Gugi", cursive;
  opacity: 0;
  transition: opacity 1s ease-out, transform 1s ease-out;
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
  background-color: #101010;
  color: white;
  padding: 100px 20px;
  text-align: center;
  font-family: "Gugi", cursive;
}

.about-section h2 {
  font-size: 28px;
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

/* 💡 Animation styles */
.about-content {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.fade-in {
  opacity: 1;
  transform: translateY(0);
}
</style>
