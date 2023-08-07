<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand :to="{name: 'admin-panel'}">Panel Administracyjny</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse">
      <template #default="{ expanded }">
        <BIconChevronBarUp v-if="expanded" />
        <BIconChevronBarDown v-else />
      </template>
    </b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>{{ $store.state.username }}</em>
          </template>
          <b-dropdown-item :to="{name: 'admin-change-password'}">Zmień hasło</b-dropdown-item>
          <b-dropdown-item @click="logout">Wyloguj się</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { BIconChevronBarUp, BIconChevronBarDown } from 'bootstrap-vue'
export default {
  name: "AdminNavbarComponent",
  components: {
    BIconChevronBarUp,
    BIconChevronBarDown
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
    }
  }
}
</script>

<style scoped>

</style>