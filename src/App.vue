<script setup>
import TheNavigation from '@/components/TheNavigation.vue'

// export const components = {TheNagivation}
</script>

<template>
  <the-navigation></the-navigation>
  <!-- VER EL CONTENIDO DE LA PAGINA ACTUAL -->
  <div class="container">
    <router-view>

    </router-view>
  </div>
  
</template>

