<script setup>
import { ref, computed, onMounted, watch, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import sourceData from '@/data.json';
import ExperienceCard from '@/components/ExperienceCard.vue';

console.log(useRoute());
// useRoute DEVUELVE UN OBJETO CON EL CONTENIDO ACTUAL DE LA URL
const route = useRoute();
console.log(route);

// console.log(computed());
console.log(route.params);
const destinationId = computed(() => Number(route.params.id));
console.log(destinationId);

const destination = computed(() => {
  return sourceData.destinations.find(destination => destination.id === destinationId.value);
});
console.log(destination);

const components = {ExperienceCard}

// FIXME: API CALL SYNTAX:

// const destination = ref(null)

// async function fetchDestination() {
//   const response = await fetch(`https://travel-dummy-api.netlify.app/${route.params.slug}`)
//   destination.value = await response.json()
// }

// onMounted(() => fetchDestination())

// watchEffect(() => {
//   route.params, fetchDestination()
// })

</script>

<template>
  <section v-if="destination" class="destination">
    <h1>{{ destination?.name }}</h1>
    <div class="destination-details">
      <img :src="`/images/${destination?.image}`" :alt="destination?.name">
      <p>{{ destination.description }}</p>
    </div>
  </section>
  <section class="experiences">
    <h2>Top experiences in {{ destination.name }}</h2>
    <div class="cards">
      <ExperienceCard/>
    </div>
  </section>
</template>

