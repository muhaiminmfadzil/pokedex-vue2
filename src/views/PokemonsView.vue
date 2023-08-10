<template>
  <div>
    <!-- Logo -->
    <img class="object-cover w-64 h-32 pt-4 mx-auto" src="https://www.freepnglogos.com/uploads/pokemon-logo-png-0.png" alt="Pokemon Logo Png" />
    <!-- About -->
    <button class="fixed font-semibold text-blue-700 bg-white rounded-full shadow-xl right-5 bottom-20" @click="$router.push('/about')">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
      </svg>
    </button>
    <!-- Listing -->
    <ul role="list" class="grid max-w-4xl grid-cols-1 gap-6 px-8 pt-8 pb-[80px] mx-auto bg-blue-200 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <pokemon-card v-for="pokemon in pokemons" :key="pokemon.name" :name="pokemon.name" :number="pokemon.number" />
    </ul>
    <!-- Paginator -->
    <items-paginator class="fixed bottom-0 left-0 w-full" :totalCount="totalCount" :currentPage.sync="page" :pageSize="pageSize" :offset="offset" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import PokemonCard from '@/components/PokemonCard.vue';
import ItemsPaginator from '@/components/ItemsPaginator.vue';

export default {
  components: {
    PokemonCard,
    ItemsPaginator,
  },
  data() {
    return {
      isFetching: false,
      totalCount: 0,
      // currentPage: 1,
      pageSize: 20,
      pokemons: [],
    };
  },
  mounted() {
    this.fetchPokemons();
  },
  watch: {
    params() {
      this.fetchPokemons();
    },
  },
  computed: {
    ...mapGetters({
      currentPage: 'pagination/getCurrentPage',
    }),
    page: {
      get() {
        return this.currentPage;
      },
      set(value) {
        this.$store.commit('pagination/setCurrentPage', value);
      },
    },
    offset() {
      return (this.currentPage - 1) * this.pageSize;
    },
    params() {
      return {
        limit: this.pageSize,
        offset: this.offset,
      };
    },
  },
  methods: {
    async fetchPokemons() {
      try {
        const { data } = await this.axios.get('https://pokeapi.co/api/v2/pokemon', { params: this.params });
        this.pokemons = data.results.map((result) => this.sanitizeData(result));
        this.totalCount = data.count;
      } catch (error) {
        console.log(error);
      }
    },
    sanitizeData(obj) {
      let newObj = { ...obj };
      // Number
      const splitUrl = obj.url.split('/');
      newObj.number = String(splitUrl[splitUrl.length - 2]).padStart(3, '0');

      return newObj;
    },
  },
};
</script>

<style scoped>
</style>