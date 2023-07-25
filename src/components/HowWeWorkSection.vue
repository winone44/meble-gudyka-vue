<template>
  <section class="how-we-work">
    <header>
      <h1>Jak pracujemy?</h1>
      <hr style="width: 50vw; border: 1px solid black;">
    </header>
    <div class="folders">
      <div class="folder">
        <div class="folder-number">1</div>
        <header>
          <h2>Darmowa wycena w 48H</h2>
        </header>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet</p>
      </div>
      <div class="folder">
        <div class="folder-number">2</div>
        <header>
          <h2>Produkcja Twojej Kuchni</h2>
        </header>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet</p>
      </div>
      <div class="folder">
        <div class="folder-number">3</div>
        <header>
          <h2>Montaż Twojej kuchni</h2>
        </header>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet</p>
      </div>
    </div>
    <div>
      <button id="folders-button">ZOBACZ NASZE REALIZACJE</button>
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