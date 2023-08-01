<template>
  <section class="best-furniture-parallax" :style="backgroundStyle">
    <header>
      <h1 class="best-furniture-parallax-transparent-text">{{ $store.state.data.bestFurnitureParallax.h1 }}</h1>
      <button @click="scrollToOtherProjects" id="best-furniture-parallax-button">{{
          $store.state.data.bestFurnitureParallax.button.buttonText
        }}
      </button>
    </header>
  </section>
</template>

<script>
export default {
  name: "BestFurnitureParallaxSection",
  computed: {
    backgroundStyle() {
      const url = this.$store.state.data.bestFurnitureParallax.backgroundImage;
      return `background-image: url(${url});`
    }
  },
  methods: {
    scrollToOtherProjects() {
      const element = document.querySelector('.other-projects');
      if (element) {
        element.scrollIntoView({behavior: 'smooth'});
      }
    }
  }
}
</script>

<style scoped>

.best-furniture-parallax {
  background-image: url("/public/assets/img/kuchnia2.png");
  min-height: 500px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

}

.best-furniture-parallax header {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.best-furniture-parallax-transparent-text {
  font-family: sans-serif;
  font-size: 7vw;
  font-weight: bold;
  background: none;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: .3vw;
  -webkit-text-stroke-color: white;
  text-transform: uppercase;
}

#best-furniture-parallax-button {
  background-color: rgba(0, 0, 0, 0);
  text-transform: uppercase;
  border: 4px solid var(--white);
  color: var(--white);
  padding: .7em 6em;
  cursor: pointer;
  margin: 20px;
  font-weight: bold;
  transition: 0.2s;
}

#best-furniture-parallax-button:hover {
  background: rgba(255, 255, 255, 0.5);
  color: #111;
}

@media screen and (max-width: 900px) {

}
</style>