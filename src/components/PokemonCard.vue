<template>
  <li class="flex flex-col col-span-1 text-center duration-300 divide-y divide-gray-200 rounded-lg shadow bg-blue-50 hover:cursor-pointer sm:hover:shadow-lg sm:hover:scale-105" @click="onSelected">
    <div class="flex flex-col flex-1 p-4 rounded-lg card-color">
      <pokemon-image :id="number" class="w-40 h-40 rounded-full bg-blue-50" />
      <h3 class="mt-3 text-sm font-medium text-blue-500">#{{ number }}</h3>
      <h3 class="text-xl font-semibold text-blue-900">{{ name }}</h3>
    </div>
  </li>
</template>

<script>
import PokemonImage from '@/components/PokemonImage.vue';

export default {
  components: {
    PokemonImage,
  },
  props: {
    name: {
      type: String,
      default: null,
    },
    number: {
      type: String,
      default: null,
    },
  },
  methods: {
    onSelected() {
      this.$router.push(`/${this.number}`)
    }
  },
};
</script>

<style scoped>
.card-color {
  background: linear-gradient(150deg, #2563eb 45%, transparent 45%);
}
</style>