<script setup>
import sourceData from '@/data.json'

const destinations = sourceData.destinations
// console.log(destinations);
</script>

<template>
    <div class="home">
        <h1>All Destinations</h1>
        
        <div class="destinations">
        <!-- LA DIFERENCIA ENTRE ROUTER-LINK Y ANCHOR ES QUE ROUTER LINK NO
        RECARGA LA PAGINA ENTERA. SOLO CARGA LA PAGINA QUE SE ESTA VISITANDO -->
        <router-link 
        v-for="destination in destinations"
          :key="destination.id"
          :to="{ name: 'destination.show', params: { id: destination.id, slug: destination.slug } }">
          <h2>{{ destination.name }}</h2>
          <img :src="`/images/${destination.image}`" :alt="destination.name">
      </router-link>
        </div>
    </div>
</template>