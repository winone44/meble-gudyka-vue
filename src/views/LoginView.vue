<template>
  <div class="main-wrapper vh-100" style="background-color: #508bfc">
    <b-container class="py-5 h-100">
      <b-row class="d-flex justify-content-center align-items-center h-100">
        <b-col cols="12" class="col-md-8 col-md-8 col-lg-6 col-xl-5">
          <b-card class="shadow-2-strong" style="border-radius: 1rem">
            <b-card-body class="p-5 text-center">
              <h3 class="mb-5">Zaloguj się</h3>
              <div class="form-outline mb-4">
                <b-form @submit.prevent="onSubmit">
                  <b-form-group
                      label="Email:"
                      type="email"
                      required
                  >
                    <b-form-input
                        v-model="email"
                        placeholder="Wpisz swój email"
                    ></b-form-input>
                  </b-form-group>
                  <b-form-group
                      label="Hasło:"
                  >
                    <b-form-input
                        v-model="password"
                        type="password"
                        required
                        placeholder="Wpisz swoje hasło"
                    ></b-form-input>
                  </b-form-group>
                  <b-button type="submit" class="btn-lg btn-block mt-5" variant="primary">Zaloguj się</b-button>
                </b-form>
              </div>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>

</template>

<script>

export default {
  name: "LoginView",
  data() {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    validation() {
      return this.password.length > 4 && this.password.length < 13
    }
  },
  methods: {
     async onSubmit(){
       await this.$store.dispatch('login', {
         email: this.email,
         password: this.password
       })
      await this.$router.push({name: 'admin-panel'})
    },
  },
}
</script>


<style scoped src="bootstrap/dist/css/bootstrap.css"></style>
<style scoped src="bootstrap-vue/dist/bootstrap-vue.css"></style>

