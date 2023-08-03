<template>
  <div class="min-h-screen bg-sky-50">
    <ul role="list" class="grid max-w-4xl grid-cols-1 gap-6 p-8 mx-auto bg-sky-50 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <pokemon-card v-for="pokemon in pokemons" :key="pokemon.name" :name="pokemon.name" :number="pokemon.number" />
    </ul>
    <items-paginator />
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
  computed: {
    params() {
      return {
        limit: this.pageSize,
      };
    },
  },
  methods: {
    async fetchPokemons() {
      try {
        const { data } = await this.axios.get('https://pokeapi.co/api/v2/pokemon', { params: this.params });
        this.pokemons = data.results.map((result) => this.sanitizeData(result));
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