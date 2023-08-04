<template>
  <li class="flex flex-col col-span-1 text-center duration-300 bg-white divide-y divide-gray-200 rounded-lg shadow hover:cursor-pointer sm:hover:shadow-lg sm:hover:scale-105">
    <div class="flex flex-col flex-1 p-4 rounded-lg card-color">
      <div class="flex items-center justify-center mx-auto bg-white rounded-full h-36 w-36">
        <div v-if="isImageLoading" class="flex items-center justify-center">
          <div class="spinner"></div>
        </div>
        <div v-if="isImageError" class="text-3xl font-semibold">??</div>
        <img v-else :src="getImageUrl" alt="" @error="onImageError" @load="onImageLoad" />
      </div>
      <h3 class="mt-3 text-sm font-medium text-indigo-500">#{{ number }}</h3>
      <h3 class="text-xl font-semibold text-indigo-900">{{ name }}</h3>
    </div>
  </li>
</template>

<script>
export default {
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
  data() {
    return {
      isImageLoading: true,
      isImageError: false,
    };
  },
  computed: {
    getImageUrl() {
      return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${this.number}.png`;
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
.card-color {
  background: linear-gradient(150deg, #4f46e5 55%, transparent 55%);
}

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