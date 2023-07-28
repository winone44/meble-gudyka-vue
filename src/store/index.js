import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isAuth: false,
    data: {
      firstSection: {
        backgroundImage: '/assets/img/fotka.png',
        mainHeader: {
          h2: 'Najlepsze Kuchnie we Wrocławiu',
          p: 'Twoja wycena zostanie przetworzona w ciągu 48 godzin od momentu złożenia zapytania.',
          button: {
            buttonText: 'Kontakt'
          }
        },
        contactIcons: {
          telephone: {
            telNumber: '123456789',
            show: true,
          },
          facebook: {
            fbUrl: 'https://fb.com',
            show: true,
          },
          envelope: {
            mail: 'example@mail.com',
            show: true,
          }
        }
      },
      otherProjects: {
        header: {
          h2: 'A co poza kuchniami?'
        },
        gallery: [
          {
            galleryImage: {
              imageUrl: 'assets/img/foto1.png',
              imageAlt: 'Obraz przedstawiający pięknie wykończoną kuchnię z drewna'
            },
            galleryTitle: {
              p: 'Kuchnie'
            }
          },
          {
            galleryImage: {
              imageUrl: 'assets/img/foto2.png',
              imageAlt: 'Zdjęcie eleganckich drewnianych szaf wykonanych przez naszą firmę'
            },
            galleryTitle: {
              p: 'Szafy'
            }
          },
          {
            galleryImage: {
              imageUrl: 'assets/img/foto3.png',
              imageAlt: 'Ilustracja nowoczesnych garderób z drewna dostępnych w naszej ofercie'
            },
            galleryTitle: {
              p: 'Garderoby'
            }
          },
          {
            galleryImage: {
              imageUrl: 'assets/img/foto4.png',
              imageAlt: 'Obraz pokazujący nasze wykonane na zamówienie drewniane biura'
            },
            galleryTitle: {
              p: 'Biura'
            }
          }
        ]
      },
      parallax: {
        backgroundImage: '/assets/img/kuchniegudykawroclaw.png',
        logoUrl: 'assets/img/logo.png',
        button: {
          buttonText: 'Kontakt'
        }
      },
      howWeWork: {
        header: {
          h1: 'Jak pracujemy?',
        },
        folders: [
          {
            h2: 'Darmowa wycena w 48H',
            p: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet'
          },
          {
            h2: 'Produkcja Twojej Kuchni',
            p: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet'
          },
          {
            h2: 'Montaż Twojej kuchni',
            p: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet'
          }
        ],
        button: {
          buttonText: 'ZOBACZ NASZE REALIZACJE'
        }
      },
      aboutUs: {
        imageUrl: 'assets/img/DSC04159.png',
        imageAlt: '',
        h3: 'Jesteśmy super',
        p: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam e',
        buttonText: 'O nas'
      },
      customerReviews: {
        backgroundImage: '/assets/img/3.png',
        h1: 'Mamy bardzo dobre opinie',
        p: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor',
        buttons: {
          googleButton: {
            buttonText: 'NASZE OPINIE W GOOGLE',
            show: true
          },
          facebookButton: {
            buttonText: 'NASZE OPINIE W FACEBOOKU',
            show: true
          }
        },
        logoUrl: 'assets/img/logo.png',
      }
    }
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

export default store;