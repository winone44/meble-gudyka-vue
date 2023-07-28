<template>
  <section class="parallax" :style="backgroundStyle">
    <div class="parallax-container">
      <img :src="$store.state.data.parallax.logoUrl" alt="">
      <button class="contact-button">{{ $store.state.data.parallax.button.buttonText }}</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "ParallaxSection",
  computed: {
    backgroundStyle() {
      const url = this.$store.state.data.parallax.backgroundImage;
      return `background-image: url(${url});`
    }
  }
}
</script>

<style scoped>
.parallax {
  min-height: 400px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  /**/
}
.parallax-container {
  height: 155px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.contact-button {
  background-color: rgba(0,0,0,0);
  color: var(--white);
  border: 2px solid var(--white);
  width: 9em;
  height: 3em;
  cursor: pointer;
  text-transform: uppercase;
  margin: 20px 0;
  transition: 0.2s;
}

.contact-button:hover {
  background: rgba(255,255,255,0.5);
  color: #111;
}

@media screen and (max-width: 900px) {

}
</style>