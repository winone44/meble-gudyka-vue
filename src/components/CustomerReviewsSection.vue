<template>
  <section class="customer-reviews">
    <div class="customer-reviews-content-bg">
      <div class="customer-reviews-content">
        <h1>{{ $store.state.data.customerReviews.h1 }}</h1>
        <hr style="width: 300px; border: 1px solid black;">
        <p>{{ $store.state.data.customerReviews.p }}</p>
        <div class="social-reviews-container">
          <div class="social-review">
            <button class="users-reviews-button">NASZE OPINIE W GOOGLE</button>
            <BIconGoogle id="google-icon" style="width: 100px; height: 100px"/>
            <p>40 opinii</p>
            <p>5/5</p>
          </div>
          <div class="social-review">
            <button class="users-reviews-button">NASZE OPINIE W FACEBOOKU</button>
            <BIconFacebook id="facebook-icon" style="width: 100px; height: 100px"/>
            <p>40 opinii</p>
            <p>5/5</p>
          </div>
        </div>
      </div>
    </div>
    <div class="logo-review">
      <img src="assets/img/logo.png" alt="">
    </div>
  </section>
</template>

<script>
import {BIconGoogle, BIconFacebook} from 'bootstrap-vue'

export default {
  components: {
    BIconGoogle,
    BIconFacebook
  },
  name: "CustomerReviewsSection"
}
</script>

<style scoped>

.customer-reviews {
  background-image: url("/public/assets/img/3.png");
  height: 100%;
  background-attachment: scroll;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.customer-reviews-content-bg {
  width: 55%;
  background-color: white;
  height: 800px;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.customer-reviews-content {
  text-align: center;
  max-width: 100%;
}

.customer-reviews-content > p {
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
}

.social-reviews-container {
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
}

.social-review {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.users-reviews-button {
  margin: 20px;
  background-color: rgba(0, 0, 0, 0);
  width: 17em;
  height: 3em;
  cursor: pointer;
  border: 1px solid black;
  transition: 0.2s;
}

.users-reviews-button:hover {
  transform: scale(0.9);
}

#google-icon {
  cursor: pointer;
  transition: .2s;
}

#google-icon:hover {
  color: #db4a39;
  transform: scale(0.9);
}

#facebook-icon {
  cursor: pointer;
  transition: .2s;
}

#facebook-icon:hover {
  color: #3b5998;
  transform: scale(0.9);
}

.users-reviews-button:hover {
  background: rgba(255, 255, 255, 0.5);
}

.logo-review {
  position: absolute;
  top: 30px;
  right: 20px;
}

@media screen and (max-width: 900px) {

  .customer-reviews {
    height: 900px;
  }

  .customer-reviews-content-bg {
    height: 725px;
    position: absolute;
    bottom: 0;
    left: 0;
    width: calc(100% - 60px);
    background-color: rgba(255, 255, 255, 0.6)
  }

  .customer-reviews-content > h1 {
    font-size: 2.5rem;
    /*color: var(--grey);*/
  }

  .customer-reviews-content > p {
    /*color: var(--grey);*/
  }

  .social-reviews-container {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .social-review > svg {
    width: 50px;
    height: 50px;
  }
}
</style>