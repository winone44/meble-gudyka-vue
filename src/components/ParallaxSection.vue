<template>
  <section class="parallax">
    <div class="parallax-container">
      <img src="assets/img/logo.png" alt="">
      <button class="contact-button">Kontakt</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "ParallaxSection"
}
</script>

<style scoped>
.parallax {
  background-image: url("/public/assets/img/kuchniegudykawroclaw.png");
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