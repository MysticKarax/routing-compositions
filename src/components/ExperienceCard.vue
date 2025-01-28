<script setup>

import sourceData from '@/data.json';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

// console.log(sourceData);
// console.log(sourceData.destinations);
// console.log(sourceData.destinations[0]);
// console.log(sourceData.destinations[0].experiences);

// const experiences = 
// sourceData.destinations.map(
//     destination => destination.experiences
// );

// console.log(experiences);

const route = useRoute()
// console.log(route);

const destination = computed(() => {
    return sourceData.destinations.find(destination => Number(destination.id) 
    === Number(route.params.id))
})

// console.log(destination);
// console.log(destination.value);
// console.log(destination.value.image);
// console.log(destination.value.experiences);

const experiences = computed(() => destination.value.experiences || [])
// console.log(experiences);
// console.log(experiences[0].image);
// console.log(experiences[0].name);

console.log(experiences);

// experiences.forEach(exp => {
//     console.log(exp.image);
//     console.log(exp.name);
// })

</script>

<template>
    <div class="cards">
      <div v-for="experience in experiences" :key="experience.slug" class="card">
        <img :src="`/images/${experience.image}`" :alt="experience.name">
        <span class="card__text">
          {{ experience.name }}
        </span>
      </div>
    </div>
</template>