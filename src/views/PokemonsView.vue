<template>
  <div class="min-h-screen bg-blue-200">
    <!-- Logo -->
    <img class="object-cover w-64 h-32 pt-4 mx-auto" src="https://www.freepnglogos.com/uploads/pokemon-logo-png-0.png" alt="Pokemon Logo Png" />
    <!-- Listing -->
    <ul role="list" class="grid max-w-4xl grid-cols-1 gap-6 px-8 pt-8 pb-[80px] mx-auto bg-blue-200 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <pokemon-card v-for="pokemon in pokemons" :key="pokemon.name" :name="pokemon.name" :number="pokemon.number" />
    </ul>
    <!-- Paginator -->
    <items-paginator class="fixed bottom-0 left-0 w-full" :totalCount="totalCount" :currentPage.sync="currentPage" :pageSize="pageSize" :offset="offset" />
  </div>
</template>

<script>
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
      currentPage: 1,
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