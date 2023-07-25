<template>
  <div id="navbar" v-bind:class="{ sticky: sticky }" ref="navbar">
    <div style="display: flex; justify-content: space-between;">
      <div class="logo">
        <a href="#"><img src="assets/img/logo.png" alt="logo"></a>
      </div>
      <div id="mobile-menu-trigger" @click="toggleNavLinks">
        <button aria-label="MENU">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-list"
               viewBox="0 0 16 16">
            <path fill-rule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
        </button>
      </div>
    </div>

    <nav id="nav-links" :class="{'nav-links-mobile': navLinksVisible}">
      <ul>
        <li><a href="#">Start</a></li>
        <li><a href="#">Kuchnie</a></li>
        <li><a href="#">Szafy</a></li>
        <li><a href="#">Garderoby</a></li>
        <li><a href="#">Meble</a></li>
        <li><a href="#">Kontakt</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavbarComponent",
  data() {
    return {
      sticky: false,
      navLinksVisible: false
    }
  },
  methods: {
    handleScroll() {
      const navbar = this.$refs.navbar;
      const sticky = navbar.offsetTop;

      if (window.scrollY > sticky) {
        this.sticky = true;
      } else {
        this.sticky = false;
      }
    },
    toggleNavLinks() {
      this.navLinksVisible = !this.navLinksVisible;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  }

}
</script>

<style scoped>
#navbar {
  background-color: rgba(0,0,0,0.5);
  display: flex;
  justify-content: space-between;
  z-index: 999;
  width: 95%;
  transition: 0.3s ease-out;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.4rem;
  margin-top: 20px;
}

.sticky {
  position: fixed !important;
  margin-top: 0 !important;
  top: 0;
  width: 100% !important;
  background-color: rgba(0,0,0,0.75) !important;
  backdrop-filter: blur(10px);
}

.logo {
  margin: 0 0 0 2em;
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo img {
  width: 110px;
}

#nav-links ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-start;

}


#nav-links a {
  display: block;
  padding: 20px;
  text-decoration: none;
  font-weight: bold;
}

#nav-links a:link, #nav-links a:visited, #nav-links a:active   {
  color: var(--white);
}

#nav-links a:hover {
  color: gainsboro;
}

#mobile-menu-trigger {
  margin: 10px;
}

#mobile-menu-trigger button {
  background-color: rgba(0,0,0,0);
  border: 0;
  cursor: pointer;
  display: none;
}

@media screen and (max-width: 900px) {

  #navbar {
    display: block;
    padding: 10px;
    width: 90%;
    font-size: 1rem;
  }

  #nav-links {
    display: none;
  }

  .nav-links-mobile {
    display: flex !important;
    justify-content: center !important;
  }

  #nav-links ul {
    display: flex;
    flex-direction: column;
  }
  #nav-links a {
    text-align: center;
  }

  #mobile-menu-trigger button {
    display: block;
  }
}
</style>