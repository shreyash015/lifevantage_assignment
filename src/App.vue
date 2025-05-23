<template>
  <Nav />

  <div class="h-screen">
    <router-view />
  </div>
</template>

<script setup>
import Nav from "./components/Nav.vue";
</script>
