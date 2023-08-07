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
  methods: {
    onImageError() {
      this.isImageError = true;
      this.isImageLoading = false;
    },
    onImageLoad() {
      this.isImageLoading = false;
    },
  },
};
</script>

<style scoped>
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.spinner {
  border-top-color: transparent;
  animation: spin 1s linear infinite;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-right-color: rgb(87, 87, 87);
  border-radius: 50%;
  display: inline-block;
  width: 20px;
  height: 20px;
}
</style>