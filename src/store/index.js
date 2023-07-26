import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isAuth: false,
    data: {
      firstSection: {
        mainHeader: {
          h2: 'Najlepsze Kuchnie we Wrocławiu',
          p: 'Twoja wycena zostanie przetworzona w ciągu 48 godzin od momentu złożenia zapytania.'
        }
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