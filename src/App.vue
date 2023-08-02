<template>
  <div class="min-h-screen bg-sky-50">
    <ul role="list" class="max-w-4xl p-8 mx-auto grid grid-cols-1 gap-6 bg-sky-50 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <pokemon-card />
    </ul>
  </div>
</template>

<script>
import PokemonCard from '@/components/PokemonCard.vue';

export default {
  components: {
    PokemonCard,
  },
};
</script>

<style>
</style>
