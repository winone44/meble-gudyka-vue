<template>
  <footer>
    <header>
      <div>
        <h1>{{ $store.state.data.footer.header.h1 }}</h1>
      </div>
      <hr style="width: 200px; border: 5px solid black;">
      <p>{{ $store.state.data.footer.header.p }}</p>
      <div class="footer-contact">
        <a
            v-if="$store.state.data.footer.header.footerContact.facebook.show"
            :href="$store.state.data.footer.header.footerContact.facebook.url"
        >
          <BIconFacebook/>
          Facebook
        </a>
        <a
            v-if="$store.state.data.footer.header.footerContact.instagram.show"
            :href="$store.state.data.footer.header.footerContact.instagram.url"
        >
          <BIconInstagram/>
          Instagram
        </a>
        <a
            v-if="$store.state.data.footer.header.footerContact.telephone.show"
            :href="'tel:'+ $store.state.data.footer.header.footerContact.telephone.url"
        >
          <BIconTelephoneFill/>
          {{ $store.state.data.footer.header.footerContact.telephone.url }}
        </a>
        <a
            v-if="$store.state.data.footer.header.footerContact.mail.show"
            :href="'mailto:' + $store.state.data.footer.header.footerContact.mail.url"
        >
          <BIconEnvelopeFill/>
          {{ $store.state.data.footer.header.footerContact.mail.url }}
        </a>
      </div>
    </header>
    <div>
      <form class="contact-form">
        <div class="label-div">
          <label for="fname">
            <input type="text" id="fname" placeholder="Imię">
            <span>Imię</span>
          </label>
        </div>
        <div class="label-div">
          <label for="lname">
            <input type="text" id="lname" placeholder="Nazwisko">
            <span>Nazwisko</span>
          </label>
        </div>
        <div class="label-div">
          <label for="message">
            <textarea id="message" placeholder="Wiadomość"></textarea>
            <span>Wiadomość</span>
          </label>
        </div>
        <input id="submit-button" type="submit" value="Wyślij">
      </form>
    </div>
  </footer>
</template>

<script>
import {BIconTelephoneFill, BIconFacebook, BIconEnvelopeFill, BIconInstagram} from 'bootstrap-vue'

export default {
  name: "FooterSection",
  components: {
    BIconEnvelopeFill,
    BIconFacebook,
    BIconTelephoneFill,
    BIconInstagram
  },
}
</script>

<style scoped>

footer {
  background-color: var(--grey);
  padding: 100px 50px 50px;
  display: flex;
  justify-content: space-between;
}

footer > header {
  min-width: 220px;
  padding-right: 20px;
}

footer > header > hr {
  float: left;
}

footer > header > p {
  clear: both;
  font-family: Playfair Display, serif;
  font-weight: 400;
  font-size: 2rem;
}

.footer-contact {
  display: flex;
  flex-direction: column;
  margin: 50px 0;
  font-size: 1.5rem;
}

.footer-contact a {
  padding: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: 0.2s;
}

.footer-contact a:link, .footer-contact a:visited, .footer-contact a:active {
  color: var(--black);
}

.footer-contact a:hover {
  color: grey;
}

.footer-contact svg {
  height: 16px;
  width: 16px;
}

form {
  display: block;
}

.label-div {
  position: relative;
}

label > input {
  border-bottom: 4px solid black;
}


input, textarea {
  width: 100%;
  padding: 10px 0;
  margin-top: 20px;
  border: none;
  outline: none;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
}

textarea {
  border: 4px solid black;
  border-radius: 10px;
}

input::placeholder, textarea::placeholder {
  opacity: 0;
}

.contact-form span {
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(30px);
  font-size: 1.2rem;
  transition-duration: 300ms;
  font-weight: bold;
  border-radius: 20px;
  background-color: var(--grey);
  margin-left: 10px;
}

label:focus-within > span,
input:not(:placeholder-shown) + span,
textarea:not(:placeholder-shown) + span {
  transform: translateY(5px);
}

label:focus-within > span {
  color: gray;
}

label:focus-within > input {
  border-bottom: 4px solid gray;
}

textarea:focus-within {
  border: 4px solid gray;
}

#message {
  width: 40vw;
  height: 40vh;
}


#submit-button {
  color: var(--white);
  background-color: var(--black);
  font-weight: bold;
  width: 100px;
  height: 40px;
  cursor: pointer;
  margin-top: 10px;
  float: right;
  transition: 0.2s;
}

#submit-button:hover {
  transform: scale(0.9);
}

@media screen and (max-width: 900px) {

  footer {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 50px 25px 25px;
  }

  footer header {
    padding-right: 0;
  }

  #message {
    width: 80vw;
  }
}
</style>