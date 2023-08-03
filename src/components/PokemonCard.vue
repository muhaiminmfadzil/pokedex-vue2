<template>
  <li class="flex flex-col col-span-1 text-center duration-300 bg-white divide-y divide-gray-200 rounded-lg shadow hover:cursor-pointer sm:hover:shadow-lg sm:hover:scale-105">
    <div class="flex flex-col flex-1 p-4 rounded-lg card-color">
      <div class="flex items-center justify-center mx-auto bg-white rounded-full h-36 w-36">
        <img :src="getImageUrl" alt="" />
      </div>
      <h3 class="mt-3 text-sm font-medium text-sky-500">#{{number}}</h3>
      <h3 class="text-xl font-semibold text-sky-900">{{name}}</h3>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: null
    },
    number: {
      type: String,
      default: null
    },
  },
  computed: {
    getImageUrl() {
      return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${this.number}.png`
    }
  },
};
</script>

<style scoped>
.card-color {
  background: linear-gradient(150deg, #7dd3fc 55%, transparent 55%);
}
</style>