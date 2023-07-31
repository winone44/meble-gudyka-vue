<template>
  <section class="our-knowledge">
    <header>
      <h1>{{ $store.state.data.ourKnowledge.header.h1 }}</h1>
      <hr style="width: 100px; border: 5px solid black;">
      <p>{{ $store.state.data.ourKnowledge.header.p }}</p>
      <button id="our-knowledge-button"> {{$store.state.data.ourKnowledge.header.button.buttonText}} </button>
    </header>
    <div class="our-knowledge-content">
      <div class="slider-nav">
        <button
            class="slider-prev"
            aria-label="poprzedni"
            :class="{disabled: position === 0}"
            @click="movePrev"
        >
          <BIconArrowLeft />
        </button>
        <p>Przewiń</p>
        <button
            class="slider-next"
            aria-label="następny"
            :class="{disabled: position === -(wrapperWidth - visibleWidth)}"
            @click="moveNext"
        >
          <BIconArrowRight />
        </button>
      </div>
      <div class="slider-container" ref="sliderContainer">
        <div class="slider-wrapper" :style="{width: wrapperWidth + 'px', transform: 'translateX(' + position + 'px)'}"
             @touchstart="handleTouchStart"
             @touchmove="handleTouchMove"
             @touchend="handleTouchEnd"
        >
          <div class="slider-item" v-for="(item, index) in $store.state.data.ourKnowledge.slider.items" :key="index" ref="sliderItem">
            <div class="slide-img">
              <img :src="item.imageUrl" :alt="item.imageAlt">
            </div>
            <div class="slider-item-text">
              <div>
                <h4>{{item.title}}</h4>
                <p><span class="item-date">Data publikacji: {{item.date}}</span></p>
                <p>{{item.description}}</p>
              </div>
            </div>
            <div>
              <button class="our-knowledge-slide-button">Czytaj więcej</button>
            </div>
          </div>

        </div>
      </div>
    </div>

  </section>
</template>

<script>
import {BIconArrowRight, BIconArrowLeft} from 'bootstrap-vue'
export default {
  name: "OurKnowledgeSection",
  components: {
    BIconArrowRight,
    BIconArrowLeft,
  },
  data() {
    return {
      position: 0,
      touchStartX: 0,
      touchEndX: 0,
      containerWidth: 0,
      itemWidth: 0,
      visibleItems: 0,
      visibleWidth: 0,
      wrapperWidth: 0,
    }
  },
  mounted() {
    this.initSlider();
  },
  methods: {
    initSlider() {
      this.containerWidth = this.$refs.sliderContainer.clientWidth;
      this.itemWidth = this.$refs.sliderItem[0].offsetWidth;
      this.wrapperWidth = this.itemWidth * this.$store.state.data.ourKnowledge.slider.items.length;
      this.visibleItems = Math.floor(this.containerWidth / this.itemWidth);
      this.visibleWidth = this.visibleItems * this.itemWidth;
    },
    movePrev() {
      if (this.position !== 0) {
        this.position += this.itemWidth;
      }
    },
    moveNext() {
      if (this.position !== -(this.wrapperWidth - this.visibleWidth)) {
        this.position -= this.itemWidth;
      }
    },
    handleTouchStart(event) {
      this.touchStartX = event.touches[0].clientX;
    },
    handleTouchMove(event) {
      this.touchEndX = event.touches[0].clientX;
    },
    handleTouchEnd() {
      if (this.touchEndX < this.touchStartX) {
        this.moveNext();
      } else if (this.touchEndX > this.touchStartX) {
        this.movePrev();
      }
    },
  }
}
</script>

<style scoped>

.our-knowledge {
  background-color: var(--grey);
  display: flex;
  padding: 40px 0 40px 40px;
}

.our-knowledge > header {
  width: 40vw;

}

.our-knowledge > header > hr {
  float: left;
}

.our-knowledge > header > p {
  line-height: 1.5;
  clear: both;
}

.our-knowledge-content {
  width: 60vw;
}

#our-knowledge-button {
  background-color: var(--black);
  color: var(--white);
  font-weight: bold;
  cursor: pointer;
  padding: .5em 1.5em;
  margin-top: 20px;
  font-size: 1rem;
  transition: .2s;
}

#our-knowledge-button:hover {
  transform: scale(0.9);
}


.slider-nav {
  display: flex;
}

.slider-nav > button {
  background-color: rgba(0, 0, 0, 0);
  border: 0;
  cursor: pointer;
}

.disabled {
  color: var(--grey);
}

.slider-nav > button > svg {
  height: 16px;
  width: 16px;
}
.slider-nav > p {
  margin: 0;
}

.slider-container {
  overflow: hidden;
}

.slider-wrapper {
  display: flex;
  transition: transform 0.3s ease-in-out;
  width: 1450px;

}

.slider-item {
  background-color: white;
  width: 230px;
  height: 35em;
  text-align: center;
  padding: 30px 20px;
  border-left: 15px solid var(--grey);
  display: flex;
  justify-content: space-between;
  flex-direction: column;

}

.slide-img {
  width: 240px;
  height: 180px;
  overflow: hidden;
}

.slide-img img {
  max-height: 100%;
  object-fit: contain;
}

.slider-item-text {
  font-family: 'Montserrat', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 60%;
}

.slider-item-text > div > h4 {
  font-size: 1.5rem;
}

.item-date {
  font-size: 0.6rem;
}

.slider-item-text > div > p {
  font-size: 0.8rem;
  font-weight: bold;
}

.our-knowledge-slide-button {
  background-color: var(--black);
  color: var(--white);
  font-weight: bold;
  cursor: pointer;
  padding: 5px 10px;
  transition: .2s;
}

.our-knowledge-slide-button:hover {
  transform: scale(0.9);
}

@media screen and (max-width: 900px) {

  .our-knowledge {
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }

  .our-knowledge > header {
    width: 100%
  }


  .our-knowledge-content {
    margin-top: 40px;
    width: 100%;
  }
}
</style>