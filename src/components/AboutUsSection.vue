<template>
  <section class="about-us">
    <div>
      <div id="about-us-image-container">
        <img src="assets/img/DSC04159.png" alt="">
      </div>
    </div>
    <div class="about-us-text">
      <h3>Jesteśmy super</h3>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam e</p>
      <button id="about-us-button">O nas</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutUsSection"
}
</script>

<style scoped>

.about-us {
  background-color: var(--grey);
  display: flex;
  justify-content: space-between;
  padding: 40px;
}

.about-us > div {
  width: 100%;
}

.about-us-text {
  width: 50%;
  padding: 40px;
}

#about-us-image-container {
  background-color: var(--white);
  padding: 10px;
}

#about-us-image-container img {
  width: 100%;
}

#about-us-button {
  background-color: var(--black);
  color: var(--white);
  padding: 10px 25px;
  cursor: pointer;
  margin-top: 30px;
  transition: .2s;
}

#about-us-button:hover {
  transform: scale(0.9);
}

@media screen and (max-width: 900px) {

  .about-us {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .about-us-text {
    width: auto;

  }

  #about-us-image-container {
    width: auto;
  }
}
</style>