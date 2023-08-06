<template>
  <div class="inline-block rounded-full animate-spin border-t-gray-100 border-l-gray-100 border-b-gray-100 border-r-blue-500" :class="[spinnerSize, spinnerBorderWidth]"></div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: 'medium',
    },
  },
  computed: {
    spinnerSize() {
      const size = {
        small: 'h-6 w-6',
        medium: 'h-10 w-10',
        large: 'h-14 w-14',
      }

      return size[this.size] || 'h-10 w-10'
    },
    spinnerBorderWidth() {
      const size = {
        small: 'border',
        medium: 'border-2',
        large: 'border-8',
      }

      return size[this.size] || 'border-2';
    },
  },
};
</script>

<style scoped>
</style>