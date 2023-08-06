<template>
  <div class="min-h-screen bg-blue-200">
    <div class="max-w-4xl p-4 mx-auto">
      <button class="flex items-center px-1 mb-4 text-blue-800" @click="onGoBack">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-1">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
        </svg>
        Back
      </button>
      <div v-if="isFetching" class="flex flex-col items-center justify-center h-screen">
        <div class="mb-2 text-xl text-blue-400">Loading...</div>
        <animated-spinner size="large" />
      </div>
      <div v-else-if="isError" class="flex flex-col items-center justify-center h-screen">
        <div class="mb-2 text-xl text-blue-400">An error occured</div>
        <button class="p-2 text-sm text-white bg-blue-500 rounded-md" @click="fetchPokemonDetail">Try again</button>
      </div>
      <template v-else>
        <pokemon-image :id="stringId" class="rounded-full bg-blue-50 w-52 h-52" />
        <div class="flex items-baseline justify-between p-2 mt-2">
          <div class="text-3xl font-semibold text-blue-800">{{ name }}</div>
          <div class="text-base font-semibold text-blue-400">#{{ stringId }}</div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import AnimatedSpinner from '@/components/AnimatedSpinner.vue';
import PokemonImage from '@/components/PokemonImage.vue';

export default {
  components: {
    AnimatedSpinner,
    PokemonImage,
  },
  data() {
    return {
      isFetching: true,
      isError: false,
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
        this.isFetching = true;
        const id = Number(this.stringId);
        const { data } = await this.axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
        this.detail = data;
        this.isFetching = false;
      } catch (error) {
        this.isError = true;
      }
    },
    onGoBack() {
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
</style>