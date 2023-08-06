<template>
  <div class="min-h-screen bg-blue-200">
    <div class="max-w-4xl p-4 mx-auto">
      <pokemon-image :id="stringId" class="bg-white rounded-full w-52" />
      <div class="flex items-baseline justify-between p-2 mt-2">
        <div class="text-3xl font-semibold text-blue-800">{{ name }}</div>
        <div class="text-base font-semibold text-gray-600">#{{ stringId }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import PokemonImage from '@/components/PokemonImage.vue';

export default {
  components: {
    PokemonImage,
  },
  data() {
    return {
      detail: null,
    };
  },
  mounted() {
    this.fetchPokemonDetail();
  },
  computed: {
    stringId() {
      return this.$route.params.id;
    },
    name() {
      return this.detail?.name.toUpperCase();
    },
  },
  methods: {
    async fetchPokemonDetail() {
      try {
        const { data } = await this.axios.get('https://pokeapi.co/api/v2/pokemon/1/');
        this.detail = data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
</style>