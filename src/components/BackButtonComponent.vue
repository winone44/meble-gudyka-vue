<template>
  <div class="sticky-button">
    <router-link :to="{name:'admin-panel'}"><button>Wróć do panelu -></button></router-link>
  </div>
</template>

<script>
export default {
  name: "BackButtonComponent"
}
</script>

<style scoped>
.sticky-button {
  position: fixed;
  z-index: 9999;
  top: 150px;
  right: 10px;
  background-color: #3b5998;
  border: red;

}
</style>