<template>
  <section class="how-we-work">
    <header>
      <h1>{{ $store.state.data.howWeWork.header.h1 }}</h1>
      <hr style="width: 50vw; border: 1px solid black;">
    </header>
    <div class="folders">
      <div class="folder" v-for="(item, index) in $store.state.data.howWeWork.folders" :key="index">
        <div class="folder-number">{{ index + 1 }}</div>
        <header>
          <h2>{{ item.h2 }}</h2>
        </header>
        <p>{{ item.p }}</p>
      </div>
    </div>
    <div>
      <button id="folders-button">{{ $store.state.data.howWeWork.button.buttonText }}</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "HowWeWorkSection"
}
</script>

<style scoped>
.how-we-work {
  padding: 60px;
  text-align: center;
}

.folders {
  display: flex;
  margin: 80px 0;
}

.folder {
  background-color: var(--grey);
  padding: 20px;
  margin: 15px;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: calc(100 - 30vw);
  min-height: 300px;
}

.folder header {
  margin-top: 40px;
}

.folder > p {
  font-family: Montserrat, sans-serif;
  font-weight: 500;
  margin: 20px 0;
}

.folder-number {
  background-color: var(--white);
  border: 5px solid var(--grey);
  border-radius: 50%;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 50px;
  position: absolute;
  top: -50px
}

#folders-button {
  background-color: var(--black);
  color: var(--white);
  padding: 10px 60px;
  cursor: pointer;
  transition: .2s;
}

#folders-button:hover {
  transform: scale(0.95);
}

@media screen and (max-width: 900px) {

  .folders {
    display: flex;
    flex-direction: column;
  }

  .folder {
    margin: 40px 0;
  }

  #folders-button {
    padding: 10px 0;
    width: 100%;
  }

}
</style>