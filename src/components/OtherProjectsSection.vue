<template>
  <section class="other-projects">
    <header>
      <h2>A co poza kuchniami?</h2>
    </header>
    <div class="gallery">
      <div>
        <div class="gallery-image">
          <img src="assets/img/foto1.png" alt="Obraz przedstawiający pięknie wykończoną kuchnię z drewna">
        </div>
        <div class="gallery-title">
          <p>Kuchnie</p>
        </div>
      </div>
      <div>
        <div class="gallery-image">
          <img src="assets/img/foto2.png"
               alt="Zdjęcie eleganckich drewnianych szaf wykonanych przez naszą firmę.">
        </div>
        <div class="gallery-title">
          <p>Szafy</p>
        </div>
      </div>
      <div>
        <div class="gallery-image">
          <img src="assets/img/foto3.png"
               alt="Ilustracja nowoczesnych garderób z drewna dostępnych w naszej ofercie.">
        </div>
        <div class="gallery-title">
          <p>Garderoby</p>
        </div>
      </div>
      <div>
        <div class="gallery-image">
          <img src="assets/img/foto4.png" alt="Obraz pokazujący nasze wykonane na zamówienie drewniane biura.">
        </div>
        <div class="gallery-title">
          <p>Biura</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "OtherProjectsSection"
}
</script>

<style scoped>
.other-projects {
  padding: 20px;
}

.other-projects header {
  text-align: center;
  padding: 20px 0;
}

.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  min-height: 400px;
}

.gallery p {
  font-weight: bold;
  font-family: 'Playfair Display ', serif;
}

.gallery-image {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 18vw;
  max-width: 450px;
  max-height: 300px;
  margin: 10px;
  overflow: hidden;
}

.gallery-image img {
  max-height: 100%;
  object-fit: contain;
}

.gallery-title {
  font-weight: bold;
  text-align: center;
  font-size: 1.5rem;
}

@media screen and (max-width: 900px) {

  .gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    flex-direction: column;
  }

  .gallery > div {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .gallery-image {
    height: 50vw;
  }

}
</style>