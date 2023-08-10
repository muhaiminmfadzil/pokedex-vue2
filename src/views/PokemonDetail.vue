<template>
  <div class="max-w-4xl min-h-screen p-4 mx-auto">
    <!-- Back -->
    <button class="flex items-center px-1 py-2 mb-4 text-blue-800 rounded-lg hover:bg-blue-100" @click="onGoBack">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-1">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
      </svg>
      Back
    </button>
    <!-- Fetching state -->
    <div v-if="isFetching" class="flex flex-col items-center justify-center h-screen">
      <div class="mb-2 text-xl text-blue-400">Loading...</div>
      <animated-spinner size="large" />
    </div>
    <!-- Error state -->
    <div v-else-if="isError" class="flex flex-col items-center justify-center h-screen">
      <div class="mb-2 text-xl text-blue-400">An error occured</div>
      <button class="p-2 text-sm text-white bg-blue-500 rounded-md" @click="fetchPokemonDetail">Try again</button>
    </div>
    <!-- Detail -->
    <template v-else>
      <!-- Image -->
      <pokemon-image :id="stringId" class="rounded-full bg-blue-50 w-52 h-52" />
      <!-- Name and id -->
      <div class="flex items-baseline justify-between p-2 mt-2">
        <div class="text-3xl font-semibold text-blue-800">{{ name }}</div>
        <div class="text-base font-semibold text-blue-400">#{{ stringId }}</div>
      </div>
      <!-- Types -->
      <pokemon-type v-for="type in detail.types" :key="type.slot" :type="type.type" class="mb-4 mr-1" />
      <!-- Status -->
      <pokemon-status :stats="detail.stats" />
    </template>
  </div>
</template>

<script>
import AnimatedSpinner from '@/components/AnimatedSpinner.vue';
import PokemonImage from '@/components/PokemonImage.vue';
import PokemonType from '@/components/PokemonType.vue';
import PokemonStatus from '@/components/PokemonStatus.vue';

export default {
  components: {
    AnimatedSpinner,
    PokemonImage,
    PokemonType,
    PokemonStatus,
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