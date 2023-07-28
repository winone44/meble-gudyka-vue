<template>
  <section class="first-section" :style="backgroundStyle">
    <header class="main-header">
      <h2>{{$store.state.data.firstSection.mainHeader.h2}}</h2>
      <p>{{ $store.state.data.firstSection.mainHeader.p }}</p>
      <button class="contact-button">{{ $store.state.data.firstSection.mainHeader.button.buttonText }}</button>
    </header>
    <div class="contact-icons">
      <!--Telephone fill-->
      <a
          :href="'tel:' + $store.state.data.firstSection.contactIcons.telephone.telNumber"
          v-if="$store.state.data.firstSection.contactIcons.telephone.show"
      >
        <BIconTelephoneFill />
      </a>
      <!--Facebook-->
      <a
          :href="$store.state.data.firstSection.contactIcons.facebook.fbUrl"
          v-if="$store.state.data.firstSection.contactIcons.facebook.show"
      >
        <BIconFacebook />
      </a>
      <!--Envelope fill-->
      <a
          :href="'mailto:' + $store.state.data.firstSection.contactIcons.envelope.mail"
          v-if="$store.state.data.firstSection.contactIcons.envelope.show"
      >
        <BIconEnvelopeFill />
      </a>
    </div>
  </section>
</template>

<script>
import {BIconTelephoneFill, BIconFacebook, BIconEnvelopeFill} from 'bootstrap-vue'

export default {
  name: "FirstSection",
  components: {
    BIconEnvelopeFill,
    BIconFacebook,
    BIconTelephoneFill
  },
  computed: {
    backgroundStyle() {
      const url = this.$store.state.data.firstSection.backgroundImage;
      return `background-image: url(${url});`
    }
  }
}
</script>

<style>
.first-section {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
  min-height: 400px;
  position: relative;
}

.main-header {
  color: var(--white);
  position: absolute;
  left: 2.5vw;
  bottom: 30px;
  width: 400px;
}

.main-header > p {
  font-weight: bold;
  font-family: 'Playfair Display ', serif;
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

.contact-icons{
  position: absolute;
  right: 20px;
  bottom: 30px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.contact-icons svg {
  height: 28px;
  width: 28px;
  cursor: pointer;
  transition: 0.2s;
}

.contact-icons a {
  color: var(--white);
}

.contact-icons svg:hover {
  color: var(--black);
}

@media screen and (max-width: 900px) {

  .main-header {
    width: 250px;
    bottom: 0;
  }

  .contact-icons {
    height: 150px;
  }

  .contact-icons svg {
    height: 30px;
    width: 30px;
  }


  .main-header > p {
    font-weight: 500;
    font-size: .850rem;
  }
}
</style>