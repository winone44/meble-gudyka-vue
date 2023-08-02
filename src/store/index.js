import Vue from 'vue'
import Vuex from 'vuex'
import router from "@/router";
import qs from "qs";
import axios from "axios";

Vue.use(Vuex)

const API_URL = "http://127.0.0.1:8000/api/";

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
});

const store = new Vuex.Store({
  state: {
    accessToken: null,
    refreshToken: null,
    userId: null,
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
      },
      ourKnowledge: {
        header: {
          h1: 'Nasza wiedza',
          p: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing',
          button: {
            buttonText: 'Kontakt'
          }
        },
        slider: {
          items: [
            {
              imageUrl: 'assets/img/fotoSlider.png',
              imageAlt: 'Oświetlona ulica most samochód kościół',
              title: 'Tytuł wpisu',
              date: '15.04.2021',
              description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet'
            },
            {
              imageUrl: 'assets/img/fotoSlider.png',
              imageAlt: 'Oświetlona ulica most samochód kościół',
              title: 'Tytuł wpisu',
              date: '15.04.2021',
              description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet'
            },
            {
              imageUrl: 'assets/img/fotoSlider.png',
              imageAlt: 'Oświetlona ulica most samochód kościół',
              title: 'Tytuł wpisu',
              date: '15.04.2021',
              description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet'
            },
            {
              imageUrl: 'assets/img/fotoSlider.png',
              imageAlt: 'Oświetlona ulica most samochód kościół',
              title: 'Tytuł wpisu',
              date: '15.04.2021',
              description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet'
            },
            {
              imageUrl: 'assets/img/fotoSlider.png',
              imageAlt: 'Oświetlona ulica most samochód kościół',
              title: 'Tytuł wpisu',
              date: '15.04.2021',
              description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet'
            },
          ],
        }
      },
      bestFurnitureParallax: {
        backgroundImage: '/assets/img/kuchnia2.png',
        h1: 'Najlepsze meble',
        button: {
          buttonText: 'NASZE REALIZACJE'
        }
      },
      footer: {
        header: {
          h1: 'Napisz do nas!',
          p: ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et',
          footerContact: {
            facebook: {
              url: '#',
              show: true
            },
            instagram: {
              url: '#',
              show: true
            },
            telephone: {
              url: '+48123456789',
              show: true
            },
            mail: {
              url: 'kontakt@stolzdrewna.pl',
              show: true
            }
          }
        }
      }
    }
  },
  getters: {
    isAuth: state => {
      return state.accessToken !== null && state.accessToken !== undefined
    }
  },
  mutations: {
    auth(state, payload) {
      state.accessToken = payload.accessToken;
      state.refreshToken = payload.refreshToken;
      state.userId = payload.userId;

      console.log('accessToken')
      console.log(payload.accessToken)
      console.log('refreshToken')
      console.log(payload.refreshToken)
      if (payload.accessToken) {
        apiClient.defaults.headers.common['Authorization'] = `Bearer ${payload.accessToken}`;
      } else {
        delete apiClient.defaults.headers.common['Authorization'];
      }
    },
    updateTokens(state, payload) {
      state.accessToken = payload.accessToken;

      console.log('accessToken')
      console.log(payload.accessToken)
      if (payload.accessToken) {
        apiClient.defaults.headers.common['Authorization'] = `Bearer ${payload.accessToken}`;
      } else {
        delete apiClient.defaults.headers.common['Authorization'];
      }
    },
  },
  actions: {
    async login({commit, dispatch}, payload) {
      try {
        console.log(payload);
        let response = await apiClient.post(`${API_URL}accounts/login`, qs.stringify(payload))
        console.log(response);
        console.log(response.data.localId);
        commit('auth', {
          accessToken: response.data.access,
          refreshToken: response.data.refresh,
          userId: response.data.localId
        });



        const now = new Date();
        const endDate = new Date(now.getTime() + response.data.refresh_token_lifetime * 1000)
        localStorage.setItem('accessToken', response.data.access);
        localStorage.setItem('refreshToken', response.data.refresh);
        localStorage.setItem('userId', response.data.localId);
        localStorage.setItem('expires', endDate);

        console.log(response.data.refresh_token_lifetime)

        setTimeout(() => {
          dispatch('logout');
        }, response.data.refresh_token_lifetime * 1000)

      } catch (e) {
        commit('setResponse', {
          response: e
        });
        console.log(e)
      }
    },
    async refreshTokens({ state, commit }) {
      try {
        let response = await apiClient.post(`${API_URL}accounts/token-refresh/`, {
          refresh: state.refreshToken,
        });
        commit('updateTokens', {
          accessToken: response.data.access,
        });
        console.log('refreshTokens Action')
        console.log(response.data.access)
        localStorage.setItem('accessToken', response.data.access);
      } catch (error) {
        console.error(error);
      }


    },
    logout({commit}) {
      commit('clearAuth');
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('userId');
      localStorage.removeItem('expires');
      router.push('/');

    },
    autologin({commit, dispatch}) {
      const accessToken = localStorage.getItem('accessToken')
      const refreshToken = localStorage.getItem('refreshToken')
      if (!accessToken) {
        return;
      }
      const userId = localStorage.getItem('userId')
      if (!userId) {
        return;
      }
      const expirationDate = new Date(localStorage.getItem('expires'));
      const now = new Date();
      if (now >= expirationDate) {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('accessToken');
        localStorage.removeItem('userId');
        localStorage.removeItem('expires');
        return;
      }

      commit('auth', {
        accessToken,
        refreshToken,
        userId
      });
      console.log("Pozostało tyle sekund: ", expirationDate.getTime() - now.getTime())
      setTimeout(() => {
        dispatch('logout');
      },expirationDate.getTime() - now.getTime())
    },
  },
  modules: {
  }
})

export default store;