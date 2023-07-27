<template>
  <section class="other-projects">
    <header>
      <h2>{{ $store.state.data.otherProjects.header.h2 }}</h2>
    </header>
    <div class="gallery">
      <div v-for="(item, index) in $store.state.data.otherProjects.gallery" :key="index">
        <div class="gallery-image">
          <img :src="item.galleryImage.imageUrl"
               :alt="item.galleryImage.imageAlt">
        </div>
        <div class="gallery-title">
          <p>{{item.galleryTitle.p}}</p>
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