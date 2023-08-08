<template>
  <div id="admin-change-password">
    <AdminNavbarComponent />
    <b-container class="mt-5">
      <b-row>
        <b-col>
            <b-form @submit.stop.prevent="submitChangePassword">
              <b-form-group
                  label="Stare hasło"
                  label-for="old-password"
              >
                <b-form-input
                    v-model="current_password"
                    type="password"
                    id="old-password"
                    aria-describedby="password-help-block"
                    @input="$v.current_password.$model = $event.trim()"
                    :state="!$v.current_password.$dirty ? null : !$v.current_password.$error"
                    required
                ></b-form-input>
                <b-form-invalid-feedback>
                  <span v-if="!$v.current_password.required">To pole jest wymagane. </span>
                  <span v-if="!$v.current_password.minLength">Hasło musi posiadać conajmniej 8 znaków. </span>
                </b-form-invalid-feedback>
              </b-form-group>
              <b-form-group
                  label="Nowe hasło"
                  label-for="new-password"
              >
                <b-form-input
                    v-model="new_password"
                    type="password"
                    id="new-password"
                    aria-describedby="password-help-block"
                    @input="$v.new_password.$model = $event.trim()"
                    :state="!$v.new_password.$dirty ? null : !$v.new_password.$error"
                    required
                ></b-form-input>
                <b-form-invalid-feedback>
                  <span v-if="!$v.new_password.required">To pole jest wymagane. </span>
                  <span v-if="!$v.new_password.minLength">Hasło musi posiadać conajmniej 8 znaków. </span>
                </b-form-invalid-feedback>
                <b-form-text id="password-help-block">
                  Hasło musi składać się z 8-20 znaków, zawierać litery i cyfry oraz nie może
                  zawierać spacji, znaków specjalnych ani emoji.
                </b-form-text>
              </b-form-group>


              <b-form-group
                  label="Powtórz nowe hasło"
                  label-for="new-password2"
              >
                <b-form-input
                    v-model="new_password2"
                    type="password"
                    id="new-password2"
                    @input="$v.new_password2.$model = $event.trim()"
                    :state="!$v.new_password2.$dirty ? null : !$v.new_password2.$error"
                    required
                ></b-form-input>
                <b-form-invalid-feedback>
                  <span v-if="!$v.new_password2.required">To pole jest wymagane. </span>
                  <span v-if="!$v.new_password2.sameAsPassword">Hasła muszą być identyczne.</span>
                </b-form-invalid-feedback>
              </b-form-group>

              <p>{{ $store.state.backendSerwerResponse }}</p>
              <b-button type="submit" variant="primary" :disabled="$v.$invalid">Zmień hasło</b-button>
            </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { required, minLength, sameAs } from 'vuelidate/lib/validators'
import AdminNavbarComponent from "@/components/AdminNavbarComponent";
export default {
  name: "AdminChangePasswordView",
  components: {AdminNavbarComponent},
  data() {
    return {
      current_password: '',
      new_password: '',
      new_password2: ''
    }
  },
  validations: {
    current_password: {
      required,
      minLength: minLength(8)
    },
    new_password: {
      required,
      minLength: minLength(8)
    },
    new_password2: {
      required,
      minLength: minLength(8),
      sameAsPassword: sameAs('new_password')
    }
  },
  methods: {
    async submitChangePassword() {
      await this.$store.dispatch('changePassword', {
        current_password: this.current_password,
        new_password: this.new_password
      })
    }
  }
}
</script>

<style scoped lang="scss">
:deep() {
  @import '../assets/scss/main.scss';
}
</style>

<style scoped>
#admin-change-password {
  margin: 0;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: left;
  background-color: #fff;
}
</style>