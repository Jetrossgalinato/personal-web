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
      </div>
    </v-app-bar>

    <div class="main-content" :class="{ 'fade-in-main': mainVisible }">
      <h1>Hi I'm Jetross Galinato</h1>
      <h2 class="hover-underline">Backend Developer</h2>
      <h3>Based in the Philippines</h3>

      <!-- Contact Icons -->
      <div class="contact-icons">
        <a
          href="https://github.com/Jetrossgalinato"
          target="_blank"
          class="contact-icon"
        >
          <i class="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/jetross-galinato-141ba5361/"
          target="_blank"
          class="contact-icon"
        >
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="mailto:jetrossgalinato@gmail.com" class="contact-icon">
          <i class="fas fa-envelope"></i>
        </a>
        <a href="https://x.com/JetrossG" target="_blank" class="contact-icon">
          <i class="fab fa-twitter"></i>
        </a>
      </div>
    </div>
  </v-card>

  <section class="background-image about-section" ref="aboutSection">
    <div class="about-content" :class="{ 'fade-in': aboutVisible }">
      <h2>About Me</h2>

      <p>
        I'm a passionate backend developer with a focus on creating scalable,
        efficient, and secure web applications. I love working with modern
        technologies and continuously learning to improve my craft.
      </p>
      <!-- Years of Experience -->
      <div class="experience-section mt-15">
        <h3 class="subheading">Years of Coding Experience</h3>
        <div class="tally-container">
          <span class="tally-group">
            <span class="tally-line"></span>
            <span class="tally-line"></span>
            <span class="tally-line"></span>
            <!-- <span class="tally-line"></span> -->
            <!-- <span class="tally-diagonal"></span> -->
          </span>
        </div>
      </div>

      <!-- Subsection: Educational Background -->
      <h3 class="subheading mt-15 mb-6">Educational Background</h3>
      <div class="education-item mb-4">
        <h4>Bachelor of Science in Information Technology</h4>
        <p>
          Caraga State University • 2021 -
          <span class="green-text">Present</span>
        </p>
      </div>
      <div class="education-item mb-4">
        <h4>Senior High School - STEM Strand</h4>
        <p>Bayugan National Comprehensive High School • 2018 - 2020</p>
      </div>

      <!-- Subsection: Technologies -->
      <h3 class="subheading mt-15 mb-6">Technologies</h3>
      <div class="technologies-container">
        <div class="technology">
          <i class="fab fa-js"></i>
          <span>JavaScript</span>
        </div>
        <div class="technology">
          <i class="fab fa-vuejs"></i>
          <span>Vue.js</span>
        </div>
        <div class="technology">
          <i class="fab fa-node-js"></i>
          <span>Node.js</span>
        </div>
        <div class="technology">
          <i class="fab fa-php"></i>
          <span>PHP</span>
        </div>
        <div class="technology">
          <i class="fab fa-laravel"></i>
          <span>Laravel</span>
        </div>
        <div class="technology">
          <i class="fab fa-python"></i>
          <span>Python</span>
        </div>
        <div class="technology tooltip">
          <i class="fas fa-project-diagram"></i>
          <span>Django</span>
          <span class="tooltip-text">Currently Learning</span>
        </div>
        <div class="technology">
          <i class="fas fa-database"></i>
          <span>MySQL</span>
        </div>
        <div class="technology">
          <i class="fas fa-database"></i>
          <span>PostgreSQL</span>
        </div>
        <div class="technology">
          <i class="fab fa-git-alt"></i>
          <span>Git</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeMount, onUnmounted } from "vue";

// About section refs
const aboutSection = ref(null);
const aboutVisible = ref(false);

// Education section refs (✨ NEW ✨)
const educationSection = ref(null);
const educationVisible = ref(false);

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
    aboutVisible.value = true;
    aboutSection.value.scrollIntoView({ behavior: "smooth" });
  } else if (section === "education" && educationSection.value) {
    // ✨ Add this
    educationVisible.value = true;
    educationSection.value.scrollIntoView({ behavior: "smooth" });
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
    setTimeout(typeText, 100);
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
    loading.value = false;
    mainVisible.value = true;
  }, 1300);

  // Intersection observer for About section
  const aboutObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        aboutVisible.value = true;
      }
    },
    { threshold: 0.3 }
  );

  if (aboutSection.value) {
    aboutObserver.observe(aboutSection.value);
  }

  // Intersection observer for Education section ✨
  const educationObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        educationVisible.value = true;
      }
    },
    { threshold: 0.3 }
  );

  if (educationSection.value) {
    educationObserver.observe(educationSection.value);
  }

  // Clean up when unmounting
  onUnmounted(() => {
    if (aboutSection.value) aboutObserver.unobserve(aboutSection.value);
    if (educationSection.value)
      educationObserver.unobserve(educationSection.value);
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

.contact-icons {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

.contact-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: #101010;
  color: #51e688;
  border: 2px solid #51e688;
  border-radius: 50%;
  font-size: 20px;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
  text-decoration: none;
}

.contact-icon:hover {
  background-color: #51e688;
  color: #101010;
  transform: scale(1.1);
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
.technologies-container {
  display: flex;
  flex-wrap: wrap; /* Allows wrapping to the next line */
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
  max-width: 850px; /* Limits the width to fit 5 items per row */
  margin-left: auto;
  margin-right: auto;
}

.technology {
  display: flex;
  align-items: center;
  gap: 10px;
  background: linear-gradient(145deg, #0f0f0f, #1a1a1a);
  color: #51e688;
  padding: 12px 25px;
  border: 2px solid #51e688;
  border-radius: 50px;
  font-size: 16px;
  font-family: "Gugi", cursive;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3),
    inset 0 0 10px rgba(81, 230, 136, 0.2);
  transition: all 0.3s ease;
  cursor: pointer;
  flex: 1 1 calc(20% - 20px); /* Ensures 5 items per row with spacing */
  max-width: calc(20% - 20px); /* Prevents items from exceeding 5 per row */
}

.technology i {
  font-size: 20px;
  transition: transform 0.3s ease;
}

.technology span {
  font-size: 14px;
  transition: color 0.3s ease;
}

.technology:hover {
  background: linear-gradient(145deg, #51e688, #3cbf6b);
  color: #101010;
  box-shadow: 0 6px 12px rgba(81, 230, 136, 0.4),
    inset 0 0 15px rgba(81, 230, 136, 0.3);
}

.technology:hover i {
  transform: scale(1.2);
}

.technology:hover span {
  color: #101010;
}

.tally-container {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 10px;
}

.tally-group {
  position: relative;
  display: inline-block;
  width: 30px;
  height: 40px;
}

.tally-line {
  display: block;
  width: 2px;
  height: 100%;
  background-color: #51e688;
  position: absolute;
}

.tally-line:nth-child(1) {
  left: 0;
}

.tally-line:nth-child(2) {
  left: 6px;
}

.tally-line:nth-child(3) {
  left: 12px;
}

.tally-line:nth-child(4) {
  left: 18px;
}

.tally-diagonal {
  position: absolute;
  width: 2px;
  height: 100%;
  background-color: #51e688;
  transform: rotate(-45deg);
  left: 9px;
}
/* Tooltip container */
.tooltip {
  position: relative;
}

.tooltip-text {
  visibility: hidden;
  opacity: 0;
  position: absolute;
  bottom: 120%; /* Position above the icon */
  left: 50%;
  transform: translateX(-50%);
  background-color: #51e688;
  color: #101010;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 12px;
  font-family: "Gugi", cursive;
  white-space: nowrap;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transition: opacity 0.3s ease, visibility 0.3s ease;
  z-index: 10;
}

.tooltip:hover .tooltip-text {
  visibility: visible;
  opacity: 1;
}

.about-section {
  background-color: #101010;
  color: white;
  padding: 100px 20px;
  text-align: center;
  font-family: "Gugi", cursive;
}

.about-section h2 {
  font-size: 26px;
  color: #51e688;
  margin-bottom: 20px;
  cursor: pointer;
  position: relative;
  display: inline-block;
  overflow: hidden;
}

.about-section h2::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%) scaleX(0);
  transform-origin: center;
  width: 100%;
  height: 2px;
  background-color: #51e688;
  transition: transform 0.5s cubic-bezier(0.65, 0, 0.35, 1),
    box-shadow 0.4s ease;
}

.about-section h2:hover::after {
  transform: translateX(-50%) scaleX(1);
  box-shadow: 0 0 8px #51e68888; /* ✨ Nice soft glow */
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
.green-text {
  color: #51e688;
}
</style>
