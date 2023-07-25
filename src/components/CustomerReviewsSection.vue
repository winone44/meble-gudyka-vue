<template>
  <section class="customer-reviews">
    <div class="customer-reviews-content-bg">
      <div class="customer-reviews-content">
        <h1>Mamy bardzo dobre opinie</h1>
        <hr style="width: 300px; border: 1px solid black;">
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
        <div class="social-reviews-container">
          <div class="social-review">
            <button class="users-reviews-button">NASZE OPINIE W GOOGLE</button>
            <svg id="google-icon" xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" viewBox="0 0 16 16">
              <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
            </svg>
            <p>40 opinii</p>
            <p>5/5</p>
          </div>
          <div class="social-review">
            <button class="users-reviews-button">NASZE OPINIE W FACEBOOKU</button>
            <svg id="facebook-icon" xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" viewBox="0 0 16 16">
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
            </svg>
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
export default {
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
  background-color: rgba(0,0,0,0);
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
  background: rgba(255,255,255,0.5);
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
    background-color: rgba(255, 255, 255,0.6)
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