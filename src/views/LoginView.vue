<template>
  <div class="main-wrapper">
    <b-container>
      <b-row>
        <b-col>
          <b-form @submit.stop.prevent>
            <label for="text-password">Password</label>
            <b-form-input v-model="password" :state="validation" type="password" id="text-password" aria-describedby="password-help-block"></b-form-input>
            <b-form-invalid-feedback :state="validation">
              Hasło użytkownika musi składać się z 5-12 znaków.
            </b-form-invalid-feedback>
            <b-form-valid-feedback :state="validation">
              Wygląda dobrze.
            </b-form-valid-feedback>
          </b-form>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-button @click="onSubmit" variant="primary">Zaloguj się</b-button>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-button v-b-modal.modal-1>Launch demo modal</b-button>

          <b-modal id="modal-1" title="BootstrapVue">
            <p class="my-4">Hello from modal!</p>
          </b-modal>
        </b-col>
      </b-row>
    </b-container>
  </div>

</template>

<script>

// import '@/plugins/bootstrap-vue'
export default {
  name: "LoginView",
  data() {
    return {
      password: ''
    }
  },
  computed: {
    validation() {
      return this.password.length > 4 && this.password.length < 13
    }
  },
  methods: {
     onSubmit(){
      this.$store.state.isAuth = true;
      this.$router.push({name: 'admin-panel'})
    },
  },
}
</script>


<style scoped src="bootstrap/dist/css/bootstrap.css"></style>
<style scoped src="bootstrap-vue/dist/bootstrap-vue.css"></style>

