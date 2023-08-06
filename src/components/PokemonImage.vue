<template>
  <div class="flex items-center justify-center mx-auto">
    <div v-if="isImageLoading" class="flex items-center justify-center">
      <div class="spinner"></div>
    </div>
    <div v-if="isImageError" class="text-3xl font-semibold">??</div>
    <img v-else :src="getImageUrl" alt="" @error="onImageError" @load="onImageLoad" />
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      isImageLoading: true,
      isImageError: false,
    };
  },
  computed: {
    getImageUrl() {
      return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${this.id}.png`;
    },
  },
};
</script>

<style scoped>
</style>