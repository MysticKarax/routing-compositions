<!-- FIXME: LOS COMPONENTES "SINGLE INSTANCE" DEBEN DE TENER "THE" AL INICIO DEL
  NOMBRE PARA EVITAR TENER CONFLICTOS CON POSIBLES FUTUROS ELEMENTOS HTML-->

<script setup>

import sourceData from '@/data.json'

const destinations = sourceData.destinations
console.log(destinations);

</script>

<template>
    <div id="nav">
      <router-link id="logo" to="/"> Routing Compositions </router-link>
      <router-link 
        v-for="destination in destinations"
          :key="destination.id"
          :to="{ name: 'destination.show', params: { id: destination.id, slug: destination.slug } }"
          >
          {{ destination.name }}
      </router-link>
    </div>
</template>
