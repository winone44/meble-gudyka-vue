<template>
  <section class="about-us">
    <div>
      <div id="about-us-image-container">
        <img :src="$store.state.data.aboutUs.imageUrl" :alt="$store.state.data.aboutUs.imageAlt">
      </div>
    </div>
    <div class="about-us-text">
      <h3>{{ $store.state.data.aboutUs.h3 }}</h3>
      <p>{{ $store.state.data.aboutUs.p }}</p>
      <button id="about-us-button">{{ $store.state.data.aboutUs.buttonText }}</button>
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